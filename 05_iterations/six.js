// const coding = ["js", "Java", "Python", "C", "Ruby"]

// const values = coding.forEach( (items) => {
//     // console.log(items);
//     return items
// } )

// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const newNums = myNums.filter( (num) => {
// //     return num > 4
// // } )

// const newNums = []

// myNums.forEach( (nums) => {
//     if (nums > 4) {
//         newNums.push(nums)
//     }
// } )
// console.log(newNums);

const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book two', genre: 'Non-fiction', publish: 1985, edition: 2008},
    {title: 'Book three', genre: 'history', publish: 1989, edition: 2012},
    {title: 'Book four', genre: 'science', publish: 1993, edition: 2016},
    {title: 'Book five', genre: 'self-help', publish: 1997, edition: 2020},
    {title: 'Book six', genre: 'Fiction', publish: 2001, edition: 2024},
    {title: 'Book seven', genre: 'Non-fiction', publish: 2005, edition: 2004},
    {title: 'Book eight', genre: 'science', publish: 2009, edition: 2004}
]

let userBooks = books.filter( (bk) => bk.genre === 'Fiction' )
userBooks = books.filter( (bk) => {
    return bk.publish >= 2000 && bk.genre === 'Fiction' 
} )

console.log(userBooks);