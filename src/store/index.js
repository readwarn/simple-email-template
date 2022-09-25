import { createStore } from "vuex";

import emails from "./emails";

const store = createStore({
    modules: {
        emails,
    },
});

export default store;