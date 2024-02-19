function solution(intStrs, k, s, l) {
    var answer = [];
    for(let i = 0; i < intStrs.length; i++){
        let subStr = intStrs[i].substring(s, s + l);
        let num = parseInt(subStr);
        if(num > k){
         answer.push(num);
        }
    }
    return answer;
}