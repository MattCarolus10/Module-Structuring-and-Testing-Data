export function isValidPassword(password, passwords = []) {
  if (passwords.includes(password)) {
    return false;
  }
  if (!/[a-z]/.test(password)) {
    return false;
  }
  if (!/[0-9]/.test(password)) {
    return false;
  }
  if (!/[!#$%.*&]/.test(password)) {
    return false;
  }
  return password.length >= 5;
}
