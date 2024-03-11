// According to Wikipedia a happy number is defined by the following process :

// "Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or

// it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
// Write a JavaScript program to find and print the first 5 happy numbers.

// 1  = 1
//2 = 4

//10 = 100 = 1




var i=0;
var n1 = 10;
while(i<5)
{
    var square = n1*n1;//100
    var temp = square;
    var sum = 0;
while(temp!=0)
{
        rem = temp%10;//0
        sum+=rem;
        temp = Math.floor(temp/10);
}
if(sum==1)
{
    console.log(n1);
    i++;
}
n1++;
console.log(i);
if(i==5)
{
    break;
}
}

/*

while(i!=5)
{

}
*/
