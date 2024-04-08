const {createApp} = Vue;

createApp({
    data(){
        return{
            emails:[],
            emailNum: 10,
            apiPath: 'https://flynn.boolean.careers/exercises/api/',
        }
    },
    methods:{
        getEmailList(){
            const newList = [];
            for(let i = 1; i <= this.emailNum; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res)=>{
                    const mail = res.data.response;
                    newList.push(mail);
                    if(i === this.emailNum){
                        this.emails = [...newList];
                    }
                });
            }
        }

    },
    created(){
        this.getEmailList();
    }
}).mount('#app')