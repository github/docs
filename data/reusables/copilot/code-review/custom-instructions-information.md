> [!NOTE]
> Custom instructions for {% data variables.copilot.copilot_code-review_short %} are in {% data variables.release-phases.public_preview %} and are subject to change.
>
> This feature is available with the {% data variables.copilot.copilot_pro_short %}, {% data variables.copilot.copilot_pro_plus_short %} {% data variables.copilot.copilot_business_short %}, and {% data variables.copilot.copilot_enterprise_short %} plan.
>
> During the {% data variables.release-phases.public_preview %}, if you're using a {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %} plan, the organization or enterprise that provides your plan must have the **Opt in to preview features** setting enabled. See [AUTOTITLE](/enterprise-cloud@latest/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization#enabling-copilot-features-in-your-organization) or [AUTOTITLE](/enterprise-cloud@latest/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise#copilot-in-githubcom)

Customize {% data variables.copilot.copilot_code-review_short %} behavior by adding a repository custom instructions file. To do this, create a `.github/copilot-instructions.md` file in your repository and add natural language text that you want {% data variables.product.prodname_copilot_short %} to consider when reviewing code. This is the same `copilot-instructions.md` used by {% data variables.copilot.copilot_chat_short %}. See [AUTOTITLE](/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot).

To enable or disable custom instructions for code review, go to your repository’s settings, then navigate to **Code Review** under **Copilot**, and toggle the “Use custom instructions when reviewing pull requests” option.

### Example

This example of a `.github/copilot-instructions.md` file contains three instructions that will be applied to all {% data variables.copilot.copilot_code-review_short %}s in the repository.

```text
When performing a code review, respond in Spanish.

When performing a code review, follow our internal security checklist.

When performing a code review, focus on readability and avoid nested ternary operators.
```
