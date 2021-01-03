require('./bootstrap');

import Vue from 'vue';
import VueRouter from "vue-router";

window.Vue = Vue;
Vue.use(VueRouter);

require('./progressbar');

// import Form from "./utilities/Form";
// window.Form = Form;
import { Form, HasError, AlertError } from 'vform'
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

import router from './routes';

new Vue({
    el: '#app',
    router
});
