import { repeatStr } from "./repeat-str.js";

test("should repeat the string count times", () => {
  const str = "hello";
  const count = 3;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("hellohellohello");
});

test("should repeat the string one time", () => {
  const str = "hello";
  const count = 1;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("hello");
});

test("should return an empty string", () => {
  const str = "hello";
  const count = 0;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("");
});

test("should return invalid when a negative integer is passed", () => {
  const str = "hello";
  const count = -2;
  expect(() => repeatStr(str, count)).toThrow();
});
