import scorePassword from './scorePassword'
import nameScore from './nameScore'

const checkStrength = (pass: string) => {
  const score = scorePassword(pass)
  return nameScore(score)
}

export default checkStrength
