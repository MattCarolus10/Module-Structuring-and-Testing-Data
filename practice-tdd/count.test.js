import { countChar } from "./count.js";

test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});

test("should count multiple occurrences of a character", () => {
  const str = "shall";
  const char = "l";
  const count = countChar(str, char);
  expect(count).toEqual(2);
});

test("Should return 0 when value does not exist in str", () => {
  const str = "again";
  const char = "e";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

test("Should return 0 when string is empty", () => {
  const str = "";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});



