def expanded_form(num):

    num_str = str(num)
    result = []
    for i in range(len(num_str)):
        digit = int(num_str[i])
        if digit != 0:
            result.append(str(digit * 10 ** (len(num_str) - i - 1)))
    return ' + '.join(result)   





def rps(p1, p2):
    if p1=="scissors"  and p2=="paper":
      return "player 1 won " 
elif  p1=="paper" and p2=="rock":
    
       return "player 1 won"



elif p1 == "rock" and p2=="scissors":
    return "player 1 won"

elif p1 == return "Draw"

else:
    return"Player 2 won"
