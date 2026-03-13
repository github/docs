---
title: Using custom instructions to unlock the power of Copilot code review
shortTitle: Use custom instructions
intro: 'Learn how to write effective custom instructions that help {% data variables.product.prodname_copilot %} provide more relevant and actionable code reviews.'
topics:
  - Copilot
versions:
  feature: copilot
contentType: tutorials
category:
  - Accelerate PR velocity
  - Team collaboration
  - Configure Copilot
---

## Introduction

{% data variables.product.prodname_copilot %} code review can be customized using instruction files to tailor the review experience to your team's needs and coding standards. However, writing effective custom instructions requires understanding how {% data variables.product.prodname_copilot_short %} processes these instructions and what approaches work best.

In this tutorial, you'll learn how to write clear, effective custom instructions that help {% data variables.product.prodname_copilot_short %} provide more relevant code reviews. You'll discover best practices for structuring your instructions, common pitfalls to avoid, and strategies for organizing instructions across different files.

This tutorial is about using custom instructions for {% data variables.copilot.copilot_code-review_short %}. For a more general introduction to using custom instructions, see [AUTOTITLE](/copilot/how-tos/configure-custom-instructions).

### What you'll learn

By the end of this tutorial, you'll understand:

* How to write concise, effective custom instructions for code review.
* The difference between repository-wide and path-specific instructions.
* Common patterns that work well with {% data variables.copilot.copilot_code-review_short %}.
* What types of instructions are not currently supported.
* How to structure and organize your instructions for best results.

### Prerequisites

* Access to {% data variables.copilot.copilot_code-review_short %}.
* A {% data variables.product.prodname_dotcom %} repository where you can create custom instruction files.
* Basic familiarity with Markdown syntax.

## Understanding how {% data variables.product.prodname_copilot %} code review processes instructions

Before writing custom instructions, it's helpful to understand how {% data variables.copilot.copilot_code-review_short %} uses them. When reviewing a pull request, {% data variables.product.prodname_copilot_short %} reads your instruction files and uses them to guide its analysis. However, like any AI system, it has limitations:

* **Non-deterministic behavior**: {% data variables.product.prodname_copilot_short %} may not follow every instruction perfectly every time.
* **Context limits**: Very long instruction files may result in some instructions being overlooked.
* **Specificity matters**: Clear, specific instructions work better than vague directives.

Keep these factors in mind as you write your instructions—they'll help you set realistic expectations and write more effective guidance.

## Writing effective custom instructions

The key to successful custom instructions is to be clear, concise, and specific. Here are the core principles to follow:

### Keep instructions short and focused

Shorter instruction files are more likely to be fully processed by {% data variables.product.prodname_copilot_short %}. Start with a minimal set of instructions and add more iteratively based on what works.

**Best practice**: Limit any single instruction file to a maximum of about 1,000 lines. Beyond this, the quality of responses may deteriorate.

### Use clear structure and formatting

{% data variables.product.prodname_copilot_short %} benefits from well-structured instructions with:

* **Distinct headings** that separate different topics.
* **Bullet points** for easy scanning and reference.
* **Short, imperative directives** rather than long narrative paragraphs.

For example, instead of writing:

```markdown
When you're reviewing code, it would be good if you could try to look for
situations where developers might have accidentally left in sensitive
information like passwords or API keys, and also check for security issues.
```

Write:

```markdown
## Security Critical Issues

- Check for hardcoded secrets, API keys, or credentials
- Look for SQL injection and XSS vulnerabilities
- Verify proper input validation and sanitization
```

### Provide concrete examples

Just like when you explain a concept to a colleague, examples help {% data variables.product.prodname_copilot_short %} understand what you mean. Include code snippets showing both correct and incorrect patterns.

For example:

````markdown
## Naming Conventions

Use descriptive, intention-revealing names.

```javascript
// Avoid
const d = new Date();
const x = users.filter(u => u.active);

// Prefer
const currentDate = new Date();
const activeUsers = users.filter(user => user.isActive);
```
````

## Organizing instructions across files

{% data variables.copilot.copilot_code-review_short %} supports two types of instruction files:

1. **`copilot-instructions.md`**: Repository-wide instructions that apply to all files.
1. **`*.instructions.md`**: Path-specific instructions that apply to certain files or directories.

Use path-specific instructions to keep {% data variables.product.prodname_copilot_short %} focused and prevent it from applying language-specific rules to the wrong files.

### When to use repository-wide instructions

Use `copilot-instructions.md` for:

* General team standards and guidelines
* Universal security requirements
* Cross-cutting concerns like error handling philosophy
* Documentation expectations

**Example structure for `copilot-instructions.md`**:

