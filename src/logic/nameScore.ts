const nameScore = (score: number): string => {
  switch (score) {
    case 0:
      return 'risky'
    case 1:
      return 'guessable'
    case 2:
      return 'weak'
    case 3:
      return 'safe'
    case 4:
      return 'secure'
    default:
      return ''
  }
}

export default nameScore
