import getParseFile from '../src/parsers';

const right = {
  timeout: '20',
  subname: 'den',
  cash: '129',
  verbose: true,
  host: 'hexlet.io',
};


test('parsers', () => {
  expect(getParseFile('_fixtures_/after.json')).toEqual(right);
  expect(getParseFile('_fixtures_/after.yml')).toEqual(right);
  expect(getParseFile('_fixtures_/after.ini')).toEqual(right);
});
