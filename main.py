n = int(input("entrer un nombre : "))

for i in range(1, n+1):
    if(n % i == 0):
        print(i, "est un diviseur de", n)