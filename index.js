// var my_first_name = 'Ali'
// var myLastName = 'Mousavi'
// var MyAge = 34

//  / \ | ! @ # $ % ^ & * () - _ + = [] {} ' " ` : ; , ~

// camelCaseNaming
// PascalCaseNaming
// snake_case_naming
// kebab-case-naming
// UPPER_CASE_NAMING     BASE_URL

// my-logo => myLogo
// var date = new Date()

// console.log(date)

// date.setSeconds(date.getSeconds() + 1123)

// console.log(date)

// var time = 1703760718

// console.log((Date.now() / 1000).toFixed(0) - time)

// console.log((123).toString(2))
// console.log((2).toString(2))
// console.log((25).toString(8))

// var str = '    Hi  '
// #Ab12CD

// str = str.trim()

// console.log(str)

// var str = 'My name is Ali Mousavi'

// var arr = str.split(' ')

// console.log(arr)

// var newStr = arr.join(' ')

// console.log(newStr === str)

// var str = 'Ali'

// str[0] = 'Eli'

// console.log(str, str.length)

// str = 'Eli'

// str.length = 2

// console.log(str, str.length)

// str.length = 10

// console.log(str, str.length)

// var number = 2
// number = 5

// var str = new String('Ali')

// console.log(str.length)
// console.log(str[2])

// console.log(typeof str)

// console.log(str + 'mousavi')

// var arr = [1, 2, 3, 4]

// var newArr = arr.map(function (el) {
//   return 1 / el
// })

// console.log(newArr)

// var arr = ['a', 'b', 'c']

// var newArr = arr.reverse()

// console.log(arr)
// console.log(newArr)

// console.log(arr === newArr)

// var arr = [8, 3, 1, 6, 4, 11, 25]

// arr.sort(function (b, a) {
//   console.log(a, b)
//   return a - b
//   //   if (b < a) {
//   //     return -1
//   //   } else {
//   //     return 1
//   //   }
// })

// console.log(arr)

// var classmates = [
//   { name: 'Rezvan', age: undefined, gender: 'female' },
//   { name: 'Sara', age: 35, gender: 'female' },
//   { name: 'Mohammad', age: 27, gender: 'male' },
//   { name: 'Mansooure', age: 33, gender: 'female' },
//   { name: 'Mahnoosh', age: 32, gender: 'female' },
//   { name: 'Sarineh', age: 35, gender: 'female' },
//   { name: 'Maryam', age: 24, gender: 'female' },
//   { name: 'Milad', age: 30, gender: 'male' }
// ]

// classmates.sort(function (b, a) {
//   return b.age - a.age
// })
// classmates.sort(function (b, a) {
//   return b.name < a.name
//   if (b.name < a.name) {
//     return 1
//   } else {
//     return -1
//   }
// })

// console.log(classmates)

// var classmates = new Array(100000).fill(0).map(function () {
//   return { name: 'Milad', age: 30, gender: 'male' }
// })

// console.log(classmates)

// console.time('AVG')

// var length = classmates.filter(function (el) {
//   return el.age
// }).length

// var sumAge = classmates.reduce(function (acc, el) {
//   return acc + (el.age ?? 0)
// }, 0)

// console.log(length)

// console.log(sumAge)

// var avg = sumAge / length

// console.log(avg)

// console.timeEnd('AVG')

// var arr = [2, 4, 6, 7, 9, 11]

// var result = arr.reduce(function (acc, el) {
//   console.log(acc, el, '===>', acc + el)
//   return acc + el
// }, 10)

// console.log(result)

// var acc = 0

// arr.forEach(function (el) {
//   acc = acc + el
// })

// console.log(acc)

// var names = []

// classmates.forEach(function (el) {
//   if (el.gender === 'male') names.push(el.name)
// })

// console.log(names)

// var arr = [1, 2, 3, 4]

// var newArr = arr
//   .map(function (el) {
//     return [el, el * 2]
//   })
//   .flat()

// var newArr = arr.flatMap(function (el) {
//   return [el, el * 2]
// })

// console.log(newArr)

