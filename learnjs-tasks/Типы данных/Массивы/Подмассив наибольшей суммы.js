const getMaxSubSum = (arr) => {
    let maxSum = 0
    for (let i = 0; i < arr.length; i++) {
      let sumFixedStart = 0
      for (let j = i; j < arr.length; j++) {
        sumFixedStart += arr[j]
        maxSum = Math.max(maxSum, sumFixedStart)
      }
    }
    return maxSum;
}


getMaxSubSum([-1, 2, 3, -9]) == 5 // (сумма выделенных элементов)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 // (берём все)