function solution(num_list) {
    let sum = 0;
    let product = 1;
    num_list.forEach((num) =>{
            product *= num;
        sum += num;   
    }
    )
    return product < sum **2 ? 1:0;
}