---
title: Restricting code coverage on pull requests
shortTitle: Restrict code coverage
intro: Protect your test coverage by automatically blocking pull requests that fall below the coverage levels your team requires.
versions:
  feature: code-quality
permissions: '{% data reusables.permissions.code-quality-repo-enable %}'
contentType: how-tos
category:
  - Improve code quality
---

> [!NOTE]
> This feature is in {% data variables.release-phases.public_preview %} and subject to change.

## Prerequisites

* {% data variables.product.prodname_code_quality %} is enabled on the repository.
* Code coverage data is uploaded to {% data variables.product.github %} for the pull request branch. See [AUTOTITLE](/code-security/how-tos/maintain-quality-code/set-up-code-coverage).

## Creating a coverage threshold rule

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repo-rulesets-settings %}
1. Create a new branch ruleset or click an existing one to edit it.
1. Under "Branch rules", select **Restrict code coverage**.
1. Expand **Additional settings** to configure thresholds. A value of 0 means that the threshold is disabled.

   * **Minimum coverage percentage**: enter a value to block pull requests where aggregated coverage falls below this percentage.
   * **Maximum coverage drop**: enter a value to block pull requests where coverage drops by more than this many percentage points relative to the default branch.

1. Click **Create** or **Save changes**.

{% ifversion repo-rules-enterprise %}

> [!TIP]
> Consider setting your ruleset to **Evaluate** mode before switching to **Active**. This lets you observe which pull requests would have been blocked without enforcing the rule, giving you a chance to calibrate your thresholds.
{% endif %}
