export default {
    MARK_AS_READ: (state, email_ids) => {
        state.emails = state.emails.map((email) => {
            if (email_ids.includes(email.id)) email.read = true;
            return email;
        });
    },

    ARCHIVE_EMAIL: (state, email_ids) => {
        state.emails = state.emails.map((email) => {
            if (email_ids.includes(email.id)) email.archived = true;
            return email;
        });
    },

    UN_ARCHIVE_EMAIL: (state, email_ids) => {
        state.emails = state.emails.map((email) => {
            if (email_ids.includes(email.id)) email.archived = false;
            return email;
        });
    },
};