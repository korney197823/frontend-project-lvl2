import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import ini from 'ini';

const getParseFile = (pathToFile) => {
  const format = path.extname(pathToFile);
  let result = null;
  if (format === '.json') {
    result = JSON.parse(fs.readFileSync(pathToFile));
  }
  if (format === '.yml') {
    result = yaml.safeLoad(fs.readFileSync(pathToFile, 'utf8'));
  }
  if (format === '.ini') {
    result = ini.parse(fs.readFileSync(pathToFile, 'utf8'));
  }
  return result;
};

export default getParseFile;
