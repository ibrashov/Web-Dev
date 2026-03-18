n = int(input())

s = 1
term = 1

for i in range(1, n + 1):
    term /= i
    s += term

print(f"{s:.5f}")