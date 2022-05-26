function solution(n) {
    var answer = 0;
    
    answer = 
        n.toString().split("").sort(function(a, b)     {
        return b - a;
    }).join("");
    
    return +answer;
}