const scorePassword = pass => {
  let score = 0
  let length = 0

  const repeatCharRegex = /(\w)(\1+\1+\1+\1+)/g
  const hasRepeatChars = repeatCharRegex.test(pass)

  if (pass.length > 4) {
    if (pass.length > 8) {
      length = 1
    }

    if (pass.length > 15) {
      length = 2
    }

    if (pass.length > 25 ) {
      length = 4
    }

    score = length

    if (score > 4) {
      score = 4
    }
  }

  return score
}

export default scorePassword