// var names = classmates
//   .filter(function (el) {
//     return el.gender === 'female'
//   })
//   .map(function (el) {
//     return el.name
//   })
//   .filter(function (name) {
//     return name.length < 7
//   })

// // var names = classmates.filter(el => el.gender).map(el => el.name)

// console.log(names)

// var arr = [1, 2, 3, 4]

// var newArr = arr.map(function (el) {
//   console.log(el)
//   //   return 'ali'
//   return el * 2
// })

// console.log(newArr)

// console.log(newArr.length === arr.length)

// for (var el of classmates) {
//   console.log(el.name)
// }

// var result = classmates.forEach(function (el, index, arr) {
//   if (el.name === 'Sara') {
//     break // Error
//   }
//   console.log(el.name)

//   return 'ali' // not work
// })

// console.log(result) // undefined

// classmates.forEach(el => console.log(el.name))

// classmates = ['#12EACB', '#ABC249']

// var result = classmates.includes(classmates[0])

// console.log(result)

// var maryamIndex = classmates.findIndex(function (el) {
//   return el.name.toLowerCase() === 'ali'
// })

// console.log(maryamIndex)

// console.log(classmates[maryamIndex])

// var undefinedAge = classmates.some(function (el) {
//   //   return el.age === undefined
//   return !el.age
// })

// console.log(undefinedAge)

// var arr = [2, 4, 6, 10, 12, 8]

// var hasOdd = arr.some(function (el) {
//   return el % 2
// })

// console.log(hasOdd)

// var mohammad = classmates.find(function (el) {
//   return el.name.toLowerCase() === 'mohammad'
// })

// console.log(mohammad)

// var arr = [2, 4, 6, 8, 6, 12]

// var odd = arr.find(function (el) {
//   return el % 2
// })

// console.log(odd)

// var olderThan30 = classmates.filter(function (el) {
//   return el.age > 30
// })

// console.log(olderThan30)

// var females = classmates.filter(function (el) {
//   return el.gender === 'female'
// })
// var males = classmates.filter(function (el) {
//   return el.gender === 'male'
// })
// var nonGender = classmates.filter(function (el) {
//   return !el.gender
// })

// console.log(females)
// console.log(males)
// console.log(nonGender)

// var arr = [2, 1, 75, 36, 24, 35]

// var odds = arr.filter(function (el) {
//   return el % 2
// })

// console.log(odds)

// var arr = [2, 4, 6, 8, 12]

// var arr = [1, 9, 3, 11, 21]

// var isOdd = arr.every(function (el, index, arr) {
//   return el % 2

//   //   if (el % 2 === 1) {
//   //     return true
//   //   } else {
//   //     return false
//   //   }
// })

// console.log(isOdd)

// var isEven = arr.every(function (el, index, arr) {
//   return !(el % 2)
// })

// console.log(isEven)

// var arr = Array.from({ length: 5, 1: 'A', 4: 'b' })

// console.log(arr)

// console.log(typeof arr)

// console.log(Array.isArray(arr)) // true
// console.log(Array.isArray('salam')) // false

// var arr = Array.from({ length: 5 }, function (el, index) {
//   return index + 1
// })

// console.log(arr)

// var arr = [1, 2, 3]

// var newArr = Array.from(arr, function (el) {
//   return el * 2
// })

// console.log(newArr)

// var arr = ['a', 'b', 'c', 'd']

// console.log(arr)

// arr.length = 20

// console.log(arr)

// var arr = [10]

// var arr = new Array(10)

// console.log(arr)
// console.log(arr.length)
// console.log(arr[1])

// var person = {
//   name: 'Hosein',
//   family: 'Hosein',
//   age: 34
// }

// var keys = Object.keys(person)

// console.log(keys)

// for (var key of keys) {
//   console.log(key, person[key])
// }

// console.log(Object.values(person))

// var entries = Object.entries(person)

// console.log(entries)

// var newObj = Object.fromEntries(entries)

// console.log(newObj)

// var person = {
//   name: 'Ali'
// }

// console.log(Object.getOwnPropertyDescriptor(person, 'name'))

