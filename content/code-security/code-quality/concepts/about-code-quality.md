---
title: About GitHub Code Quality
shortTitle: About Code Quality
intro: 'Learn how {% data variables.product.prodname_code_quality %} helps you catch and fix code health risks, maintain high standards, and track code quality within your {% data variables.product.github %} workflow.'
product: '{% data reusables.gated-features.code-quality-availability %}'
versions:
  feature: code-quality
topics:
  - Code Quality
contentType: concepts
---

{% data reusables.code-quality.code-quality-preview-note %}

## Overview

{% data variables.product.prodname_code_quality %} helps you ensure your codebase is reliable, maintainable, and efficient. Whether you're building a new feature, reducing technical debt, or reporting on repository health, {% data variables.product.prodname_code_quality_short %} provides actionable insights and automated fixes so you can improve and maintain the code health of your repository efficiently.

## Key features and benefits

With {% data variables.product.prodname_code_quality_short %}, you can:

* Identify code quality risks and opportunities in **pull requests** and through **repository scans**.
* Review clear explanations for findings and apply one-click **{% data variables.product.prodname_copilot_short %}-powered autofixes**.
* Use **repository dashboards** to track reliability and maintainability scores, identify areas needing attention, and prioritize remediation.
* Set up **rulesets** for pull requests to enforce code quality standards and block changes that do not meet your criteria.
* Easily assign remediation work to **{% data variables.copilot.copilot_coding_agent %}**, if you have a {% data variables.product.prodname_copilot_short %} license.

## Availability and usage costs

{% data variables.product.prodname_code_quality %} is available for organization-owned repositories on {% data variables.product.prodname_team %} and {% data variables.product.prodname_ghe_cloud %} plans, as well as public repositories on {% data variables.product.prodname_dotcom_the_website %}.

{% data variables.product.prodname_code_quality %} won't be billed during public preview. However, {% data variables.product.prodname_code_quality_short %} scans will consume {% data variables.product.prodname_actions %} minutes. See [AUTOTITLE](/billing/concepts/product-billing/github-code-quality).

> [!NOTE]
> * You **don't** need a {% data variables.product.prodname_copilot_short %} or a {% data variables.product.prodname_code_security %} license to use {% data variables.product.prodname_code_quality_short %} or apply {% data variables.product.prodname_copilot_short %}-powered autofixes.
> * During the {% data variables.release-phases.public_preview %}, an enterprise policy that blocks the use of {% data variables.product.prodname_code_security %} by repository owners will also block use of {% data variables.product.prodname_code_quality_short %}. See [AUTOTITLE](/code-security/code-quality/how-tos/allow-in-enterprise).

## Supported languages

{% data variables.product.prodname_code_quality_short %} performs rule-based analysis of the following languages using {% data variables.product.prodname_codeql %}:

{% data reusables.code-quality.codeql-supported-languages %}

Code quality problems in other languages are detected by AI analysis alone. For more information on analysis, see [AUTOTITLE](/code-security/code-quality/responsible-use/code-quality).

## Understanding where {% data variables.product.prodname_code_quality_short %} findings appear after enablement

Once you enable {% data variables.product.prodname_code_quality_short %} for a repository, you'll see {% data variables.product.prodname_codeql %} scans for:

* Every new pull request opened against the default branch
* All existing pull requests to the default branch when they are updated, triggering a new run of CI tests
* The whole codebase on the default branch at the time and date shown on the "{% data variables.code-quality.code_quality_ui %}" settings page

In addition, you'll see an AI-powered analysis of all recent pushes to the default branch.

### Pull request results

When {% data variables.product.prodname_codeql %} finds rule-based problems on pull requests, you'll see comments from the `{% data variables.code-quality.pr_commenter %}`. Where possible, each comment will include a {% data variables.copilot.copilot_autofix_short %} suggestion on how to fix the problem. See [AUTOTITLE](/code-security/code-quality/tutorials/fix-findings-in-prs).

### Default branch results

{% data variables.product.prodname_code_quality_short %} findings on the default branch are reported on "{% data variables.code-quality.code_quality_ui %}" pages on the **Security** tab for the repository:

* **{% data variables.code-quality.all_findings %}** shows the results of {% data variables.product.prodname_codeql %} quality analysis. See [AUTOTITLE](/code-security/code-quality/tutorials/improve-your-codebase).
* **{% data variables.code-quality.recent_suggestions %}** shows the results of AI-powered analysis of the files most recently pushed to the default branch. See [AUTOTITLE](/code-security/code-quality/tutorials/improve-recent-merges).

### Scan information

Each {% data variables.product.prodname_codeql %} analysis will use {% data variables.product.prodname_actions %} minutes and can be seen on the **Actions** tab of the repository as a run of the dynamic "{% data variables.code-quality.workflow_name_actions %}" workflow.

## Next steps

* Enable {% data variables.product.prodname_code_quality_short %} for your repository, see [AUTOTITLE](/code-security/code-quality/how-tos/enable-code-quality). Enterprise owners **may** need to first update their Advanced Security policies, see [AUTOTITLE](/code-security/code-quality/how-tos/allow-in-enterprise)
* See how {% data variables.product.prodname_code_quality %} works on your default branch to surface code quality issues and help you understand your repository's code health at a glance. See [AUTOTITLE](/code-security/code-quality/get-started/quickstart).
