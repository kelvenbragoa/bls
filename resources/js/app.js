import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';


import Lara from '@primevue/themes/lara';
import { definePreset } from '@primevue/themes';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

import '@/assets/styles.scss';
import '@/assets/tailwind.css';

const app = createApp(App);
app.config.globalProperties.$axios = axios;

// Definir tema personalizado com cores azuis
const LaraBlue = definePreset(Lara, {
    semantic: {
        primary: {
            50: '{blue.50}',
            100: '{blue.100}',
            200: '{blue.200}',
            300: '{blue.300}',
            400: '{blue.400}',
            500: '{blue.500}',
            600: '{blue.600}',
            700: '{blue.700}',
            800: '{blue.800}',
            900: '{blue.900}',
            950: '{blue.950}'
        }
    }
});

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
axios.interceptors.request.use((config) => {
    config.headers.Accept = 'application/json';
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        config.headers.token = `Bearer ${token}`;
    }
    return config;
});

app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: LaraBlue,
        options: {
            darkModeSelector: '.app-dark'
        }
    }
});
app.use(ToastService);
app.use(ConfirmationService);

app.mount('#app');
