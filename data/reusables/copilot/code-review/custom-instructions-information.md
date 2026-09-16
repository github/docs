You can customize {% data variables.copilot.copilot_code-review_short %} by adding custom instructions to your repository. Repository custom instructions can either be repository wide or path specific.

Use `.github/copilot-instructions.md` for repository-wide review guidance that should apply across the entire codebase. This is a good place to describe organization-wide expectations, such as coding standards, review criteria, or general practices that {% data variables.product.prodname_copilot_short %} should consider in every review.

Use an `AGENTS.md` file in the root of your repository to provide additional repository context that helps {% data variables.product.prodname_copilot_short %} better understand how your project works. For example, you can explain which patterns are intentional, which parts of the codebase need closer scrutiny, and what your team considers good architecture, testing, and implementation practices. This helps make reviews more relevant and aligned with the way your team builds software.

Use `.github/instructions/**/*.instructions.md` files for path-specific instructions that only apply when reviewing matching files. This is useful when different parts of the repository follow different conventions, require specialized checks, or need review guidance tailored to a particular language, framework, or subsystem.

For more information, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions).

{% data reusables.copilot.code-review.custom-instructions-limit %}

### Example

This example of a `.github/copilot-instructions.md` file contains three instructions that will be applied to all {% data variables.copilot.copilot_code-review_short %}s in the repository.

```text
When performing a code review, respond in Spanish.

When performing a code review, apply the checks in the `/security/security-checklist.md` file.

When performing a code review, focus on readability and avoid nested ternary operators.
```
