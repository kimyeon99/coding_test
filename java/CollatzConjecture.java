class Solution {
    public int solution(long num) {
        int answer = 0;
        if (num == 1) return 0;
        for(int i = answer; i <= 500; i++){
            if(answer == 500){
                return -1;
            }
            if(num%2 == 0){
                num = num/2;
            } else{
                num = 3 * num + 1;
            }
            answer++;
            if(num == 1){
                break;
            }
        }
        return answer;
    }
}