function listMatrixConversion( data, count ){
    let matrixified = [];
    let tmp;
    for( let i = 0; i < data.length; i++ ){
        if( i % count == 0 ){
            if( tmp && tmp.length ) 
                matrixified.push(tmp);
            tmp = [];
        }
        tmp.push(data[i])
    }
    matrixified.push(tmp);
    return matrixified;
}

const isSquare = function (n) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
};

function rotatematrix(mat){
	let row = 0, col = 0;
	let prev, curr;
    let m = n = mat.length
	while (row < m && col < n){
		if (row + 1 == m || col + 1 == n)
			break;

		prev = mat[row + 1][col];

		for(let i = col; i < n; i++){
			curr = mat[row][i];
			mat[row][i] = prev;
			prev = curr;
		}
		row++;

		for(let i = row; i < m; i++){
			curr = mat[i][n - 1];
			mat[i][n - 1] = prev;
			prev = curr;
		}
		n--;

		if (row < m){
			for(let i = n - 1; i >= col; i--)
			{
				curr = mat[m - 1][i];
				mat[m - 1][i] = prev;
				prev = curr;
			}
		}
		m--;

		if (col < n){
			for(let i = m - 1; i >= row; i--)
			{
				curr = mat[i][col];
				mat[i][col] = prev;
				prev = curr;
			}
		}
		col++;
	}
    return mat.flat()
}

module.exports = {
    listMatrixConversion,
    rotatematrix,
    isSquare
}