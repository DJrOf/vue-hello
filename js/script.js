console.log('Vue ok', Vue);

// VUE.JS Check
Vue.config.devtools = true;

// client to DOM data server script
const app = new Vue({
    el: '#root',
    data: {
        firstName: '',
        lastName: '',
        tel: '',
        mail: '',
        company: '',
        role: '',
    }
});

