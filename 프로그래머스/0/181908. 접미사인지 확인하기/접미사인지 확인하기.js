function solution(my_string, is_suffix) {
    // my_string이 is_suffix로 끝나는지를 확인합니다.
    if (my_string.endsWith(is_suffix)) {
        return 1;
    } else {
        return 0;
    }
}