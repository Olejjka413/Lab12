var App = {
    data() {
        return {
            charCalc: 0,
            LastName: '',
            FirstName: '',
            notes: [],
            visible: true,
            MainButton: true
        }
    },
    methods: {
        len1(event) {
            this.LastName=event.target.value
            this.charCalc=this.LastName.length+this.FirstName.length
            if (this.LastName!='' && this.FirstName!='') {
                this.MainButton=false;
            }
            else this.MainButton=true;
        },
        len2(event) {
            this.FirstName=event.target.value
            this.charCalc=this.LastName.length+this.FirstName.length
            if (this.LastName!='' && this.FirstName!='') {
                this.MainButton=false;
            }
            else this.MainButton=true;
        },
        add() {
            if (this.LastName!='' && this.FirstName!='') {
                this.notes.push(edit(this.LastName)+" "+edit(this.FirstName))
                this.LastName=""
                this.FirstName=""
                this.charCalc=0
                this.visible=false
                this.MainButton=true
            }
        }
    }
}

var app=Vue.createApp(App)


app.mount('#app')


function edit(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}