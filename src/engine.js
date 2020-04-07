import _ from 'lodash';
import fs from 'fs';

const getDiff = (fileOne, fileTwo) => {
  const before = JSON.parse(fs.readFileSync(fileOne));
  const after = JSON.parse(fs.readFileSync(fileTwo));
  const keysOne = Object.entries(before);
  const keysTwo = Object.entries(after);

  const getEqualElement = (arr1, arr2) => {
    const equalElements = _.intersectionWith(arr1, arr2, _.isEqual);

    return equalElements;
  };

  const getAddedElement = (arr1, arr2) => {
    const addedElements = _.differenceWith(arr2, arr1, (key2, key1) => key1[0] === key2[0]);

    const formatedElement = addedElements.map((elem) => [`+ ${elem[0]}`, elem[1]]);

    return formatedElement;
  };

  const getDeletedElement = (arr1, arr2) => {
    const deletedElements = _.differenceWith(arr1, arr2, (key1, key2) => key1[0] === key2[0]);

    const formatedElement = deletedElements.map((elem) => [`- ${elem[0]}`, elem[1]]);

    return formatedElement;
  };

  const getChangedElement = (arr1, arr2) => {
    const chBefore = _.intersectionWith(arr1, arr2, (i1, i2) => i1[0] === i2[0] && i1[1] !== i2[1]);
    const chAfter = _.intersectionWith(arr2, arr1, (i1, i2) => i1[0] === i2[0] && i1[1] !== i2[1]);

    const formatedElementBefore = chBefore.map((elem) => [`- ${elem[0]}`, elem[1]]);
    const formatedElementAfter = chAfter.map((elem) => [`+ ${elem[0]}`, elem[1]]);

    const concatCnadgedElements = [...formatedElementBefore, ...formatedElementAfter];

    const sortedArr = concatCnadgedElements.sort((a, b) => {
      if (a[0].substring(2) < b[0].substring(2)) {
        return -1;
      }
      if (a[0].substring(2) > b[0].substring(2)) {
        return 1;
      }
      return 0;
    });

    return sortedArr;
  };

  const a = getEqualElement(keysOne, keysTwo);
  const b = getAddedElement(keysOne, keysTwo);
  const c = getDeletedElement(keysOne, keysTwo);
  const d = getChangedElement(keysOne, keysTwo);

  return JSON.stringify(Object.fromEntries([...a, ...b, ...c, ...d]));
};

export default getDiff;
