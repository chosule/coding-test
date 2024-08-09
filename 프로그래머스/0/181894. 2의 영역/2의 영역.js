function solution(arr) {
    let firstIndex = -1;
    let lastIndex = -1;
    let result = [];    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 2){
            if(firstIndex == -1){
                firstIndex = i;
            }else{
                lastIndex = i;
                console.log(lastIndex)
            }
        }
    }

    if(firstIndex == -1){
        return [-1];
    }
    if(lastIndex == -1 ){
        return [2]
    }
    return arr.slice(firstIndex , lastIndex + 1);

}