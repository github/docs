---
title: Prompt files for GitHub Copilot
shortTitle: Prompt files
allowTitleToDifferFromFilename: true
intro: Save task-specific instructions and context in reusable Markdown prompt files for individual {% data variables.product.prodname_copilot_short %} interactions.
versions:
  feature: copilot
contentType: concepts
category:
  - Configure Copilot
---

Prompt files are reusable, standalone Markdown templates for focused {% data variables.product.prodname_copilot_short %} interactions. They can include input variables and additional context so you can reuse a prompt with different inputs. Repository prompt files use the `.prompt.md` extension and are typically stored in `.github/prompts/`. {% data variables.product.prodname_vscode %} and {% data variables.product.prodname_jetbrains_ides %} also let you configure a different location.

Unlike custom instructions, which automatically provide context within their defined scope, prompt files are invoked for a specific interaction. In supported IDEs, you can run one from chat by referencing or selecting it.

## Prompt file support by IDE and version

Prompt files are available in {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, {% data variables.product.prodname_jetbrains_ides %}, and Xcode. For current support and IDE- and version-specific availability, see [AUTOTITLE](/copilot/reference/customization-cheat-sheet) and [AUTOTITLE](/copilot/reference/copilot-feature-matrix#features-by-ide).

## Examples

### Generate a React form

The following `New React form.prompt.md` file defines a reusable task for generating a React form.

```markdown
Your goal is to generate a new React form component.

Ask for the form name and fields if not provided.

Requirements for the form:
- Use form design system components: [design-system/Form.md](../docs/design-system/Form.md)
- Use `react-hook-form` for form state management:
  - Always define TypeScript types for your form data
  - Prefer *uncontrolled* components using register
  - Use `defaultValues` to prevent unnecessary rerenders
- Use `yup` for validation:
  - Create reusable validation schemas in separate files
  - Use TypeScript types to ensure type safety
  - Customize UX-friendly validation rules
```

### Review REST API security

The following `API security review.prompt.md` file contains reusable criteria for reviewing the security of a REST API.

```markdown
Secure REST API review:
- Ensure all endpoints are protected by authentication and authorization
- Validate all user inputs and sanitize data
- Implement rate limiting and throttling
- Implement logging and monitoring for security events
…
```
