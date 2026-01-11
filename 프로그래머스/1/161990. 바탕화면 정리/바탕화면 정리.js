function solution(wallpaper) { // 컴퓨터 바탕화면의 상태를 나타낸 문자열 배열
    let files = [];
    var answer = [];
    // 1. 각 파일의 위치 정하기
    for(let i = 0; i < wallpaper.length; i++){
        for(let j = 0; j < wallpaper[i].length; j++){
            if(wallpaper[i][j] === "#"){
                files.push([i,j])
            }
        }
    }
    // console.log(files)
    
    const rows = files.map(f => f[0])
    const cols = files.map(f => f[1])
    
    const minRow = Math.min(...rows)
    const maxRow = Math.max(...rows)
    const minCol = Math.min(...cols)
    const maxCol = Math.max(...cols)
    
    answer.push(minRow,minCol,maxRow+1,maxCol+1);
    console.log(answer)

    return answer;
}