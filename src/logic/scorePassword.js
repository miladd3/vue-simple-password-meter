const scorePassword = pass => {
  let score = 0;
  let length = 0;
  let specialChar = 0;
  let caseMix = 0;
  let numCharMix = 0;

  let specialCharRegex = /[^A-Za-z0-9]/g;
  let lowercaseRegex = /(.*[a-z].*)/g;
  let uppercaseRegex = /(.*[A-Z].*)/g;
  let numberRegex = /(.*[0-9].*)/g;
  let repeatCharRegex = /(\w)(\1+\1+\1+\1+)/g;

  let hasSpecialChar = specialCharRegex.test(pass);
  let hasLowerCase = lowercaseRegex.test(pass);
  let hasUpperCase = uppercaseRegex.test(pass);
  let hasNumber = numberRegex.test(pass);
  let hasRepeatChars = repeatCharRegex.test(pass);

  if (pass.length > 4) {
    if ((hasLowerCase || hasUpperCase) && hasNumber) {
      numCharMix = 1;
    }

    if (hasUpperCase && hasLowerCase) {
      caseMix = 1;
    }

    if ((hasLowerCase || hasUpperCase || hasNumber) && hasSpecialChar) {
      specialChar = 1;
    }

    if (pass.length > 8) {
      length = 1;
    }

    if (pass.length > 12 && !hasRepeatChars) {
      length = 2;
    }

    if (pass.length > 25 && !hasRepeatChars) {
      length = 3;
    }

    score = length + specialChar + caseMix + numCharMix;

    if (score > 4) {
      score = 4;
    }
  }

  return score;
};

export default scorePassword;
