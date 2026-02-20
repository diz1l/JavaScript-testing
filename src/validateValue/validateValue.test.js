const validateValue = require("./validateValue");

// test("valide", () => {
//   expect(validateValue(50)).toBe(true);
// });

describe("validateValueTest", () => {
  test("valide", () => {
    expect(validateValue(50)).toBe(true);
  });
  test("valideLeft", () => {
    expect(validateValue(0)).toBe(true);
  });
  test("valideRight", () => {
    expect(validateValue(100)).toBe(true);
  });
  test("invalide", () => {
    expect(validateValue(-50)).toBe(false);
  });
  test("invalide2", () => {
    expect(validateValue(150)).toBe(false);
  });
});
