export function isProperFraction(numerator, denominator) {
  if (numerator < denominator) {
    return true;
  }
  if (numerator > denominator) {
    return false;
  }
  if (numerator === denominator){
    return false
  }
  if (-numerator < denominator) {
    return true;
  }
  if (numerator > -denominator) {
    return false;
  }
}
