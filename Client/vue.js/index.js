var app = new Vue({
    el: '#app',
    data: {
        users: [],
        isVisible: false,
        // id: document.getElementById(``).value,
        ind: '',
    },
    methods:{
        toggleBox(id) {
            this.ind = id;
            console.log(this.ind);
            this.isVisible = true;
        },
    },
    mounted: function() {

      let all_item  = 'http://127.0.0.1:5000/items';

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