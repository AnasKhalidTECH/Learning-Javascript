const accountId = 7860
let accountEmail = "anaskhalid@gmail.com"
var accountPassword = "12345"
accountCity = "Karachi"
let accountState;

// accountId = 2 // not allowed

accountEmail = "anas@gmail.com"
accountPassword = "56789"
accountCity = "Islamabad"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])