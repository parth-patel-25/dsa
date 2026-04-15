const validPalindrome = (s: string) => {
  let pointerOne = 0;
  let pointerTwo = s.length - 1;
  while (pointerOne <= pointerTwo) {
    if (s[pointerOne] !== s[pointerTwo]) {
      console.log(false);
      return;
    }
    pointerOne++;
    pointerTwo--;
  }
  console.log(true);
};

validPalindrome("ABBA");
