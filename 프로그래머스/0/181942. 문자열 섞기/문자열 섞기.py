def solution(str1, str2):
    answer = ''
    
    for v in range(len(str1)):
        # print(v)
        answer += str1[v]+str2[v]
        
        
    print(answer)
    return answer