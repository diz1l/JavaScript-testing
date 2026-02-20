const squareNum = require("./squareNum");

describe("squareNumTest", () => {
  beforeEach(() => {
    console.log("before each test");
  });

  beforeAll(() => {
    console.log("before all tests");
  });

  test("should return square of number 1", () => {
    expect(squareNum(2)).toBe(4);
  });
  test("should return square of number 2", () => {
    expect(squareNum(-2)).toBe(4);
  });
  test("should return square of number 3", () => {
    expect(squareNum(0)).toBe(0);
  });
  test("should return square of number 4", () => {
    expect(squareNum(1.5)).toBeCloseTo(2.25);
  });
  test("should return square of number 5", () => {
    expect(squareNum(1)).toBeCloseTo(1);
  });
  test("should return square of number 6", () => {
    expect(squareNum(2)).toBeLessThan(5);
  });
  test("should return square of number 7", () => {
    expect(squareNum(2)).toBeGreaterThan(3);
  });
  test("should return square of number 8", () => {
    expect(squareNum(2)).not.toBeUndefined();
  });

  test("mock1", () => {
    const mockFn = jest.spyOn(Math, "pow");
    squareNum(2);
    expect(mockFn).toHaveBeenCalledTimes(1);
    mockFn.mockRestore();
  });

  test("mock2", () => {
    const mockFn = jest.spyOn(Math, "pow");
    squareNum(1);
    expect(mockFn).toHaveBeenCalledTimes(0);
    mockFn.mockRestore();
  });

  afterEach(() => {
    console.log("after each test");
  });

  afterAll(() => {
    jest.clearAllMocks();
    console.log("after all tests");
  });
});
