---
title: About GitHub Code Quality
shortTitle: GitHub Code Quality
allowTitleToDifferFromFilename: true
intro: '{% data variables.product.prodname_code_quality %} flags code quality issues in pull requests and repository scans, applies {% data variables.product.prodname_copilot_short %}-powered autofixes, and enforces standards with rulesets.'
product: '{% data reusables.gated-features.code-quality-availability %}'
versions:
  feature: code-quality
contentType: concepts
audience:
  - driver
redirect_from:
  - /code-security/code-quality/concepts/about-code-quality
  - /code-security/code-quality/concepts
  - /code-security/code-quality
category:
  - Improve code quality
---

{% data reusables.code-quality.code-quality-preview-note %}

## Overview

{% data variables.product.prodname_code_quality %} helps you ensure your codebase is reliable, maintainable, and efficient. Whether you're building a new feature, reducing technical debt, or reporting on repository health, {% data variables.product.prodname_code_quality_short %} provides actionable insights and automated fixes so you can improve and maintain the code health of your repository efficiently.

## Key features and benefits

With {% data variables.product.prodname_code_quality_short %}, you can:

* Identify code quality risks and opportunities in **pull requests** and through **repository scans**.
* Review clear explanations for findings and apply one-click **{% data variables.product.prodname_copilot_short %}-powered autofixes**.
* Use **repository dashboards** to track reliability and maintainability scores, identify areas needing attention, and prioritize remediation.
* Monitor **organization dashboards** to understand the code health of your repositories at a glance and determine which repositories to investigate further.
* Set up **rulesets** for pull requests to enforce code quality standards and block changes that do not meet your criteria. You can also enforce coverage thresholds with rulesets to block pull requests that don't meet a minimum coverage percentage or that cause coverage to drop by more than the allowed amount.
* Upload **code coverage** reports to see test coverage metrics directly on pull requests, helping reviewers identify untested code.
* Easily assign remediation work to **{% data variables.copilot.copilot_cloud_agent %}**, if you have a {% data variables.product.prodname_copilot_short %} license.

## Availability and usage costs

{% data variables.product.prodname_code_quality %} is available for organization-owned repositories on {% data variables.product.prodname_team %} and {% data variables.product.prodname_ghe_cloud %} plans.

<!-- expires 2026-07-20 -->

{% data variables.product.prodname_code_quality %} is currently in {% data variables.release-phases.public_preview %} and will become generally available on July 20, 2026. During {% data variables.release-phases.public_preview %}, {% data variables.product.prodname_code_quality_short %} scans will consume {% data variables.product.prodname_actions %} minutes but you will not be billed for other usage. From July 20, 2026, usage will incur additional charges. See [AUTOTITLE](/billing/concepts/product-billing/github-code-quality).

If you want to avoid charges, disable {% data variables.product.prodname_code_quality_short %} before July 20, 2026. See [AUTOTITLE](/code-security/how-tos/maintain-quality-code/disable-code-quality).

<!-- end expires 2026-07-20 -->

> [!NOTE]
> You **don't** need a {% data variables.product.prodname_copilot_short %} or a {% data variables.product.prodname_code_security %} license to use {% data variables.product.prodname_code_quality_short %} or apply {% data variables.product.prodname_copilot_short %}-powered autofixes.

## Supported languages

{% data variables.product.prodname_code_quality_short %} performs rule-based analysis of the following languages using {% data variables.product.prodname_codeql %}:

{% data reusables.code-quality.codeql-supported-languages %}

{% data variables.product.prodname_code_quality_short %} also performs AI-powered analysis with results displayed separately on the "**{% data variables.code-quality.recent_suggestions %}**" repository dashboard. Unlike the rule-based {% data variables.product.prodname_codeql %} analysis that scans the entire codebase and pull requests, this AI-powered analysis only examines files recently pushed to the default branch and may identify issues in languages beyond those listed above. For more information, see [AUTOTITLE](/code-security/code-quality/responsible-use/code-quality).

## Where will findings appear?

Once you enable {% data variables.product.prodname_code_quality_short %} for a repository, you'll see {% data variables.product.prodname_codeql %} scans for:

* Every new pull request opened against the default branch
* All existing pull requests to the default branch when they are updated, triggering a new run of CI tests
* The whole codebase on the default branch at the time and date shown on the "{% data variables.code-quality.code_quality_ui %}" settings page

In addition, you'll see an AI-powered analysis of all recent pushes to the default branch.

### Pull request results

When {% data variables.product.prodname_codeql %} finds rule-based problems on pull requests, you'll see comments from the `{% data variables.code-quality.pr_commenter %}`. Where possible, each comment will include a {% data variables.copilot.copilot_autofix_short %} suggestion on how to fix the problem. See [AUTOTITLE](/code-security/code-quality/tutorials/fix-findings-in-prs).

