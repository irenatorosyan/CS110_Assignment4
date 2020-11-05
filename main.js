const reader = require('readline-sync');
const util = require('./utils');

// let matrix1_1 = util.insertMatrixFromUser();
// let matrix1_2 = util.insertMatrixFromUser();
// console.log(util.matrixProduct(matrix1_1, matrix1_2));

// let matrix2_1 = util.insertMatrixFromUser();
// let matrix2_2 = util.insertMatrixFromUser();
// console.log(util.sumOfMatrices(matrix2_1, matrix2_2));

let matrix3_1 = util.insertMatrixFromUser();
console.log(util.sumOfEachRow(matrix3_1));
