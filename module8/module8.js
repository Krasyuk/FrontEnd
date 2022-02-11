// 1 task

function runningAverage(){
    let numbers = [];
    
    return function(x){
        numbers.push(x);
        sum = 0;
        for(let elem of numbers){
        
            sum = sum + elem;
        }

        return sum / numbers.length;
    }
}

let rAvg = runningAverage();
console.log(rAvg(10));
console.log(rAvg(11));
console.log(rAvg(12));

// 2 task

function sum(a,b) {

    if (typeof b !== "undefined"){
        return a + b;
    } else {

        let currentSum = a;
                                                                                            
        function f(b) {
        currentSum += b;
        return f;
        }

        f.toString = function() {
        return currentSum;
        };

        return f;
    }
}

alert(sum(2,3))
alert(sum(2)(3))
alert(sum(1)(2)(3)(4))
 
   


