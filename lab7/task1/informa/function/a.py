def minimum_of_four(a, b, c, d):
    return min(a, b, c, d)

a, b, c, d = map(int, input().split())
print(minimum_of_four(a, b, c, d))