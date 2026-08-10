class Solution(object):
    def isPalindrome(self, x):
        original = x
        result = 0

        while x > 0:
            last_digit = x % 10
            result = result * 10 + last_digit
            x //= 10

        return result == original


solution = Solution()
print(solution.isPalindrome(121))