export default {
    getInbox: (state) => state.emails.filter((email) => !email.archived),

    getArchives: (state) => state.emails.filter((email) => email.archived),
};