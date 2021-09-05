import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/lib/styles/main.sass';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/lib/components';
import * as directives from 'vuetify/lib/directives';

export default createVuetify({
  components,
  directives,
  theme: {
    dark: true,
    colors: {
      background: '#222733',
      primary: '#6200EE',
      //   surface: '#FFFFFF',
      //   primary: '#6200EE',
      //   'primary-darken-1': '#3700B3',
      //   secondary: '#03DAC6',
      //   'secondary-darken-1': '#018786',
      //   error: '#B00020',
      //   info: '#2196F3',
      //   success: '#4CAF50',
      //   warning: '#FB8C00',
    },
  },
});
