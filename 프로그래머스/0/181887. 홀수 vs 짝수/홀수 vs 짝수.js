function solution(num_list) {
    let sumOdd = 0; // 홀수 번째 원소들의 합
    let sumEven = 0; // 짝수 번째 원소들의 합

    // 배열을 순회하며 인덱스가 홀수인지 짝수인지 확인
    for (let i = 0; i < num_list.length; i++) {
        if ((i + 1) % 2 === 0) {
            sumEven += num_list[i]; // 짝수 번째 원소의 합
        } else {
            sumOdd += num_list[i]; // 홀수 번째 원소의 합
        }
    }

    // 홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 반환
    return Math.max(sumOdd, sumEven);
}
