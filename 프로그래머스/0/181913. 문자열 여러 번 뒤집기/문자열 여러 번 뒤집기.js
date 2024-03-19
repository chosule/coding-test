function solution(my_string, queries) {
    const arr = [...my_string];
    let findArr;
    for(let i = 0; i < queries.length; i++){
        const [s,e] = queries[i]
        const findArr = arr.slice(s, e + 1).reverse();
        arr.splice(s, findArr.length, ...findArr);
    }
    return arr.join("");
}