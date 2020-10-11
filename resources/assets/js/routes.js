import VueRouter from 'vue-router';


let routes = [
    {
        path: '/dashboard',
        component: require('./views/dashboard').default
    },
    {
        path: '/users',
        component: require('./views/users').default
    },
    {
        path: '/posts',
        component: require('./views/posts').default
    },
    {
        path: '/posts/create',
        component: require('./views/posts/create').default
    },
    {
        path: '/posts/update',
        component: require('./views/posts/update').default
    }
];


export default new VueRouter({
    base: '/admin/',
    mode: 'history',
    routes,
    linkActiveClass: 'active'
});
