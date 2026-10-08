import assert from "node:assert";
import test from "node:test";

import { getAngleType } from "../implement/1-get-angle-type.js";

// TODO: Write tests to cover all cases, including boundary and invalid cases.
// Example: Identify Right Angles

test("Classifies right angles", () => {
  const right = getAngleType(90);
  assert.equal(right, "Right angle");
});

test("Classifies acute angles", () =>{
  const acute = getAngleType(45);
  assert.equal(acute, "Acute angle")
})

test("Classifies obtuse angle", () => {
  const obtuse = getAngleType(140);
  assert.equal(obtuse, "Obtuse angle")
})

test("Classifies straight angle", () => {
  const straight = getAngleType(180);
  assert.equal(straight, "Straight angle")
})