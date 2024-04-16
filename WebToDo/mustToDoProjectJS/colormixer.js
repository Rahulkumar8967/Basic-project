// Color Mixer Function

function colorMixer(color1, color2){
    let Result;
    switch(`${color1.toLowerCase()}-${color2.toLowerCase()}`){
        case 'red-blue':
        case 'blue-red':
        Result = 'purple' ;
        break;

        case 'red-yellow':
        case 'yellow-red':
        Result = 'orange' ;
        break;

        case 'blue-yellow':
        case 'yellow-blue':
        Result = 'green'  ;
        break;
        default :
        Result = 'Invalid Color combination';
        break;
    }
    console.log(`Resulting color is :${Result}`);
   
}
const color1 = "red";
const color2 = "blue";
colorMixer(color1,color2);
