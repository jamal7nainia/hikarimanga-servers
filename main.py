i = 0
m = 0
r = 0
while(True):
    n = int(input(f"cc{i}: "))
    while(n > 20):
        n = int(input(f"cc{i}: "))
    if(n < 0):
        if(m > 0):
            r = m / i
        print(f"le moyenne gen: {r}")
        break
    m = m + n
    i+=1
    