def sum_two_smallest_numbers(numbers):
    sorted_numbers = sorted(numbers)
    
    return  sorted_numbers[0]+sorted_numbers[1]



def max_multiple(divisor, bound):
    return (bound // divisor)*divisor