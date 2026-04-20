function validPalindromTwo(s: string) {
  let left = 0;
  let right = s.length - 1;
  const checkPalindrome = (left: number, right: number) => {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };

  while (left < right) {
    if (s[left] < s[right]) {
      return (
        checkPalindrome(left + 1, right) || checkPalindrome(left, right - 1)
      );
    }
    left++;
    right--;
  }
  return true;
}

console.log(validPalindromTwo("aca"));
