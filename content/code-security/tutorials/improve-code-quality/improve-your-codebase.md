---
title: Improving the quality of your repository's code
shortTitle: Improve your codebase
intro: Assess and remediate code quality issues detected on your default branch so you can improve the quality of your codebase. As you progress, you'll see your repository's code quality rating rise as a result.
versions:
  feature: code-quality
product: '{% data reusables.gated-features.code-quality-availability %}'
permissions: '{% data reusables.permissions.code-quality-see-repo-findings %}'
topics:
  - Code Quality
contentType: tutorials
redirect_from:
  - /code-security/code-quality/tutorials/improve-your-codebase
---

{% data reusables.code-quality.code-quality-preview-note %}

## Introduction

This tutorial guides you through using {% data variables.product.prodname_code_quality %} to review, prioritize, and remediate code health issues across your repository — helping you systematically reduce technical debt, improve reliability and maintainability, and communicate your impact to stakeholders.

### Prerequisites

* {% data variables.product.prodname_code_quality_short %} is enabled for your repository. See [AUTOTITLE](/code-security/code-quality/how-tos/enable-code-quality).
* If you're enabling {% data variables.product.prodname_code_quality %} for the first time, ensure you've waited a few minutes after enablement for a full {% data variables.product.prodname_codeql %} scan of the default branch to complete.

## 1. Assess your repository's overall code health

1. Navigate to the "Security" tab of your repository, then under "{% data variables.code-quality.code_quality_ui_views %}", click **{% data variables.code-quality.all_findings %}**.
1. The overview on the "{% data variables.code-quality.all_findings %}" dashboard gives you an immediate assessment of the state of your default branch today:

   * **Maintainability rating** reflects the presence and severity of findings for dead code, duplication, complexity, missing documentation, and failure to follow best practices.
   * **Reliability rating** reflects the presence and severity of findings for correctness, performance, error handling, concurrency, and accessibility of your code.

   ![Screenshot of code quality ratings in the "{% data variables.code-quality.all_findings %}" view for {% data variables.product.prodname_code_quality_short %}.](/assets/images/help/code-quality/all-findings-overview-repo.png)

## 2. Identify and prioritize the most impactful findings

On the "{% data variables.code-quality.all_findings %}" view, you'll see the list of results from {% data variables.product.prodname_code_quality_short %}'s last scan of the default branch of the repository. These findings are:

* Grouped by **rule**, so you can see which types of problem most affect your codebase.
* Assigned a **severity** level ("Error", "Warning", "Note").

### Focus on high severity findings

Use the dashboard **filters** to focus on the highest-severity results first ("Errors"), and review which rules generate the most issues.

![Screenshot showing the dashboard filters for the "{% data variables.code-quality.all_findings %}" view.](/assets/images/help/code-quality/standard-findings-filters.png)

To improve your repository's maintainability or reliability rating, you must resolve (fix or dismiss) all findings with the highest severity level for that metric.

For example, to improve your repository's "Reliability" metric from **Needs improvement** to **Fair**, you would need to address and resolve all **error-level findings** that impact reliability. If you have one or more error-level findings, your rating cannot be higher than "Needs improvement". See [AUTOTITLE](/code-security/code-quality/reference/metrics-and-ratings).

## 3. Investigate a group of findings and understand context

Once you've identified a rule with multiple results that you want to address, you can investigate further to understand the underlying problems.

1. Click the rule name to be taken to a detailed view of all findings for that rule.

   ![Screenshot showing a rule in the "{% data variables.code-quality.all_findings %}" view. The rule name is highlighted in dark orange.](/assets/images/help/code-quality/click-rule-name.png)

1. Click **Show more**, then review the explanation of the rule, what the recommended fix is, supporting code examples and references.

   ![Screenshot showing the results for a code quality rule. The text "Show more" is highlighted in dark orange.](/assets/images/help/code-quality/click-show-more.png)

## 4. Choose remediation options

Evaluate all the highlighted findings for validity, impact, and risk. To improve your quality rating, you need to resolve each finding by either choosing to fix or dismiss it.

### Generate an autofix

If the finding looks valid and relevant for your codebase, you can generate a suggested fix.

1. To the right of an individual finding, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Generate fix**.
1. Review carefully the diff of the proposed change, and if you agree with it, click **Open pull request**.
1. In the "Commit autofix to branch" dialog box, select "Open a pull request", then click **Commit change**.

   > [!TIP]
   > It's not currently possible to generate autofixes for a group of findings in bulk.
   >
   > If you want to address multiple findings with a single pull request, repeat steps 1 and 2 above, then in the "Commit autofix to branch" dialog box, use the branch name you already created for the first autofix, then select "Open pull request" and **Commit change**.
   >
   > The fix will be added to the existing draft pull request for your branch.

1. When you're ready, change the pull request status from "Draft" to "Ready for review", and carefully review the proposed changes. Wait for any CI checks and automated tests to complete and pass before merging the pull request.

### Dismiss a finding

{% data reusables.code-quality.dismiss-irrelevant-findings %}

1. To dismiss a finding, click **{% octicon "shield-slash" aria-label="Dismiss" %}**.
1. The finding will disappear from the list of open findings. You can still review and reopen dismissed findings from under the "Dismissed" tab at the top of the page.

## 5. Measure improvement and communicate impact

After remediation work is complete, return to the "{% data variables.code-quality.all_findings %}" dashboard to review the updated reliability and maintainability metrics.

When communicating your impact to stakeholders, highlight:
   * Any **reduction** in the number of findings for "Reliability" or "Maintainability".
   * Any **change in rating** for the Reliability or Maintainability ratings.
   * The requirement(s) that has been met to achieve the change in rating. For example, the remediation of all "Warning"-level findings caused the rating to change from "Fair" to "Good".

Use the improvements in quality ratings and reduction in number of findings to demonstrate progress.

## 6. Enforce code quality standards for pull requests

If you haven't already, set up quality thresholds for pull requests, to block any changes to the codebase that will reduce the health of your codebase. See [AUTOTITLE](/code-security/code-quality/how-tos/set-pr-thresholds).

## Next steps

* Reduce technical debt further by fixing findings in recently changed files. See [AUTOTITLE](/code-security/code-quality/tutorials/improve-recent-merges).
* Provide feedback on {% data variables.product.prodname_code_quality %} in the [community discussion](https://github.com/orgs/community/discussions/177488).
