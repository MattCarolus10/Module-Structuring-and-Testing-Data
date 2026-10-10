import { isValidPassword } from "./password-validator.js";
test("password has at least 5 characters", () => {
 
  const password = "Ab12#";
  const result = isValidPassword(password);
  expect(result).toEqual(true);
});

test("Password has at least one upperCase letter", () => {
  const password = "Ab12#";
  const result = isValidPassword(password);
  expect(result).toEqual(true);
});

test("Password has at least one lowerCase letter", () => {
  const password = "Ab12#";
  const result = isValidPassword(password);
  expect(result).toEqual(true);
});

test("Password has at least one number 0 - 9", () => {
  const password = "Ab12#";
  const result = isValidPassword(password);
  expect(result).toEqual(true);
});

test("Password has at least one special non-alphanumeric symbols", () => {
  const password = "Ab12#";
  const result = isValidPassword(password);
  expect(result).toEqual(true);
});

test("Password must not be a previous password", () => {
    const password = "Ab12#";
    const passwords = ["Ab12#"];
    const result = isValidPassword(password, passwords);
    expect(result).toEqual(false);
});

