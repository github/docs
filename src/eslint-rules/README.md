# Custom ESLint Rules

We can declare custom rules in this directory and import them from our ESLint config in [eslint.config.ts](../../eslint.config.ts)

Custom rules are useful for enforcing best practices and more effective than a "warning" comment since automated linter tests will fail if custom rules aren't followed.

**Note:** Custom rules must be written as JavaScript (`.js`) files, not TypeScript. ESLint loads custom rule plugins at runtime using Node's module system, which expects JavaScript. While the main ESLint config can be TypeScript, the rule implementations themselves need to be JavaScript.

## Creating a new rule

1. Create the rule in this directory
2. Export it from [index.js](./index.js)
3. Enable it in [eslint.config.ts](../../eslint.config.ts) under the `"rules"` key, e.g.

```typescript
'custom-rules/use-custom-logger': 'error',
```

Note that the rule is prepended with `custom-rules`

4. Please include a `README.md` in your rule's directory explaining why it is necessary and any times the rule can be ignored.
