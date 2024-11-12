#Create a program that checks if a given string is a palindrome (reads the same forward and backward). The function should ignore spaces, punctuation, and capitalization.



def funyy(case):
    testcase = testcase.lower()
    testcases1 = testcase.split()
    testcase2 ="".join(testcases1)
    return testcase2 == testcase2[::-1]

print(funyy(" man a plan a canal Panama"))
print(funyy("Hello"))