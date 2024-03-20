function solution(arr, intervals) {
    let result = [];
    for(let i = 0; i < intervals.length; i++)       {
        const [a,b] = intervals[i];
        const arrResult = arr.slice(a,b+1);
        result.push(...arrResult);
        
    }
    return result
}