---
title: GitHub Actions helper
intro: 'Generate and improve {% data variables.product.prodname_actions %} workflows.'
versions:
  feature: copilot
category:
  - Custom instructions
  - GitHub flows
  - Path-specific
  - Repository
  - Configure Copilot
complexity:
  - Simple
octicon: book
topics:
  - Copilot
  - Actions
---

{% data reusables.copilot.customization-examples-note %}

The following example shows a path-specific `actions.instructions.md` file that applies only to {% data variables.product.prodname_actions %} workflow files in your repository, using the `applyTo` field. For more information about path-specific instructions files, see [AUTOTITLE](/copilot/how-tos/configure-custom-instructions/add-repository-instructions#using-one-or-more-instructionsmd-files).

````text copy
---
applyTo: ".github/workflows/**/*.yml"
---

When generating or improving {% data variables.product.prodname_actions %} workflows:

## Security First
- Use {% data variables.product.prodname_dotcom %} secrets for sensitive data, never hardcode credentials
- Pin third-party actions to specific commits by using the SHA value (e.g., `- uses: owner/some-action@a824008085750b8e136effc585c3cd6082bd575f`)
- Configure minimal permissions for GITHUB_TOKEN required for the workflow

## Performance Essentials
- Cache dependencies with `actions/cache` or built-in cache options
- Add `timeout-minutes` to prevent hung workflows
- Use matrix strategies for multi-environment testing

## Best Practices
- Use descriptive names for workflows, jobs, and steps
- Include appropriate triggers: `push`, `pull_request`, `workflow_dispatch`
- Add `if: always()` for cleanup steps that must run regardless of failure

## Example Pattern
```yaml
name: CI
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    timeout-minutes: 10
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm test
```
````

{% data reusables.copilot.custom-instructions-further-reading %}
