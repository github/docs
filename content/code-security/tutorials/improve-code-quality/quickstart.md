---
title: Quickstart for GitHub Code Quality
intro: Review code quality findings, generate a {% data variables.copilot.copilot_autofix_short %}, and merge a pull request to improve reliability and maintainability with {% data variables.product.prodname_code_quality %}.
allowTitleToDifferFromFilename: true
versions:
  feature: code-quality
shortTitle: Quickstart
product: '{% data reusables.gated-features.code-quality-availability %}'
permissions: '{% data reusables.permissions.code-quality-see-repo-findings %}'
topics:
  - Code Quality
contentType: tutorials
redirect_from:
  - /code-security/code-quality/get-started/quickstart
  - /code-security/code-quality/get-started
---

## Introduction

{% data variables.product.prodname_code_quality %} ({% data variables.release-phases.public_preview %}) helps keep your code reliable and maintainable by surfacing code quality findings in pull requests and on your default branch.

In this tutorial, you’ll learn how to identify and fix a code quality finding on your default branch, helping to improve your repository’s code health.

### Prerequisites

* {% data variables.product.prodname_code_quality %} must be enabled for your repository and you must have code in a supported language. See [AUTOTITLE](/code-security/code-quality/how-tos/enable-code-quality).
* If you're enabling {% data variables.product.prodname_code_quality %} for the first time, ensure you've waited a few minutes after enablement for a full {% data variables.product.prodname_codeql %} scan of the default branch to complete.

## Review scan results for your default branch

In your repository, go to the **Security** tab, click **{% data variables.code-quality.code_quality_ui_views %}** in the left sidebar, then click **{% data variables.code-quality.all_findings %}** to open the repository dashboard.

Here you'll see:

* Ratings for the **Reliability** and **Maintainability** of your codebase, which help you understand your code health at a glance.
* A **results list** of all the quality issues detected by a {% data variables.product.prodname_codeql %}-powered analysis on your default branch, which are grouped by rule and language.

  ![Screenshot of code quality ratings in the "{% data variables.code-quality.all_findings %}" view for {% data variables.product.prodname_code_quality_short %}.](/assets/images/help/code-quality/all-findings-overview-repo.png)

## Identify a high-impact finding

Use the **dashboard filters** to identify a high severity level finding ("Error" or "Warning").

Resolving these will have the biggest impact on your repository's ratings.

  ![Screenshot showing the dashboard filters for the "{% data variables.code-quality.all_findings %}" view.](/assets/images/help/code-quality/standard-findings-filters.png)

### Inspect the details of the finding

Click the rule name itself to see a detailed view of the files and lines of code affected by that rule.

![Screenshot showing a rule in the "{% data variables.code-quality.all_findings %}" view. The rule name is highlighted in dark orange.](/assets/images/help/code-quality/click-rule-name.png)

Once you're in the detailed view, click **Show more** to gather context and understand the results.

![Screenshot of the findings for the "Overwritten property" rule. The text, "Show more", is highlighted in dark orange.](/assets/images/help/code-quality/click-show-more.png)

## Generate a {% data variables.copilot.copilot_autofix_short %}

To the right of a highlighted finding, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Generate fix**.

![Screenshot of the "Generate fix" button.](/assets/images/help/code-quality/generate-fix.png)

Review the suggested fix, then click **Open pull request**.

### Merge the fix

Carefully review the draft pull request. If you're satisfied with the proposed changes, and all checks and tests are passing, go ahead and merge the pull request.

## Observe the metrics change

Return to the {% data variables.product.prodname_code_quality_short %} dashboard (**Security** tab, then **{% data variables.code-quality.code_quality_ui_views %}**, then **{% data variables.code-quality.all_findings %}**).

Wait a few minutes for the next scan to complete — {% data variables.product.prodname_code_quality_short %} scans automatically re-run after every push to the default branch.

Observe the change in metrics at the top of the dashboard:

* The **number of findings** for "Reliability" or "Maintainability" should have decreased.
* Your **ratings** for "Reliability" or "Maintainability" may have improved, if your fix addressed a number of high-impact findings.

  To understand more about how the ratings are calculated, see [AUTOTITLE](/code-security/code-quality/reference/metrics-and-ratings).

## Conclusion

You've successfully used {% data variables.product.prodname_code_quality_short %} and {% data variables.copilot.copilot_autofix_short %} to improve your repository's code health!

Healthy code is easier to understand, maintain, and extend, and remediating code quality issues makes your codebase more reliable, compliant, and accelerates future development.

## Next steps

* Learn how {% data variables.product.prodname_code_quality %} works on pull requests to prevent code quality issues from reaching your default branch. See [AUTOTITLE](/code-security/code-quality/tutorials/fix-findings-in-prs).
* Provide feedback on {% data variables.product.prodname_code_quality %} in the [community discussion](https://github.com/orgs/community/discussions/177488).
