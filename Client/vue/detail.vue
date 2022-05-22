<script>
var app = new Vue({
  el: '#app',
  data: function() {
    return {
      users: [],
      greeting: '',
      res: '',
      allEmployee: true,
      view_emp_text: "SHOW"
    }

  },

  methods:{
    toggleBox() {
      this.res = 'http://127.0.0.1:5000/items/' + this.greeting;
      this.allEmployee = !this.allEmployee;

      if (this.view_emp_text === "SHOW"){
        this.view_emp_text = "HIDE"
      }
      else{
        this.view_emp_text = "SHOW"
      }

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
</script>