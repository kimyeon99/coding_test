function solution(phone_number) {
    const a = len(phone_number);
    var answer = phone_number.replace(phone_number.substring(0,phone_number.length - 4), a);
    console.log(answer);
    return answer;
}