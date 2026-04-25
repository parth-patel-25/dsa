enum Method {
  One = 1,
  Two = 2,
}

function removeDuplicateFromSortedArray(nums: Array<number>, method: number) {
  // method 1:- remove elements from the array is to convert the array into set and re-convert into array
  if (Method.One === method) return [...new Set(nums)];

  // method 2:- contain a new array and check if the array present in the newArray or not

  const newArray: Array<number> = [];

  for (const element of nums) {
    if (!newArray.includes(element)) {
      newArray.push(element);
    }
  }

  return newArray;
}

console.log(removeDuplicateFromSortedArray([1, 1, 2, 3, 4], 1));
