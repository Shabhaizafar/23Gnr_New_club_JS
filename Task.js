/*
4
      *
    * * *
  * * * * *
* * * * * * *
* *       * *
* *       * *
*/ 

var n = 4;
var str = "";
var str2;
for (let i = 0; i < n; i++) {
    //                4 - 0  
console.log("\n");
    str = "";
    for (let j = 0; j <n-i-1; j++) {
        str+="    ";
    }
    for (let j = 0; j <=i; j++) {
        str+="*   ";
    }
    for (let j = 1; j <=i; j++) {
        str+="*   ";
    }
    console.log(str);
}
for (let i = 0; i < n-2; i++) {
    str2="";
    console.log("\n");
       for (let j = 0; j<n-2; j++) {
        str2+="*   ";
    }
    for (let j = 0; j <3; j++) {
        str2+="    ";
    }
    for (let j = 0; j<n-2; j++) {
        str2+="*   ";
    }
     console.log(str2);
}