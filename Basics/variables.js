const accountId = 14543;
let accountEmail = "yogesh22@gmail.com";
var accountPassword = "Yogesh@1234";
accountCity = "Pune";

// accountId = 12345; // we cannot change the value of accountId because it is a constant variable
accountEmail = "yogesh34@gmail.com";
accountPassword = "Yogesh@5678";
accountCity = "Mumbai";

/* Prefer not to use 'var' for variable declaration as it is block function-scoped and can lead to unexpected behaviors. Use 'let' or 'const' instead. */

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity]);
