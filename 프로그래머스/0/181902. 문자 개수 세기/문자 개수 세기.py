import string

def solution(my_string):
    arr = []
    result = []
    
    upper = [u for u in string.ascii_uppercase]
    lower = [l for l in string.ascii_lowercase]

    # print(upper)
    # print(lower)
    arr.extend(upper)
    arr.extend(lower)

    # print(result)
    
    for r in arr:
        result.append(my_string.count(r))
        
    return result