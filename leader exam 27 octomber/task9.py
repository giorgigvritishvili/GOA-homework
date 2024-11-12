
# You will receive a string which will contain words in PascalCase, your job is to convert them into snake_case.

def sieve_of_erato(max_bound):
    if max_bound < 2:
        return []
    
    primes = [True] * (max_bound +1)
    primes[0] = primes[1] = False

    for number in range(2, int(max_bound**0.5) + 1):
        if primes[number]:
            for multiple in range(number * number, max_bound + 1 , number):
                primes[multiple] = False
                return [num for num ,is_prime in enumerate(primes) if is_prime]
            
max_bound_input = input("enter the maximum bound:")
max_bound = int(max_bound_input)
primes_numbers = sieve_of_erato(max_bound)
print(f"Prime number up to and including {max_bound}: {primes_numbers}")
        

