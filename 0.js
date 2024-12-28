// Analysis & Design of Algorithms CPCS-223  Project
// Name: Razan Arif Alamri
// 2022, Dr. Muhammad Al-Hashimi

// Create empty arrays (to fill later)
var Random1_Array = [];
var Random2_Array = [];

// Try different sizes such as 800, 1500, 10000, 50000, 100000
var size = 1377777;
for (let x = 0; x < 10; x++) {
    Random_Fill(size);

    // Find the median index -Key-
    l = 0; //left
    r = Random2_Array.length - 1; //right    
    K = Math.floor((l + r) / 2);

    // Counter for basic operatoin
    var countB_OpLom = 0;
    var countB_OpSed = 0;

    //---- Quick Select with Sedgewick Parition ----
    // Start time
    console.time("Quick Select (Sedgewick) Runtime");
    var Median_QuickSelect2 = Quick_Select2(l, r, K);
    console.log("Median of Quick select with Sedgewick Parition: ", Median_QuickSelect2);
    console.log("Selecting counter: " + countB_OpSed);
    // End time
    console.timeEnd("Quick Select (Sedgewick) Runtime");

    console.log("========================================================")

    //---- Quick Select with Lomuto Parition ----
    // Start time
    console.time("Quick Select (Lomuto) Runtime");
    var Median_QuickSelect = Quick_Select(l, r, K);
    console.log("Median of Quick select with Lomuto Parition: ", Median_QuickSelect);
    console.log("Selecting counter: " + countB_OpLom);
    // End time
    console.timeEnd("Quick Select (Lomuto) Runtime");
}
//========================================================

//-- Fill array with random valus --
function Random_Fill(size) {
    // The numbers range from 0 to 100
    var Low = 0,
        High = 100;
    for (var i = 0; i < size; i++) {
        var Number = Random(Low, High);
        Random1_Array[i] = Number;
        Random2_Array[i] = Number;
    }
}

function Random(low, high) {
    return Math.floor(Math.random() * (high - low + 1)) + low;
}
//-- Quick Select Function --
function Quick_Select(l, r, K) {

    let s = Lomuto_Parition(l, r);

    if (s == K) {
        return Random2_Array[s];
    } else if (s > K) {
        r = s - 1;
    } else {
        l = s + 1;
    }
    return Quick_Select(l, r, K);
}
//-- Lomuto Parition Function --
function Lomuto_Parition(l, r) {

    let Pivot = Random2_Array[l],
        s = l;

    for (let i = l + 1; i <= r; i++) {
        countB_OpLom++;
        if (Random2_Array[i] < Pivot) {
            s++;
            //swap(arr[i], arr[s])
            let temp = Random2_Array[i];
            Random2_Array[i] = Random2_Array[s];
            Random2_Array[s] = temp;
        }
    }
    //swap(arr[l], arr[s])
    let temp = Random2_Array[l];
    Random2_Array[l] = Random2_Array[s];
    Random2_Array[s] = temp;
    return s;
}
//-- Quick Select2 Function --
function Quick_Select2(l, r, K) {

    let s = Sedgewick_Parition(l, r);

    if (s == K) {
        return Random1_Array[s];
    } else if (s > K) {
        r = s - 1;
    } else {
        l = s + 1;
    }
    return Quick_Select2(l, r, K);
}
//-- Sedgewick Parition Function --
function Sedgewick_Parition(l, r) {

    let pivot = Random1_Array[r];
    let i = l - 1;
    let j = r;
    while (true) {

        while (Random1_Array[++i] < pivot) {
            countB_OpSed++;
        }
        countB_OpSed++;
        while (Random1_Array[--j] > pivot) {
            countB_OpSed++;
        }
        countB_OpSed++;

        if (i >= j) {
            break;
        }
        // swap(arr[i], arr[j])
        let temp = Random1_Array[i];
        Random1_Array[i] = Random1_Array[j];
        Random1_Array[j] = temp;
    }
    // swap(arr[i], arr[r])
    var temp = Random1_Array[i];
    Random1_Array[i] = Random1_Array[r];
    Random1_Array[r] = temp;
    return i;
}