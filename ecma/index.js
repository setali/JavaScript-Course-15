const person = {
  name: 'Ali',
  family: 'Mousavi',
  age: 34,
  [Symbol.toPrimitive] (hint) {
    if (hint === 'number') {
      return this.age
    }

    if (hint === 'string') {
      return `${this.name} ${this.family}`
    }
  }
}

console.log(+person)
console.log(String(person))

// const sym1 = Symbol.for('ali')

// const sym2 = Symbol.for('ali')

// console.log(sym1 === sym2)

// const sym = Symbol()

// const person = {
//   name: 'Ali',
//   family: 'Mousai',
//   [sym]: 10
// }

// console.log(person)

// for (const key in person) {
//   console.log(key)
// }

// console.log(JSON.stringify(person))

// console.log(person.name)
// console.log(person[sym])

// const sym1 = Symbol()

// const sym2 = Symbol('ali')

// console.log(sym1)
// console.log(sym2)

// console.log(sym1 === sym2)

// console.log(Symbol() === Symbol())

// const map = new Map()

// map.set('family', 'Mousavi')
// map.set('name', 'Ali')

// // for (const a of map) {
// //   console.log(a[0], a[1])
// // }

// console.log(map.has('name'))
// console.log(map.has('age'))

// console.log(map.get('name'))
// console.log(map.get('age'))

// map.set(NaN, 'a')

// console.log(map.get(NaN))
// map.set(NaN, 'b')

// // map.delete('name')
// // map.clear()

// console.log(map)
// const numbers = [2, 3, 4, 6, 2, 3, 2, 2, 2, 8, 6, 2]

// const set = new Set(numbers)

// const arr = [...set]

// console.log(arr)

// const set = new Set()

// set.add(2)
// set.add(7)
// set.add(5)
// set.add(7)

// console.log(set.has(7))
// console.log(set.has(3))

// set.delete(7)

// set.clear()

// // for (let a of set) {
// //   console.log(a)
// // }

// console.log(set)
// console.log(set.size)

// class Animal {
//   //   static zooName = 'Eram'

//   constructor (type) {
//     this.type = type
//   }

//   eat () {
//     console.log('HUM HUM')
//   }
// }

// Animal.zooName = 'Eram'

// class Cat extends Animal {
//   constructor (name) {
//     super('CAT')
//     this.name = name
//   }

//   speak () {
//     console.log('MU Mu')
//   }

//   eat () {
//     super.eat()
//     console.log('HOOM HOOM')
//   }
// }

// class PersianCat extends Cat {
//   constructor (name, weight, color) {
//     super(name)
//     this.weight = weight
//     this.color = color
//   }

//   attack () {
//     console.log('ATTAK')
//   }
// }

// const barfi = new PersianCat('Barfi', 2, 'white')

// console.log(barfi.zooName)

// console.log(Animal.zooName)
// console.log(Cat.zooName)
// console.log(PersianCat.zooName)

// console.log(barfi instanceof PersianCat)
// console.log(barfi instanceof Cat)
// console.log(barfi instanceof Animal)
// console.log(barfi instanceof Object)
// console.log(barfi instanceof Array)

// const obj = {
//   name: 'Ali'
// }

// obj.__proto__ = {
//   family: 'Mousavi'
// }

// console.log(obj)

// console.log(barfi)

// barfi.attack()
// barfi.eat()
// barfi.speak()

// const barfi = new Cat('Barfi')

// barfi.speak()
// barfi.eat()

// const barfi = new Animal('CAT')

// console.log(barfi)
// barfi.eat()

// function Person (name, family, age) {
//   this.name = name
//   this.family = family
//   this.age = age
//   this.getFullName = function () {
//     return `${this.name} ${this.family}`
//   }
// }

// class Person {
//   country = 'Iran'

//   constructor (name, family, age) {
//     this.name = name
//     this.family = family
//     this.age = age
//   }

//   get fullName () {
//     return `${this.name} ${this.family}`
//   }

//   getFullName = () => `${this.name} ${this.family}`
// }

// const ali = new Person('Ali', 'Mousavi', 34)

// console.log(ali.fullName)
// console.log(ali.getFullName())

// console.log(ali.country)
// const delay = time => new Promise(resolve => setTimeout(resolve, time * 1000))

// async function func () {
//   for (let i = 0; i < 5; i++) {
//     await delay(1)

//     console.log(i)
//   }
// }

// func()

// async function pow2 (n) {
//   return n ** 2
// }

// async function func () {
//   console.log(1)
//   const result = await pow2(5)
//   console.log(result)
//   console.log(2)
// }

