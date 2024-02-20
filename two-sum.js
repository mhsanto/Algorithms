console.log("Two sum algorithm...");
const twoSum = [5, 6, 6, 1, 3, 55];
//time complexity O(n*2)
const twoSumAlgo = (param, target) => {
  let arrLength = param.length - 1;

  for (let i = 0; i < arrLength; i++) {
    for (let j = i + 1; j < arrLength; j++) {
      if (param[i] + param[j] === target) {
        return [param[i], param[j]];
      }
    }
  }
  return -1;
};
console.log(twoSumAlgo(twoSum, 7));

// const twoSum = [5, 6, 6, 1, 3, 55];
const twoSumAlgoHash = (param, target) => {
  let arrLength = param.length - 1;
  const foundValue = {};

  for (let i = 0; i < arrLength; i++) {
    const compliment = target - param[i]; //6-> 5
    if (compliment in foundValue) {
    
      return [foundValue[compliment], i];//[foundValue[5] = 0  , index=1]
    }

    foundValue[param[i]] = i;//foundValue={5:1}
  }
  return foundValue;
};
console.log(twoSumAlgoHash(twoSum, 11));
