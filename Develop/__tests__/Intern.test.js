const Intern = require("../lib/Intern");

test("Can instantiate Intern instance", () => {
  const e = new Intern();
  expect(typeof(e)).toBe("object");
});

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Jin", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Jin", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern("Jin", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});