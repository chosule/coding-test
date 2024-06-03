function solution(my_string) {
    let number = []
    const str = my_string.split("");
    for(let i = 0; i < str.length; i++){
        if(!isNaN(str[i])){
            number.push(Number(str[i]))
        }
    }
    return number.sort((a,b) => a-b)
}