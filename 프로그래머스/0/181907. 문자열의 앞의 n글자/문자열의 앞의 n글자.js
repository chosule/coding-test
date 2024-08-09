function solution(my_string, n) {
    const arr = my_string.split("");
    const result = arr.slice(0,n);
    return result.join("")
}