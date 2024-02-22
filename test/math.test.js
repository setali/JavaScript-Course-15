const { sum, sub } = require('./math')

beforeAll(() => {
  console.log('Before All')
})

afterAll(() => {
  console.log('After all')
})

beforeEach(() => {
  console.log('Before Each')
})

afterEach(() => {
  console.log('After each')
})

test('Sum test', () => {
  expect(sum(1, 2)).toBe(3)
  expect(sum(1, '2')).toBe(3)
  expect(sum('10', '2')).toBe(12)
  expect(sum('Ali', '2')).toBeNaN()
})

test('sub test', () => {
  expect(sub(10, 5)).toBe(5)
  expect(sub('10', 5)).toBe(5)
  expect(sub('Ali', 5)).toBeNaN()
})

// if (sum(1, 2) !== 3) {
//   throw new Error('Math test failed')
// }

// if (sum(1, '2') !== 3) {
//   throw new Error('Math test failed')
// }

// if (sum('1', '2') !== 3) {
//   throw new Error('Math test failed')
// }

// if (!Number.isNaN(sum('Ali', '2'))) {
//   throw new Error('Math test failed')
// }
