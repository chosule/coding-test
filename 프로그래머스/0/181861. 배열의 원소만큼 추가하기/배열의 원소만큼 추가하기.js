function solution(arr) {
    let result = [];
   return arr.flatMap((item) => Array(item).fill(item));
}