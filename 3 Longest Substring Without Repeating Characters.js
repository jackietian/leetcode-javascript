/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
    if (s === null || s.length === 0) {
        return 0;
    }

    var map = {};
    var len = 0;
    var maxLen = len;
    var start = 0;

    // scan from left to right.    
    for (var i = start; i < s.length; i++) {
        c = s[i];

        if (map[c] !== undefined && map[c] >= start) {
            start = map[c] + 1; // start new search with repeated word's last location + 1
            len = i - start; // real length -> from for example 3 to 5 is 3, so it's 5-3+1 and + 1 happens later
        }

        len++; // real length -> from for example 3 to 5 is 3, so it's 5-3+1 and + 1 happens later

        if (len > maxLen) {
            maxLen = len;
        }

        map[c] = i;
    }

    return maxLen;
};


/**
 * Input: "abcabcbb" 
 * Output: 3 
 * Explanation: The answer is "abc", with the length of 3. 
 * 
 * Input: "bbbbb" 
 * Output: 1 
 * Explanation: The answer is "b", with the length of 1.
 * 
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3. 
    Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

const longestSubstring = (s) => {
    /**
     * start : 0
     * end: 0
     * map: {a, b ,c}
     * 
     * abcabcbb
     * 
     * size: 3
     */
    // empty string return 0
    if (!s) return 0;

    let start = 0,
        end = 0;
    const map = [];
    let result = 0;

    while (end < s.length) {
        // loop through s and find the biggest size
        // if(map.indexOf(s[end]) > -1) {
        //     map.shift();
        //     start++;
        // }

        while (map.indexOf(s[end]) > -1) {
            map.shift();
            start++;
        }

        map.push(s[end]);

        end++;
        // console.log(start, end, map);

        result = Math.max(result, end - start);
    }
    return result;

}


console.log(longestSubstring('bbbb')); // 1
console.log(longestSubstring('abcabcbb')); // 3
console.log(longestSubstring('pwwkett')); // 4