/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const freq = new Map();

    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);

        if (freq.get(num) > Math.floor(nums.length / 2)) {
            return num;
        }
    }
};