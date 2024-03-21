function solution(num_str) {
    let result = 0;
    for(let num of num_str){
         result += parseInt(num);
    }
    return result;
}

