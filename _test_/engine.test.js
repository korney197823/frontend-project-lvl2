import getDiff from '../src/engine.js';

const right1 = `{
    host: hexlet.io
  - proxy: 123.234.53.22
  - follow: false
  + subname: den
  + verbose: true
  - timeout: 50
  + timeout: 20
  - cash: 128
  + cash: 129
}`;

console.log(getDiff('_fixtures_/before.json', '_fixtures_/after.json'));

test('genDiff', () => {
  expect(getDiff('_fixtures_/before.json', '_fixtures_/after.json')).toBe(right1);
  expect(getDiff('_fixtures_/before.yml', '_fixtures_/after.yml')).toBe(right1);
});
