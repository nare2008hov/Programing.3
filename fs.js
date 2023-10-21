var fs = require('fs');
let random = require("./random");

function main(){
fs.writeFile("hello.txt", "Hello world\n", function(err){
console.log("fs.writeFile ended");
});
console.log("fs.writeFile");
}

main();