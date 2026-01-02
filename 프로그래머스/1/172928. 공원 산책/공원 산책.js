function solution(park, routes) {
    var answer = [];
    let start = [0,0];
    // 시작지점찾기 
    for( i = 0; i < park.length; i++){
        for(j=0; j < park[i].length; j++){
            // console.log(park[i],park[j])
            // console.log(j)
            if(park[i][j] === "S") {
               start = [i, j]
            }
        }
    }
    for(let i = 0; i < routes.length; i++){
        const [row,col] = start;
        console.log(row,col)
        const split = routes[i].split(" ")
        const position = split[0];
        const distance = split[1];
        if(position === "E"){
            
        }
    }
    return answer;
}