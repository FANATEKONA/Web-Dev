def power(a, n):
    res = 1.0
    for i in range(n):
        res *= a
    return res

data = input().split()
a = float(data[0])
n = int(data[1])

print(power(a, n))