import VueRouter from 'vue-router';

// const User = {
//     template: '<div>User {{ $route.params.id }}</div>'
// }

let routes = [
    {
        path: '/dashboard',
        component: require('./views/dashboard').default
    },
    {
        path: "/",
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
      path: "/",
      alias: "/posts",
      name: "posts",
      component: () => import("./views/posts")
    },
    {
      path: "/posts/:id",
      name: "post-details",
      component: () => import("./views/post")
    },
    // {
    //   path: "/posts/add",
    //   name: "add-post",
    //   component: () => import("./views/addPost")
    // }
    // {
    //     path: '/posts',
    //     component: require('./views/posts').default
    // },
    // {
    //     path: '/posts/show',
    //     component: require('./views/post').default,
    //     name: 'posts/show',
    //     props: true
    // },
    // {
    //     path: '/posts/create',
    //     component: require('./views/posts/create').default
    // },
    // {
    //     path: '/posts/update',
    //     name: 'posts/update',
    //     component: require('./views/posts/update').default,
    //     props: true
    // }
];


export default new VueRouter({
    base: '/admin/',
    mode: 'history',
    routes,
    linkActiveClass: 'active'
});
