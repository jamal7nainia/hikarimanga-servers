valid = False
def verify(n):
    if(16>=n):
        return "Tres Bien"
    elif(14<=n<=15.99):
        return "Bien"
    elif(12<=n<=13.99):
        return "Assez Bien"
    elif(10<=n<=11.99):
        return "Passable"
    else:
        return "Non admis"
    
        
while(valid == False):
    try:
        n = float(input("Svp la note: "))
        valid = True
    except:
        n = float(input("Error, svp la note: "))
print(verify(n)) 
