function checkDivisibility(num){
    for(let i=0;i<num.length;i++){
        if(num[i]%3 ==0 && num[i]%2 !=0 ){
            console.log(num[i]);
        }else{
            continue;
        }
    }
}
// Example 
const numArray = [0,7,4,21,9];
checkDivisibility(numArray);