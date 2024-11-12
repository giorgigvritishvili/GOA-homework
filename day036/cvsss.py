def alphabet_position(text):
 


 positions = []
for char in text:
        if char.isalpha():
            
            position = ord(char.lower()) - ord('a') + 1
            positions.append(str(position))
    return ' '.join(positions)
