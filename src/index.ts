/* 环形打印数字
1   2   3   4   5
16  17  18  19  6
15  24  25  20  7
14  23  22  21  8
13  12  11  10  9
*/

let log = console.log;

function logMat(arr: number[][]) {
    let spaceArr: string[] = ['', ' ', '  ', '   ', '    '];
    let stringLen = 4;
    for (const item of arr) {
        let str = '';
        for (const num of item) {
            let numStr = num.toString()
            numStr = numStr + spaceArr[stringLen - numStr.length];
            str += numStr;
        }
        log(str);
        // log(JSON.stringify(item));
    }
}

function getMat(rows: number, cols: number) {
    let mat: number[][] = [];
    for (let row = 0; row < rows; row++) {
        let rowVec = [];
        for (let col = 0; col < cols; col++) {
            rowVec.push('x');
        }
        mat.push(rowVec);
    }
    return mat;
}

function ring() {
    let rows = 5;
    let cols = 5;
    let mat = getMat(rows, cols);
    let maxK = Math.floor((Math.min(rows, cols) + 1) / 2);
    let num = 1;
    let k = 0;
    let row = 0;
    let col = 0;
    while (k < maxK) {
        // 从左到右
        while (col < cols - k) {
            mat[row][col] = num;
            num++;
            col++;
        }
        if (rows < cols && rows % 2 === 1 && row === maxK - 1) {
            k++; //奇数行 中间行
            continue;
        }
        row++;
        col--;

        // 从上到下
        while (row < rows - k) {
            mat[row][col] = num;
            num++;
            row++;
        }
        if (cols < rows && cols % 2 === 1 && col === maxK - 1) {
            k++;//奇数列 中间列
            continue;
        }
        row--;
        col--;

        // 从右到左
        while (col >= k) {
            mat[row][col] = num;
            num++;
            col--;
        }
        row--;
        col++;


        // 从下到上
        while (row > k) {
            mat[row][col] = num;
            num++;
            row--;
        }
        row++;
        col++;

        // last
        k++;
    }
    logMat(mat);
}
ring();