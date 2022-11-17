import scorePassword from './scorePassword'
import nameScore from './nameScore'

const checkStrength = (pass, lengthConfig) => {
  const score = scorePassword(pass, lengthConfig)
  return nameScore(score)
}

export default checkStrength
