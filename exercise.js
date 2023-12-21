////////////// 9

function sum () {
  var result = 0

  for (var number of arguments) {
    result += number
  }

  return result
}

function subtraction (result) {
  for (var i = 1; i < arguments.length; i++) {
    result -= arguments[i]
  }

  return result
}

function multiply () {
  var result = 1

  for (var number of arguments) {
    result *= number
  }

  return result
}

function division (result) {
  for (var i = 1; i < arguments.length; i++) {
    result /= arguments[i]
  }

  return result
}

function operation (operator) {
  var numbers = []

  for (var i = 1; i < arguments.length; i++) {
    numbers[i - 1] = arguments[i]
  }

  switch (operator) {
    case 'sum':
      return sum.apply(null, numbers)

    case 'sub':
      return subtraction.apply(null, numbers)

    case 'mul':
      return multiply.apply(null, numbers)

    case 'div':
      return division.apply(null, numbers)

    default:
      console.log('Operator not support')
  }
}

////////////// 11

function callbackOperation (operator = function () {}) {
  var numbers = []

  for (var i = 1; i < arguments.length; i++) {
    numbers[i - 1] = arguments[i]
  }

  return operator.apply(null, numbers)
}

// console.log(callbackOperation(sum, 2, 5, 8))
// console.log(callbackOperation(subtraction, 2, 5, 8))
// console.log(callbackOperation(multiply, 2, 5, 8))
// console.log(callbackOperation(division, 2, 5, 8))
// console.log(callbackOperation())

// console.log(operation('sum', 2, 5, 8))
// console.log(operation('sub', 2, 5, 8))
// console.log(operation('mul', 2, 5, 8))
// console.log(operation('div', 2, 5, 8))

// console.log(division(18``, 2, 3))
// console.log(multiply(10, 2, 3))
// console.log(subtraction(10, 2, 3))
// console.log(sum(2, 5, 4, 6))

/////////////////////// 12

// var number = 13

// if (number % 2) {
//   console.log('Odd')
// } else {
//   console.log('Even')
// }

// switch (number % 2) {
//   case 1:
//     console.log('Odd')
//     break

//   case 0:
//     console.log('Even')
//     break
// }

// console.log(number % 2 ? 'Odd' : 'Even')

///////////////// 13

////////////////////////

var ali = {
  firstName: 'Ali',
  lastName: 'Mousavi',
  age: 34,
  family: {},
  friends: ['Ali', 'Eli', 'Qoli']
}

/////// 7

function printFriends (obj) {
  for (var friend of obj.friends) {
    console.log(friend)
  }
}

// printFriends(ali)

///////// 8

function getFullName (obj) {
  console.log(obj.firstName + ' ' + obj.lastName)
}

// getFullName(ali)
////////  1

// var name = 'Ali'
// var family = 'Mousavi'
// var age = 34
// var city = 'Shiraz'

// console.log(
//   'My Name is ' +
//     name +
//     ' ' +
//     family +
//     '\n\t\t=> I have ' +
//     age +
//     " years old\n\t\t=>I'm living in " +
//     city
// )
