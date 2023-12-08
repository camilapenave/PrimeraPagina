// function MyFunction (num) {
//     if (num % 2 == 0) return "Es par"
//     else return "Es impar"
// }
// console.log( MyFunction (22))

// function MyFunction(num) {
//     return num % 2 ? "impar" : "par"
// }

// let MyFunction = (num) => num % 2 ? "impar" : "par"
//     console.log (MyFunction(23))

// let MyFunction = (num) => num % 2 ? "impar" : "par"


// let callback = () => {
// }
//     console.log('Se ejecuto el callback')


// setTimeout( callback,5000) 

axios.get("https://leonardoapi.onrender.com/music")
    .then( (res) => {
        console.log(res.data)
    }) 



