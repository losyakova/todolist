const App={
    data(){
        return{
            nameItem: '',
            priority:false,
            items:[],
            editing: false
        }
    },
    methods:{
        add(){
            this.items.push({
                id: this.items.length+1,
                nameItem: this.nameItem,
                priority: this.priority,
                done: false
            });
            this.clear();
        },
        doEdit(){
            this.editing= !this.editing;
            this.clear();
        },
        done(item){      
            item.done = !item.done;
        },
        setPriority(){
            this.priority = !this.priority;
        },
        clear(){
            this.nameItem='';
            this.priority=false;
        }
    },
    computed:{
        characterCount(){
            return this.nameItem.length;
        },
        reversedItems(){
            return [...this.items].reverse();
        }
    }
}

const app = Vue.createApp(App).mount('#app')