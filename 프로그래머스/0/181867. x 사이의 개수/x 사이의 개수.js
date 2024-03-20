function solution(myString) {
    const strSplit = myString.split("x");
    let result = [];
    for(let i = 0; i < strSplit.length; i++)      {
        result.push(strSplit[i].length)
    }
return result
}