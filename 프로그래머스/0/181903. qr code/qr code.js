function solution(q, r, code) {
    const codeArr = code.split("");
    const result = [];
    for(let i = 0; i < codeArr.length; i++){
            if(i % q === r){
                result.push(codeArr[i])
            }
        }
return result.join("")
}