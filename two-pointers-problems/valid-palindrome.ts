const validPalindrome = (s: string) => {
  let pointerOne = 0;
  let pointerTwo = s.length - 1;
  while (pointerOne < pointerTwo) {
    if (s[pointerOne] === s[pointerTwo]) {
      pointerOne++;
      pointerTwo--;
    }
  }
};

validPalindrome("Parth Patel");
