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
    }
}

var app=Vue.createApp(App)



function edit(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}