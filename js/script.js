console.log('Vue ok', Vue);

// VUE.JS Check
Vue.config.devtools = true;

// client to DOM data server script
const app = new Vue({
    el: '#root',
    data: {
        name: '',
        age: '',
        gender: '',
        hometown: '',
        region: '',
        avatars: [
            {
                name: 'eribe',
                image: 'https://unite.pokemon.com/images/overview/main-header/eribe.png',
            },
            {
                name: 'eribe',
                image: 'https://unite.pokemon.com/images/overview/main-header/eribe.png',
            },
            {
            name: 'eribe',
            image: 'https://unite.pokemon.com/images/overview/main-header/eribe.png',
            },
    ]}
});

