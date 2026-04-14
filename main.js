var isValidPalindrome = function (text) {
    var firstPointer = 0;
    var lastPointer = text.length - 1;
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
