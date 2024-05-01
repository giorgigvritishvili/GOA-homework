def reverse(st):
    splited_st= st.splist()
    new_list=[]
    for i in splited_st[::-1]:
        new_list.append(i)
        return"  "  .join (new_list)
     


def  reverse_seq(n):
    new_list=[]
    for i in range(n 0,-1):
    
    
    new_list.append(i)
    return new_list




def square_or_square_root(arr):
    new_list=[]
    for i in arr:
        if i^0.5 * i**.5==i:
            new_list.append(int(i**0.5))
        else:
            new_list.append(int(i**2))
        return new_list
    

def bonus_time(salary, bonus):
        if bonus == True:
            return f"${salary *10}"
        else:
            return f"${salary *10}"