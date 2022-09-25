import { createRouter, createWebHistory } from "vue-router";

const baseRoutes = [{
    path: "/",
    component: () =>
        import ( /* webpackChunkName: "base" */ "@/layouts/base-layout"),
    children: [{
            path: "inbox",
            name: "Inbox",
            component: () =>
                import ( /* webpackChunkName: "base" */ "@/pages/Inbox"),
            meta: {
                title: "Inbox",
            },
        },

        {
            path: "archive",
            name: "Archive",
            component: () =>
                import ( /* webpackChunkName: "base" */ "@/pages/Archive"),
            meta: {
                title: "Archive",
            },
        },
    ],
}, ];

const router = createRouter({
    history: createWebHistory(),
    routes: baseRoutes,
});

export default router;