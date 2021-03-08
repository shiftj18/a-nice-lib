import minus from '../src/minus'


test('minus: 10 - 4 - 3 - 2 = 1', () => {
  expect(minus(10, 4, 3, 2)).toBe(1);
})

test('minus: ', () => {
  expect(minus()).toBe(0);
})
