import { isProperFraction } from "../implement/2-is-proper-fraction.js";

test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

test(`Should return false when denominator is negative`, () => {
  expect(isProperFraction(1, -2)).toEqual(false);
});

test(`Should return true when denominator is > numerator`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
});

test(`Should return true when numerator is zero`, () => {
  expect(isProperFraction(0, 4)).toEqual(true);
});

test(`Should return false when numerator === denominator`, () => {
  expect(isProperFraction(5, 5)).toEqual(false);
});
