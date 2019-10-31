var fs = require('fs');
let list_rand_numbers=[];
list_rand_numbers[0]=Math.floor(Math.random()*150)
for (var i=1;i<500;i++)
{
 var rand_number= Math.floor(Math.random()*150);
 list_rand_numbers=list_rand_numbers+','+rand_number
}
 


//console.log(list_rand_numbers)
//console.log("lenght: ")
//console.log (list_rand_numbers.length)
fs.appendFile('random500.txt', list_rand_numbers, function (err)
{ 
    if (err) throw err;
    console.log('Saved');
})