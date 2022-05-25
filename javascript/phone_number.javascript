function solution(phone_number) {
    const a = len(phone_number);
    var answer = phone_number.replace(phone_number.substring(0,phone_number.length - 4), a);
    return answer;
}
function len(phone_number){
    var leng = '';
    for(let i = 0; i < phone_number.length - 4; i++) {
        leng += '*';
    }
    return leng;
}