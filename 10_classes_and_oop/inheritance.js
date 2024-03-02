class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends user {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}

const chai = new Teacher("Anas", "Anas@google.com", "123")

chai.logMe()

const tea = new user("Anas")

tea.logMe()

console.log(chai instanceof Teacher);