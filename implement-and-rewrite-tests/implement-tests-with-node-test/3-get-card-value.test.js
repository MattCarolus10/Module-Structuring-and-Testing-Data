import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

test("Valid single-digit card", () => {
  assert.equal(getCardValue("9♠"), 9);
});

test("Ace card returns 11", () => {
  assert.equal(getCardValue("A♠"), 11);
});

test("Face cards returns 10", () => {
  assert.equal(getCardValue("J♣"), 10);
  assert.equal(getCardValue("Q♦"), 10);
  assert.equal(getCardValue("K♥"), 10);
});
test("Arbitrary non-card string", () => {
  assert.throws(
    () => getCardValue("invalid"),
    /Expected a number followed by a suit, but got "invalid"/,
    "Expected clear error"
  );
});
