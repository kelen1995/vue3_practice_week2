import {createApp} from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.27/vue.esm-browser.min.js';

const app = createApp({
    data() {
        return {
            apiUrl: 'https://vue3-course-api.hexschool.io/v2',
            apiPath: 'kn99',
            products: [],
            temp: {}
        }
    },
    methods: {
        checkUser,
        getData,
    },
    mounted() {
        this.checkUser()
    }
});

app.mount('#app');

// 檢查是否有登入 token
function checkUser() {
    axios.defaults.headers.common.Authorization = document.cookie.replace(/(?:(?:^|.*;\s*)hextoken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    axios.post(`${this.apiUrl}/api/user/check`)
    .then(res => {
        this.getData();
    })
    .catch(err => {
        console.log(err.response);
    })
}

function getData() {
    axios.get(`${this.apiUrl}/api/${this.apiPath}/admin/products`)
    .then(res => {
        this.products = res.data.products;
    })
    .catch(err => {
        console.log(err.response);
    })
}