
import {createApp} from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.27/vue.esm-browser.min.js';

const app = createApp({
    data() {
        return {
            temp: 'hello'
        }
    }
});

app.mount('#app');