// func()

// async function func () {
//   console.log(1)
//   await delay(1)
//   console.log(2)
//   await delay(1)
//   console.log(3)
// }

// func()

// function prom (n) {
//   return new Promise((resolve, reject) => {
//     if (n) {
//       resolve(n ** 2)
//     } else {
//       reject('Error')
//     }
//   })
// }

// async function prom (n) {
//   if (n) {
//     return n ** 2
//   }

//   throw new Error('Error')
// }

// // console.log(1)

// // prom(5).then(console.log)
// prom(0).then(console.log).catch(console.log)

// console.log(2)
// function axios (url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then(response => response.json())
//       .then(data => resolve({ data }))
//       .catch(err => reject(err))
//   })
// }

// const url = 'https://jsonplaceholder.typicode.com/users/1'

// axios(url)
//   .then(({ data }) => console.log(data))
//   .catch(console.log)

// function request (url, method = 'GET') {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest()

//     xhr.open(method, url)

//     xhr.send()

//     xhr.onload = function () {
//       if (xhr.status >= 400) {
//         reject(new Error(`Error ${xhr.status}`))
//       }
//       resolve({
//         json: function () {
//           return new Promise((resolve, reject) => {
//             try {
//               resolve(JSON.parse(xhr.response))
//             } catch (err) {
//               reject(err)
//             }
//           })
//         }
//       })
//     }

//     xhr.onerror = function () {
//       reject(new Error('Error'))
//     }
//   })
// }

// const url = 'https://jsonplaceholder.typicode.com/users/1'
// // const url = 'https://jsonplaceholder.typicode.com'

// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// function prom (n) {
//   return new Promise((resolve, reject) => {
//     resolve(n ** 2)
//   })
// }

// prom(5)
//   .then(result => {
//     console.log(result)
//     return result + 10
//   })
//   .then(data => {
//     console.log(data)
//     return data * 10
//   })
//   .then(data => console.log(data))

// function prom () {
//   return new Promise(resolve => resolve('Ali'))
// }

// setTimeout(() => {
//   console.log('Qoli')
// }, 0)

// prom().then(console.log)

// console.log('Salam')

// function prom (n, time) {
//   return new Promise((resolve, reject) => {
//     if (typeof n !== 'number') {
//       return reject('Not a number')
//     }

//     setTimeout(() => {
//       console.log('salam')
//       return resolve(n ** 2)
//       console.log('ali')
//     }, time * 1000)
//   })
// }

// prom(5, 1).then(data => console.log(data))

// prom('Ali', 1000).then(console.log).catch(console.log)

// const prom = new Promise((resolve, reject) => {
//   resolve('Ali')
//   //   reject('Qoli')
// })

// console.log(1)

// const loading= true

// prom
//   .then(name => console.log(name))
//   .catch(err => console.log(err))
//   .finally(() => {
//     console.log('Finally')
//     loading= false
//   })

// console.log(2)

// function func () {
//   console.log(new.target)
// }

// new func()

// const arr = [1, 2, 3, 4]

// arr.forEach(el => console.log(el))

// function func () {
//   console.log('---->', this)
//   return {
//     name: 'Ali',
//     normal: function () {
//       console.log(this)
//     },
//     arrow: () => {
//       console.log(this)
//     }
//   }
// }

// const sara = {
//   name: 'Sara'
// }

// const obj = func.call(sara)

// obj.normal()
// obj.arrow()

// obj.normal.call(sara)
// obj.arrow.call(sara)

// console.log(obj)
// obj.normal()
// obj.arrow()

// const obj2 = {
//   name: 'Hasan',
//   normal: obj.normal,
//   arrow: obj.arrow
// }

// obj2.arrow()

// obj2.normal()

// function* gen () {
//   yield 1
//   yield 2
// }

// const it = gen()

// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// const arrow = () => {}

// console.log(arrow)

// arrow.call({ name: 'Ali' })

// const a = new arrow()

// const sum = (...args) => args.reduce((acc, el) => acc + el)

// console.log(sum(1, 2, 3, 4))

// const arr = [1, 2, 3, 4, 5]

// const newArr = arr.map(el => ({
//   value: el ** 2
// }))

// console.log(newArr)

// newArr.forEach(({ value }) => {
//   console.log(value)
// })

// const pow2 = n => n ** 2

// const sum = (a, b) => a + b

// console.log(sum(2, 3))

// const a = 2

// const b = 5

// ;(function () {})()
// ;[1, 2, 3, 4].map(function () {})
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
