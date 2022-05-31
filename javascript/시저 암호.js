function solution(s, n) {
    var answer = "";
        for(let j = 0; j < s.length; j++){
            if(s[j] == ' '){
                answer += ' '
                continue;
            }

            if((s.charCodeAt(j) + n > 122)){
                answer += String.fromCharCode(s.charCodeAt(j) + n - 26);
                continue;
            }
            answer += String.fromCharCode(s.charCodeAt(j) + n);
        }

    return answer;
}