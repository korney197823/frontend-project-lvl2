const engine = (num) => {
  const result = num / 2;
  return result;
};

test('engine', () => {
  expect(engine(6)).toBe(3);
});
