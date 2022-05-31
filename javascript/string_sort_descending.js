function solution(n)
{
    var answer = 0;
    var n = n.toString();

    for(let i = 0; i < n.length; i++){
        answer += +n[i];    
    }

    return answer;
}