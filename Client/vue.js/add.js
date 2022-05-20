let app = Vue.createApp({
    data: function(){
        return {
            greeting: "Hello Vue 3",
            isVisible: false,
        }
    },
    methods: {
        toggleBox() {
            this.isVisible = ! this.isVisible;
        },
        greet(greeting) {
            console.log(greeting);
        }

    }
})

app.component('custom-form', {
    template:
        `
    <form @submit.prevent="handleSubmit"> 
           <h1>{{ title }}</h1>
           <custom-input v-model="email" :label="emailLabel" />
           <custom-input v-model="password"  :label="passwordLabel" />
           <button>Log in</button>
    </form>
    `,
    components: ['custom-compnent'],

    data(){
        return{
            title: "Login Form",
            email: "",
            password: "",
            emailLabel: "Email",
            passwordLabel: "Password",
            users: [],
        }
    },
    methods: {
        handleSubmit() {


            let all_item  = 'http://127.0.0.1:5000/items/';
            axios.get(all_item)
                .then(response => {
                    this.users = response.data;
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                });

            // console.log(this.email, this.password);
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




app.mount('#app')