
# 입력 
# 1. my_string -> 문자열 "cvsgiorszzzmrpaqpe"
# 2. index_list -> 정수 배열  [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7]

def solution(my_string, index_list):
    result = []
    for i in index_list:
        result.append( my_string[i])
        
    return "".join(result)
    