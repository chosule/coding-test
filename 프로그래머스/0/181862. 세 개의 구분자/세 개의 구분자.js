function solution(myStr) {
    const str = myStr.split(/[abc]/);
    const filterdStr = str.filter((arr)=> arr.length > 0);
    return filterdStr.length > 0 ? filterdStr : ["EMPTY"]
}