// person.age = 34

// Object.defineProperty(person, 'family', {
//   value: 'Mousavi',
//   writable: true,
//   configurable: true,
//   enumerable: true
// })

// Object.defineProperty(person, 'fullName', {
//   get: function () {
//     return this.name + ' ' + this.family
//   },
//   set: function (value) {
//     var arr = value.split(' ')
//     this.name = arr[0]
//     this.family = arr[1]
//   }
// })

// Object.defineProperty(person, 'age', {
//   get: function () {
//     return 'My age is ' + this._age
//   },
//   set: function (value) {
//     this._age = value
//   }
// })

// person.age = 50

// console.log(person.age)

// console.log(person.fullName)

// person.fullName = 'Hasan Hasani'

// console.log(person)

// console.log(person)

// person.name = 'Hasan'
// person.family = 'Hasani'
// delete person.name
// delete person.family

// for (var key in person) {
//   console.log(key, person[key])
// }

// console.log(JSON.stringify(person))

// console.log(person)

// var person = {
//   name: 'Ali',
//   age: 34,
//   married: true,
//   friends: null,
//   graduate: undefined,
//   sym: Symbol(),
//   func: function () {},
//   birthday: new Date()
// }

// var json = JSON.stringify(person)

// console.log(person)
// console.log(json)

// var newObj = JSON.parse(json)

// console.log(newObj)

//#12EBA1
// var obj1 = {
//   a: 10,
//   b: 20,
//   f: {
//     g: 60,
//     h: 70
//   }
// }

// var obj3 = {
//   a: 30,
//   d: 40
// }

// var obj2 = obj1
// var obj2 = {}
// var obj4 = Object.assign(obj2, obj1, obj3)

// console.log(obj2 === obj4) // true

// // var obj2 = Object.assign({}, obj1)
// var obj2 = JSON.parse(JSON.stringify(obj1))

// obj2.b = 50
// obj2.f.g = 90

// console.log(obj1 === obj2)
// console.log(obj1)
// console.log(obj2)

// var obj = Object.create({
//   name: 'Ali',
//   age: 34
// })

// // obj.name = 'Hasan'

// // var obj = Object.create(null)

// console.log(obj)
// console.log(obj.name)

// function welcome (greeting) {
//   console.log(this)
//   console.log(greeting, this.name, this.age)
// }
// var person1 = {
//   name: 'Ali',
//   age: 30
// }
// var person2 = { name: 'Mehdi', age: 36 }

// var newWelcome1 = welcome.bind(person1, 'Hi')
// newWelcome1() // Hi Ali 30
// var newWelcome2 = welcome.bind(person2, 'Hello')
// newWelcome2() // Hello Mehdi 36

// var maryam = {
//   firstName: 'Maryam',
//   lastName: 'Saeidi',
//   age: 24,
//   getFullName: function (hi = 'Hi', bye = 'Bye') {
//     console.log(hi + ' ' + this.firstName + ' ' + this.lastName + ', ' + bye)
//   }
// }

// maryam.getFullName()

// var masoome = {
//   firstName: 'Masoome',
//   lastName: 'Sadeghi',
//   age: 32,
//   getFullName: maryam.getFullName
// }

// masoome.getFullName()

// var firstName = 'Nafise'
// var lastName = 'Salehi'
// var age = 29
// var getFullName = maryam.getFullName

// getFullName('Hello', 'Goodbye')

// var mansoure = {
//   firstName: 'Mansoore',
//   lastName: 'Sadri'
// }

// getFullName.call(mansoure, 'Salam', 'Khodahafez')

// var sara = {
//   firstName: 'Sara',
//   lastName: 'Khaghani'
// }

// getFullName.apply(sara, ['Hello', 'GoodBye'])

// var bahar = {
//   firstName: 'Bahar',
//   lastName: 'Mahmmodian'
// }

// var newFunc = getFullName.bind(bahar, 'Salam', 'GoodBye')

// newFunc('Khodahafez')

// var mahdi = {
//   firstName: 'Mahdi',
//   lastName: 'Sardari',
//   fullName: newFunc
// }

