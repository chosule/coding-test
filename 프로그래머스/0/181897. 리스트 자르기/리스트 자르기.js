function solution(n, slicer, num_list) {
    const [a,b,c] = slicer;
    if(n == 1){
        return num_list.slice(0, b + 1)
    }else if(n == 2){
        return num_list.slice(slicer[0]);        
    }else if(n == 3){
        return num_list.slice(slicer[0], b + 1);
    }else{
        let arr = [];
        for(let i = a; i <= b; i += c ){
            arr.push(num_list[i])
        }
        return arr;
    }
}