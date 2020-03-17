function tryRemoveFromArray(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            arr.splice(i, 1);
            return arr;
        }
    }
    return arr;
}

let array = [1, 2, 3, 4, 5];
let newArray = tryRemoveFromArray(array, 2);
console.log(newArray);