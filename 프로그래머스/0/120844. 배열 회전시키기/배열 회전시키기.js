function solution(numbers, direction) {
    // right면 맨 뒤에 숫자가 맨 앞으로
    // left면 맨 앞에 숫자가 맨 뒤로
    if(direction === "right"){
        const number = numbers.pop() 
        return [number,...numbers]
    }else{
         const number = numbers.shift() 
        return [...numbers,number]
    }
}