// function Person () {
//     this.name = 'John',
//     this.age = 23
// }

// const person = new Person();
// Person.prototype.gender = 'male';

// console.log(person.gender)


const pro1 = new Promise((resolve, reject) => {
    resolve('first promise resolved')
})


const pro2 = new Promise((resolve, reject) => {
    resolve('pro2 promise resolved')
})


const pro3 = new Promise((resolve, reject) => {
    resolve('pro3 promise resolved')
})   

const pro4 = new Promise((resolve, reject) => {
    resolve('pro4 promise reject')
})   



// Promise.all will only work with resolved promises
Promise.all([pro1, pro2, pro3, pro4]).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})


Promise.allSettled([pro1, pro2, pro3, pro4]).then((result) => {
    console.log(result)
}).catch((error) => {

})


Promise.race([pro1, pro2, pro3, pro4]).then((result) => {
    console.log(result)
}).catch((error) => {

})