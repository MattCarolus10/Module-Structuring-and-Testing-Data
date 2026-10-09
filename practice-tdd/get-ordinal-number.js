export function getOrdinalNumber(num) {
  const lastDigit = num % 10;
  const lastTwoDigits = num % 100;

  if (lastTwoDigit >= 11 && lastTwoDigits <= 13) {
    return `${num}th`;
  