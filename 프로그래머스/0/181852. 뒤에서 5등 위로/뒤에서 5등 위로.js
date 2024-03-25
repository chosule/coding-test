function solution(num_list) {
    // 배열을 오름차순으로 정렬
    num_list.sort((a, b) => a - b);
    
    // 가장 작은 5개의 수를 제외한 수들을 반환
    return num_list.slice(5);
}