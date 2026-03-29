---
title: Maintaining codebase standards in a GitHub Copilot rollout
intro: 'Stay in control of your enterprise''s code with rulesets, security features, and effective training.'
permissions: Enterprise owners
versions:
  feature: copilot
shortTitle: Maintain codebase standards
category:
  - Roll Copilot out at scale
  - Manage Copilot for a team
contentType: tutorials
---

Most enterprises are aware of the productivity benefits that AI coding tools can bring. However, many worry that improper usage in their company, such as malicious prompts or developers accepting AI suggestions without review, will lead to their codebase's standards being compromised.

You can mitigate these risks by setting up your {% data variables.product.github %} environment and work culture for effective governance. A major benefit of {% data variables.product.prodname_copilot %} is that it is built into the {% data variables.product.github %} platform, which already contains a range of features for enterprise-grade code governance.

## 1. Require pull requests and reviews

Developers and bad actors should never be able to unilaterally apply unvetted AI suggestions or agent work directly to sensitive codebases. You should require an **approved pull request** before users can merge code into production codebases and other important branches.

To do this, create a ruleset:

1. Identify organizations or repositories that contain the codebases you want to protect, and **apply a custom property** to them. This will allow you to easily target those resources in a ruleset. See [AUTOTITLE](/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization) or [AUTOTITLE](/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/managing-custom-properties-for-organizations).

   Alternatively, you can add these protected resources to a ruleset manually, or target them based on a naming convention.

1. Create a branch ruleset for your enterprise. See [AUTOTITLE](/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-governance#creating-a-branch-or-tag-ruleset).

   * Enable at least the **Require a pull request before merging** and **Block force pushes** rules. Under the "Require a pull request" rule, ensure you require at least one approval.
   * Enable other rules if required. For example, if you're concerned about bad actors hijacking pull requests, make sure you **dismiss stale pull request approvals** when new commits are pushed.

1. Encourage repository administrators to set up CODEOWNERS files for specific files in repositories. This will automatically request a review from the code owners when those files are modified.

   Then, you can go back to your ruleset and enable the **Require review from Code Owners** rule.

1. Encourage organization owners and repository administrators to create more specific rulesets, as they're likely to have more awareness of requirements for their own code.

   These rulesets will add to the baseline that you define at the enterprise level, but will never override it.

## 2. Test your code

Good DevOps practices ensure that your code is automatically tested before being merged and deployed, minimizing the risks of errors entering your default branches and surfacing in production environments.

1. Enable {% data variables.product.prodname_actions %} or another CI/CD system.
1. Encourage developers to write tests for all features and integrate tests into {% data variables.product.prodname_actions %} workflows.
1. Encourage organization owners or repository owners to create rulesets and add important workflows to the **Require workflows to pass before merging** rule.

## 3. Scan code for vulnerabilities

{% data variables.product.prodname_copilot_short %} is already designed to avoid introducing vulnerabilities into your codebase. For example, code created by {% data variables.copilot.copilot_coding_agent %} is automatically scanned for vulnerable patterns and secrets such as API keys.

However, it is good practice to regularly scan all code for vulnerabilities and secrets, and to prevent developers from introducing vulnerabilities in the first place.

1. As a starting point, apply and enforce a basic **security configuration** on your organizations. This is a collection of enablement settings for security features. We recommend including {% data variables.product.prodname_code_scanning %}, {% data variables.product.prodname_secret_scanning %}, and secrets push protection. See [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/creating-a-custom-security-configuration#creating-a-secret-protection-and-code-security-configuration).
1. As you learn more about your needs, create additional custom configurations or apply granular settings at the repository level.
1. To enforce {% data variables.product.prodname_code_scanning %} on pull requests, go back to your ruleset and enable the **Require {% data variables.product.prodname_code_scanning %} results** rule.

## 4. Create guidelines for {% data variables.product.prodname_copilot_short %}

To improve the quality of {% data variables.product.prodname_copilot_short %}'s suggestions in the first place, you should create custom instructions. These instructions add context to all prompts that tells {% data variables.product.prodname_copilot_short %} to follow your company's coding standards.

1. To establish a good baseline, create **custom instructions at the organization level**. These can be high-level standards that are likely to apply to any repository. However, note that these instructions only apply on the {% data variables.product.github %} website. See [AUTOTITLE](/copilot/how-tos/configure-custom-instructions/add-organization-instructions).
1. For more complete coverage, encourage developers and repository administrators to **write custom instructions for specific repositories**. These apply in more places than organization instructions, and can go into more detail about each project and its requirements. See [AUTOTITLE](/copilot/how-tos/configure-custom-instructions/add-repository-instructions).

## 5. Encourage best practices

With strong guardrails in place, developers should already be enabled to use AI effectively. However, it is important to provide training on AI tools and create a culture where best practices are encouraged, rather than just enforced.

1. Communicate your governance settings and your company's expectations for how developers should use {% data variables.product.prodname_copilot_short %}. For example, if all agent work should be thoroughly reviewed, ensure this process is established and communicated.
1. Create onboarding resources such as internal documentation or videos. For a starting point, share existing resources like [AUTOTITLE](/copilot/using-github-copilot/best-practices-for-using-github-copilot) and [AUTOTITLE](/copilot/copilot-chat-cookbook).
1. Offer ongoing training and support, such as workshops. In successful rollouts, many companies identify "champions" who can train others on how to use {% data variables.product.prodname_copilot_short %} effectively.

## 6. Plan for the worst

Even with the strictest guardrails in place, it is always possible that vulnerable or error-prone code will be merged, regardless of whether your developers are using AI tools.

To prepare for these scenarios, you should plan for how you will address problems and communicate this plan with developers. For example:

1. Revert a bad pull request and roll back a deployment.
1. Create a discussion post analyzing what went wrong and how to avoid it in the future.
1. Check audit logs for things like ruleset bypasses, incorrect permissions, or changes to governance settings.

## 7. Check code quality

If you're confident in your governance model but still concerned that {% data variables.product.prodname_copilot_short %} will reduce the quality of your codebase over time, you can measure this over the course of a rollout. If enabled, {% data variables.product.prodname_code_quality %} provides metrics on the code health of your repositories. See [AUTOTITLE](/code-security/concepts/about-code-quality).

## Next steps

Understand how your enterprise can use the audit log to monitor changes to configuration settings and license assignment. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/review-activity/review-audit-logs).
