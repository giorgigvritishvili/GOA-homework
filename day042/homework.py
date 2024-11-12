<<<<<<< HEAD
# Enter the starting and ending numbers to the user, pass these numbers to the for loop function, store the numbers between them in the list, then filter so that the for loop considers each number if the number is even. Add its square root to the new list, if it is odd, add its square root 0.5 degrees)




def filter_arry(start_num,end_num):
    numbers=[]
    filter_list=[]


    for i in (start_num,end_num):
        print(numbers)


        numbers.append(i)

        for i in numbers:
            if i % 2==0:
                filter_list.append(i ** 2)
            else:
                filter_list.append(i ** 0.5)

                return filter_list
            

            start_num = int(input("please enter numbers:"))
            end_num = int(input("please enter numbers:"))
            

            output_list =filter_list(start_num,end_num)
print()

def arithmetic_operation(a, b, operator):
    if operator == "add":
        return a + b
    elif operator == "subtract":
        return a - b
    elif operator == "divide":
        return a / b
    elif operator == "multiply":
        return a * b
    else:
        return "Invalid operator"

# Examples
print(arithmetic_operation(5, 3, "add"))       # Output: 8
print(arithmetic_operation(5, 3, "subtract"))  # Output: 2
print(arithmetic_operation(10, 2, "divide"))   # Output: 5.0
print(arithmetic_operation(5, 3, "multiply"))  # Output: 15



def remaining_on_bus(bus_stops):
    total_people = 0
    for on, off in bus_stops:
        total_people += on
        total_people -= off
    return max(0, total_people)

# Test cases
print(remaining_on_bus([(10, 0), (3, 5), (5, 8)]))   # Output: 5
print(remaining_on_bus([(3, 0), (9, 1), (4, 10), (12, 2), (6, 4)]))  # Output: 16
print(remaining_on_bus([(3, 0), (9, 1), (4, 8), (12, 2), (6, 0)]))   # Output: 10

n=int(input("what is your number:"))
def collatz(n):
    
    
    if n/2 == 0:
    
    
   return: True
else:
    return: False
    for n in n:
    
   if collatz(n):
    print(f"{n} is even")
    print(n/ 2)




def collatz(n):
    new_list = [n]
    while n == 1:
        if n % 2 == 0:
            n == n % 2
        else:
            n == 3 * n + 1
        new_list.append(n)
=======
# Enter the starting and ending numbers to the user, pass these numbers to the for loop function, store the numbers between them in the list, then filter so that the for loop considers each number if the number is even. Add its square root to the new list, if it is odd, add its square root 0.5 degrees)




def filter_arry(start_num,end_num):
    numbers=[]
    filter_list=[]


    for i in (start_num,end_num):
        print(numbers)


        numbers.append(i)

        for i in numbers:
            if i % 2==0:
                filter_list.append(i ** 2)
            else:
                filter_list.append(i ** 0.5)

                return filter_list
            

            start_num = int(input("please enter numbers:"))
            end_num = int(input("please enter numbers:"))
            

            output_list =filter_list(start_num,end_num)
print()

def arithmetic_operation(a, b, operator):
    if operator == "add":
        return a + b
    elif operator == "subtract":
        return a - b
    elif operator == "divide":
        return a / b
    elif operator == "multiply":
        return a * b
    else:
        return "Invalid operator"

# Examples
print(arithmetic_operation(5, 3, "add"))       # Output: 8
print(arithmetic_operation(5, 3, "subtract"))  # Output: 2
print(arithmetic_operation(10, 2, "divide"))   # Output: 5.0
print(arithmetic_operation(5, 3, "multiply"))  # Output: 15



def remaining_on_bus(bus_stops):
    total_people = 0
    for on, off in bus_stops:
        total_people += on
        total_people -= off
    return max(0, total_people)

# Test cases
print(remaining_on_bus([(10, 0), (3, 5), (5, 8)]))   # Output: 5
print(remaining_on_bus([(3, 0), (9, 1), (4, 10), (12, 2), (6, 4)]))  # Output: 16
print(remaining_on_bus([(3, 0), (9, 1), (4, 8), (12, 2), (6, 0)]))   # Output: 10

n=int(input("what is your number:"))
def collatz(n):
    
    
    if n/2 == 0:
    
    
   return: True
else:
    return: False
    for n in n:
    
   if collatz(n):
    print(f"{n} is even")
    print(n/ 2)




def collatz(n):
    new_list = [n]
    while n == 1:
        if n % 2 == 0:
            n == n % 2
        else:
            n == 3 * n + 1
        new_list.append(n)
>>>>>>> fb0eba0a7454f2dc3b511a76a20cf9f2ec4ee15a
    return new_list

num1 = int(input(enter a number:))
num2 = int(input(enter a number:))

sum_num = num1 + num2
print(sum_num)
