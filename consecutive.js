var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let maxCount = 0;
    
    for(let number of nums){
        if(number === 1){ 
            count += 1;
        }
        else {
          count = 0;            
        }     
        if(count > maxCount){
            maxCount = count;
        }    
    }
    return maxCount;
    
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));