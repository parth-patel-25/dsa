enum Method {
  One = 1,
  Two = 2,
}

function twoSum(nums: Array<number>, target: number, method: number) {
  // Method:1 Solving the problem using the for-loop
  if (Method.One === method) {
    const indexes: Array<number> = [];
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        sum += nums[i] + nums[j];
        if (sum === target) {
          indexes.push(nums[i], nums[j]);
          return indexes;
        }
      }
    }

    return nums;
  } else {
    // Method:2 Solving the problem using the while loop with two pointers
    let pointerOne = 0;
    let pointerTwo = 1;

    const indexes: Array<number> = [];

    while (pointerOne < nums.length) {
      let sum = 0;
      sum += nums[pointerOne] + nums[pointerTwo];
      indexes.push(nums[pointerOne], nums[pointerTwo]);
      pointerTwo++;
      if (pointerTwo === nums.length - 1) {
        pointerOne++;
        pointerTwo = pointerOne + 1;
      }
      if (sum === target) break;
    }
    return indexes;
  }
}

console.log(twoSum([1, 2, 3, 4], 3, 2));
