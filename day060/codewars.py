<<<<<<< HEAD
def additive_inverses(numbers):
    return [-x for x in numbers]

# Example usage
numbers = [3, -7, 2, 0, -5]
inverses = additive_inverses(numbers)
print(inverses)  # Output: [-3, 7, -2, 0, 5]


def collatz_sequence(n):
    if n <= 0:
        raise ValueError("The input must be a positive integer.")
    
    sequence = []
    
    while n != 1:
        sequence.append(n)
        if n % 2 == 0:
            n = n // 2
        else:
            n = 3 * n + 1
    
    sequence.append(1)  # Add the final 1 to the sequence
    return sequence

# Example usage:
n = int(input("Enter a positive integer: "))
=======
def additive_inverses(numbers):
    return [-x for x in numbers]

# Example usage
numbers = [3, -7, 2, 0, -5]
inverses = additive_inverses(numbers)
print(inverses)  # Output: [-3, 7, -2, 0, 5]


def collatz_sequence(n):
    if n <= 0:
        raise ValueError("The input must be a positive integer.")
    
    sequence = []
    
    while n != 1:
        sequence.append(n)
        if n % 2 == 0:
            n = n // 2
        else:
            n = 3 * n + 1
    
    sequence.append(1)  # Add the final 1 to the sequence
    return sequence

# Example usage:
n = int(input("Enter a positive integer: "))
>>>>>>> fb0eba0a7454f2dc3b511a76a20cf9f2ec4ee15a
print("Collatz sequence:", collatz_sequence(n))