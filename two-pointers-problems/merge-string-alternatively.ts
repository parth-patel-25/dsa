function mergeStringAlternatively(word1: string, word2: string) {
  let counter = 0;
  let newString = "";

  const findBigNumber =
    word1.length < word2.length ? word2.length - 1 : word1.length - 1;

  while (counter <= findBigNumber) {
    if (counter < word1.length) {
      newString += word1[counter];
    }
    if (counter < word2.length) {
      newString += word2[counter];
    }
    counter++;
  }
  return newString;
}

console.log(mergeStringAlternatively("ab", "abbxxc"));

// optmize logic
function mergeStringAlternativelyOptimize(
  word1: string,
  word2: string,
): string {
  let res = "";
  for (let i = 0; i < Math.max(word1.length, word2.length); i++)
    res += (word1[i] ?? "") + (word2[i] ?? "");
  return res;
}
