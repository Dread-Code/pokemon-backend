const passwordValidation = password => {
  const errors = []
  if (!password.match(/\d/g)) {
    errors.push('The password should have at least a number')
  }
  if (!password.match(/[A-Z]/g)) {
    errors.push('The password should have at least a uppercase')
  }
  if (!password.match(/[a-z]/g)) {
    errors.push('The password should have at least a lowercase')
  }
  if (!password.match(/^[\w|\W]{10,}$/g)) {
    errors.push('The password should have at least ten characters')
  }
  if (!password.match(/[!,@,#,?,\]]/g)) {
    errors.push('The password should have at least one of following characters !, @, #, ? or ]')
  }

  return errors
}

module.exports = { passwordValidation }
