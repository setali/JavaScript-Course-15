const a = 2

const b = 5

;(function () {})()
;[1, 2, 3, 4].map(function () {})
// const person = {
//   firstName: 'Ali',
//   lastName: 'Mousavi',
//   age: 34,
//   gender: 'male'
//   //   family: {
//   //     father: 'Mohammad',
//   //     mother: 'Hajar',
//   //     children: ['Mahasa', 'Mohammad']
//   //     // partner: {
//   //     //   name: 'Eli'
//   //     //   //   family: {
//   //     //   //     // father: 'Ali'
//   //     //   //   }
//   //     // }
//   //   }
// }

// console.log(person.family?.partner?.family?.father)

// const result =
//   person.family &&
//   person.family.partner &&
//   person.family.partner.family &&
//   person.family.partner.family.father

// console.log(result)

// const obj = {}

// const arr = ['Ali', 'Mousavi']

// ;[obj.name, obj.family] = arr

// console.log(obj)

// let a = 10
// let b = 20

// ;[b, a] = [a, b]

// // const temp = a
// // a = b
// // b = temp

// console.log(a, b)

// function useState (defaultValue) {
//   let value = defaultValue

//   function setValue (newValue) {
//     value = newValue
//   }

//   return [value, setValue]
// }

// // const {value: counter, setValue: setCounter} = useState()
// const [state, setState] = useState(5)

// setState(10)

// const [count, setCount] = useState(1)

// const person = {
//   name: 'Ali',
//   family: 'Mousavi',
//   age: 34
// }

// const { name, ...rest } = person

// console.log(name)
// console.log(rest)
// const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// const [, a, b, ...rest] = arr

// console.log(a, b)

// console.log(rest)

// // const arr = ['Ali', 'Eli', 'Qoli']

// // const [, el2] = arr

// // console.log(el2)

// const person = {
//   firstName: 'Ali',
//   //   lastName: 'Mousavi',
//   age: 34,
//   //   gender: 'male',
//   family: {
//     father: 'Mohammad',
//     mother: 'Hajar',
//     children: ['Mahasa', 'Mohammad']
//   }
// }

// const {
//   firstName: myName,
//   gender = 'male',
//   lastName: myFamily = 'Hasani',
//   family: {
//     father: fatherName,
//     children: [, secondChild]
//   }
// } = person

// // const myName = person.firstName
// // const fatherName = person.family.father
// // const secondChild = person.family.children[1]

// console.log(gender)
// console.log(myName)
// // console.log(family)
// console.log(fatherName)
// console.log(myFamily)
// console.log(secondChild)

// console.log(firstName, fatherName, secondChild)

// function sum (a, b, c, d, ...args) {
//   console.log(a, b, c, d)
//   console.log(args)
// }

// sum(2, 3, 9, 4)

// function sum (...args) {
//   console.log(arguments)
//   console.log(args)
//   return args.reduce(function (acc, el) {
//     return acc + el
//   })
// }

// console.log(sum(4, 2, 3, 9, 7))

// const numbers = [4, 9, 3, 7, 6]

// // const result = Math.max.apply({}, numbers)
// const result = Math.max(...numbers)

// console.log(result)

// const str = 'salam'

// const arr = [...str]

// console.log(arr)

// const obj = { name: 'Ali' }

// const arr = [...obj]

// const friends = ['Ali', 'ELi', 'Qoli']

// const newObj = { ...friends }

// console.log(newObj)

// const arr = [4, 5, 6]

// const newArr = [1, 2, 3, ...arr, 7, 8, 9, ...[10, 2, 6]]

// console.log(newArr)

// const obj1 = { name: 'Ali', family: 'Hasani' }

// const obj2 = { family: 'Mousavi' }

// // const newObj = Object.assign({}, obj1, obj2)

// const newObj = { ...obj1, city: 'Shiraz', ...obj2, age: 34 }

// console.log(newObj)

// const a = 13

// const str = `Number is ${a % 2 ? 'Odd' : 'Even'}`

// console.log(str)

// function hello () {
//   return 'Hello'
// }

// const name = 'Ali',
//   family = 'Mousavi'

// // const str = name + ' ' + family + ' \n' + " I'm From Tehran"

// // Back tick
// const str = `My Name is ${name} ${family}

// I\m from ${5 + 9} Tehr ${hello()} a
//     ${(function func () {
//       return 'Ali'
//     })()}
// n
// `

// console.log(str)

// function func () {
//   for (const i = 0; i < 5; i++) {
//     setTimeout(function () {
//       console.log(i)
//     }, 1000)
//   }
// }

// func()

// const a

// a = 20 // ERROR

// const arr = [1, 2, 3, 4]

// arr.push(5)

// arr[0] = 10

// arr.length = 2

// console.log(arr)

// // #12BDF6
// const person = {
//   name: 'Ali'
// }

// // person = {
// //   name: 'Hsasan'
// // }

// person.name = 'Hasan'

// console.log(person)

// const a = 20

// a = 30

// console.log(a)

// function func () {
//   console.log(a)

//   let a = 20
// }

// func()

// function func () {
//   let a = 20

//   {
//     var a = 30 // Error
//     console.log('in', a)
//   }

//   console.log('out', a)
// }

// func()

// function func () {
//   var a = 10
//   let b = 5

//   {
//     var a = 20
//     b = 15
//     console.log(b)
//   }

//   console.log({ a })
//   console.log({ b })
// }

// func()

// function f() {
//     var a = 10

//     function f2() {
//         var a = 50
//         console.log(a)
//     }
// }

// var a = 10

// var a = 20

// let b = 5

// console.log(a)
// console.log(b)
