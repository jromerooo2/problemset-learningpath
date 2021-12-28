var getRow = function(rowIndex) {
    var result = [];
    for (var i = 0; i <= rowIndex; i++) {
        result.push(1);
        for (var j = i - 1; j > 0; j--) {
        result[j] = result[j] + result[j - 1];
        }
    }
    return result;
}

console.log(getRow(3));