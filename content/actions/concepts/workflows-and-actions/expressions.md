---
title: Expressions
intro: 'You can evaluate expressions in workflows and actions.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
topics:
  - Actions
  - Workflows
---

## About expressions

You can use expressions to programmatically set environment variables in workflow files and access contexts. An expression can be any combination of literal values, references to a context, or functions. You can combine literals, context references, and functions using operators. For more information about contexts, see [AUTOTITLE](/actions/learn-github-actions/contexts).

Expressions are commonly used with the conditional `if` keyword in a workflow file to determine whether a step should run. When an `if` conditional is `true`, the step will run.

{% data reusables.actions.expressions-syntax-evaluation %}

{% raw %}
`${{ <expression> }}`
{% endraw %}

> [!NOTE]
> The exception to this rule is when you are using expressions in an `if` clause, where, optionally, you can usually omit {% raw %}`${{`{% endraw %} and {% raw %}`}}`{% endraw %}. For more information about `if` conditionals, see [AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idif).

{% data reusables.actions.context-injection-warning %}

### Example setting an environment variable

{% raw %}

```yaml
env:
  MY_ENV_VAR: ${{ <expression> }}
```

{% endraw %}

## Further reading

For technical reference information about expressions you can use in workflows and actions, see [AUTOTITLE](/actions/reference/evaluate-expressions-in-workflows-and-actions).
