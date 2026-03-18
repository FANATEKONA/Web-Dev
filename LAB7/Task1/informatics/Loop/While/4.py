n = int(input())

while n > 1:
    if n % 2 != 0:
        print("NO")
        break
    n //= 2
else:
    if n == 1:
        print("YES")
    else:
        print("NO")