
const squareNum = (num) => {
    if (num === 1) {
        return 1;
    }
    return Math.pow(num, 2);
}

// const squareNum = (num) => {
//     return num * num;
// };

module.exports = squareNum;