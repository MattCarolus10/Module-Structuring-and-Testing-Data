function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3);

  if (hours === 12) {
    return `12:${minutes}pm`;
  }

  if (hours === 0) {
    return `12:${minutes}am`;
  }

  if (hours > 12) {
    return `${hours - 12}:${minutes}pm`;
  }
  return `${time}am`;
}
console.log(formatAs12HourClock("00:00"));

export { formatAs12HourClock };
