var fs = require('fs');
let results=[]

var data = fs.readFileSync('random500.txt', 'utf8');
//console.log(data)
//console.log(data.length)

var numbers=data.split(",").map(function(i){return parseInt(i,10);})
//console.log(numbers)
//console.log(numbers.length)
for (var i=0;i<numbers.length;i++)
{ 
    if (numbers[i]%15==0)
    {
        results[i]="fizzbuzz"
    }
    
    
    else if (numbers[i]%5==0)
    {
        results[i]="buzz"
    }
    
    else if (numbers[i]%3==0)
    {
        
        results[i]="fizz"
    }
    
    else
    {
        results[i]=numbers[i]
    }



}

console.log(results)



fs.appendFile('results.txt', results, function (err)
{ 
    if (err) throw err;
    console.log('Saved');
})