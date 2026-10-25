/*
3. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without duplicate characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let maxlength = 0;
    const seen = new Set();

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        while (seen.has(char)) {
            seen.delete(s[left]);
            left++;
        }
        seen.add(char);

        maxlength = Math.max(maxlength, right - left + 1);
    }
    return maxlength;
};