import assert from "node:assert";
import test from "node:test";

import { getAngleType } from "../implement/1-get-angle-type.js";

test("Classifies right angles", () => {

  const right = getAngleType(90);
  assert.equal(right, "Right angle");
});

test("Classifies acute angles", () =>{

  const acute = getAngleType(45);
  assert.equal(acute, "Acute angle");
});

test("Classifies obtuse angle", () => {

  const obtuse = getAngleType(140);
  assert.equal(obtuse, "Obtuse angle");
});

test("Classifies straight angle", () => {

  const straight = getAngleType(180);
  assert.equal(straight, "Straight angle");
});

test("Classifies reflex angle", () => {

  const reflex = getAngleType(250);
  assert.equal(reflex, "Reflex angle");
});

test("Classifies invalid angle", () => {

  assert.equal(getAngleType("-1"), "Invalid angle");
  assert.equal(getAngleType("365"), "Invalid angle");
});