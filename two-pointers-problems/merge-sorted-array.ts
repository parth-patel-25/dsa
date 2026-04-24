function mergeSortedArray(
  nums1: Array<number>,
  nums2: Array<number>,
  m: number,
  n: number,
) {
  return nums1
    .splice(0, m)
    .concat(nums2)
    .sort((a, b) => b - a);
}

console.log(mergeSortedArray([10, 20, 30, 40, 50], [1, 2], 4, 2));
