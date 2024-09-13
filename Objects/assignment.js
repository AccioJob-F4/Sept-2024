const divide = (arr, n) => {
  const result = [];
  let currentSubArray = [];
  let currentSum = 0;

  for (const num of arr) {
    if (currentSum + num > n) {
      result.push(currentSubArray);
      currentSubArray = [];
      currentSum = 0;
    }
    currentSubArray.push(num);
    currentSum += num;
  }

  if (currentSubArray.length > 0) {
    result.push(currentSubArray);
  }

  return result;
};

arr = [1, 2, 3, 4, 1, 0, 2, 2];
n = 5;

// currSum = 0 + 1 = 1 + 2 = 3 | 0 + 3 = 3 | 0 + 4 = 4 + 1 = 5 + 0 = 5 | 0 + 2 = 2 + 2 = 4
// num = 1, 2, 3, 4, 1, 0, 2, 2
// currSubArray = [1, 2] | [3] | [4, 1, 0] | [2, 2]
// result = [[1, 2], [3], [4, 1, 0], [2, 2]]