// newFunc.call(mahdi)

// mahdi.fullName()

// var numbers = [10, 2, 3, 7, 52, 4]

// console.log(Math.max.apply(null, numbers))
// console.log(Math.max.apply({}, numbers))

// var myName = 'Ali'

// // #12EFAC
// function getMyName () {
//   console.log(this.myName)
// }

// getMyName()

// var obj = {
//   myName: 'Hasan',
//   //#12EFAC
//   getMyName
// }

// obj.getMyName()

// console.log(obj.getMyName === getMyName)

// func()

// new func()

// var person = {
//   name: 'Ali',
//   family: 'Mousavi',
//   age: 34,
//   getFullName: function () {
//     return this.name + ' ' + this.family
//   }
// }

// console.log(person.getFullName())

// var amene = {
//   name: 'Amene',
//   family: 'Sadegi',
//   age: 34,
//   getFullName () {
//     return amene.name + ' ' + amene.family
//   }
// }

// var anoosha = {
//   name: 'Anoosha',
//   family: 'Etebari',
//   age: 28,
//   getFullName () {
//     return anoosha.name + ' ' + anoosha.family
//   }
// }

// function Person (name, family, age) {
//   this.name = name
//   this.family = family
//   this.age = age
//   this.getFullName = function () {
//     return this.name + ' ' + this.family
//   }
// }

// var ali = new Person('Ali', 'Mousavi', 34)
// var amene = new Person('Amene', 'Sadeghi', 34)
// var anoosha = new Person('Anosha', 'Etebari', 28)

// console.log(ali.getFullName())
// console.log(amene.getFullName())
// console.log(anoosha.getFullName())

// var count = (function (defaultValue = 0) {
//   var value = defaultValue

//   function increase () {
//     console.log(++value)
//   }

//   function decrease () {
//     console.log(--value)
//   }

//   return {
//     increase,
//     decrease
//   }
// })(20)

// var count = counter(10)

// console.log(count)

// function func (a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c
//     }
//   }
// }

// // console.log(func(10)(5)(20))

// var func10 = func(10)

// // console.log(func10(20)(30))

// var func50 = func10(40)

// // console.log(func50(60))
// // console.log(func50(100))
// // console.log(func50(200))

// var myFunc5 = func(5)

// console.log(myFunc5)

// var person = {
//     name: "Ali"
// }

// person.name = "Hasan"

// function func () {
//   console.log(myName)
// }

// func()
// var myName = 'Ali'
// window.myName = 'Ali'

// setTimeout(function () {
//   console.log('Samane')
// }, 0)

// while (true) {
//   console.log('Ali')
// }

// function func () {
//   var i = 0 // #AB12EF
//   setTimeout(function () {
//     console.log(i)
//   }, 1000)
// }

// func()

// function func () {
//   for (var i = 0; i < 555555; i++) {
//     setTimeout(function () {
//       console.log(i)
//     }, 0)
//   }
// }

// func()

// console.log(1)

// setTimeout(function () {
//   console.log('Ali')
// }, 1000)

// console.log(2)

// setTimeout(function () {
//   console.log('Hasan')
// }, 1000)

// console.log(3)

// setTimeout(function () {
//   console.log('Salam')
// }, 1000)

// var intervalId = setInterval(function () {
//   console.log(Date.now())
// }, 1000)

// console.log(intervalId)

// setTimeout(function () {
//   clearInterval(intervalId)
// }, 5000)

// function func() {

// }

// func()

// function func () {
//   var a

//   //////// Another code
//   console.log(a)
//   a = 20
//   console.log(a)
// }

// var b = 50

// function func () {
//   var a = 10
//   console.log(a)

//   function func2 () {
//     var a = 50
//     c = 90
//     window.d = 80
//     console.log(a)
//   }

//   func2()
// }

// func()

// console.log(c)
// console.log(d)

// func2()

// console.log(a)

// function factorial (n) {
//   return n ? n * factorial(n - 1) : 1
// }

// function factorial (n) {
//   var result = n

