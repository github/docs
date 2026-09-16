---
title: Fixing code quality findings in your repository backlog
shortTitle: Fix backlog findings
intro: 'Generate autofixes for findings on the default branch of your repository, or dismiss findings that aren''t relevant.'
versions:
  feature: code-quality
product: '{% data reusables.gated-features.code-quality-availability %}'
permissions: '{% data reusables.permissions.code-quality-see-repo-findings %}'
contentType: how-tos
redirect_from:
  - /code-security/code-quality/how-tos/fix-backlog-findings
category:
  - Improve code quality
---

> [!TIP]
> If you're new to {% data variables.product.prodname_code_quality_short %}, see [AUTOTITLE](/code-security/tutorials/improve-code-quality/raise-your-quality-rating?utm_campaign=code-quality-ga-july-2026&utm_medium=docs&utm_source=docs-fix-backlog-walkthrough-tip) for a guided walkthrough of reviewing and improving your repository's quality scores.

## How {% data variables.product.prodname_code_quality_short %} works on your default branch

{% data variables.product.prodname_code_quality_short %} scans your default branch and reports findings on "{% data variables.code-quality.code_quality_ui %}" pages on the **{% data variables.product.prodname_security_and_quality_tab %}** tab of your repository. It runs **two types of analysis**.

1. **{% data variables.code-quality.all_findings %}**: {% data variables.product.prodname_code_quality_short %} uses {% data variables.product.prodname_codeql %} to perform a deterministic, rules-based scan of your default branch. Finding are grouped by rule and language, labeled by severity (**Error**, **Warning**, **Note**), and each includes a suggested autofix.

 1. **{% data variables.code-quality.recent_suggestions %}**: {% data variables.product.prodname_code_quality_short %} uses AI-powered analysis to identify quality issues in the files most recently pushed to your default branch, including issues that rule-based analysis may not detect - such as best practices, naming conventions, or design considerations.

 {% data reusables.code-quality.recent-suggestions-preview-note %}

 For information on resolving {% data variables.code-quality.recent_suggestions %}, see [AUTOTITLE](/code-security/how-tos/maintain-quality-code/fix-findings-in-recent-merges).

## Resolving a standard finding

{% data reusables.code-quality.dashboard-navigation-repo %}
{% data reusables.code-quality.dashboard-all-findings %}
1. Use the dashboard filters to focus on the findings most likely to affect your quality scores. For example, to see all "Error"-level findings for "Reliability", set the filter to:
   
   `is:open category:reliability severity:error`
1. Findings are grouped by rule. Click a rule name to be taken to a detailed view of all findings for that rule.

   ![Screenshot showing a rule in the "Standard findings" view. The rule name is highlighted in dark orange.](/assets/images/help/code-quality/click-rule-name.png)

1. Click **Show more**, then review the explanation of the rule, what the recommended fix is, supporting code examples and references.

   ![Screenshot showing the results for a code quality rule. The text "Show more" is highlighted in dark orange.](/assets/images/help/code-quality/click-show-more.png)
{% data reusables.code-quality.generate-autofix-from-dashboard %}
1. When the autofix pull request is ready for review, change its status from "Draft" to "Ready for review", and wait for CI checks to pass before merging.
1. Alternatively, if a finding isn't relevant or actionable, click **Dismiss**. For example, you might dismiss a finding that is in legacy code no longer maintained, is a known exception to your team's coding standards, or is a false positive that doesn't pose a real quality risk.

To raise a maintainability or reliability score, you must resolve every finding at the highest severity level currently affecting that metric. See [AUTOTITLE](/code-security/reference/code-quality/metrics-and-ratings).

## Verifying that your code quality scores have updated

After your autofix pull requests are merged, return to the "{% data variables.code-quality.all_findings %}" view to confirm that:

* The number of findings has decreased.
* The maintainability or reliability score has improved, if you resolved all findings at the current minimum severity level for that metric.

## Next steps

* [AUTOTITLE](/code-security/how-tos/maintain-quality-code/fix-findings-in-recent-merges)
