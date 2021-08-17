function solution(scores) {
    let array = new Array;
    let sum = 0;
    let grade = "";

    for(let i = 0; i < scores.length; i++) {
        for(let j = 0; j < scores[i].length; j++) {
            sum += scores[i][j];
        }
        sum /= scores.length;
        array.push(sum);
    }
    console.log(array);
    for(let i = 0; i < array.length; i++) {
        if(array[i] >= 90) {
            grade += "A"; 
        } else if(array[i] >= 80 && array[i] < 90) {
            grade += "B";
        } else if(array[i] >= 70 && array[i] < 80) {
            grade += "C";
        } else if(array[i] >= 50 && array[i] < 70) {
            grade += "D";
        } else if(array[i] < 50) {
            grade += "E";
        }        
    }
    return grade;
 }
 

solution([[70, 49, 90], [68, 50, 38], [73, 31, 100]]);

console.log((70 + 49 + 90) / 3)