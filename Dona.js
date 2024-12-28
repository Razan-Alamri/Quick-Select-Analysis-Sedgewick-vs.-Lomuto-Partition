var basicOp_quickselectS = 0;
var basicOp_quickSelect = 0;
///////////////////////////////////////////////////////////////////////////////////////////////////////
//Median index
function medianInx(Arr){
    let R=0;
    let L=Arr.length-1;
    let M = Math.floor((L+R)/2);
   //return index of the median
    return M;
}
//random fill of Array
function randomFill(size,Arr)
{
   var hi=100, lo=0;
   for (var i=0; i<size; i++)
      Arr[i] = random(lo,hi);
}

function random(low,high)
{
   return Math.floor(Math.random()*(high-low+1))+low;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
//lomouto
function lomouto(Arr,left,right){
 
   let pivot = Arr[left];
   let s = left;

   for(let i=left+1; i<=right ; i++){
      basicOp_quickSelect++;
      if(Arr[i]<pivot){
         s++;
         //swap
         swap(Arr,i,s);
      }
   }

   //move pivot
   swap(Arr,left,s);
   //return index of the pivot
   return s;
}//method end

//swap fun called in lomouto function
function swap(Arr, Finx, Sinx){
   temp= Arr[Finx];
   Arr[Finx] = Arr[Sinx];
   Arr[Sinx] = temp;
}
//Quick Select
function quickSelectL(Arr,left,right,k){ //k is median index
   //s is the pivot index
   let s = lomouto(Arr,left,right); 

   if(s == k){
      return Arr[s]; //this is the median
   }
   else if(s>k){
      return quickSelectL(Arr,left,s-1,k); //partition
   }
   else if(s<k)
      return quickSelectL(Arr,s+1,right,k); //partition
}
//////////////////////////////////////////////////////////////////////////////////
function sedgewick(Arr,left,right){
   var pivot = Arr[right];
   var i=left-1;
   var j = right;

   while(i <= j){
      while(Arr[++i]<pivot){
         basicOp_quickselectS++;
      }
      while(Arr[--j] > pivot){
         basicOp_quickselectS++;
            //if(j <= i)break;
      } 
      if(i >= j) break;
      basicOp_quickselectS++;
      swap(Arr,i,j);
      }
 
   swap(Arr, i, right);
   return i;

}

function quickSelectS(Arr,left,right,k){ //k is median index

   //s is the pivot index
   let s = sedgewick(Arr,left,right); 

   if(s == k){
      return Arr[s]; //this is the median
   }
   else if(s>k){
      return quickSelectS(Arr,left,s-1,k); //partition
   }
   else if(s<k)
      return quickSelectS(Arr,s+1,right,k); //partition  

}


//////////////////////////////////////////////////////////////////////////////////
//main:
 var ArrOriginal = [];     //Empty arrays to fill it later with random values from 0 - 100
let ArrCopy = [];
var size = 1000000;  //size of the array (change size to change array size)

//for loop to get 10 result for same input size
for(let x = 0; x <10; x++){
//randomlly fill the array
randomFill(size,ArrOriginal);

//copy array to send to the other method 
for( let i=0 ; i<ArrOriginal.length ; i++){
 ArrCopy[i] = ArrOriginal[i];
}
//find the median index k
k = medianInx(ArrOriginal);
//print array
console.log("\n",ArrOriginal);

//Start printing
console.log("------------------------- Sedgewick Partition ------------------------------");
console.time("Sedgewick fining median runtime: ");
var medainS = quickSelectS(ArrOriginal,0,ArrOriginal.length-1,k)
console.log("Sedgewick median is: ", medainS);
console.log("Sedgewick basic operation count is: ",basicOp_quickselectS);
console.timeEnd("Sedgewick fining median runtime: ");


//Quick select L
console.log("\n------------------------- Lomouto Partition ------------------------------");
console.time("Lomouto fining median runtime: ");
var medianL = quickSelectL(ArrCopy,0,ArrCopy.length-1,k);
console.log("Lomouto median is: ",medianL);
console.log("Lomouto basic operation count is: ",basicOp_quickSelect);
console.timeEnd("Lomouto fining median runtime: ");

}

