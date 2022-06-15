function solution(s){
    var countP = 0;
    var countY = 0;
    
    s.split('').map(i => {
        if(i == 'p' || i == 'P'){countP++}
        else if(i == 'y' || i == 'Y'){countY++}
    })
    
    if(countP == countY){
        return true;
    }
    return false;
}