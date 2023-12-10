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
