function solution(arr1, arr2) {
    let arr1SumResult = 0; //arr1 총합
    let arr2SumResult = 0; //arr2 총합
    
    for(const arr1Sum of arr1){
        arr1SumResult += arr1Sum;    
    }
    for(const arr2Sum of arr2){
        arr2SumResult += arr2Sum;
    }
    
    // 배열의 길이가 같다면 
    if(arr1.length === arr2.length){
        //배열에 있는 모든 원소의 합을 비교
        if(arr1SumResult > arr2SumResult){
            return 1;
        }else if(arr1SumResult < arr2SumResult){
            return -1;
        }else{
            return 0;
        }
    }else if(arr1.length > arr2.length){
        return 1;
    }else{
        return -1;
    }
    return 0;
   
}