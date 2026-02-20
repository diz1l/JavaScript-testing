const mapArrToString = (arr) => {
    return arr
        .filter(item => Number.isInteger(item))
        // .map(prev => prev.toString());
        .map(String);
};

module.exports = mapArrToString;