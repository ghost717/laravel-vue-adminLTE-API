import VueRouter from 'vue-router';

let routes = [
    {
        path: '/dashboard',
        component: require('./views/dashboard').default
    },
    {
        path: "/users",
        alias: "/users",
        name: "users",
        component: () => import("./views/users")
    },
    {
        path: "/users/:id",
        name: "user-details",
        component: () => import("./views/user")
    },
    {
        path: "/posts",
        alias: "/posts",
        name: "posts",
         component: () => import("./views/posts")
    },
    {
        path: "/posts/:id",
        name: "post-details",
        component: () => import("./views/post")
    },
    {
        path: "/tasks",
        alias: "/tasks",
        name: "tasks",
        component: () => import("./views/tasks")
    },
    {
        path: "/tasks/:id",
        name: "task-details",
        component: () => import("./views/task")
    },
];


export default new VueRouter({
    base: '/admin/',
    mode: 'history',
    routes,
    linkActiveClass: 'active'
});
