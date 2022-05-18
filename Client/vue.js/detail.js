// let app2 = Vue.createApp({
//     data: function(){
//         return {
//             greeting: '',
//         }
//     }
// })
// app2.mount('#app2')

var app = new Vue({
    el: '#app',
    data: {
        users: []
    },
    mounted: function() {
        let work = 'https://jsonplaceholder.typicode.com/users';

        let all_item  = 'http://127.0.0.1:5000/items';
        let single_item = 'http://127.0.0.1:5000/items/0953753c-3268-48e3-ad12-62734c24dd59';

        axios.get(all_item)
            .then(response => {
                this.users = response.data;
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }
})