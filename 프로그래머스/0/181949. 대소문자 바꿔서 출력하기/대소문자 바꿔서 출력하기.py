str = input()

result = ""
for v in str:
    if v == v.upper():
        result += v.lower()
    else :
        result += v.upper()
        
print(result)
        
