function celTofarh(celcius){

    if(typeof celcius != 'number'){
      console.error('Invalid input please provide a vaid number for celcius temperature');
      return;
    }
    const farenheit = (celcius* 9/5)+ 32;
    return farenheit;
}

const celciusTemp = 25;
const farenheitTemp = celTofarh(celciusTemp);
console.log(`${celciusTemp} Celcius is equal to ${farenheitTemp} farenheit`);


/*

 console.log("1st -> ",[] + []);  // output ->  kuch nhi

 console.log("2nd ->",2 + "2" - 2);   // output ->  20

  console.log("3rd",NaN === NaN);    // output -> false

 console.log(  "4th ->","b" + "a" + +"a" + "a");   // output -> baNaNa 

 console.log("5th ->",true + false);     // output ->  1

 */