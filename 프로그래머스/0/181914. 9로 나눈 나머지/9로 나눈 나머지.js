function solution(number) {
    const add = number.split('').reduce((acc,item) => acc + parseInt(item),0);
    
    return add % 9;
}