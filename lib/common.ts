/**
 * Generate cryptographically secure random secret key
 * @param length - Number of bytes to generate (default: 64)
 * @returns Hexadecimal string of the generated secret
 */
export function generateSecret(length: number = 64): string {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}
