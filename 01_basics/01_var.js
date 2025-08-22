const accountId = 14453
let accountEmail= "nishant@gmail.com"
var accountPassword = "12345"
/* 
Prefer not to use var because of issue in block scope and functional scope.
*/ 
accountCity = "kanpur"
let accountState;  //intial value = undefined

// accountId = 2    not allowed
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
accountEmail="example@email.com"
accountPassword ="Admin12345"
console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);
