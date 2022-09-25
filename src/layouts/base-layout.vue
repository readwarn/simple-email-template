<template>
  <div class="base-layout" @click="hideSidebar = true">
    <section
      class="base-layout__sidebar"
      :class="[hideSidebar && 'base-layout__sidebar--hidden']"
    >
      <router-link to="/inbox" class="btn btn--full btn--link"
        >Inbox ({{ getInbox.length }})</router-link
      >

      <router-link to="/archive" class="btn btn--full btn--link"
        >Archive ({{ getArchives.length }})</router-link
      >

      <router-link to="" class="btn btn--link btn--full btn--logout"
        >Logout</router-link
      >
    </section>

    <section class="base-layout__content">
      <div class="base-layout__title-wrapper">
        <span
          class="icon icon-menu base-layout__menu"
          @click.stop="hideSidebar = false"
        ></span>
        <h3 class="base-layout__title">{{ $route.meta.title }}</h3>
      </div>

      <router-view />
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BaseLayout",

  computed: {
    ...mapGetters({
      getInbox: "emails/getInbox",
      getArchives: "emails/getArchives",
    }),
  },

  data() {
    return {
      hideSidebar: true,
    };
  },
};
</script>

<style scoped>
.base-layout {
  background: rgba(0, 0, 0, 0.7);
  height: 100vh;
  width: 100%;
  padding: 10px;
  padding-left: 0;
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 100%;
}

.base-layout__sidebar,
.base-layout__content {
  height: 100%;
  width: 100%;
}

.base-layout__sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  padding: 20px;
  transition: transform ease-in-out 0.3s;
}

.base-layout__content {
  background: #fff;
  padding: 20px 40px;
}

.base-layout__title-wrapper {
  display: flex;
  align-items: center;
  gap: 0 20px;
  margin-bottom: 15px;
}

.base-layout__menu {
  cursor: pointer;
  display: none;
}

.base-layout__title {
  font-size: 1.35rem;
  font-weight: 400;
}

.btn--full {
  width: 100%;
}

.btn--link {
  text-decoration: 0;
}

.btn--logout {
  margin-top: auto;
}

@media screen and (max-width: 720px) {
  .base-layout {
    grid-template-columns: 100%;
    padding-left: 10px;
  }

  .base-layout__content {
    background: #fff;
    padding: 20px;
  }

  .base-layout__sidebar {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
    background: rgba(0, 0, 0, 0.96);
    width: 300px;
    max-width: 90%;
  }

  .base-layout__sidebar--hidden {
    transform: translateX(-100%);
  }

  .base-layout__menu {
    display: inline-block;
  }
}
</style>
