class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get password(){
        return `${this._password}anas`
    }
    
    
    set password(value){
        this._password = value.toUpperCase()
    }
}

const Anas = new User("a@anas.ai", "abc")
console.log(Anas.password);