You can customize {% data variables.copilot.copilot_code-review_short %} by adding a `.github/copilot-instructions.md` file in your repository containing information that you want {% data variables.product.prodname_copilot_short %} to consider when reviewing code. This is the same `copilot-instructions.md` used by {% data variables.copilot.copilot_chat_short %}. See [AUTOTITLE](/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot).

### Example

This example of a `.github/copilot-instructions.md` file contains three instructions that will be applied to all {% data variables.copilot.copilot_code-review_short %}s in the repository.

```text
When performing a code review, respond in Spanish.

When performing a code review, follow our internal security checklist.

When performing a code review, focus on readability and avoid nested ternary operators.
```
