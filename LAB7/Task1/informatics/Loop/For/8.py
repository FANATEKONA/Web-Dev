x = int(input())
divs = set()

for i in range(1, int(x**0.5) + 1):
    if x % i == 0:
        divs.add(i)
        divs.add(x // i)

print(*sorted(divs))