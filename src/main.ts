import { createApp } from 'vue';
import vuetify from './plugins/vuetify';
import App from './App.vue';
import store from './store';
import './index.css';

createApp(App).use(store).use(vuetify).mount('#app');
