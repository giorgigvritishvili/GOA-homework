<<<<<<< HEAD
ef find_it(seq):
    for i in seq:
        if seq.count(i)%2==1:
            return i
        


        def digital_root(n):
    while n >= 10:
        n = sum(int(digit) for digit in str(n))
    return n

# Example usage:
print(digital_root(942))  # Output: 6 (since 9 + 4 + 2 = 15 and 1 + 5 = 6)
=======
ef find_it(seq):
    for i in seq:
        if seq.count(i)%2==1:
            return i
        


        def digital_root(n):
    while n >= 10:
        n = sum(int(digit) for digit in str(n))
    return n

# Example usage:
print(digital_root(942))  # Output: 6 (since 9 + 4 + 2 = 15 and 1 + 5 = 6)
>>>>>>> fb0eba0a7454f2dc3b511a76a20cf9f2ec4ee15a
print(digital_root(132189))  # Output: 6 (since 1 + 3 + 2 + 1 + 8 + 9 = 24 and 2 + 4 =