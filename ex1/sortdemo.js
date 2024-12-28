// CPCS 223 Analysis & Design of Algorithms
// Exercise P1 - Sorting Performance Study
// 2021, Dr. Muhammad Al-Hashimi


// Compare the performance of 2 famous sorting algorithms: bubble sort
// and quicksort. Use debugger to check timing information. The code is
// not important for now, we'll study these algorithms in detail later


var xdata = [];     // create an empty array (to fill later)
var size = 100000;     // try different sizes: 800, 1500, 10000, 50000, 100000

fill(size);
console.log("List size = ", size);
console.time("Sort runtime");      // start timing

// --- profile one at a time (uncomment as needed)
//quicksort (0,size-1);
bubble();

console.timeEnd("Sort runtime");   // end timing


// --- sort functions ------------------------------------------
function bubble()
{
   for (var i=0; i<size-1; i++)
      for (var j=size-1; j>i; j--)
         if ( xdata[j] < xdata[j-1] )
         {
            var temp = xdata[j];
            xdata[j] = xdata[j-1];
            xdata[j-1] = temp;
         }
}

// ----------------------------
function quicksort(lo,up)
{
   if (lo >= up) return;
   var m = Math.floor(Math.random()*(up-lo+1))+lo;
   var tmp = xdata[lo]; xdata[lo] = xdata[m]; xdata[m] = tmp;
   m = lo;
   for (var i = lo+1; i <= up; i++)
      if (xdata[i] < xdata[lo])
         { tmp = xdata[++m]; xdata[m] = xdata[i]; xdata[i] = tmp; }
   tmp = xdata[lo]; xdata[lo] = xdata[m]; xdata[m] = tmp;
   quicksort(lo, m-1);
   quicksort(m+1, up);
}

// ----------------------------
// fill array with unsigned 32-bit integers (hopefully) between hi and lo
function fill(size)
{
   var hi=0xfffff, lo=0;  // 0 to 1,048,575 (20-bit)
   var rand = function (lval,hval) { return Math.floor(Math.random()*(hval-lval+1))+lval; }
   for (var i=0; i<size; i++)
      xdata[i] = rand(lo,hi) >>> 0;
}