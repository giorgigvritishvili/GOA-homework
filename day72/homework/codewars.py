def is_valid_walk(walk):
    for i in walk:

        if walk.count('n') == walk.count('s') and walk.count('w') == walk.count('e') and len(walk) == 10:
            return True
        else:
            return False
        
def sort_array(source_array):
    odd_list = []
    for i in source_array:
        if i % 2 != 0:
            odd_list.append(i)
    odd_list.sort()

    index = 0
    result = []
    for x in source_array:
        if x % 2 != 0:
            result.append(odd_list[index])
            index += 1
        else:
            result.append(x)
    return result