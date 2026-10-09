export function getOrdinalNumber(num) {
  const lastDigit = num % 10;
  const lastTwoDigits = num % 100;

  if (lastTwoDigit >= 11 && lastTwoDigits <= 13) {
    return `${num}th`;
  }
  if (lastDigit === 1) {
    return "1st"; 
  }
  if (lastDigit === 2) {
    return "2nd";
  }
  if (lastDigit === 3) {
    return "3rd";
  }

}
console.log(getOrdinalNumber(10))

  