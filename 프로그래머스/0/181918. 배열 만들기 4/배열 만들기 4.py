# 입력 -> 정수배열 arr[] [1, 4, 2, 5, 3]
# 출력 -> 새로운 배열 stk[]

def solution(arr):
    i = 0;
    stk = []
    
    
    while i < len(arr):
        if len(stk) == 0:
            stk.append(arr[i])
            i += 1
        elif len(stk) != 0 and stk[-1] < arr[i]:
            stk.append(arr[i])
            i += 1
        elif len(stk) != 0 and stk[-1] >= arr[i]:
            stk.pop()
    
    # print(stk)
            
    return stk