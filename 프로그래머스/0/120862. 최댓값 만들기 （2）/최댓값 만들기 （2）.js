function solution(numbers) {
    // 배열을 오름차순으로 정렬
    numbers.sort((a, b) => a - b);

    // 가장 큰 두 수의 곱
    const n = numbers.length;
    const maxProduct1 = numbers[n - 1] * numbers[n - 2];

    // 가장 작은 두 수의 곱 (음수일 가능성 고려)
    const maxProduct2 = numbers[0] * numbers[1];

    // 두 값 중 더 큰 값을 반환
    return Math.max(maxProduct1, maxProduct2);
}