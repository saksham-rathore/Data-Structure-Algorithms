/*
242. Valid Anagram
Easy
Topics
premium lock icon
Companies
Given two strings s and t, return true if 
t is an anagram of s, and false otherwise.

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const hasharr = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        hasharr[s.charCodeAt(i)]++;
        hasharr[t.charCodeAt(i)]--;
    }

    for (let i = 97; i <= 122; i++) {
        if (hasharr[i] !== 0) {
            return false
        }
    }
    return true
};
