var isThisPalindrome = function (str) {
// Check if `str` is a palindrome.
// Ignore casing, spaces and punctuation.

    var lwrStr = str.toLowerCase();
    var cleanStr = lwrStr.replace(/[^a-z]/ig, '');//Remove spaces, special characters, and numbers
    var strLength = cleanStr.length;
    var checksAmt = Math.floor(strLength / 2);
    var isPalindrome = false;
    if (strLength == 0) { // Assumes a palindrome must contain 1 or more characters
        isPalindrome = false;
    }
    else if (strLength == 1) {
        isPalindrome = true;
    }
    else {
        var i = 1; // Loop counter
        while (i &lt;= checksAmt) {
            if (cleanStr.substring(i - 1, i) == cleanStr.substring(strLength - i, strLength + 1 - i)) { // Test first and last letter for a match, then 2nd and 2nd to last, etc. until entire word is tested
                isPalindrome = true;
                i++;
                continue;
            }
            else {

                isPalindrome = false;
                break;
            }
        }
    }
    return (isPalindrome);
};
isThisPalindrome('A man, a plan, a canal, panama.');
isThisPalindrome('Foo.');
isThisPalindrome('Onomatopoeia.');
isThisPalindrome('Neveroddoreven.');