//   for (var i = n - 1; i > 1; i--) {
//     result *= i
//   }

//   return result
// }

// console.log(factorial(5))

// n! = n * (n-1)!

// 5! = 5 * 4!
// 4! = 4 * 3!
// 3! = 3 * 2!
// 2! = 2 * 1!
// 1! = 1

// 5! = 5 * 4 * 3 * 2 * 1
// 4! = 4 * 3 * 2 * 1
// 3! = 3 * 2 * 1
// 2! = 2 * 1
// 1! = 1

// console.log(factorial(5))

// function handleData (data) {
//   console.log(data.name)
// }

// console.log(1)
// fetch('https://jsonplaceholder.typicode.com/users/1')
//   .then(response => response.json())
//   .then(handleData)

// console.log(2)

// var sum = function (a, b) {
//   return a + b
// }

// // function noop () {}

// function calc (a, b, cb = function () {}) {
//   return cb(a, b)
//   // if (typeof cb === 'function') {
//   //   return cb(a, b)
//   // }
// }

// var result = calc(3, 8)

// console.log(result)

// var result2 = calc(3, 4, function (a, b) {
//   return a ** b
// })

// console.log(result2)

// var result = calc(2, 5, sum)
// var result = calc(2, 5, function (a, b) {
//   return a * b
// })

// console.log(result)

// function sum (a = 0, b = 0, c = 0, d = 0, e = 10) {
//   console.log(arguments)
//   var result = 0

//   for (var number of arguments) {
//     result += number
//   }

//   return result

//   // c = c ?? 0
//   // console.log(a, b, c)

//   var result = a + b + c + d + e

//   return result
// }

// console.log(sum(5, 2, 8, 12))
// console.log(sum(5, 2, 8))
// console.log(sum(5, 2))
// console.log(sum(5))
// console.log(sum())

// function func () {
//   return 'Sarineh'
// }

// var myName = func()

// console.log(myName)

// function func () {
//   console.log('ali')
// }

// var result = func()

// console.log(result)

// function sum (a, b) {
//   var result = a + b
//   return result
//   console.log('Salam')

//   return 'Ali'
// }

// var result = sum(2, 3)

// var result2 = result ** 2

// console.log(result2)

// function sayHello () {
//   console.log('Hello')
// }

// sayHello()

// var person = {
//   name: 'Ali',
//   family: 'Mousavi',
//   age: 34
// }

// console.log('name' in person)
// console.log('firstname' in person)

// for (var key in person) {
//   console.log(key, ' => ', person[key])
// }

// function* gen () {
//   yield 'a'
//   yield 'b'
//   yield 'c'
//   yield 'd'
// }

// var it = gen()

// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// for (var i of it) {
//   console.log(i)
// }

// function sayHello () {
//   console.log('hello')
// }

// sayHello()

// for (var char of 'salam') {
//   console.log(char)
// }

// var friends = [
//   { name: 'Ali', gender: 'male' },
//   { name: 'Amene', gender: 'female' },
//   { name: 'Alireza', gender: 'female' },
//   { name: 'Anoosha', gender: 'female' },
//   { name: 'Bahar', gender: 'female' },
//   { name: 'Vahid', gender: 'male' }
// ]

// for (var freind of friends) {
//   console.log(freind.name)
// }

// var i = 0

// do {
//   console.log('salam', i)
//   i++
// } while (i > 5)

// var i = 0

// while (i < 5) {
//   console.log('salam', i)
//   i++
// }

// var friends = [
//   { name: 'Ali', gender: 'male' },
//   { name: 'Amene', gender: 'female' },
//   { name: 'Alireza', gender: 'female' },
//   { name: 'Anoosha', gender: 'female' },
//   { name: 'Bahar', gender: 'female' },
//   { name: 'Vahid', gender: 'male' }
// ]

// for (var i = 0; i < friends.length; i++) {
//   if (friends[i].gender === 'male') {
//     continue
//   }

//   console.log(friends[i].name)
// }

// var i = 0

// for (;;) {
//   if (i >= 5) {
//     break
//   }

//   console.log('salam', i)
//   i++
// }

