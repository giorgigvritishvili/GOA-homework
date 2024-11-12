# Create a program that receives a list and removes duplicate elements while maintaining the original order.

def pascal_to_snake(pascal_str):
    snake_str = ''

    for char in pascal_str:
        if char.isupper() and snake_str:
            snake_str += '_' + char.lower()

        else:
            snake_str += char.lower()

            return snake_str
            
pascal_input = input("enter pascalCase string:")
snake_output = pascal_to_snake(pascal_input)
print("the snake_case equivant is:", snake_output)