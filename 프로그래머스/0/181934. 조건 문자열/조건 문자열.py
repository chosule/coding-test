# ineq = "<" or ">"
# eq = "=" or "!"
# n,m = 정수

# 예시
# 20 <= 50  return 1
# 41 > 78 return 0

def solution(ineq, eq, n, m):
    v = ""
    
    if ineq == "<" or ineq == ">" :
        if eq == "=":
            v = ineq+eq
        elif eq == "!":
            v = ineq
    
    if eval(f"{n}{v}{m}"):
        return 1
    else :
        return 0

