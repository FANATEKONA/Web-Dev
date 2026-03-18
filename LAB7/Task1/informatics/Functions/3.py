def xor(x, y):
    return (x + y) % 2

x, y = map(int, input().split())

print(xor(x, y))