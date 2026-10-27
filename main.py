n = [2,3,7,9,0,6,4,34,100, 3454, 678768, 45, 67, 89, 0]
m = n[0]

for i in range(0, len(n)-1):
    if n[i] > m:
        m = n[i]
        print(m)
