
import commonPasswords  from '../data/commonPasswords';

export const isCommonPassword = (password)  => {
  return commonPasswords.includes(password);
}
