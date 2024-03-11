// Anonymous Function  

// var x = function ()
// {
//     return 12;
// }
//Expression Function and Anonymous  same
// IIFE (Immediately Invoked Function Expression)

// (function ()
// {
//     console.log("Hello Everyone");
// }())

// var num1 = 10;
// (function (n1)
// {
//     console.log("Hello Everyone",n1*n1);
// }(num1))

// 2. Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run. 
// layor
// madam    madam
// var str = "mAdaM";

// var ans = function(s1){
//     var rev = s1.split('').reverse().join('').toLocaleLowerCase();
//     if(rev===s1){
//         console.log("Pelindrome");
//     }
//     else{
//         console.log("Not Pelindrome");
//     }
// };
// ans(str.toLocaleLowerCase());

// IIFE 
// 4. Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

// var str = "webmaster";
// (function(s1){
//     console.log(s1.split('').sort().join(''));
// }(str));
