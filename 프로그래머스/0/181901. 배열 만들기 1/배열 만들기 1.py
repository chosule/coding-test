def solution(n, k):
    result = []
    # 1 <= i <= n(10) 중에서 k(3)의 배수
    
    for i in range(1,n+1):
        # print(i)
        if i % k == 0:
            result.append(i)
    

    return result