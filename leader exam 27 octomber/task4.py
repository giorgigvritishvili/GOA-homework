#Create a program that receives a non-negative integer and returns its factorial. The factorial of a number n is the product of all positive integers from 1 to n. By definition, the factorial of 0 is 1.

num1 = 5
fact = 1
for i in range(1, int(num1) + 1):
    fact *= i
    print(fact)
