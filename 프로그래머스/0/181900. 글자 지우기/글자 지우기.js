// my_string = "apporoograpemmemprs";
// indices = [1, 16, 6, 15, 0, 10, 11, 3]
function solution(my_string, indices) {
    const str = my_string.split("");
    indices.forEach((index) => str[index] = "");
    
    return str.join("");
}