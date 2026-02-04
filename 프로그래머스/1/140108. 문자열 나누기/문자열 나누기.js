function solution(s) {
    let count = 0;
    let same = 0;
    let diff = 0;
    let x = s[0];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === x) same++;
        else diff++;

        if (same === diff) {
            count++;

                x = s[i + 1];
                same = 0;
                diff = 0;
        }
    }

    // 🔽 여기만 이렇게 바꾸기
    if (same !== diff) count++;

    return count;
}
