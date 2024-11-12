def rps(p1, p2):
    if p1 == "scissors" and p2 == "paper":
        return "Player 1 won!"
    elif p1 == "paper" and p2 == "rock":
        return "Player 1 won!"
    elif p1 == "rock" and p2 == "scissors":
        return "Player 1 won!"
    elif p1 == p2:
        return "Draw!"
    else:
        return "Player 2 won!"
    

def find_max(n,a):
    i= n-1
    MAX=a[i]
    INDEX=i
    for i in range(n-2):
        if max<a[i]:
            index=i
            return index
        print (find_max(5,[1,2,5,3,4]))

def find_max(n, a):
    k = 0
    i = n - 1
    max = a[i]
    index = i
    for i in range(n-2):
        k += 1
        if max < a[i]:
            max = a[i]
            index = i
    return f"Index of max number: {index}, iteration in for loop: {k}"

print(find_max(5, [1, 2, 5, 3, 4]))