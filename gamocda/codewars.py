def get_char(c):
    if 0 <= c <= 255:
        return ''.join(chr(i) for i in [c])
    else:
        return "Invalid ASCII value"
    ascii_value = 65


    


    def divisible_by(numbers, divisor):
        divisible_by = [num for num in numbers if num % divisor == 0]
    return divisible_by
numbers = [0,1,2,3,4,5,6,7,8,9,10,5]
divisor = 5






from itertools import groupby
def sum_consecutives(lst):
    return [sum(group) for key,group in groupby(lst)]