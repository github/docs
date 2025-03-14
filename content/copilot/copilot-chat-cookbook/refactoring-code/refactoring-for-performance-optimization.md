---
title: Refactoring for performance optimization
shortTitle: Performance optimization
intro: '{% data variables.product.prodname_copilot_chat_short %} can suggest ways to speed up slow-running code.'
redirect_from:
  - /copilot/example-prompts-for-github-copilot-chat/refactoring-code/refactoring-for-performance-optimization
versions:
  feature: copilot
category:
  - 'Refactoring code'
complexity:
  - Simple
octicon: rocket
topics:
  - Copilot
---

Existing code may function correctly but be inefficient, leading to performance bottlenecks. Examples of coding that can adversely impact performance include inefficient loops, unnecessary computations, and excessive memory allocation.

{% data variables.product.prodname_copilot_chat_short %} can identify performance hotspots and suggest refactoring strategies such as optimizing data structures (for example, using hashmaps instead of arrays), reducing redundant calculations, and improving algorithmic efficiency. It can also recommend caching mechanisms or parallelizing operations to improve performance.

## Example scenario

The following Python code prints every 1000th prime number up to the 10,000th prime. It includes a timer, and prints how long the code takes to run as the last line of the output. The program takes several seconds to complete.

```python
import time

def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

def every_1000th_prime():
    primes = []
    num = 2
    while len(primes) < 10000:
        if is_prime(num):
            primes.append(num)
        num += 1
    return [primes[i] for i in range(999, 10000, 1000)]

if __name__ == "__main__":
    start_time = time.time()
    primes = every_1000th_prime()
    for prime in primes:
        print(prime)
    end_time = time.time()
    elapsed_time = end_time - start_time
    print(f"Time taken: {elapsed_time:.10f} seconds")
```

## Example prompt

`Optimize this code for performance`

## Example response

{% data variables.product.prodname_copilot_short %} suggests using a sieve function to generate the prime numbers much more efficiently. If you run this program it will complete in a fraction of a second.

> [!NOTE] {% data variables.product.prodname_copilot_chat_short %} responses are non-deterministic, so you may get a different response from the one shown here.

```python
import time

def sieve_of_eratosthenes(limit):
    sieve = [True] * (limit + 1)
    sieve[0] = sieve[1] = False
    for start in range(2, int(limit**0.5) + 1):
        if sieve[start]:
            for multiple in range(start*start, limit + 1, start):
                sieve[multiple] = False
    return [num for num, is_prime in enumerate(sieve) if is_prime]

def every_1000th_prime():
    limit = 105000  # Higher than needed to ensure 10,000 primes
    primes = sieve_of_eratosthenes(limit)
    return [primes[i] for i in range(999, 10000, 1000)]

if __name__ == "__main__":
    start_time = time.time()
    primes = every_1000th_prime()
    for prime in primes:
        print(prime)
    end_time = time.time()
    elapsed_time = end_time - start_time
    print(f"Time taken: {elapsed_time:.10f} seconds")
```

## Further reading

{% data reusables.copilot.example-prompts.further-reading-items %}
