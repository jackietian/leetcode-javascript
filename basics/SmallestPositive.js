/**
 * 
 * given A = [1, 3, 6, 4, 1, 2], the function should return 5.
 * 
 * Given A = [1, 2, 3], the function should return 4.
 * 
 * Given A = [−1, −3], the function should return 1.
 */

function solution(A) {
    for (i = 1; i < 1000000; i++) {
        if(!A.includes(i)) return i;
    }
}

console.log(solution([-1,-3]));
console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([1, 2, 3]));