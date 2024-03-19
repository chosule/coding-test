function solution(num_list) {
    let result;
    if (num_list.length >= 11) {
        result = 0; // 길이가 11 이상이면 합을 저장할 변수를 초기화
        for (let i = 0; i < num_list.length; i++) {
            result += num_list[i]; // 모든 원소의 합을 구함
        }
    } else {
        result = 1; // 길이가 10 이하면 곱을 저장할 변수를 초기화
        for (let i = 0; i < num_list.length; i++) {
            result *= num_list[i]; // 모든 원소의 곱을 구함
        }
    }
    return result;
}