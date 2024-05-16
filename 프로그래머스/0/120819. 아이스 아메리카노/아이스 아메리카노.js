function solution(money) {
   //money 나누기 5500원
    const max = (money / 5500);
    const another = money % 5500;
    return [parseInt(max),another]
}