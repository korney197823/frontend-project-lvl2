import fs from 'fs';
import path from 'path';


const getParseFile = (pathToFile) => {
  const format = path.extname(pathToFile);
  let result = null
  if (format === '.json') {
    result = JSON.parse(fs.readFileSync(pathToFile));
  }
  return result;
};

export default getParseFile;