```markdown copy
# General Code Review Standards

## Code Quality Essentials

- Functions should be focused and appropriately sized
- Use clear, descriptive naming conventions
- Ensure proper error handling throughout

## Security Standards

- Never hardcode credentials or API keys
- Validate all user inputs
- Use parameterized queries to prevent SQL injection

## Documentation Expectations

- All public functions must include doc comments
- Complex algorithms should have explanatory comments
- README files must be kept up to date
```

### When to use path-specific instructions

Use `*.instructions.md` files with the `applyTo` frontmatter property for:

* Language-specific coding standards
* Framework-specific patterns
* Technology-specific security concerns
* Different rules for different parts of your codebase

**Example: Python-specific instructions**

Create a file called `python.instructions.md` in the `.github/instructions` directory:

````text copy
---
applyTo: "**/*.py"
---

# Python Coding Conventions

## Naming Conventions

- Use snake_case for variables and functions
- Use PascalCase for class names
- Use UPPERCASE for constants

## Code Style

- Follow PEP 8 style guidelines
- Limit line length to 88 characters (Black formatter standard)
- Use type hints for function signatures

## Best Practices

- Use list comprehensions for simple transformations
- Prefer f-strings for string formatting
- Use context managers (with statements) for resource management

```python
# Avoid
file = open('data.txt')
content = file.read()
file.close()

# Prefer
with open('data.txt') as file:
    content = file.read()
```
````

**Example: Frontend-specific instructions**

Create a file called `frontend.instructions.md` in the `.github/instructions` directory:

````text copy
---
applyTo: "src/components/**/*.{tsx,jsx}"
---

# React Component Guidelines

## Component Structure

- Use functional components with hooks
- Keep components small and focused (under 200 lines)
- Extract reusable logic into custom hooks

## State Management

- Use useState for local component state
- Use useContext for shared state across components
- Avoid prop drilling beyond 2-3 levels

## Accessibility

- All interactive elements must be keyboard accessible
- Include appropriate ARIA labels
- Ensure color contrast meets WCAG AA standards
````

### Breaking up complex instruction sets

For large repositories with many concerns, break instructions into multiple focused files:

```text
.github/
  copilot-instructions.md          # General standards

.github/instructions/
  python.instructions.md           # Python-specific
  javascript.instructions.md       # JavaScript-specific
  security.instructions.md         # Security-specific
  api.instructions.md              # API-specific
```

Each file should have a clear, specific purpose and appropriate `applyTo` frontmatter when needed.

## Recommended instruction file structure

Based on what works well with {% data variables.copilot.copilot_code-review_short %}, here's a recommended template for structuring your instructions:

````text copy
---
applyTo: "**/*.{js,ts}"  # If this is a path-specific file
---

# [Title: Technology or Domain Name] Guidelines

## Purpose

Brief statement of what this file covers and when these instructions apply.

## Naming Conventions

- Rule 1
- Rule 2
- Rule 3

## Code Style

- Style rule 1
- Style rule 2

```javascript
// Example showing correct pattern
```

## Error Handling

- How to handle errors
- What patterns to use
- What to avoid

## Security Considerations

- Security rule 1
- Security rule 2

## Testing Guidelines

- Testing expectation 1
- Testing expectation 2

## Performance

- Performance consideration 1
- Performance consideration 2
````

Adapt this structure to your specific needs, but maintain the clear sectioning and bullet-point format.

## What not to include in custom instructions

Understanding what {% data variables.copilot.copilot_code-review_short %} currently doesn't support helps you avoid wasting time on instructions that won't work.

### Unsupported instruction types

{% data variables.copilot.copilot_code-review_short %} currently does not support instructions that attempt to:

**Change the user experience or formatting**:
* `Use bold text for critical issues`
* `Change the format of review comments`
* `Add emoji to comments`

**Modify the pull request overview comment**:
* `Include a summary of security issues in the PR overview`
* `Add a testing checklist to the overview comment`

**Change {% data variables.product.prodname_copilot %}'s core function**:
* `Block a PR from merging unless all {% data variables.copilot.copilot_code-review_short %} comments are addressed`
* `Generate a changelog entry for every PR`

**Follow external links**:
* `Review this code according to the standards at https://example.com/standards`

  Workaround: Copy the relevant content directly into your instruction file instead

**Vague quality improvements**:
* `Be more accurate`
* `Don't miss any issues`
* `Be consistent in your feedback`

These types of instructions add noise without improving {% data variables.product.prodname_copilot_short %}'s effectiveness, as it's already optimized to provide accurate, consistent reviews.

## Testing and iterating on your instructions

The best approach to creating effective custom instructions is to start small and iterate based on results.

### Start with a minimal instruction set

Begin with 10–20 specific instructions that address your most common review needs, then test whether these are influencing {% data variables.copilot.copilot_code-review_short %} in the way you intended.

### Test with real pull requests

After creating your instructions:

1. Open a pull request in your repository.
1. Request a review from {% data variables.product.prodname_copilot_short %}.
1. Observe which instructions it follows effectively.
1. Note any instructions that are consistently missed or misinterpreted.

