import { getOrdinalNumber } from "./get-ordinal-number.js";

test("should append 'st' for numbers ending with 1, except those ending with 11", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(131)).toEqual("131st");
});

test("Should append 'nd' for numbers ending with 2, except those ending with 12", () => {
expect(getOrdinalNumber(2)).toEqual("2nd");
expect(getOrdinalNumber(22)).toEqual("22nd");
expect(getOrdinalNumber(122)).toEqual("122nd");
})

test("Should append 'rd' for numbers ending with 3, except those ending with 13", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(33)).toEqual("33rd");
  expect(getOrdinalNumber(133)).toEqual("133rd");
})

test("Should append 'th' for all numbers including 11, 12, 13, except those ending in 1, 2, 3", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
  expect(getOrdinalNumber(10)).toEqual("10th");
  expect(getOrdinalNumber(111)).toEqual("111th");
})
