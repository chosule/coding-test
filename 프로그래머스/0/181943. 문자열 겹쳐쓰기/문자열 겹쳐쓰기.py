def solution(my_string, overwrite_string, s):
    answer = ''
    
    # s 부터 overwrite_string.length 까지를 overwrite.string으로 바꿔라
    first = my_string[:s]
    middle = overwrite_string
    last = my_string[s+len(overwrite_string):]
    print("last",last)
    
    answer = f"{first}{middle}{last}"
    
    # print("answer ->",answer)

    return answer