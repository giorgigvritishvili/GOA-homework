def merge_strings(s1, s2):
    max_overlap = 0  # Track the maximum length of overlap

    # Check all possible overlaps from longest to shortest
    for i in range(1, min(len(s1), len(s2)) + 1):
        # Check if the end of s1 matches the start of s2
        if s1[-i:] == s2[:i]:
            max_overlap = i

    # Merge s1 and s2 based on the maximum overlap
    return s1 + s2[max_overlap:]

# Example usage:
print(merge_strings("abcde", "cdefg"))  # Output: "abcdefg"
print(merge_strings("hello", "world"))  # Output: "helloworld"
print(merge_strings("abc", "xyz"))      # Output: "abcxyz"



def factorial_division(n, d):
    if n <= d:
        raise ValueError("n must be greater than d")
    
    result = 1
    for i in range(d + 1, n + 1):
        result *= i
    return result