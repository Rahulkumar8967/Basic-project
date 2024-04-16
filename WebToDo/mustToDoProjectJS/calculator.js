// calculator function

function calculator( num1 ,  num2, operator){
let result;
switch(operator){
    case '+':
        result = num1 + num2;
        break;
        case '-':
            result = num1 - num2;
            break;
            case '*':
                result = num1 * num2;
                break;
                case '/':
                    result = num1/num2;
                    break;
            default:
                console.log("Invalid Operator");
                return;
}
 console.log(`Result: ${result}`);
}
// Example usage:
const number1 = 10;
const number2 = 5;
const operation = '*';

calculator(number1, number2, operation);

