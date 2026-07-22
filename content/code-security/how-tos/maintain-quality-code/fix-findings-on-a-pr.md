---
title: Fixing code quality findings on a pull request
shortTitle: Fix findings on a PR
intro: Keep quality issues out of your default branch by applying autofixes, delegating remediation work to {% data variables.product.prodname_copilot_short %}, or dismissing irrelevant findings.
versions:
  feature: code-quality
product: '{% data reusables.gated-features.code-quality-availability %}'
permissions: '{% data reusables.permissions.code-quality-see-repo-findings %}'
contentType: how-tos
redirect_from:
  - /code-security/code-quality/how-tos/fix-pr-findings
  - /code-security/how-tos/maintain-quality-code/fix-pr-findings
category:
  - Improve code quality
---

> [!TIP]
> If you're new to {% data variables.product.prodname_code_quality_short %}, see [AUTOTITLE](/code-security/tutorials/improve-code-quality/catch-issues-before-merge?utm_campaign=code-quality-ga-july-2026&utm_medium=docs&utm_source=docs-fix-pr-findings-walkthrough-tip) for a guided walkthrough of how {% data variables.product.prodname_code_quality_short %} works on pull requests.

## How {% data variables.product.prodname_code_quality_short %} works on pull requests

When you open a pull request, {% data variables.product.prodname_code_quality_short %} runs **two types of analysis** and posts findings as comments on the pull request.

1. **`{% data variables.code-quality.pr_commenter %}` findings**: {% data variables.product.prodname_code_quality_short %} uses {% data variables.product.prodname_codeql %} to perform a rule-based scan of your changes. These findings are posted as comments by `{% data variables.code-quality.pr_commenter %}` and include a suggested autofix. Findings are labeled by severity (**Error**, **Warning**, **Note**), and administrators can set quality gates to block merges based on the severity of these findings.

1. **{% data variables.product.prodname_copilot_short %} findings**:  If your organization has {% data variables.product.prodname_copilot_short %} licenses and AI features are enabled for your enterprise, {% data variables.product.prodname_code_quality_short %} uses **{% data variables.copilot.copilot_code-review_short %}** to identify quality issues that rules-based analysis may not detect. These findings are posted as comments by **{% data variables.product.prodname_copilot_short %}**, and include a suggested autofix. See [AUTOTITLE](/copilot/concepts/agents/code-review).

## Resolving a finding

1. On {% data variables.product.github %}, navigate to your open pull request.
1. On the **Files Changed** tab, scroll to a comment left by **`{% data variables.code-quality.pr_commenter %}`** or **{% data variables.product.prodname_copilot_short %}**.
{% data reusables.code-quality.review-comment-and-autofix %}
{% data reusables.code-quality.apply-suggestion %}
1. Alternatively, if the finding isn't relevant or actionable, you can dismiss the finding. For example, you might dismiss a finding that is in legacy code no longer maintained, is a known exception to your team's coding standards, or is a false positive that doesn't pose a real quality risk.
   * For comments left by `{% data variables.code-quality.pr_commenter %}`, click **Dismiss finding**.
   * For comments left by {% data variables.product.prodname_copilot_short %}, click **Resolve**.

## Delegating remediation work to {% data variables.product.prodname_copilot_short %}

{% data reusables.code-quality.fix-findings-with-cloud-agent %}

## Next steps

* [AUTOTITLE](/code-security/how-tos/maintain-quality-code/view-coverage-on-prs)
