import AppLayout from "@/layout/AppLayout.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "landing",
            component: () => import("@/views/pages/Landing.vue"),
        },
        {
            path: "/course/:id",
            name: "homepage.courses",
            // meta: {
            //     requiresAuth: true
            // },
            component: () => import("@/views/pages/Course.vue"),
        },
        {
            path: "/my-courses",
            name: "homepage.mycourses",
            // meta: {
            //     requiresAuth: true
            // },
            component: () => import("@/views/pages/MyCourse.vue"),
        },
        {
            path: "/takecourse/:id",
            name: "homepage.takecourses",
            // meta: {
            //     requiresAuth: true
            // },
            component: () => import("@/views/pages/TakeCourse.vue"),
        },
        {
            path: "/admin",
            component: AppLayout,
            children: [
                {
                    path: "/admin/dashboard",
                    name: "dashboard",
                    component: () => import("@/views/Dashboard.vue"),
                },
                {
                    path: "/admin/users",
                    name: "admin.users",
                    meta: {
                        requiresAuth: true,
                    },
                    component: () =>
                        import("@/views/pages/admin/users/IndexUsers.vue"),
                },
                {
                    path: "/admin/users/create",
                    name: "admin.users.create",
                    meta: {
                        requiresAuth: true,
                    },
                    component: () =>
                        import("@/views/pages/admin/users/CreateUsers.vue"),
                },
                {
                    path: "/admin/users/:id",
                    name: "admin.users.show",
                    meta: {
                        requiresAuth: true,
                    },
                    component: () =>
                        import("@/views/pages/admin/users/ShowUsers.vue"),
                },
                {
                    path: "/admin/users/:id/edit",
                    name: "admin.users.edit",
                    meta: {
                        requiresAuth: true,
                    },
                    component: () =>
                        import("@/views/pages/admin/users/EditUsers.vue"),
                },

                {
                    path: "/admin/students",
                    name: "admin.students",
                    meta: {
                        requiresAuth: true,
                    },
                    component: () =>
                        import(
                            "@/views/pages/admin/students/IndexStudents.vue"
                        ),
                },
                {
                    path: "/admin/students/create",
                    name: "admin.students.create",
                    meta: {
                        requiresAuth: true,
                    },
                    component: () =>
                        import(
                            "@/views/pages/admin/students/CreateStudents.vue"
                        ),
                },
                {
                    path: "/admin/students/:id",
                    name: "admin.students.show",
                    meta: {
                        requiresAuth: true,
                    },
                    component: () =>
                        import("@/views/pages/admin/students/ShowStudents.vue"),
                },
                {
                    path: "/admin/students/:id/edit",
                    name: "admin.students.edit",
                    meta: {
                        requiresAuth: true,
                    },
                    component: () =>
                        import("@/views/pages/admin/students/EditStudents.vue"),
                },

                {
                    path: "/admin/courses",
                    name: "admin.courses",
                    meta: {
                        requiresAuth: true,
                    },
                    component: () =>
                        import("@/views/pages/admin/courses/IndexCourses.vue"),
                },
                {
                    path: "/admin/courses/create",
                    name: "admin.courses.create",
                    meta: {
                        requiresAuth: true,
                    },
                    component: () =>
                        import("@/views/pages/admin/courses/CreateCourses.vue"),
                },
                {
                    path: "/admin/courses/:id",
                    name: "admin.courses.show",
                    meta: {
                        requiresAuth: true,
                    },
                    component: () =>
                        import("@/views/pages/admin/courses/ShowCourses.vue"),
                },
                {
                    path: "/admin/courses/:id/edit",
                    name: "admin.courses.edit",
                    meta: {
                        requiresAuth: true,
                    },
                    component: () =>
                        import("@/views/pages/admin/courses/EditCourses.vue"),
                },
                {
                    path: "/admin/courses/:id/manage",
                    name: "admin.courses.manage",
                    meta: {
                        requiresAuth: true,
                    },
                    component: () =>
                        import("@/views/pages/admin/courses/ManageCourses.vue"),
                },

                {
                    path: "/admin/enrollments",
                    name: "admin.enrollments",
                    meta: {
                        requiresAuth: true,
                    },
                    component: () =>
                        import(
                            "@/views/pages/admin/enrollments/IndexEnrolls.vue"
                        ),
                },
                {
                    path: "/admin/enrollments/create",
                    name: "admin.enrollments.create",
                    meta: {
                        requiresAuth: true,
                    },
                    component: () =>
                        import(
                            "@/views/pages/admin/enrollments/CreateEnrolls.vue"
                        ),
                },
                {
                    path: "/admin/enrollments/:id",
                    name: "admin.enrollments.show",
                    meta: {
                        requiresAuth: true,
                    },
                    component: () =>
                        import(
                            "@/views/pages/admin/enrollments/ShowEnrolls.vue"
                        ),
                },
                {
                    path: "/admin/enrollments/:id/edit",
                    name: "admin.enrollments.edit",
                    meta: {
                        requiresAuth: true,
                    },
                    component: () =>
                        import(
                            "@/views/pages/admin/enrollments/EditEnrolls.vue"
                        ),
                },

                {
                    path: "admin/uikit/formlayout",
                    name: "formlayout",
                    component: () => import("@/views/uikit/FormLayout.vue"),
                },
                {
                    path: "admin/uikit/input",
                    name: "input",
                    component: () => import("@/views/uikit/InputDoc.vue"),
                },
                {
                    path: "admin/uikit/button",
                    name: "button",
                    component: () => import("@/views/uikit/ButtonDoc.vue"),
                },
                {
                    path: "admin/uikit/table",
                    name: "table",
                    component: () => import("@/views/uikit/TableDoc.vue"),
                },
                {
                    path: "admin/uikit/list",
                    name: "list",
                    component: () => import("@/views/uikit/ListDoc.vue"),
                },
                {
                    path: "admin/uikit/tree",
                    name: "tree",
                    component: () => import("@/views/uikit/TreeDoc.vue"),
                },
                {
                    path: "admin/uikit/panel",
                    name: "panel",
                    component: () => import("@/views/uikit/PanelsDoc.vue"),
                },

                {
                    path: "admin/uikit/overlay",
                    name: "overlay",
                    component: () => import("@/views/uikit/OverlayDoc.vue"),
                },
                {
                    path: "admin/uikit/media",
                    name: "media",
                    component: () => import("@/views/uikit/MediaDoc.vue"),
                },
                {
                    path: "admin/uikit/message",
                    name: "message",
                    component: () => import("@/views/uikit/MessagesDoc.vue"),
                },
                {
                    path: "admin/uikit/file",
                    name: "file",
                    component: () => import("@/views/uikit/FileDoc.vue"),
                },
                {
                    path: "admin/uikit/menu",
                    name: "menu",
                    component: () => import("@/views/uikit/MenuDoc.vue"),
                },
                {
                    path: "admin/uikit/charts",
                    name: "charts",
                    component: () => import("@/views/uikit/ChartDoc.vue"),
                },
                {
                    path: "admin/uikit/misc",
                    name: "misc",
                    component: () => import("@/views/uikit/MiscDoc.vue"),
                },
                {
                    path: "admin/uikit/timeline",
                    name: "timeline",
                    component: () => import("@/views/uikit/TimelineDoc.vue"),
                },
                {
                    path: "admin/pages/empty",
                    name: "empty",
                    component: () => import("@/views/pages/Empty.vue"),
                },
                {
                    path: "admin/pages/crud",
                    name: "crud",
                    component: () => import("@/views/pages/Crud.vue"),
                },
                {
                    path: "admin/documentation",
                    name: "documentation",
                    component: () => import("@/views/pages/Documentation.vue"),
                },
            ],
        },

        {
            path: "/pages/notfound",
            name: "notfound",
            component: () => import("@/views/pages/NotFound.vue"),
        },

        {
            path: "/auth/login",
            name: "login",
            component: () => import("@/views/pages/auth/Login.vue"),
        },
        {
            path: "/auth/access",
            name: "accessDenied",
            component: () => import("@/views/pages/auth/Access.vue"),
        },
        {
            path: "/auth/error",
            name: "error",
            component: () => import("@/views/pages/auth/Error.vue"),
        },
    ],
});

export default router;
