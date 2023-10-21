const accountId = 122223;
let accountEmail = "asajl@gmail.com"
var accountPassword = '12345'
accountCity = "Jaipur"

//accountId = 2;
accountEmail = "hc@hsc.com"
accountCity = "bengaluru"

/*0
prefer not to use var because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);