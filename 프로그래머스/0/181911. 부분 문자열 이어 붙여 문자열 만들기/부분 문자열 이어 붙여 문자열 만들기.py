# my_strings = ["progressive", "hamburger", "hammer", "ahocorasick"]
# parts = [[0, 4], [1, 2], [3, 5], [7, 7]] = [s, e]

def solution(my_strings, parts):
    result = ""
    
    for i in range(len(my_strings)):
        s,e = parts[i]
        # print("s랑e",s,e)
        # print("str->",my_strings[i])
        result += my_strings[i][s:e+1]
        
    return result
        
        