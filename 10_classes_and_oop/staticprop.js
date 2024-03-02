class User {
    constructor(username){
        this.username = username

    }

    logMe(){
        console.log(`Username is: ${this.username}`);
    }

    static createID(){
        return `123`
    }
}

const Anas = new User("Anas Khalid")
// console.log(Anas.createID())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("Iphone", "I@phone.com")

Anas.logMe()