If you have set up code coverage, the `{% data variables.code-quality.pr_commenter %}` also posts a coverage summary showing the aggregate coverage percentage for the PR branch compared to the default branch. See [AUTOTITLE](/code-security/how-tos/maintain-quality-code/interpret-results#viewing-code-coverage-on-pull-requests).

### Default branch results

{% data variables.product.prodname_code_quality_short %} findings on the default branch are reported on "{% data variables.code-quality.code_quality_ui %}" pages on the **{% data variables.product.prodname_security_and_quality_tab %}** tab for the repository:

* **{% data variables.code-quality.all_findings %}** shows the results of {% data variables.product.prodname_codeql %} quality analysis. See [AUTOTITLE](/code-security/code-quality/tutorials/improve-your-codebase).
* **{% data variables.code-quality.recent_suggestions %}** shows the results of AI-powered analysis of the files most recently pushed to the default branch. See [AUTOTITLE](/code-security/code-quality/tutorials/improve-recent-merges).

### Scan information

Each {% data variables.product.prodname_codeql %} analysis will use {% data variables.product.prodname_actions %} minutes and can be seen on the **Actions** tab of the repository as a run of the dynamic "{% data variables.code-quality.workflow_name_actions %}" workflow.

## How enablement works across your enterprise

{% data variables.product.prodname_code_quality_short %} is controlled at three levels, so you can decide how much autonomy to give organizations and repositories:

* **Enterprise:** An enterprise owner must first allow {% data variables.product.prodname_code_quality_short %} for the enterprise. Until they do, organization owners cannot enable it.
* **Organization:** Organization owners control which repositories have {% data variables.product.prodname_code_quality_short %} enabled or disabled, by granting access to all repositories, a selected list, or repositories that match a filter. They can also enforce these settings so that repository administrators cannot change them.
* **Repository:** Repository administrators can enable or disable {% data variables.product.prodname_code_quality_short %} for individual repositories, unless organization-level enforcement applies.

When {% data variables.product.prodname_code_quality_short %} is enabled on a repository, {% data variables.product.prodname_codeql %} analysis runs via {% data variables.product.prodname_actions %} and surfaces findings in pull requests and on the default branch. Developers see quality checks and annotations on their pull requests.

## Organization-level repository access

At the organization level, you control {% data variables.product.prodname_code_quality_short %} with a single **Repository access** setting. This setting determines which repositories have {% data variables.product.prodname_code_quality_short %} enabled and which have it disabled: repositories within your selection are enabled, and repositories outside your selection are disabled.

> [!IMPORTANT]
> Changing the **Repository access** setting can both enable **and** disable {% data variables.product.prodname_code_quality_short %} across many repositories at once. For example, if you enable {% data variables.product.prodname_code_quality_short %} for repositories matching a filter, any repository that does not match the filter is disabled. Before your change is applied, a dialog shows the total number of enabled and disabled repositories, along with the billing impact.

### Repository access options

You can apply one of the following options at a time.

| Option | Behavior |
| ------ | -------- |
| **No repositories** | Disables {% data variables.product.prodname_code_quality_short %} for all current and future repositories in the organization. |
| **Let repositories decide** | The organization neither enables nor disables {% data variables.product.prodname_code_quality_short %}. Repository administrators choose whether to enable it for their own repositories. This option cannot be enforced. |
| **All repositories** | Enables {% data variables.product.prodname_code_quality_short %} for all current and future repositories. |
| **Selected repositories** | Enables {% data variables.product.prodname_code_quality_short %} for a specific list of repositories that you choose. Repositories you do not select are disabled, and new repositories are not enabled automatically. Best for pilots or exceptions. |
| **Matching a filter** | Enables {% data variables.product.prodname_code_quality_short %} for repositories that match a filter you define, now and in the future. Repositories that do not match are disabled. See [Filtering repositories](#filtering-repositories). |

### Filtering repositories

When you choose **Matching a filter**, you create a dynamic filter that automatically enables {% data variables.product.prodname_code_quality_short %} for existing and future repositories that match your criteria. This is useful for ongoing governance at scale.

You can filter on any combination of the following criteria:

* **Visibility:** Whether repositories are public, private, or internal. Useful for broad policies, such as enabling {% data variables.product.prodname_code_quality_short %} for all private repositories.
* **Fork status:** Whether repositories are forks. Useful when forks should not consume analysis resources.
* **Custom property:** Whether repositories have a specific custom property value. For example, you could target repositories with a `team:platform` property.

All conditions in a filter are combined with `AND`, so a repository must match every condition to be enabled. You can also exclude repositories that match specific conditions.

### Enforcing access

By default, repository administrators can change {% data variables.product.prodname_code_quality_short %} settings for their own repositories. To prevent this, enable **Enforce access**.

Enforcement locks in both the enabled and disabled states set by your **Repository access** option, so repository administrators cannot override them. This improves consistency across your organization, but reduces flexibility for individual repository administrators.

* Enforcement applies to most **Repository access** options you select, including **No repositories**, which enforces {% data variables.product.prodname_code_quality_short %} as disabled.
* Enforcement is not available with **Let repositories decide**, which intentionally leaves the choice to repository administrators.

## Planning your rollout

Because enabling {% data variables.product.prodname_code_quality_short %} can affect many repositories at once and each analysis consumes {% data variables.product.prodname_actions %} minutes, plan how you roll it out across your organization:

* **Start with a pilot group.** Enable a small, representative set of repositories first—for example, by selecting them individually or matching a custom property—so you can validate results before expanding.
* **Check your {% data variables.product.prodname_actions %} capacity.** Confirm your runners can absorb the additional load before you enable {% data variables.product.prodname_code_quality_short %} broadly.
* **Decide whether to enforce enablement.** Enforcement gives you consistent coverage and prevents repository administrators from opting out, but it removes their flexibility. Leaving enforcement off during a pilot lets teams opt in and out as they learn.
* **Expand once results are trusted.** After you've confirmed that analysis runs smoothly and developers understand the findings, widen your selection or filter to cover more repositories.

## Next steps

* **For your repository or organization:** Turn on {% data variables.product.prodname_code_quality_short %} to start generating results. See [AUTOTITLE](/code-security/how-tos/maintain-quality-code/enable-code-quality).
* **For your enterprise:** Ensure repositories in your enterprise can enable {% data variables.product.prodname_code_quality_short %}. See [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/allow-github-code-quality-in-enterprise).
