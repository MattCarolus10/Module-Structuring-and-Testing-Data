import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

test(`Should return 10 when given "J" "Q" "K" face card`, () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♥")).toEqual(10);
  expect(getCardValue("K♣")).toEqual(10);
});

test(`Should return 2 to 10 when given Number card`, () => {
  expect(getCardValue("2♣")).toEqual(2);
  expect(getCardValue("5♥")).toEqual(5);
  expect(getCardValue("8♠")).toEqual(8);
});

test(`Should throw error when given invalid card`, () => {
  expect(() => getCardValue("x♣")).toThrow();
  expect(() => getCardValue("1♥1")).toThrow();
  expect(() => getCardValue("b♣")).toThrow();
  expect(() => getCardValue("k♦j")).toThrow();
});











// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror

