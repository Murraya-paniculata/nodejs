let df = [9,3,1,5,7,4,6,2];
function compare (a, b) {
    return a < b
}

function exchange(arr , a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function sort (arr) {
    for(let j = 0; j < arr.length; j++) {
        for(let i = 0; i< arr.length - 1 - j; i++) {
            if(compare(arr[i], arr[i+1])){
                exchange(arr, i, i+1);
            }
        }
    }
}

sort(df);

console.log(df);