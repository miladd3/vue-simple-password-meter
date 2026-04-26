import { isCommonPassword } from '@/logic/isCommonPassword'

const MIN_PASSWORD_LENGTH = 4
const MAX_SCORE = 4

const scorePassword = (pass: string): number => {
  if (pass.length <= MIN_PASSWORD_LENGTH) {
    return 0
  }

  if (isCommonPassword(pass)) {
    return 0
  }

  const hasSpecialChar = /[^A-Za-z0-9]/.test(pass)
  const hasLowerCase = /[a-z]/.test(pass)
  const hasUpperCase = /[A-Z]/.test(pass)
  const hasNumber = /[0-9]/.test(pass)
  const hasRepeatChars = /(\w)(\1+\1+\1+\1+)/.test(pass)

  const numCharMix = (hasLowerCase || hasUpperCase) && hasNumber ? 1 : 0
  const caseMix = hasUpperCase && hasLowerCase ? 1 : 0
  const specialChar = (hasLowerCase || hasUpperCase || hasNumber) && hasSpecialChar ? 1 : 0

  let length = 0

  if (pass.length > 8) {
    length = 1
  }

  if (pass.length > 12 && !hasRepeatChars) {
    length = 2
  }

  if (pass.length > 20 && !hasRepeatChars) {
    length = 3
  }

  const score = length + specialChar + caseMix + numCharMix

  return Math.min(score, MAX_SCORE)
}

export default scorePassword
