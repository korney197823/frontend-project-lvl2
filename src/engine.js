import _ from 'lodash';
import getParseFile from './parsers';
import formatData from './formatting';

const getDiff = (fileOne, fileTwo) => {
  const before = getParseFile(fileOne);
  const after = getParseFile(fileTwo);
  const beforeArr = Object.entries(before);
  const afterArr = Object.entries(after);
  const status = {
    unchange: 'unchenged',
    delete: 'deleted',
    add: 'added',
    change: 'changed',
  };

  function addStatus(arr, changeStatus) {
    let result = [];
    if (changeStatus === 'deleted') {
      return arr.map((item) => {
        result = [...item, { status: 'deleted' }];
        return result;
      });
    }
    if (changeStatus === 'added') {
      return arr.map((item) => {
        result = [...item, { status: 'added' }];
        return result;
      });
    }
    if (changeStatus === 'unchenged') {
      return arr.map((item) => {
        result = [...item, { status: 'unchenged' }];
        return result;
      });
    }
    if (changeStatus === 'changed') {
      return arr.map((item) => {
        result = [...item, { status: 'changed' }];
        return result;
      });
    }
    return result;
  }

  const intersection = _.intersectionWith(beforeArr, afterArr, _.isEqual);

  const deletedElements = _.differenceWith(beforeArr,
    afterArr, (itemOne, itemTwo) => itemOne[0] === itemTwo[0]);

  const addedElements = _.differenceWith(afterArr,
    beforeArr, (itemOne, itemTwo) => itemOne[0] === itemTwo[0]);

  const changeBefore = _.intersectionWith(beforeArr,
    afterArr, (itemOne, itemTwo) => itemOne[0] === itemTwo[0] && itemOne[1] !== itemTwo[1]);

  const changeAfter = _.intersectionWith(afterArr,
    beforeArr,
    (itemOne, itemTwo) => itemOne[0] === itemTwo[0] && itemOne[1] !== itemTwo[1]);

  // eslint-disable-next-line array-callback-return,consistent-return
  const mergeChangedArr = changeBefore.map((itemBefore) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const itemAfter of changeAfter) {
      if (itemBefore[0] === itemAfter[0]) {
        return [...itemBefore, itemAfter[1]];
      }
    }
  });

  const result = [...addStatus(intersection, status.unchange),
    ...addStatus(deletedElements, status.delete),
    ...addStatus(addedElements, status.add),
    ...addStatus(mergeChangedArr, status.change),
  ];

  return formatData(result);
};

export default getDiff;
