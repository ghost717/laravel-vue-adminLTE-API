require('./bootstrap');

import Vue from 'vue';
import VueRouter from "vue-router";

window.Vue = Vue;
Vue.use(VueRouter);

import Form from "./utilities/Form";
window.Form = Form;

// import router from './routes';
const router = new VueRouter({
    mode: 'history',
    routes: [
        // {
        //     path: '/admin/dashboard',
        //     name: 'read',
        //     component: Read,
        //     props: true
        // },
        // {
        //     path: '/admin/create',
        //     name: 'create',
        //     component: Create,
        //     props: true
        // },
        // {
        //     path: '/admin/update',
        //     name: 'update',
        //     component: Update,
        //     props: true
        // },
    ],
});

new Vue({
    el: '#app',
    router
});

// const router = new VueRouter({
//     mode: 'history',
//     routes: [
//         {
//             path: '/admin/dashboard',
//             name: 'read',
//             component: Read,
//             props: true
//         },
//         {
//             path: '/admin/create',
//             name: 'create',
//             component: Create,
//             props: true
//         },
//         {
//             path: '/admin/update',
//             name: 'update',
//             component: Update,
//             props: true
//         },
//     ],
// });

// const app = new Vue({
//     el: '#app',
//     router,
//     components: { Homepage },
// });
