enum Method {
  One = 1,
  Two = 2,
}

function twoSum(nums: Array<number>, target: number, method: number) {
  // base condition if element is only one then return the nums as empty
  if (nums.length <= 1) {
    return [];
  }
  if (Method.One === method) {
    // Method:1 Solving the problem using the for-loop
    const indexes: Array<number> = [];
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        sum = nums[i] + nums[j];
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

    let sum = 0;

    while (pointerOne < nums.length - 1) {
      sum = nums[pointerOne] + nums[pointerTwo];

      if (sum === target) {
        indexes.push(nums[pointerOne], nums[pointerTwo]);
        return indexes;
      }
      if (pointerTwo >= nums.length) {
        pointerOne++;
        pointerTwo = pointerOne + 1;
      }
      pointerTwo++;
    }
    return indexes;
  }
}

console.log(twoSum([2, 7, 11, 15], 9, 2));
// twoSum([2, 7, 11, 15], 9, 2)     // Expected: [2, 7] or indexes
// twoSum([3, 2, 4], 6, 2)          // Expected: [2, 4]
// twoSum([3, 3], 6, 2)             // Expected: [3, 3]

// twoSum([], 5, 1); // Expected: []
// twoSum([1], 1, 1); // Expected: []
// twoSum([1, 2], 4, 1); // Expected: []

// twoSum([-1, -2, -3, -4], -6, 2)  // Expected: [-2, -4]
// twoSum([-3, 4, 3, 90], 0, 2)     // Expected: [-3, 3]
