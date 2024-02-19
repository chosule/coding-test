function solution(num_list) {
 let lastNum = num_list[num_list.length - 1];
 let prevNum = num_list[num_list.length - 2];
 let result =  lastNum > prevNum ? lastNum - prevNum : lastNum * 2;
 num_list.push(result);
    return num_list;
}