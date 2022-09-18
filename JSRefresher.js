///This is a refresher course in JS just b4 we go to Node.js
var name = "Max";
var bool = true;
var age = 26;


console.log(name + age)

//create a function

function addNumbers(a, b) {
    return a + b;
}



console.log(addNumbers(5, 89))

//Unit 2
// Will use let from now on
//const uses a fixed var
// let is block scoped. does not allow to redeclare var, hosting does not occur in let
// var attaches itself to Window Object
//var is function scoped. allows to redeclare vards, and hoisiting occurs
// avoid using the var keyword.

//Arrow Functions
//Creating Name Functions

let funName = function(a, b) {
    // console.log(this)
    return (a + b ** b)
}

// write this in multiple ways

let prodName = (a, b) => a * b

console.log(funName(3, 2), prodName(3, 2))

// We can write this uisng an arrow function
// When dealing with a globa)lfunction 'this' refrences the global object
// Using a method, this refs that particluar instance of the obj.
//e.g.
const Video = {
    title: 'a',
    play() {
        console.log(this)
    }
}

Video.play()
    //arrow keyword shows diff between parameters and function body


let fnName = (a, b) => { a + b }
console.log(fnName(4, 88))


// THis examples
const Vid = {
    title: 'a',
    tags: ['b', 'c', 'd'],
    showTags() {
        this.tags.forEach((value, index) => {
            console.log(value, index, this.title)
        })
    }
}

Vid.showTags();

// using of thisin arrow functions refs to that instance of the function
// using function name, this refs to that particluar instance of the window object

//Object is in JS
// Objects have properties and methods

let Phone = {
    type: 'nokia',
    color: 'red',
    YOM: 2022,
    arr: [1, 2, 4, 5, 9, 'lee'],
    answer: {
        question: 1,
        partTwo: 5
    },
    login: function() {
        console.log(this.type + " is a good phone")
    }
}


// print out atts of an obj
console.log(Phone.type)
console.log(Phone.color)
    //use square notation to call atts
console.log(Phone['YOM'])

//check typeof the obj
console.log(typeof Phone, Phone.arr[0])
Phone.login()

// print out all elems in an array

Phone.arr.forEach((i) => {
    console.log("elems are ", i)
})

// An arrow function doesn’t have its own this value. Instead, it uses the this value of the enclosing lexical scope. An arrow function also doesn’t have the arguments object.
// Avoid using the arrow function for event handlers, object methods, prototype methods, and functions that use the arguments object.

// Obj in an array in an obj.
let user = {
    blogs: [{
            heading: 'Blog1',
            pages: 3
        },
        {
            heading: 'Blog2',
            pages: 5
        }
    ]
}

console.log(user.blogs[1].heading)

//Primitie vs Reference Types
//Primitive Types include
//1. numbers , 2. strings 3. Booleans, 4. NUll, 5. Undefined, 6.Symbols
//Reference TYpes are 1. objects 2. arrays. 3. functions 4. dates 5.objects of all types
// Primitive types stored in the stack (quick)
//Reference types is sored in heap

//Copies of ref types are copied via pointers (address in memory,rather than new entires in the stack )
let scoreOne = 50
let scoreTwo = 60

// use backticks `, and curly braces to create string literals in JS
console.log(`Score is ${scoreOne}`)

//One object update updates the other in a direct copy

//Arrays in JS
let arr1 = [true, 222, 'jj', 29, null, 'haha']

//go thru an array
for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index];
    console.log(`element is ${element}`)

} //or use foreach
arr1.forEach((x, index) => {
    console.log(x, index)
})

let arr2 = [1, 2, 3, 5, 66, 98]

console.log(arr2.filter((y) => {
    if (y > 5)
        return y
}))


//Spread and Rest OPerators
//Spread is used to 'distribute'array members
const hobbies = ['sPorts', 'cooking']
console.log(hobbies.map(x => {
        return x.toLowerCase()
    }))
    // spread and rest operators
const newArr = ['riding', 'swimming', ...hobbies]
console.log(newArr)

const toArr = (...arr) => {
        return arr;
    }
    //rest used to 'rejoin' araay items back into an array
console.log(toArr(1, 3, true, false, 'haha'))

//Destructuring
// used to get part of an obj/arr
//we can use console.log(Phone.type) to get the type, or use destructuring
const PhoneType = ({ type, answer }) => {
        console.log(type, answer)
    }
    // During destructuring, in the parameter section of the arrow function, add curly braces to signify
    // the property of the object, the log/return it.
PhoneType(Phone)

//Destructuring arrays.
let [hobby1, hobby2, hobby3] = newArr;
console.log(`Hoby1 is ${hobby1}, and hobby2 is ${hobby2}`)
    //if array is long, just picks the 1st two/specified vars of an array

//

//async // await in JS

//asynchrous fns will not wait to finish first task/response
// JUmps to another before first is finished
// Synchronous fns will not run till first task is finished first.
// 1. Callbacks


const items = [
    { living: 'cow', non: 'chair', num: 45 },
    { living: 'goat', non: 'desk', num: 26 }
]
const id = document.getElementById('pid')

function getItems() {
    //setTimeout takes in a callbac function
    setTimeout(() => {
        let output = ''
        items.forEach((item, index) => {
            console.log(item.living)
            output += `<li>${item.living} is at index ${index}</li>`
        })
        id.innerHTML = output
    }, 1500)
}


function createItems(post, callback) {
    setTimeout(() => {
        items.push(post)
            //we insert the callback fn here
        callback()
    }, 2500)
}

//when we are calling the createItems, we specify a callback fn as above
// createItems({ living: 'hen', non: 'pen', num: 10 }, getItems)

console.log(items)

//as you can see, due tothe timeout, geItems iss posted to DOM first, before createItems runs.
//to sort this out, in the functin we want to run first, we accept a callback fn as a parameter. this will be the fn we want to be second

//Promises in JS
//this is the same createposts used with a promise fn
function createItemsPromise(post) {
    //promise takes in two params, resolve and reject
    //resolve is used to run promise suucessfully
    //reject used when there is an error
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            items.push(post)
                //create an error var
            const error = true;

            if (!error) {
                reject('This an error yoo!')
            } else {
                resolve()
            }
        }, 2000)
    })
}

/// since we have used a prmise, we will retun the .then keyword
// we can also use .catch to catch errors
// createItemsPromise({ living: 'hen', non: 'pen', num: 10 }).then(getItems).catch(err => {
//     console.log(err)
// })

//Promise.all
///promise.all takes in array of promises

const r = 99
try {
    r = 100
    throw new Error("can't do that")
} catch (Error) {
    console.log(Error)
}

console.log(r)

//promises areused in fetch keywords

const promise4 = fetch('https://jsonplaceholder.typicode.com/todos').then(
    res => res.json()
)

console.log(promise4)

//async await in JS
//fn starts with async keyword
async function init() {
    //put the wawit keyword in the function going first
    await createItemsPromise({ living: 'hen', non: 'pen', num: 10 })
        // then call the function that you want to run
    getItems()
}

init()