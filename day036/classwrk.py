def unique_in_order(sequence):
    unique_list = []
    previous_item = None
    
    for item in sequence:
        if item != previous_item:
            unique_list.append(item)
            previous_item = item
    
    return unique_list

