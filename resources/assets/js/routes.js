import VueRouter from 'vue-router';

const User = {
    template: '<div>User {{ $route.params.id }}</div>'
}

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
        path: '/users/:id', component: User
    },
    {
        path: '/posts',
        component: require('./views/posts').default
    },
    {
        path: '/posts/show',
        component: require('./views/post').default,
        name: 'posts/show',
        props: true
    },
    {
        path: '/posts/create',
        component: require('./views/posts/create').default
    },
    {
        path: '/posts/update',
        name: 'posts/update',
        component: require('./views/posts/update').default,
        props: true
    }
];


export default new VueRouter({
    base: '/admin/',
    mode: 'history',
    routes,
    linkActiveClass: 'active'
});
