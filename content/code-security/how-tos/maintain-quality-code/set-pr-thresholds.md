---
title: Setting code quality thresholds for pull requests
shortTitle: Set quality thresholds
intro: Enforce your code quality standards automatically by blocking pull requests that fall below the thresholds you set, at the repository or organization level.
allowTitleToDifferFromFilename: true
versions:
  feature: code-quality
product: '{% data reusables.gated-features.code-quality-availability %}'
permissions: '{% data reusables.permissions.code-quality-repo-enable %}'
audience:
  - driver
contentType: how-tos
redirect_from:
  - /code-security/code-quality/how-tos/set-pr-thresholds
category:
  - Improve code quality
---

You can block pull requests that don't meet your code quality standards by adding {% data variables.product.prodname_code_quality_short %} thresholds to a ruleset. If a pull request doesn't meet a threshold, it can't be merged.

You can set thresholds for:

* **{% data variables.product.prodname_codeql %} findings**, by the lowest severity of results you require to be resolved.
* **Code coverage**, by the minimum percentage of code that must be covered by tests.

You can enforce these thresholds at the **repository** level, or at the **organization** level to apply the same standard across many repositories at once. Choose the organization level when you want a consistent quality bar across teams, and the repository level when a single project needs its own standard. {% data variables.product.prodname_code_quality_short %} AI detections cannot be set as a threshold.

## Prerequisites

* {% data variables.product.prodname_code_quality_short %} is enabled. See [AUTOTITLE](/code-security/how-tos/maintain-quality-code/enable-code-quality?utm_campaign=code-quality-ga-july-2026&utm_medium=docs&utm_source=docs-set-quality-thresholds-enable-cq)
* Code in a supported language. See [Supported languages](/code-security/concepts/code-quality/code-quality#supported-languages).

> [!NOTE]
> The threshold will have an impact only if the repository has code in one or more of the supported languages, see [AUTOTITLE](/code-security/code-quality/how-tos/enable-code-quality).

## Confirming {% data variables.product.prodname_code_quality_short %} runs successfully on pull requests

Before you add or update a ruleset to include a threshold for {% data variables.product.prodname_code_quality_short %}, confirm that the {% data variables.code-quality.workflow_name_actions %} workflow is running and reporting results back to pull requests. Otherwise, the ruleset could block the merging of **all** pull requests.

1. Open a recent pull request and scroll to the "Checks" summary at the bottom of the pull request.
1. Confirm that the "{% data variables.code-quality.check_status_name %}" check ran successfully and reported its status.

For more information, see [AUTOTITLE](/code-security/code-quality/reference/codeql-detection).

## Adding or updating a ruleset to include {% data variables.product.prodname_code_quality_short %}

The following steps create or update a ruleset at the repository level. To enforce the same threshold across multiple repositories at once, create an organization ruleset with the same **Require code quality results** rule instead. See [AUTOTITLE](/organizations/managing-organization-settings/creating-rulesets-for-repositories-in-your-organization).

1. Navigate to the "Settings" tab of your repository.
1. In the left sidebar, under "Code and automation", expand {% octicon "repo-push" aria-hidden="true" aria-label="repo-push" %} **Rules**, then click **Rulesets**.
1. If you don't already have a ruleset to protect your default branch, expand **New ruleset** and click **New branch ruleset**. Alternatively, open your existing ruleset for the default branch and move to step 5.
1. If you are creating a new ruleset:
   * Define a name for the ruleset.
   * Set the "Enforcement status" to "Active."
   * Under "Target branches" add a target of "Include default branch."
1. Under "Branch rules", enable "Require code quality results".
1. Set "Severity" to define the lowest severity of code quality results that must be resolved before a pull request can be merged into the default branch. For example:
   * Set "Errors" to block pull requests with unresolved code quality **errors** being merged.
   * Set "Warnings and higher" to block pull requests with unresolved code quality **warnings** or **errors** being merged.
   * Set "Notes and higher" to block pull requests with unresolved code quality **notes**, **warnings** or **errors** being merged.
   * Set "All" to block pull requests with **any** unresolved code quality results being merged.
1. When you have finished defining or editing the ruleset, click **Create** or **Save changes**.

## Setting a code coverage threshold

You can also block pull requests that fall below a code coverage threshold. This uses a separate **Restrict code coverage** rule, not the **Require code quality results** rule used above, and your repository must upload code coverage data first. For the full procedure, see [AUTOTITLE](/code-security/how-tos/maintain-quality-code/restrict-code-coverage).

## Next steps

Learn how {% data variables.product.prodname_code_quality %} works on pull requests to prevent code quality issues from reaching your default branch. See [AUTOTITLE](/code-security/tutorials/improve-code-quality/catch-issues-before-merge).
