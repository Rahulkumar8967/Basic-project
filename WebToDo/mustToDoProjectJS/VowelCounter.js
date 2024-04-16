function countVowels(string){
    let vowels = 'aAeEiIoOuU';
    let vowelsCount = 0;
    for(let i=0;i<string.length;i++){
        if(vowels.indexOf(string[i] !== -1)){
        vowelsCount += 1;
        }
    }
    return vowelsCount;
}
// console.log("The Number of vowels in -> " + " A Computer Science Portal for students is"+ countVowels("A Computer Science Portal for students "));
const string1 = 'Rahul';
console.log(countVowels(string1));