function magic_multiply(x, y){
    // --- your code here ---
    if (x.constructor === Array){
        result=[]
        for (i=0; i<x.length; i++){
            result.push(x[i]*y);
        }
        return result;
    }else if (x.constructor === Number && y.constructor === String) {
        console.log("Error: Can not multiply by string")
    }else if( x.constructor === String && y.constructor === Number){
      var resultString = x;
      for (i=0; i<y; i++)
      {   console.log(resultString);
          resultString =resultString.concat(x);
      }
      return resultString;
    }else {
        return x*y;
    };
   
}
function isInt(value) {
    return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
};
  
//Test1
let test1 = magic_multiply(5, 2);
console.log(test1);

//Test2
let test2 = magic_multiply(0, 0);
console.log(test2);

// Test3
let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);

//Test4
let test4 = magic_multiply(7, "three");
console.log(test4);

//Test5
let test5 = magic_multiply("Brendo", 4);
console.log(test5);
// => "BrendoBrendoBrendoBrendo"