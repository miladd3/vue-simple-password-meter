/*
 check to see if it is a common password
 */

import commonPasswords  from '../data/commonPasswords';

export const isCommonPassword = (password: string): boolean => {
  return commonPasswords.includes(password);
}
