n = int(input())

s = 1
power = 1

for _ in range(n):
    power *= 2
    s += power

print(s)