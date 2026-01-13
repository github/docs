---
title: Setting code quality thresholds for pull requests
shortTitle: Set PR thresholds
intro: Create a {% data variables.product.prodname_code_quality_short %} gate for pull requests to increase the quality of code merged into your repository.
versions:
  feature: code-quality
product: '{% data reusables.gated-features.code-quality-availability %}'
permissions: '{% data reusables.permissions.code-quality-repo-enable %}'
topics:
  - Code Quality
contentType: how-tos
redirect_from:
  - /code-security/code-quality/how-tos/set-pr-thresholds
---

{% data reusables.code-quality.code-quality-preview-note %}

## Introduction

You can block pull requests that don't meet your code quality standards by adding the **Require code quality results** branch rule to a ruleset and specifying the severity level you require. If a pull request doesn't reach this threshold, it can't be merged.

## Prerequisites

* {% data variables.product.prodname_code_quality_short %} is enabled. See [AUTOTITLE](/code-security/code-quality/how-tos/enable-code-quality)
* Code in a supported language. See [Supported languages](/code-security/code-quality/concepts/about-code-quality#supported-languages).

> [!NOTE]
> The threshold will have an impact only if the repository has code in one or more of the supported languages, see [AUTOTITLE](/code-security/code-quality/how-tos/enable-code-quality).

## Confirming {% data variables.product.prodname_code_quality_short %} runs successfully on pull requests

Before you add or update a ruleset to include a threshold for {% data variables.product.prodname_code_quality_short %}, confirm that the {% data variables.code-quality.workflow_name_actions %} workflow is running and reporting results back to pull requests. Otherwise, the ruleset could block the merging of **all** pull requests.

1. Open a recent pull request and scroll to the "Checks" summary at the bottom of the pull request.
1. Confirm that the "{% data variables.code-quality.check_status_name %}" check ran successfully and reported its status.

For more information, see [AUTOTITLE](/code-security/code-quality/reference/codeql-detection).

## Adding or updating a ruleset to include {% data variables.product.prodname_code_quality_short %}

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

## Next steps

Learn how {% data variables.product.prodname_code_quality %} works on pull requests to prevent code quality issues from reaching your default branch. See [AUTOTITLE](/code-security/code-quality/tutorials/fix-findings-in-prs).
