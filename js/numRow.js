var generate = function (numRows) {
    const triangleArray = [];

    for (let i = 0; i < numRows; i++) {
      const row = [];
    
      for (let j = 0; j <= i; j++) {
        const last = triangleArray[i - 1] || [];
        const sum = last[j - 1] + last[j];
        row.push(sum || 1);
      }
  
      triangleArray.push(row);
    }
  
    return triangleArray;
  };

console.log(generate(3));