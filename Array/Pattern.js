// *
// * *
// * * * 
// * * * *
// * * * * *

var n1 = 4;
for (let i = 0; i < n1; i++) {
    var s = "";
    for (let j = 0; j <= i; j++) {
        s+="* ";
    }
    console.log(s);
}

/*
1) 
1
1 2
1 2 3
1 2 3 4

2)
A
B C 
D E F
G H I J


3) 
n= 4
      *
    * * *
  * * * * *
* * * * * * *
* *       * *
* *       * *

n= 5
        *
      * * *
    * * * * *
  * * * * * * *
* * * * * * * * *
* * *       * * *
* * *       * * *
*/