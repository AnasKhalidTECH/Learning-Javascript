// For of loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello World!"

for (const greet of greeting) {
    // console.log(`each char is ${greet}`);
}

// Maps

const map = new Map()
map.set("PK", "Pakistan")
map.set("BD", "Bangladesh")
map.set("IND", "India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ":-", value);
// }

