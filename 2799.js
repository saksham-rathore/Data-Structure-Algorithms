/*
2799. Count Complete Subarrays in an Array
Medium
Topics
premium lock icon
Companies
Hint
You are given an array nums consisting of positive integers.

We call a subarray of an array complete if the following condition is satisfied:

The number of distinct elements in the subarray is equal to the number of distinct elements in the whole array.
Return the number of complete subarrays.

A subarray is a contiguous non-empty part of an array.

 

Example 1:

Input: nums = [1,3,1,2,2]
Output: 4
Explanation: The complete subarrays are the following: [1,3,1,2], [1,3,1,2,2], [3,1,2] and [3,1,2,2].
Example 2:

Input: nums = [5,5,5,5]
Output: 10
Explanation: The array consists only of the integer 5, so any subarray is complete. The number of subarrays that we can choose is 10.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
    const distinctCount = new Set(nums).size;
    const frequencies = new Map();
    let left = 0;
    let result = 0;

    for (let right = 0; right < nums.length; right++) {
        const num = nums[right];
        frequencies.set(num, (frequencies.get(num) || 0) + 1);

        while (frequencies.size === distinctCount) {
            result += nums.length - right;

            const leftNum = nums[left];
            const count = frequencies.get(leftNum) - 1;
            if (count === 0) {
                frequencies.delete(leftNum);
            } else {
                frequencies.set(leftNum, count);
            }
            left++;
        }
    }

    return result;
};

const nums = [1, 3, 1, 2, 2];

console.log(countCompleteSubarrays(nums)); // 4