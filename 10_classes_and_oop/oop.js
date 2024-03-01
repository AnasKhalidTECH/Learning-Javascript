const user = {
    username: "Anas Khalid",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("Anas", 12, true)
const userTwo = new User("Qadir", 10, false)

console.log(userOne);
console.log(userTwo);