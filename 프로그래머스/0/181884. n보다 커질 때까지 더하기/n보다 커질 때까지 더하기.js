function solution(numbers, n) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
        if (sum > n) {
            return sum;
        }
    }
    return sum; // 모든 숫자를 더한 값이 n 이하일 경우 모든 숫자를 반환합니다.
}