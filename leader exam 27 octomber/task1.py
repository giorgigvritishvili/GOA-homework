# Create a program which receives a binary number and converts it to decimal.

def binary(str):
    decimal = 0
    binary_str = binary_str[::-1]
    for index,digit in enumerate(binary_str):
        if digit == '1':
            decimal += 2 ** index
            return decimal
        
binary_input = input("enter a Binary:")
if all(bit in '01' for bit in binary_input):
        decimal_output = binary(binary_input)
        print(f"the decimal equivalent of binary {binary_input} is {decimal_output}")
else:
        print("Ivalid binary number. please enter valid binary string.")

       