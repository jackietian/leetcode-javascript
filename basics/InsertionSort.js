/**
 * insert sort is compare i and j and make sure everything before i is sorted until i reaches the end.
 */
const insertionSort = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if(nums[i] < nums[j]) {
                const spliced = nums.splice(i, 1); // splice return an array
                nums.splice(j, 0, spliced[0]);
            }
        }
    }
    return nums;
}

let nums = [1,3,2,4,6];
console.log(insertionSort(nums));

