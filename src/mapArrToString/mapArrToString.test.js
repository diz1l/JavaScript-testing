const mapArrToString = require('./mapArrToString');

describe("mapArrToStringTest", () => {
    test("should return array of strings 1", () => {
        expect(mapArrToString([1, 2, 3])).toEqual(["1", "2", "3"]);
    });
    test("should return array of strings 2", () => {
        expect(mapArrToString([1, 2, 3, null, undefined, 4, "blabla"])).not.toEqual(["1", "2", "3"]);
    });
    test("should return array of strings 3", () => {
        const result = mapArrToString([1, 2, 3, null, undefined]);
        expect(result).toEqual(["1", "2", "3"]);
        expect(result).toHaveLength(3);
    });
    test("should return array of strings 4", () => {
        expect(mapArrToString([])).not.toEqual(["1", "2", "3"]);
    });
    test("should return array of strings 5", () => {
        expect(mapArrToString([])).toEqual([]);
    });
});