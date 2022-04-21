

//q1  
 function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

console.log("This function is will  give alert 4 time your page when it will get refresh or  when it will get open" );


//q2)

let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?  
  }
  console.log(count); // What is logged?
})();


// the  first will count 1  because it is in declared in local function
// th second will count 0 it is declared in global function


//q3

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 2000);
  }for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }


  // this will count 3 times after 1 sec


  /* q4 Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth. */


  let l = 10;
  function rectangle(){
    let b = 8;
    console.log("Area of rectangle is ",l*b);
    }
  rectangle();



  /* Q5) Take a variable in outer function and create an inner function to increase the counter every time it is called */

  let n = function(){
    count=0;

 d = function(){
     setTimeout(() => {
        console.log(`count is ${count+1}`);
     }, 2000);
  
}
}
n();
d();
d();



/* Q6) "Print Output

var a = 12;
(function () {
  alert(a);
})();" */



//this will give alert 12 when page will open

   


/* Q7)

var x = (function () {
    var a = 12;
    return function () {
      alert(a);
    };
  })();
  x(); */

  
//this will give alert 12 when page will open



//q8)
/* 
"var globalVar = ""xyz"";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        ""outerArg = "" + outerArg + ""\n"" +
        ""innerArg = "" + innerArg + ""\n"" +
        ""outerVar = "" + outerVar + ""\n"" +
        ""innerVar = "" + innerVar + ""\n"" +
        ""globalVar = "" + globalVar);
    
    })(456);
})(123);" */





var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);

//output:=

/* outerArg = 123
innerArg = 456
outerVar = a
innerVar = b
globalVar = xyz */