function solution(name, yearning, photo) {
    // 그리워 하는 사람의 이름 = name ["may", "kein" , "kain", "radi"]
    // 각 사람별 그리움 점수를 담은 정수 배열 = yearning [5, 10, 1, 3]
    // 각 사진에 찍힌 인물의 이름을 담은 이차원 문자열 배열 = photo 예) [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]	
    // 5 + 10 + 1 + 3 = 19
    // 5 + 10 = 15
    // 0 + 1 + 5 + 0 = 6
    // 결과 [19, 15, 6]

    let result = [];
    
    for(let i = 0; i < photo.length; i++){ //[[kali,mari,don],[pony,tom,teddy],[con,mona,don]]
        let sum = 0;
        for(let j = 0; j < name.length; j++){
            const test = photo[i].includes(name[j]);
            if(test){
                console.log("sum",sum)
                sum += yearning[j];
                // result.push(sum)
            }

        }
        console.log("sum",sum)
         result.push(sum)
       console.log("result",result)        
    }    
    return result;
}