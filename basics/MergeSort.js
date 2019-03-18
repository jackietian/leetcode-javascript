/**
 * merge sort is to divide the array into 2, left, and right. and merge left and right
 */
const mergeSort = (nums) => {
    if (nums.length === 1) return nums;
    const length = nums.length;
    const middle = Math.floor(length / 2);
    const left = nums.slice(0, middle);
    const right = nums.slice(middle, length);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

const merge = (arr1, arr2) => {
    let result = [];
    while (arr1.length && arr2.length) {
        if (arr1[0] <= arr2[0]) {
            result.push(arr1.shift());
        } else {
            result.push(arr2.shift());
        }
    }
    return result.concat(arr1, arr2);
    // return [...result, ...arr1, ...arr2];
}


const nums = [1, 4, 5, 7, 2, 3, 6];
console.log(mergeSort(nums));
