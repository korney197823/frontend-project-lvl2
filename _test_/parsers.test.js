import getParseFile from '../src/parsers';

const right = {
  name: 'korney',
  timeout: '20',
  subname: 'den',
  cash: '129',
  verbose: true,
  host: 'hexlet.io',
};

console.log(getParseFile('_fixtures_/after.yml'));

test('parsers', () => {
  expect(getParseFile('_fixtures_/after.json')).toEqual(right);
  expect(getParseFile('_fixtures_/after.yml')).toEqual(right);
});
