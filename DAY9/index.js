
function binarySearch(arr, left, right, middle) {
    if (right >= left) {

        let mid = left + Math.floor((right - left) / 2);
        if (arr[mid] == middle) {
            return mid;
        }

        if (arr[mid] > middle) {
            return binarySearch (arr, left, mid - 1, middle)
        } else {
            return binarySearch(arr, mid + 1, right, middle);
        }
    }
    return -1;
}

// middle => needle --> jarum, arr => haystack --> jerami

let arr = [2,3,4,10,40];
let middle = 10;

console.log(binarySearch(arr,0,arr.length - 1, middle));

function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j+1] < arr[j]) {
                let temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp;
            }
        }
    }

    return arr;
}

console.log(bubbleSort([5,3,8,4]));