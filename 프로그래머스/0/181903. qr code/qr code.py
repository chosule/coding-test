# q = 3
# r = 1
# code = "qjnwezgrpirldywt"

def solution(q, r, code):
    result = ""
    for i in range(len(code)):
        if i % q == r:
            # print("나머지가 r인 위치",i,q,r)
            # print("-->",code[i])
            result += code[i]
    return result