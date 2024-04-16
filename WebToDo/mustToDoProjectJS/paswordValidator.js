function validatePassword(password, confirmPassword){
if(password == confirmPassword){
    console.log("password Matched, password validation successful");
}else{
    console.log("password didn't match,password validation unsuccessful");
}
}

const enterPassword = "myPassword@123";
const confirmPassword = "myPassword@123";

validatePassword(enterPassword,confirmPassword);