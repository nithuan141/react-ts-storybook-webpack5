/* eslint-disable import/no-extraneous-dependencies */
const { maxLineLength } = require('@commitlint/ensure')

const bodyMaxLineLength = 100

const validateBodyMaxLengthIgnoringDeps = (parsedCommit) => {
  const { type, scope, body } = parsedCommit
  const isDepsCommit =
    type === 'chore' && (scope === 'deps' || scope === 'deps-dev')
    console.log("\x1b[34m", 'An example of good commit message is "feat: this is a feature"  or "fix: this is a bug fix"')
    //console.log("\x1b[40m",parsedCommit)

    return [true];
  // return [
  //   isDepsCommit || !body || maxLineLength(body, bodyMaxLineLength),
  //   `body's lines must not be longer than ${bodyMaxLineLength}`,
  // ]
}

module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['commitlint-plugin-function-rules'],
  rules: {
    'body-max-line-length': [0],
    'function-rules/body-max-line-length': [
      2,
      'always',
      validateBodyMaxLengthIgnoringDeps,
    ],
  },
}