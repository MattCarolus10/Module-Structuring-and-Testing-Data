export function isValidPassword(password, password = []) {
  if (password.includes(password)) {
    return false
  }
  return password.length >= 5;
}
