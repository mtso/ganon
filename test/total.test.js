const { total } = require("../lib");

describe("total", () => {
  test("returns 0 if given no number argumets", () => {
    expect(total()).toEqual(0);
    expect(total(null)).toEqual(0);
  });

  test("returns the sum of two arguments", () => {
    expect(total(1, 2)).toEqual(3);
  });

  test("returns the sum of three arguments", () => {
    expect(total(1, 2, 3)).toEqual(6);
  });

  test("returns the sum of many arguments", () => {
    expect(total(1, 1, 1, 1, 1, 1, 1, 1, 1, 1)).toEqual(10);
  });

  test("ignores non-number arguments", () => {
    expect(total(1, "2", 3, [], {0: 6})).toEqual(4);
  });

  test("handles negative arguments", () => {
    expect(total(1, -1, 2, -2)).toEqual(0);
  });

  test("handles floats", () => {
    expect(total(1.3, 2.2)).toEqual(3.5);
  });
});
