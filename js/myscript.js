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
            for(let i = 0; i < emailNum; i++){
                axios.get(`${this.apiPath}random/mail`).then((res)=>{
                    const mail = res.data.response;
                    newList.push(mail);
                    
                    this.emails = [...newList];
                });
            }
        }

    },
    created(){
        this.getEmailList();
    }
}).mount('app')