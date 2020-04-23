const formatData = (list) => {
  let result = '';

  const resultArr = list.map((item) => {
    if (item[item.length - 1].status === 'deleted') {
      return `  - ${item[0]}: ${item[1]}`;
    }
    if (item[item.length - 1].status === 'unchenged') {
      return `  ${item[0]}: ${item[1]}`;
    }
    if (item[item.length - 1].status === 'added') {
      return `  + ${item[0]}: ${item[1]}`;
    }
    if (item[item.length - 1].status === 'changed') {
      return `  - ${item[0]}: ${item[1]}\n  + ${item[0]}: ${item[2]}`;
    }
  });

  result = `{
  ${resultArr.join('\n')}
}`;

  return result;
};

export default formatData;
