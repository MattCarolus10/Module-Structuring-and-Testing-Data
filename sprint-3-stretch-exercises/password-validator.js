export function isValidPassword(password, passwords = []) {
  if (passwords.includes(password)) {
    return false
  }

  return password.length >= 5;
}
