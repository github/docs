You can customize {% data variables.copilot.copilot_code-review_short %} by adding custom instructions to your repository.

Repository custom instructions can either be repository wide or path specific. You specify repository-wide custom instructions in a `.github/copilot-instructions.md` file in your repository. You can use this file to store information that you want {% data variables.product.prodname_copilot_short %} to consider when reviewing code anywhere in the repository.

You can also write instructions that {% data variables.product.prodname_copilot_short %} will only use when reviewing code in files that match a specified path. You write these instructions in one or more `.github/instructions/**/*.instructions.md` files.

For more information, see [AUTOTITLE](/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot).

### Example

This example of a `.github/copilot-instructions.md` file contains three instructions that will be applied to all {% data variables.copilot.copilot_code-review_short %}s in the repository.

```text
When performing a code review, respond in Spanish.

When performing a code review, apply the checks in the `/security/security-checklist.md` file.

When performing a code review, focus on readability and avoid nested ternary operators.
```
