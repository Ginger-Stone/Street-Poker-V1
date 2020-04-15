const { functions, multiplication } = require("./functions");

test("properly adds two numbers", () => {
  expect(functions.sum(1, 2)).toBe(3);
});

test("should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("properly multiplies two numbers", () => {
  expect(multiplication(3, 2)).toBe(6);
});
