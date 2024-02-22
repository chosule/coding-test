function solution(a, b, c, d) {

    let arr = [a,b,c,d] //1,2,2,4 가정
    let arrMaxInt = Math.max(...arr) //제일큰수 4 출력
    
    if(arr.every(val=>val === a)) return 1111*a 
    
    if(new Set(arr).size == arr.length) return Math.min(...arr) //중복값제거한 사이즈 값 4 와 4 가 같으면 1,2,2,4 중에서 가장 작은 2 출력 // 2
    
    let countTable = new Array(arrMaxInt+1).fill(0) //
    arr.forEach((ele,idx)=>{ 
        countTable[ele]++
    })
    let map = []
    countTable.forEach((ele,idx)=>{
         if(0 < ele){
             map.push([idx,ele])
         }
    })
    if(map.length == 2){
        if(map[0][1] == map[1][1]){
            let p = Math.max(map[0][0],map[1][0])
            let q = Math.min(map[0][0],map[1][0])
            return (p+q)*(p-q)
        }else{
            let maxp
            let minq
            let p = Math.max(map[0][1],map[1][1])
            let q = Math.min(map[0][1],map[1][1])
            for(let i = 0; i < map.length; i++){
                if(map[i][1] == p)maxp = map[i][0]
                if(map[i][1] == q)minq = map[i][0]
            }

            return (10*maxp+minq)**2

        }
    }else{
        let arr = []
        map.forEach((ele,idx)=>{
            if(map[idx][1] == 1){
                arr.push(map[idx][0])
            }
        })
        return arr[0]*arr[1]
    }


}