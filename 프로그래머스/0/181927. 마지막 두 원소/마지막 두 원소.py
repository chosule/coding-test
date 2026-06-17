def solution(num_list):
    
    last_number = num_list[-1]
    compair_number = num_list[-2]
    
    if last_number > compair_number:
        num_list.append(last_number - compair_number)
    else:
        num_list.append(last_number*2)
    
    return num_list