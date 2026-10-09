import { countChar } from "./count.js";

test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});

test("Should return 0 when value does not exist in str", () => {
  const str = "zzzzz";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});
