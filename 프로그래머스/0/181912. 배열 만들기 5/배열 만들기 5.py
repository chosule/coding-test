# 입력
# intStrs = ["0123456789","9876543210","9999999999999"]
# k = 50000
# s = 5
# l = 5

# 출력
# intStrs에서 각 원소마다 s(5)번 인덱스에서 시작하는길이 l(5)짜리 부분 문자열을 잘라내 정수로 변환해라
# 이때 변환한 정수값이 k보다 큰 값들을 담은 배열을 반환해라

# result = [56789, 99999]

def solution(intStrs, k, s, l):
    result = []
    
    for i in range(len(intStrs)):
        str = intStrs[i][s:s+l]
        if int(str) > k:
            result.append(int(str))   
            
    return result