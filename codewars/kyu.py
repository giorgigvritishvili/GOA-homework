import math

def nearest_sq(n):
    
    
    if math.isqrt(n)** 2  == n:
        return n
    
    root = math.isqrt(n)
    lower_sq = root ** 2 
    upper_sq = (root+1) ** 2
    
    if abs(n - lower_sq)< abs (n - upper_sq):
        return lower_sq
    else:
     




     def triangular(n):
       if n <= 0:
        return 0
    return n * (n + 1 )// 2






def mine_location(field):
    for i in range (len(field)):
        for j in range(len(field[0])):
            if field[i][j] == 1:
                return (i, j)
            
    field = [
                
                [0,0,0],
                [0,1,0],
                [0,0,0]
]
print(mine_location(field)) #output (1,1)