### Iterate based on results

Add new instructions one at a time or in small groups:

1. Identify a pattern that {% data variables.product.prodname_copilot_short %} could review better.
1. Add a specific instruction for that pattern.
1. Test with a new pull request.
1. Refine the instruction based on results.

This iterative approach helps you understand what works and keeps your instruction files focused.

## Example: Complete custom instructions for code review

Here's a complete example that incorporates all the best practices from this tutorial:

**File: `.github/copilot-instructions.md`**

```markdown copy
# General Code Review Standards

## Purpose

These instructions guide {% data variables.copilot.copilot_code-review_short %} across all files in this repository.
Language-specific rules are in separate instruction files.

## Security Critical Issues

- Check for hardcoded secrets, API keys, or credentials
- Look for SQL injection and XSS vulnerabilities
- Verify proper input validation and sanitization
- Review authentication and authorization logic

## Performance Red Flags

- Identify N+1 database query problems
- Spot inefficient loops and algorithmic issues
- Check for memory leaks and resource cleanup
- Review caching opportunities for expensive operations

## Code Quality Essentials

- Functions should be focused and appropriately sized (under 50 lines)
- Use clear, descriptive naming conventions
- Ensure proper error handling throughout
- Remove dead code and unused imports

## Review Style

- Be specific and actionable in feedback
- Explain the "why" behind recommendations
- Acknowledge good patterns when you see them
- Ask clarifying questions when code intent is unclear

## Testing Standards

- New features require unit tests
- Tests should cover edge cases and error conditions
- Test names should clearly describe what they test

Always prioritize security vulnerabilities and performance issues that could impact users.
```

**File: `.github/instructions/typescript.instructions.md`**

````text copy
---
applyTo: "**/*.{ts,tsx}"
---

# TypeScript Development Standards

## Type Safety

- Avoid using `any` type—use `unknown` or specific types instead
- Use strict null checks (no `null` or `undefined` without explicit handling)
- Define interfaces for all object shapes

```typescript
// Avoid
function processData(data: any) {
    return data.value;
}

// Prefer
interface DataShape {
    value: string;
}

function processData(data: DataShape): string {
    return data.value;
}
```

## Naming Conventions

- Use PascalCase for types, interfaces, and classes
- Use camelCase for variables, functions, and methods
- Use UPPER_CASE for constants

## Modern TypeScript Patterns

- Use optional chaining (`?.`) and nullish coalescing (`??`)
- Prefer `const` over `let`; never use `var`
- Use arrow functions for callbacks and short functions

## React-Specific (for .tsx files)

- Use functional components with TypeScript props interfaces
- Type all props and state explicitly
- Use proper event types (e.g., `React.ChangeEvent<HTMLInputElement>`)
````

## Troubleshooting common issues

If {% data variables.copilot.copilot_code-review_short %} isn't following your instructions as expected, try these solutions:

### Issue: Instructions are ignored

**Possible causes**:
* Instruction file is too long (over 1,000 lines).
* Instructions are vague or ambiguous.
* Instructions conflict with each other.

**Solutions**:
* Shorten the file by removing less important instructions.
* Rewrite vague instructions to be more specific and actionable.
* Review for conflicting instructions and prioritize the most important ones.

### Issue: Language-specific rules applied to wrong files

**Possible causes**:
* Missing or incorrect `applyTo` frontmatter.
* Rules in repository-wide file instead of path-specific file.

**Solutions**:
* Add `applyTo` frontmatter to path-specific instruction files.
* Move language-specific rules from `copilot-instructions.md` to appropriate `*.instructions.md` files.

### Issue: Inconsistent behavior across reviews

**Possible causes**:
* Instructions are too numerous.
* Instructions lack specificity.
* Natural variability in AI responses.

**Solutions**:
* Focus on your highest-priority instructions.
* Add concrete examples to clarify intent.
* Accept that some variability is normal for AI systems.

## Conclusion

Effective custom instructions help {% data variables.copilot.copilot_code-review_short %} provide more relevant, actionable feedback tailored to your team's standards. By following the principles in this tutorial—keeping instructions concise, providing clear structure, using concrete examples, and organizing across multiple files—you can significantly improve your code review experience.

Remember that creating effective instructions is an iterative process. Start with a small set of focused instructions, test them with real pull requests, and gradually expand based on what works well for your team.

## Next steps

* Take a look at some of the [example custom instructions](https://github.com/github/awesome-copilot/tree/main/instructions) in the Awesome {% data variables.product.prodname_copilot %} repository for inspiration.
* Read [AUTOTITLE](/copilot/concepts/prompting/response-customization) to learn about the full range of customization options.
* Explore [AUTOTITLE](/copilot/how-tos/configure-custom-instructions) for technical details on setting up instruction files.
