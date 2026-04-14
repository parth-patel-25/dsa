const isValidPalindrome = (text: string) => {
  let firstPointer = 0;
  let lastPointer = text.length - 1;

  while (firstPointer < lastPointer) {
    if (text[firstPointer] !== text[lastPointer]) {
      return false;
    }
    firstPointer += 1;
    lastPointer -= 1;
  }
  return true;
};

console.info(isValidPalindrome("ABA"));
