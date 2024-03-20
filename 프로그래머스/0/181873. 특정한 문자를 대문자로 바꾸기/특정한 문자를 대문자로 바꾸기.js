function solution(my_string, alp) {
    const result = [...my_string].map((str) =>{
        if(str === alp){
            return str.toUpperCase();
        }else{
            return str
        }
        
    })  
    return result.join("")
}