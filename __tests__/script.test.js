const kv = require('../kvadriranje');

test('2 na kvadrat je 4', () => {
  expect(kv(2)).toBe(4);
});

test('2 na kvadrat nije 5', () => {
  expect(kv(2)).not.toBe(5);
});
