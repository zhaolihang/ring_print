var log = console.log;
function logMat(arr) {
    var spaceArr = ['', ' ', '  ', '   ', '    '];
    var stringLen = 4;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        var str = '';
        for (var _a = 0, item_1 = item; _a < item_1.length; _a++) {
            var num = item_1[_a];
            var numStr = num.toString();
            numStr = numStr + spaceArr[stringLen - numStr.length];
            str += numStr;
        }
        log(str);
        // log(JSON.stringify(item));
    }
}
function getMat(rows, cols) {
    var mat = [];
    for (var row = 0; row < rows; row++) {
        var rowVec = [];
        for (var col = 0; col < cols; col++) {
            rowVec.push('x');
        }
        mat.push(rowVec);
    }
    return mat;
}
function ring() {
    var rows = 5;
    var cols = 5;
    var mat = getMat(rows, cols);
    var maxK = Math.floor((Math.min(rows, cols) + 1) / 2);
    var num = 1;
    var k = 0;
    var row = 0;
    var col = 0;
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
            k++; //奇数列 中间列
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
//# sourceMappingURL=index.js.map