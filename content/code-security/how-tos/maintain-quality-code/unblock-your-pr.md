---
title: Resolving a block on your pull request
shortTitle: Unblock your PR
intro: Identify and resolve a code quality or coverage threshold block on your pull request so you can merge your changes.
versions:
  feature: code-quality
permissions: '{% data reusables.permissions.code-quality-see-repo-findings %}'
contentType: how-tos
redirect_from:
  - /code-security/code-quality/how-tos/unblock-your-pr
category:
  - Improve code quality
---

{% data reusables.code-quality.code-quality-preview-note %}

## Understanding why your pull request is blocked

Repository administrators can set quality gates using {% data variables.product.prodname_code_quality %}. When you open a pull request, checks automatically run to evaluate your changes against these standards.

There are two types of blocks:

* **Code quality findings**: your changes introduce issues that fall below the required quality threshold.
* **Coverage threshold**: your changes cause code coverage to fall below a required minimum, or cause coverage to drop by more than a permitted amount relative to the default branch.

If your pull request introduces code that falls below the required quality threshold, you'll see a merge block banner at the bottom of the pull request in the "Checks" section: "Merging is blocked: Code quality findings were detected."

![Screenshot of the merge block banner in the Checks section of a pull request.](/assets/images/help/code-quality/code-quality-merge-block.png)

These checks help maintain a healthy, maintainable codebase and prevent technical debt from accumulating.

## Viewing scan results and their severity levels

The results of the scan are reported as comments on your pull request, left by the `{% data variables.code-quality.pr_commenter %}`. Each comment corresponds to a specific code quality problem that was detected in your changes.

Comments are labeled by severity (**Error**, **Warning**, **Note**). To learn more about what the severity levels mean, see [Severity levels](/code-security/code-quality/reference/metrics-and-ratings#severity-levels).

## Determining which findings are blocking your pull request

The quality gate set by repository administrators defines the **minimum severity level** that will block merging.

The merge block banner may specify the minimum severity level. All findings at that severity level or higher must be addressed before you can merge your pull request.

![Screenshot of the merge block banner in the Checks section of a pull request.](/assets/images/help/code-quality/merge-block-warnings.png)

> [!NOTE]
> If you don't see a severity level defined in the merge block banner, it means that your repository is using the most stringent code quality thresholds, which require **all findings** to be addressed before merging.

## Fixing or dismissing each finding

In order to unblock your pull request, you need to resolve each required finding by deciding whether to **fix** the issue in your code or **dismiss** the comment.

### Leveraging {% data variables.copilot.copilot_autofix_short %} and {% data variables.copilot.copilot_cloud_agent %} to fix findings

#### {% data variables.copilot.copilot_autofix_short %}

{% data reusables.code-quality.fix-findings-with-copilot-autofix %}

#### {% data variables.copilot.copilot_cloud_agent %}

{% data reusables.code-quality.fix-findings-with-cloud-agent %}

### Dismissing the finding

{% data reusables.code-quality.dismiss-irrelevant-findings %}

## Verifying that you've met the requirements

To see if you've met the code quality requirements, look at the "Checks" section at the bottom of your pull request. The merge block banner should no longer be present, and you should be able to merge your changes as usual.

## Resolving a coverage threshold block

If your pull request is blocked by a coverage threshold rule, you'll see a merge block banner in the "Checks" section with a message describing which threshold was not met. For example:

* "Coverage 22.0% is below minimum 50.0%": your pull request branch coverage is below the minimum coverage percentage configured in the ruleset.
* "Coverage decreased by 2.5%, maximum allowed drop is 1.0%": your changes caused coverage to drop by more than the permitted amount relative to the default branch.

To unblock your pull request, you need to add or modify tests so that more of the codebase is executed:

1. Review the coverage summary comment on your pull request to identify which files or areas lack coverage.
1. Add or update tests to increase execution coverage.
1. Push your changes. The coverage check will re-run automatically.

## Next steps

Reduce technical debt by fixing findings in recently changed files. See [AUTOTITLE](/code-security/code-quality/tutorials/improve-recent-merges).
