/*
 * clockwise rotate
 * first reverse up to down, then swap the symmetry 
 * 1 2 3     7 8 9     7 4 1
 * 4 5 6  => 4 5 6  => 8 5 2
 * 7 8 9     1 2 3     9 6 3
 */
// void rotate(vector<vector<int> > &matrix) {
//     reverse(matrix.begin(), matrix.end());
//     for (int i = 0; i < matrix.size(); ++i) {
//         for (int j = i + 1; j < matrix[i].size(); ++j)
//             swap(matrix[i][j], matrix[j][i]);
//     }
// }


const rotate = (nums) => {
    nums.reverse();
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums[i].length; j++) {
            const temp = nums[i][j]; // i = 1. j = 2
            nums[i][j] = nums[j][i];
            nums[j][i] = temp;
        }
    }
}

const nums = [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16]
];

rotate(nums);
console.log(nums);