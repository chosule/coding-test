# 접미사

def solution(my_string):
    suffixes = sorted(my_string[i:] for i in range(len(my_string)))
    return suffixes