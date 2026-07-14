
# my_string = "apporoograpemmemprs"
# indices = [1, 16, 6, 15, 0, 10, 11, 3]
# result = "programmers"


# 1.my_string 에서 indices의 원소에 해당하는 인덱스의 글자를 지우고
# 2. 지운결과에서 다시 이어붙인다
def solution(my_string, indices):
    arr = list(my_string)
    result = []
    indi = set(indices)
    
    for i,v in enumerate(arr):
        if i in indices:
            pass
        else:
            result.append(v)
    
    str = "".join(result)

    return str
            
    

    
        
    
        
    