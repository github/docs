---
title: Enabling {% data variables.product.prodname_code_quality %}
shortTitle: Enable Code Quality
intro: 'Turn on {% data variables.product.prodname_code_quality_short %} to give your teams a consistent quality baseline: automatically catching, fixing, and reporting code quality issues in pull requests and on your default branch.'
versions:
  feature: code-quality
product: '{% data reusables.gated-features.code-quality-availability %}'
permissions: '{% data reusables.permissions.code-quality-repo-enable %}'
audience:
  - driver
contentType: how-tos
redirect_from:
  - /code-security/code-quality/how-tos/enable-code-quality
category:
  - Improve code quality
---

You can enable {% data variables.product.prodname_code_quality_short %} for a single repository, or for every repository in an organization at once. Enabling at the organization level gives all your teams a consistent quality baseline with a single change, while enabling per repository lets you target specific projects or roll out gradually.

## Prerequisites

* An enterprise owner must have allowed {% data variables.product.prodname_code_quality_short %} in your enterprise. See [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/allow-github-code-quality-in-enterprise).
* {% data variables.product.prodname_actions %} must be enabled because {% data variables.product.prodname_code_quality_short %} uses actions to run each {% data variables.product.prodname_codeql %} analysis.
* To get the full benefit of the feature, your repository should include one of the languages supported for quality analysis by {% data variables.product.prodname_codeql %}. See [Supported languages](/code-security/concepts/code-quality/code-quality#supported-languages).

## Enabling {% data variables.product.prodname_code_quality_short %} for your repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the sidebar, under "Security", click **{% data variables.code-quality.code_quality_ui_settings %}** to display the "{% data variables.code-quality.code_quality_ui %}" page.
1. Click **Enable code quality**.
1. Review the information on the Code quality page:

   * **Languages:** If you want to disable {% data variables.product.prodname_codeql %} analysis for any of the languages, clear the associated check box.
   * **Runner type:** If you want to use a different runner, choose **Labeled runner** and define the **Runner label**. See [AUTOTITLE](/actions/how-tos/manage-runners/github-hosted-runners/use-github-hosted-runners) and [AUTOTITLE](/actions/how-tos/manage-runners/self-hosted-runners/apply-labels).

1. Click **Save changes** to save your configuration for {% data variables.product.prodname_code_quality_short %}.

If your organization has configured caching of private registries, these will be available for code quality analysis to use to resolve dependencies. See [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-organization-security/manage-usage-and-access/giving-org-access-private-registries#code-quality-access-to-private-registries).

## Enabling {% data variables.product.prodname_code_quality_short %} for your organization

At the organization level, you control {% data variables.product.prodname_code_quality_short %} with a single **Repository access** setting. This gives you granular options, from enabling every repository to targeting a specific list or a dynamic filter, so you can pilot {% data variables.product.prodname_code_quality_short %} intentionally and roll it out at your own pace. Repositories within your selection are enabled, and repositories outside your selection are disabled.

For the available access options, and how filtering and enforcement work, see [AUTOTITLE](/code-security/concepts/code-quality/enablement-at-scale#organization-level-repository-access).

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
1. In the sidebar, under "Security", click **{% data variables.code-quality.code_quality_ui_settings %}**.
1. Under "Repository access", select an option from the dropdown menu.
   * If you selected **Selected repositories...**, choose the repositories you want to enable.
   * If you selected **Matching a filter...**, define your filter.
1. Optionally, to prevent repository administrators from changing these settings, enable **Enforce access**.
1. If your change enables or disables {% data variables.product.prodname_code_quality_short %} on any repositories, a "Review enablement and billing changes" dialog appears, showing the total number of enabled and disabled repositories and the associated costs. Review the details, then click **Confirm**.

Your changes are saved automatically and begin to propagate immediately. In large organizations, it can take several minutes for the changes to apply across all repositories.

If you're rolling out the feature across many teams, we recommend you pilot on a small group and tune your quality thresholds before you enable everywhere. See [AUTOTITLE](/code-security/how-tos/maintain-quality-code/roll-out-at-scale).

## Next steps

* **Add code coverage:** Upload reported code coverage from your test suite to see coverage results directly on pull requests. See [AUTOTITLE](/code-security/how-tos/maintain-quality-code/set-up-code-coverage).
* **For your organization:** Understand the code health of your repositories at a glance. See [AUTOTITLE](/code-security/how-tos/maintain-quality-code/explore-code-quality).
