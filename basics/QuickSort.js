/**
 * choose a pivot (last item), and divide the array into left(< pivot) and right(> pivot), then [...left, pivot, ...right]
 */

const quickSort = (nums) => {
    if (nums.length <= 1) return nums; // base case
    let pivot = nums[nums.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] <= pivot) {
            left.push(nums[i])
        } else {
            right.push(nums[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const nums = [1, 4, 5, 7, 2, 3, 6];
console.log(quickSort(nums));