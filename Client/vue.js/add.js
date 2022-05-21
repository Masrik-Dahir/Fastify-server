let app = Vue.createApp({
    data: function(){
        return {
            greeting: "Hello Vue 3",
            isVisible: false,
        }
    },
    methods: {
        toggleBo() {
            this.isVisible = ! this.isVisible;
        },
        greet(greeting) {
            console.log(greeting);
        }

    },
})

app.component('custom-form', {
    template:
        `
    <form @submit.prevent="handleSubmit"> 
           
           <div class="container mt-4">
           <h3>{{ title }}</h3>
           <table class="table table-bordered" style="table-layout:auto">
              <thead>
                <tr>
                  <th>Attributes</th>
                  <th>Inputs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                <td>Name</td>
                  <td> <custom-name v-model="name" /> </td>                  
                </tr>
                
<!--                <tr>-->
<!--                <td>Email Address</td>-->
<!--                  <td> <custom-input v-model="email" /> </td>                  -->
<!--                </tr>-->
                
                <tr>
                <td>Phone Number</td>
                  <td> <custom-number v-model="phone_number" /> </td>                  
                </tr>
                
<!--                <tr>-->
<!--                <td>Hire Date</td>-->
<!--                  <td> <custom-date v-model="hire_date" /> </td>                  -->
<!--                </tr>-->
<!--                -->
<!--                <tr>-->
<!--                <td>Job Id</td>-->
<!--                  <td> <custom-input v-model="job_id" /> </td>                  -->
<!--                </tr>-->
<!--                -->
<!--                -->
<!--                <tr>-->
<!--                <td>Salary</td>-->
<!--                  <td> <custom-number v-model="salary" /> </td>                  -->
<!--                </tr>-->
<!--                -->
<!--                <tr>-->
<!--                <td>Commission (%)</td>-->
<!--                  <td> <custom-number v-model="commission_pct" /> </td>                  -->
<!--                </tr>-->
<!--                -->
<!--                <tr>-->
<!--                <td>Manager ID</td>-->
<!--                  <td> <custom-input v-model="manager_id" /> </td>                  -->
<!--                </tr>-->
                
                <tr>
                <td>Date of Birth</td>
                  <td> <custom-date v-model="date_of_birth" /> </td>                  
                </tr>
                
                <tr>
                <td>Physical Address</td>
                  <td> <custom-input v-model="physical_address" /> </td>                  
                </tr>
                
              </tbody>
            </table>
            <button style="float: right">Create Employee</button>
            </div>
           
           
           
           
           
           
<!--           <custom-input v-model="email" :label="emailLabel" />-->
<!--           <br>-->
<!--           <custom-input v-model="password"  :label="passwordLabel" />-->
           
    </form>
    `,
    components: ['custom-compnent'],

    data(){
        return{
            title: "Create Employee",
            name: null,
            email: null,
            phone_number: null,
            hire_date: null,
            job_id: null,
            salary: null,
            commission_pct: null,
            manager_id: null,
            date_of_birth: null,
            physical_address: null,

            emailLabel: "Email",
            passwordLabel: "Password",
            users: [],
        }
    },
    methods: {
        handleSubmit() {

            let all_item  = 'http://127.0.0.1:5000/items';

            let config = {
                headers: {

                }
            }

            let data = {
                "name": this.name,
                // "email": this.email,
                "phone_number": this.phone_number,
                // "hire_date": this.hire_date,
                // "job_id": this.job_id,
                // "salary": this.salary,
                // "commission_pct": this.commission_pct,
                // "manager_id": this.manager_id,
                "date_of_birth": this.date_of_birth,
                "physical_address": this.physical_address,
            }


            axios.post(all_item, data, config)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });

        }
    }
})
app.component('custom-name', {
    template:
        `
    <label>
        {{label}}
        <input type="text" v-model="inputValue" required>
    </label>
    `,
    props: ['label', 'modelValue'],
    computed:{
        inputValue: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value);
            }
        }
    }

})
app.component('custom-input', {
    template:
        `
    <label>
        {{label}}
        <input type="text" v-model="inputValue">
    </label>
    `,
    props: ['label', 'modelValue'],
    computed:{
        inputValue: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value);
            }
        }
    }

})
app.component('custom-date', {
    template:
        `
    <label>
        {{label}}
        <input type="date" v-model="inputValue">
    </label>
    `,
    props: ['label', 'modelValue'],
    computed:{
        inputValue: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value);
            }
        }
    }

})

app.component('custom-number', {
    template:
        `
    <label>
        {{label}}
        <input type="number" step=0.00001 v-model="inputValue">
    </label>
    `,
    props: ['label', 'modelValue'],
    computed:{
        inputValue: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value);
            }
        }
    }

})

app.mount('#app')
