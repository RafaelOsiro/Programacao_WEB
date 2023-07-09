// Exercicio 1
const matrix = [[1, 2],[3, 4], [5, 6]];
var transposedMatrix = matrixTransposition(matrix);
printTransposedMatrix(transposedMatrix);

function matrixTransposition(matrix) {
	let matrixT = [];

	for (let i = 0; i < matrix[0].length; i++) {
		const column = [];
		for (let j = 0; j < matrix.length; j++) {
			column.push(matrix[j][i]);
		}
		matrixT.push(column);
	}

	return matrixT;
}

function printTransposedMatrix(matrix) {
  var text = "";

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (j == 0 ) {
				text += "[ ";
			}

      text += matrix[i][j];

      if (j != matrix.length) {
        text += ", ";
      }

			if (j == (matrix.length)) {
				text += "]\n";
			}
		}
	}

  console.log(text);
}

// Exercicio 2
const matrixX = [[1, 3], [2, 5]];
const matrixY = [[2, 2], [0, 1]];
var matrixResult = multiplyMatrix(matrixX, matrixY);
printMultipliedMatrix(matrixResult);

function multiplyMatrix(matrix1, matrix2) {

	if(checkIfMatrixCanBeMultiplied(matrix1, matrix2)) {

		let product = [];

		for (let i = 0; i < matrix1.length; i++) {
      let column = [];
			for (let j = 0; j < matrix2[0].length; j++) {
        let result = 0;
				for (let k = 0; k < matrix1[i].length; k++) {
				  result += (matrix1[i][k] * matrix2[k][j]);
				}
       	column.push(result);	
			}
      product.push(column);
		}

    return product;
	} else {
		console.log("A matrix informada não poderá ser multiplicada!");
	}
}

function checkIfMatrixCanBeMultiplied(matrix1, matrix2) {
	if(matrix1.length == Object.keys(matrix2).length) {
		return true;
	} else {
		return false;
	}
}

function printMultipliedMatrix(matrix) {

  var text = "";

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {

      if (j == 0) {
        text += "[";
      }

      text += matrix[i][j];
      
      if (j != (matrix.length -1)) {
        text += ", ";
      }

      if (j == matrix.length -1) {
        text += "]\n";
      }
    }
  }
  console.log(text);
}