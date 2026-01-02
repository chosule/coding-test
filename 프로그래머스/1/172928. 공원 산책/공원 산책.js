function solution(park, routes) {
    var answer = [];
    let start = [0,0];
    let width = 0;
    let height = 0;
    
    // 시작지점찾기 
    for( i = 0; i < park.length; i++){
        width = park[i].length;
        height = park.length;

        for(j=0; j < park[i].length; j++){
            // console.log(park[i],park[j])
            // console.log(j)
            if(park[i][j] === "S") {
               start = [i, j]
            }
        }
    }
    
    for(let i = 0; i < routes.length; i++){
        const [_row,_col] = start;
        let row = _row;
        let col = _col;
        console.log(row,col)
        
        const split = routes[i].split(" ")
        const position = split[0];
        const distance = Number(split[1]);
        
        let canMove = true;

        for(let step = 0; step < distance; step++){
                      let nextRow = row;
            let nextCol = col;

            if(position === "E") nextCol++;
            if(position === "W") nextCol--;
            if(position === "S") nextRow++;
            if(position === "N") nextRow--;

            // 경계 확인
            if(nextRow < 0 || nextRow >= height || nextCol < 0 || nextCol >= width){
                canMove = false;
                break;
            }
            
            // 장애물 확인
            if(park[nextRow][nextCol] === "X"){
                canMove = false;
                break;
            }

            row = nextRow;
            col = nextCol;
            
        }
      // 유효한 이동이면 start 업데이트
        if(canMove){
            start = [row, col];
        }
        
    }
    answer = start;
    return answer;
}