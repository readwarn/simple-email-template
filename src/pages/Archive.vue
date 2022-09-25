<template>
  <div class="inbox-layout">
    <h1 class="inbox-layout__title">
      Emails Selected ({{ selectedEmailIDs.length }})
    </h1>

    <email-actions
      showCheck
      padded
      :actions="actions"
      @update="markORunMarkAll"
      :disabled="!selectedEmailIDs.length"
      @markAsRead="markAsRead(selectedEmailIDs)"
      @unArchive="unArchiveEmail(selectedEmailIDs)"
    />

    <div class="email-items-container" v-if="getArchives.length">
      <email-item
        v-for="email in getArchives"
        :key="email.id"
        :email="email"
        @update="updateSelection($event, email.id)"
        @open="openEmail(email.id)"
        :selected="selectedEmailIDs.includes(email.id)"
      />
    </div>

    <div class="email-items-container" v-else>
      <h1>NO ARCHIVED EMAILS!!!</h1>
    </div>

    <transition name="fade-slide">
      <div
        class="email-layout"
        v-if="showEmail"
        @click.self="showEmail = false"
      >
        <div class="email-layout__body">
          <p class="email-layout__close-text" @click="showEmail = false">
            Close (Esc)
          </p>

          <email-actions
            :actions="actions"
            @markAsRead="markAsRead([getOpenedEmail.id])"
            @unArchive="unArchiveOpenedEmail([getOpenedEmail.id])"
          />

          <div class="email-content-body">
            <p class="email-content-body__title">
              {{ getOpenedEmail.title }}
            </p>

            <p class="email-content-body__description">
              {{ getOpenedEmail.description }}
            </p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import EmailActions from "@/components/EmailActions";
import EmailItem from "@/components/EmailItem";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "ArchivePage",

  components: {
    EmailActions,
    EmailItem,
  },

  computed: {
    ...mapGetters({ getArchives: "emails/getArchives" }),

    getAllEmailIDs() {
      return this.getArchives.map((email) => email.id);
    },

    getOpenedEmail() {
      return this.getArchives.find((email) => email.id === this.openedEmailID);
    },
  },

  created() {
    window.addEventListener("keyup", this.takeAction);
  },

  beforeUnmount() {
    window.removeEventListener("keyup", this.takeAction);
  },

  data() {
    return {
      showEmail: false,
      openedEmailID: 1,
      selectedEmailIDs: [],
      actions: [
        {
          name: "Mark as read (r)",
          action: "markAsRead",
        },

        {
          name: "UnArchive (u)",
          action: "unArchive",
        },
      ],
    };
  },

  methods: {
    ...mapMutations({
      markAsRead: "emails/MARK_AS_READ",
      unArchiveEmail: "emails/UN_ARCHIVE_EMAIL",
    }),

    markORunMarkAll(state) {
      this.selectedEmailIDs = state ? this.getAllEmailIDs : [];
    },

    updateSelection(state, id) {
      this.showEmail = false;

      if (state) {
        this.selectedEmailIDs.push(id);
      } else {
        this.selectedEmailIDs = this.selectedEmailIDs.filter(
          (emailID) => emailID !== id
        );
      }
    },

    openEmail(id) {
      this.openedEmailID = id;
      this.showEmail = true;
    },

    unArchiveOpenedEmail(ids) {
      this.showEmail = false;
      this.unArchiveEmail(ids);
    },

    takeAction(event) {
      const EmailIDs = this.showEmail
        ? [this.getOpenedEmail.id]
        : this.selectedEmailIDs;

      const action = this.showEmail ? "unArchiveOpenedEmail" : "unArchiveEmail";

      const { code } = event;

      switch (code) {
        case "Escape":
          this.showEmail = false;
          break;
        case "KeyR":
          this.markAsRead(EmailIDs);
          break;
        case "KeyU":
          this[action](EmailIDs);
          break;
      }
    },
  },
};
</script>

<style scoped>
.inbox-layout {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto auto 1fr;
  gap: 30px 0;
  height: calc(100% - 35px);
}

.inbox-layout__title {
  font-size: 1.8rem;
  font-weight: 700;
}

.email-layout {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
}

.email-layout__body {
  width: 500px;
  height: calc(100% - 10px);
  position: relative;
  margin-left: auto;
  background: #fff;
  padding: 15px;
}

.email-layout__close-text {
  font-size: 0.95rem;
  margin-bottom: 20px;
  text-decoration: underline;
  cursor: pointer;
}

.email-layout__close-text:hover {
  text-decoration: 0;
}

.email-content-body__title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 30px;
}

.email-content-body__description {
  font-size: 0.9rem;
  line-height: 155%;
}
</style>
