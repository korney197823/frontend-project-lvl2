import getDiff from '../src/engine.js';

const right1 = '{"host":"hexlet.io",'
    + '"name":"korney",'
    + '"+ subname":"den",'
    + '"+ verbose":true,'
    + '"- proxy":"123.234.53.22",'
    + '"- follow":false,'
    + '"- cash":"128",'
    + '"+ cash":"129",'
    + '"- timeout":"50",'
    + '"+ timeout":"20"}';

test('genDiff', () => {
  expect(getDiff('_fixtures_/before.json', '_fixtures_/after.json')).toBe(right1);
  expect(getDiff('_fixtures_/before.json', '_fixtures_/after.yml')).toBe(right1);
});
