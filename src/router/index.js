import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "layout",
            meta: {
                requiresAuth: true,
            },
            children: [
                {
                    path: "",
                    component: HomeView,
                },
                {
                    path: "/activity",
                    component: () => import("../views/Activity.vue"),
                },
                {
                    path: "/user",
                    name: "user",
                    component: () => import("../views/User.vue"),
                },
                {
                    path: "/transation-details/:tId",
                    name: "transaction",
                    component: () => import("../views/TransactionDetails.vue"),
                },
                // more routes here
            ],
        },
        {
            path: "/login",
            name: "login",
            component: Login,
        },
        {
            path: "/signup",
            name: "signup",
            component: Signup,
        },
    ],
});

router.beforeEach((to, from, next) => {
    if (
        to.matched.some((record) => record.meta.requiresAuth) &&
        !isLoggedIn()
    ) {
        next({ name: "login" });
    } else {
        next();
    }
});

function isLoggedIn() {
    // check if user is logged in, return true or false
    // return !!localStorage.getItem("token");
    return true;
}

export default router;
