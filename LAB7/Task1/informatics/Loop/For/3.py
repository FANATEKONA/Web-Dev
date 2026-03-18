import math

a = int(input())
b = int(input())

start = math.ceil(math.sqrt(a))

i = start
while i * i <= b:
    print(i * i, end=' ')
    i += 1