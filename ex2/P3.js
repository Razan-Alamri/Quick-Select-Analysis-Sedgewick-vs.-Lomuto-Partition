// Exercise P3 - Greatest Common Divisor
// Razan Arif Alamri


document.write("<p>The greatest common divisor for {24,60} is : ",GCD(24,60));
document.write("<p>The greatest common divisor for {75,45} is : ",GCD(75,45));
document.write("<p>The greatest common divisor for {245,147} is : ",GCD(245,147));
document.write("<p>The greatest common divisor for {182,910} is : ",GCD(182,910));



// Greatest Common Divisor
 function GCD(x, y) {
    while(y) {
        var t = y;
        y = x % y;
        x = t;
      }
      return x;
    }
  

    