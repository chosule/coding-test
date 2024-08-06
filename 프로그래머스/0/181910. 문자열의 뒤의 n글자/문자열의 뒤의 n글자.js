function solution(my_string, n) {
    let result =  my_string.split("").slice(-n);
    return result.join("")
}