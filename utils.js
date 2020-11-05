const reader = require('readline-sync');

function matrixProduct(mat1,mat2){
    let result = [];
    for(i=0; i<mat1.length;i++){
        let newRow = [];
        for(j=0; j<mat2[0].length;j++){
            let product =0;
            for(x=0; x<mat1[i].length;x++){
                product += mat1[i][x]*mat2[x][j];
            }
            newRow.push(product);
        }
        result.push(newRow);
    }
    return result;
}

function insertMatrixFromUser(){
    const rows = reader.questionInt("how many rows does the matrix have? ");
    const cols = reader.questionInt("how many cols does the matrix have? ");
    const matrix = [];
    for(rowIndex=0; rowIndex<rows; rowIndex++){
        const row = [];
        for(colIndex=0; colIndex<cols;colIndex++){
            row.push(reader.questionInt(`insert value for [${rowIndex}][${colIndex}] `));
        }
        matrix.push(row);
    }
    return matrix;
}

function sumOfMatrices(mat1,mat2){
    let result = [];
    for(i=0; i<mat1.length;i++){
        let newRow = [];
        for(j=0;j<mat1[0].length;j++){
            let sum = 0;
            sum = mat1[i][j]+mat2[i][j];
            newRow.push(sum);
        }
        result.push(newRow);
    }
    return result;
}

function sumOfArray(arr){
    let sum = 0;
    for(i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}

function sumOfEachRow(mat){
    let result = [];
    for(j=0; j<mat.length; j++){
        result[j] = sumOfArray(mat[j]);
    }
    return result;
}

module.exports = {
    matrixProduct,
    insertMatrixFromUser,
    sumOfMatrices,
    sumOfArray,
    sumOfEachRow
}