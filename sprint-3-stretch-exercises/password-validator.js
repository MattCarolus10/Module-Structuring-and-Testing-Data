export function isValidPassword(password, passwords = []) {
  if (password.includes(password)) {
    return false
  }
  return password.length >= 5;
}
