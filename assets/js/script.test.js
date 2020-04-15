const { gameRules } = require("./script");

test("gameRules() computes the logic of the game for players to determine if they are making right moves", () => {
  expect(gameRules("3S", "4S")).toBe(false);
  expect(gameRules("QS", "3D")).toBe(false);
  expect(gameRules("QS", "AD")).toBe("AD");
  expect(gameRules("5S", "6S")).toBe("6S");
  expect(gameRules("5S", "AD")).toBe("AD");
  expect(gameRules("5S", "AS")).toBe("AS");
});
