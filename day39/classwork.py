# დაწერეთ ფუნქცია, რომელიც მიიღებს რიცხვთა მასივს და აბრუნებს რიცხვთა ჯამს. რიცხვები შეიძლება იყოს უარყოფითი ან არა მთელი რიცხვი. თუ მასივი არ შეიცავს რიცხვებს, მაშინ უნდა დააბრუნოთ 0.


def sum_array(a):
    sum = 0
    for number in a:
        sum += number
    return sum
number_list=[1,2,3,4,5]
sum_array(number_list)


def find_average(numbers):
    if not numbers:
        return 0
    
    else:
        return sum(numbers) / len(numbers)
    

def count_positives_sum_negatives(arr):
    if len(arr) == 0:
        return arr
    count = 0
    sum = 0
    for i in arr:
        if i > 0:
            count += 1
        else:
            sum += i
    return [count , sum]




def sum_two_smallest_numbers(numbers):
    numbers.sort()
    return numbers[0] + numbers[1]




def tocamel_case(text):
    if text == "":
        return ""
    text = text.replace("-", "")
    words = text.split("_")
    final_str = ""
    if text[0].isupper():
        for i in words:
            final_str += i.capitalize()
    else:
        final_str = words[0]
        for index in range(1,len(words)):
            final_str += words[index].capitalize()




    return final_str

def find_it(seq):
    for i in seq:
        if seq.count(i)%2==1:
            return i 
