# Use Custom Logger Rule

This rule enforces using `logger.<level>` instead of `console.log` in backend code.

Please see [the logger README](../../observability/logger/README.md) for more details.

## When to ignore

Anywhere that isn't server code doesn't need to use the `logger`. e.g. React components, GitHub Actions, and CLI scripts.

## Auto fix

This rule supports auto-fixing via `--fix`.

Run `npm run lint -- --fix` to apply the changes, but please make sure to double check that the automatic fix looks correct before committing.
