const reverseString = (s: string, method: number) => {
  // reverse string using the reverse method from sptlling the string
  if (method === 1) {
    console.time();
    console.log(s.split("").reverse().join(""));
    console.timeEnd();
  } else if (method === 2) {
    // reverse string using the iterating for loop from length of a string
    console.time();
    let reverseString = "";
    for (let i = s.length - 1; i >= 0; i--) {
      reverseString += s[i];
    }
    console.log(reverseString);
    console.timeEnd();
  } else if (method === 3) {
    console.time();
    let i = 0;
    let j = s.length - 1;
    let stringArr = s.split("");
    while (i <= j) {
      let temp = stringArr[i];
      stringArr[i] = stringArr[j];
      stringArr[j] = temp;

      i++;
      j--;
    }
    console.log(stringArr.join(""));
    console.timeEnd();
  }
};

reverseString(
  "Parth Patelsoeidjxgofjxckljbkldfjglkjdflkjglkdjglkjflkgjlkdjlgjdljgldjlgdjflj Parth PatelsoeidjxgofjxckljbkldfjglkjdflkjglkdjglkjflkgjlkdjlgjdljgldjlgdjfljParth PatelsoeidjxgofjxckljbkldfjglkjdflkjglkdjglkjflkgjlkdjlgjdljgldjlgdjfljParth PatelsoeidjxgofjxckljbkldfjglkjdflkjglkdjglkjflkgjlkdjlgjdljgldjlgdjfljParth PatelsoeidjxgofjxckljbkldfjglkjdflkjglkdjglkjflkgjlkdjlgjdljgldjlgdjfljParth PatelsoeidjxgofjxckljbkldfjglkjdflkjglkdjglkjflkgjlkdjlgjdljgldjlgdjfljParth Patelsoeidjxgofjxckljbkldfjglkjdflkjglkdjglkjflkgjlkdjlgjdljgldjlgdjflj",
  1,
);
reverseString(
  "Parth Patelsoeidjxgofjxckljbkldfjglkjdflkjglkdjglkjflkgjlkdjlgjdljgldjlgdjflj Parth PatelsoeidjxgofjxckljbkldfjglkjdflkjglkdjglkjflkgjlkdjlgjdljgldjlgdjfljParth PatelsoeidjxgofjxckljbkldfjglkjdflkjglkdjglkjflkgjlkdjlgjdljgldjlgdjfljParth PatelsoeidjxgofjxckljbkldfjglkjdflkjglkdjglkjflkgjlkdjlgjdljgldjlgdjfljParth PatelsoeidjxgofjxckljbkldfjglkjdflkjglkdjglkjflkgjlkdjlgjdljgldjlgdjfljParth PatelsoeidjxgofjxckljbkldfjglkjdflkjglkdjglkjflkgjlkdjlgjdljgldjlgdjfljParth Patelsoeidjxgofjxckljbkldfjglkjdflkjglkdjglkjflkgjlkdjlgjdljgldjlgdjflj",
  2,
);
reverseString(
  "Parth Patelsoeidjxgofjxckljbkldfjglkjdflkjglkdjglkjflkgjlkdjlgjdljgldjlgdjflj Parth PatelsoeidjxgofjxckljbkldfjglkjdflkjglkdjglkjflkgjlkdjlgjdljgldjlgdjfljParth PatelsoeidjxgofjxckljbkldfjglkjdflkjglkdjglkjflkgjlkdjlgjdljgldjlgdjfljParth PatelsoeidjxgofjxckljbkldfjglkjdflkjglkdjglkjflkgjlkdjlgjdljgldjlgdjfljParth PatelsoeidjxgofjxckljbkldfjglkjdflkjglkdjglkjflkgjlkdjlgjdljgldjlgdjfljParth PatelsoeidjxgofjxckljbkldfjglkjdflkjglkdjglkjflkgjlkdjlgjdljgldjlgdjfljParth Patelsoeidjxgofjxckljbkldfjglkjdflkjglkdjglkjflkgjlkdjlgjdljgldjlgdjflj",
  3,
);
