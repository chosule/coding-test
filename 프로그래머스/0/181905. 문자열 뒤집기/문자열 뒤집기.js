function solution(myString, s, e) {
    const arr = myString.split("");
    const first = arr.slice(0,s).join("");
    const middle = arr.slice(s , e + 1).reverse().join("");
    const last = arr.slice(e + 1).join("");
    
    return first + middle + last;
}
