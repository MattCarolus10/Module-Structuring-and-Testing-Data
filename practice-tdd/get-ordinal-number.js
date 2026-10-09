export function getOrdinalNumber(num) {
  const lastDigit = num % 10;
  const lastTwoDigits = num % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return `${num}th`;
  }
  if (lastDigit === 1) {
    return `${num}st`;
  }
  if (lastDigit === 2) {
    return "2nd";
  }
  if (lastDigit === 3) {
    return "3rd";
  }
  return `${num}th`;
}
console.log(getOrdinalNumber(21))
