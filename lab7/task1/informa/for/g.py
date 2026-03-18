n = int(input())

s = 0
sign = 1

for i in range(n + 1):
    s += sign / (2 * i + 1)
    sign *= -1

print(f"{4 * s:.5f}")