def solution(n):
    result = 0;
    
    for v in range(1,n+1):
        if n % 2 == 0:
            print("짝수임",v)
            if v % 2 == 0:
                result += v ** 2
                print(result)
        else:
            print("홀수임",v)
            if v % 2 != 0:
                result += v
                print(result)
    
    return result;