import scorePassword from './scorePassword'
import nameScore from './nameScore'

const checkStrength = pass => {
  const score = scorePassword(pass)
  return nameScore(score)
}

export default checkStrength
