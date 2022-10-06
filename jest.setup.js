import failOnConsole from 'jest-fail-on-console'

// Jest tests don't fail in some cases where we would see an error in DevTools
// Console when running locally and we would also see the error in the test
// output.  This includes the React `Each child in a list should have a unique
// "key" prop` error example.
//
// To catch this and fail tests in cases like this, we use `jest-fail-on-console`
// to fail on calls to `console.error()`.
failOnConsole({
  shouldFailOnWarn: false,
})
