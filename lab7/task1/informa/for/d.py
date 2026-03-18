n = int(input())
k = int(input())

res = 1
for i in range(1, k + 1):
    res = res * (n - i + 1) // i

print(res)