// var number = 11

// number % 2 ? console.log('odd') : console.log('even')

// console.log(number % 2 ? 'Odd' : 'Even')

// var number = 10

// switch (number % 2) {
//   case 1:
//     console.log('Odd')
//     break

//   case 0:
//     console.log('Even')
//     break
// }

// var char = 'D'

// switch (char) {
//   case 'a':
//   case 'A':
//     console.log('char is A')
//     break

//   case 'b':
//   case 'B':
//     console.log('char is B')
//     break

//   case 'c':
//   case 'C':
//     console.log('char is C')
//     break

//   default:
//     console.log('Char is not A, B, C')
// }

// var number = 9

// if (!(number % 2)) {
//   console.log('Even')
// } else {
//   console.log('Odd')
// }

// var a = 0

// if (a > 0) {
//   console.log('a is positive')
// } else if (a < 0) {
//   console.log('a is negative')
// } else {
//   console.log('a is zero')
// }

// if (a === 12) {
//   console.log('a is 12')
// }

// var person = {
//   name: 'ali',
//   family: {
//     father: {
//       name: 'Mohammad'
//     }
//   }
// }

// console.log(person.family?.father?.name)

// console.log(person.family && person.family.father && person.family.father.name)

// console.log(null ?? true)

// var person = {
//   firstName: 'Ali'
//   lastName: 'Mousavi'
//   fullName: 'Ali Mousavi'
// }

// console.log(person.fullName || person.lastName || person.firstName || null)

// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// 0 & 0 => 0
// 0 & 1 => 0
// 1 & 0 => 0
// 1 & 1 => 1

// 0 | 0 => 0
// 0 | 1 => 1
// 1 | 0 => 1
// 1 | 1 => 1

// var obj1 = { name: 'Ali' }

// var obj2 = { name: 'Ali' }

// console.log(obj1 === obj2)
// console.log(obj1.name === obj2.name)

// var x = 1

// x = x + 1
// x += 1

// x = x - -1
// x -= -1

// console.log(x)

// var str = 'b' + 'a' + +'a' + 'a'
// console.log(str)

// var x = 1

// x++
// x = x + 1
// x += 1

// x = x - -1
// x -= -1

// console.log(x)

// console.log(++x)

// ++x

// var y = ++x

// console.log(x, y)

// #12AB56
// var arr = [1, 2, 3]

// var arr2 = arr

// arr2[0] = 'ali'

// console.log(arr)

// console.log(typeof arr)

// var arr = [1, true, 'salam', {}, [], () => {}]

// arr[0] = 'ali'

// console.log(arr[2])

// arr[2][0] = 'q'

// console.log(arr)

// var friends = ['Ali', 'Eli', 'Qoli']

// console.log(friends)

// console.log(friends.length)

// var num = 10

// num == 11

// var myName = 'Ali'
// var myFamily = 'Mousavi'

// var person = {
//   firstName: 'Ali',
//   lastName: 'Mousavi',
//   fullName: 'Ali Mousavi',
//   age: 34,
//   isMarried: true,
//   gender: 'male',
//   family: {
//     father: {
//       name: 'Mohammad'
//     },
//     motherName: 'Hajar',
//     sisters: ['Fateme', 'Zahra', 'Zeinab'],
//     brothers: ['Mostafa'],
//     children: ['Mahsa', 'Mohammad'],
//     wife: 'Elham'
//   }
// }

// var person2 = person

// console.log(person2 === person)

// person2.firstName = 'Hasan'

// console.log(person.firstName)
// console.log(person2.firstName)

// console.log(person2 === person)

// console.log(person.family.father.name)

// var propertyName = 'fullName'

// console.log(person[propertyName])

// var myName = 'Ali'

// console.log(typeof myName)

// myName = 34

// console.log(typeof myName)

// var نام = 'علی'

// var myName = 'Ali',
//   MyName = 'Hasan'

// console.error('Error')

// console.table({
//   name: 'Ali',
//   family: 'Mousavi'
// })
/*
console.log('External JS FILE')

console.log('Code')
*/
