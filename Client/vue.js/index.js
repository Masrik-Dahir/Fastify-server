var app = new Vue({
    el: '#app',
    data: {
        users: [],
        isVisible: false,
        // id: document.getElementById(``).value,
        isUpdate: false,
        ind: '',
        name: '',
        phone_number: '',
        date_of_birth: '',
        physical_address: '',

    },
    methods:{
        toggleBox(id) {
            this.ind = id;
            console.log(this.ind);
            this.isUpdate = false;
            this.isVisible = true;
        },

        remove(id) {
            this.ind = id.replace("#METADATA#", "");
            console.log(this.ind);
            // this.isVisible = true;
            let item  = 'http://127.0.0.1:5000/items/' + this.ind;

            axios.delete(item)
                .then(response => {
                    this.users = response.data;
                    window.location.reload();
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                });


        },
        update(id) {
            this.isVisible = false;
            this.isUpdate = true;
            this.ind = id.replace("#METADATA#", "");
            console.log(this.ind);

            let all_item  = 'http://127.0.0.1:5000/items/' + this.ind;
            axios.get(all_item)
                .then(response => {
                    this.name = response.data.name;
                    this.phone_number = response.data.phone_number;
                    this.date_of_birth = response.data.date_of_birth;
                    this.physical_address = response.data.physical_address;
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                });


        },

        doit() {
            console.log("doit button clicked");

            let item  = 'http://127.0.0.1:5000/items/' + this.ind;


            let config = {
                headers: {

                }
            }

            let data = {
                "name": this.name,
                "phone_number": this.phone_number,
                "date_of_birth": this.date_of_birth,
                "physical_address": this.physical_address,
            }


            axios.put(item, data, config)
                .then(function (response) {
                    console.log(response);
                    window.location.reload();
                })
                .catch(function (error) {
                    console.log(error);
                });


        }
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