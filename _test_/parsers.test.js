import getParseFile from '../src/parsers';

const right = {
  name: 'korney',
  timeout: '20',
  subname: 'den',
  cash: '129',
  verbose: true,
  host: 'hexlet.io',
};

test('parsers', () => {
  expect(getParseFile('_fixtures_/after.json')).toEqual(right);
  // expect(getParseFile('_fixtures_/after.yml')).toBe(right);
});
