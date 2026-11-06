import time

p="azertyuiopmcsndfgbhjlbvwxc1234567890!:;.,? £$"
target = input("Give me your word: ")
r=""
pos = 0
while(target!=r):
    for i in p:
        if(target[pos] == i):
            r = r + i
            print(r)
        print(r+i)
        time.sleep(0.05)   
    pos +=1