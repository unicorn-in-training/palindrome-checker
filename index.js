var isThisPalindrome = function (str) {
// Check if `str` is a palindrome.
// Ignore casing, spaces and punctuation.

var lwrStr = str.toLowerCase(); // Convert string

to lowercase

var cleanStr = lwrStr.replace(/[^a-z]/ig, &quot;&quot;); //

Remove spaces, special characters, and numbers

var strLength = cleanStr.length; // Get string

length

var checksAmt = Math.floor(strLength/2); // Amount
of checks to perform within loop based on string length
var isPalindrome = false; // Boolean to store

whether entry is a palindrome or not

if (strLength == 0) { // Assumes a palindrome must

contain 1 or more characters

isPalindrome = false;
}
else if (strLength==1) {
isPalindrome = true;
}
else {
var i = 1; // Loop counter
while (i &lt;= checksAmt){
if (cleanStr.substring(i-1,i) ==
cleanStr.substring(strLength-i, strLength+1-i)) { // Test
first and last letter for a match, then 2nd and 2nd to last,
etc. until entire word is tested

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
return(isPalindrome);
};
isThisPalindrome(&#39;A man, a plan, a canal, panama.&#39;);
isThisPalindrome(&#39;Foo.&#39;);
isThisPalindrome(&#39;Onomatopoeia.&#39;);
isThisPalindrome(&#39;Never odd or even.&#39;);