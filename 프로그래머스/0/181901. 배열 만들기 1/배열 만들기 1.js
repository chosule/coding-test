function solution(n, k) {
    let resurt = [];
    for(let i = 1; i <= n; i++){
        if(i % k === 0){
            resurt.push(i)
        }
    }
    return resurt;
}