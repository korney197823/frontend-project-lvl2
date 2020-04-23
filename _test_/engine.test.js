import getDiff from '../src/engine.js';

const right1 = '{\n'
    + '\t  host: hexlet.io\n'
    + '\t  name: korney\n'
    + '\t+ subname: den\n'
    + '\t+ verbose: true\n'
    + '\t- proxy: 123.234.53.22\n'
    + '\t- follow: false\n'
    + '\t- cash: 128\n'
    + '\t+ cash: 129\n'
    + '\t- timeout: 50\n'
    + '\t+ timeout: 20\n'
    + '}';

console.log(right1);

test('genDiff', () => {
  expect(getDiff('_fixtures_/before.json', '_fixtures_/after.json')).toBe(right1);
  expect(getDiff('_fixtures_/before.json', '_fixtures_/after.yml')).toBe(right1);
});
