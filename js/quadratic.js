let x1, x2;

function quadratic(a, b, c) {
    let dscrm = b * b - 4 * a * c;
    if(a === 0 )console.log("A can't be 0")
    else if (dscrm > 0) {
        x1 = (-b + Math.sqrt(dscrm)) / (2 * a);
        x2 = (-b - Math.sqrt(dscrm)) / (2 * a);
        console.log(`Positive Sum ${x1}, Negative Sum ${x2}`);
    }    
    else if (dscrm === 0) {
        x1 = x2 = -b / (2 * a);
        console.log(`Positive Sum ${x1}, Negative Sum ${x2}`);
    }    
    else {
        let realPart = (-b / (2 * a)).toFixed(2);
        let imagPart = (Math.sqrt(-dscrm) / (2 * a)).toFixed(2);
    
        console.log(`Positive sum  ${realPart} + ${imagPart}i, Ngeative sum ${realPart} - ${imagPart}i`);
    }
}

quadratic(2, 0, 1);