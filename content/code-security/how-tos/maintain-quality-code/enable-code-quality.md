---
title: Enabling {% data variables.product.prodname_code_quality %}
shortTitle: Enable Code Quality
intro: Use {% data variables.product.prodname_code_quality_short %} to automatically catch, fix, and report on code quality issues in pull requests and on your default branch.
versions:
  feature: code-quality
product: '{% data reusables.gated-features.code-quality-availability %}'
permissions: '{% data reusables.permissions.code-quality-repo-enable %}'
topics:
  - Code Quality
contentType: how-tos
redirect_from:
  - /code-security/code-quality/how-tos/enable-code-quality
---

{% data reusables.code-quality.code-quality-preview-note %}

## Prerequisites

* {% data variables.product.prodname_actions %} must be enabled because {% data variables.product.prodname_code_quality_short %} uses actions to run each {% data variables.product.prodname_codeql %} analysis.
* To get the full benefit of the feature, your repository should include one of the languages supported for quality analysis by {% data variables.product.prodname_codeql %}. See [Supported languages](/code-security/code-quality/concepts/about-code-quality#supported-languages).

## Enabling {% data variables.product.prodname_code_quality_short %} for a repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the sidebar, under "Security", click **{% data variables.code-quality.code_quality_ui_settings %}** to display the "{% data variables.code-quality.code_quality_ui %}" page.
1. Click **Enable code quality**.

   > [!NOTE]
   > If **Enable code quality** is missing from this view, your enterprise owner has disabled the use of {% data variables.product.prodname_code_security %} and {% data variables.product.prodname_code_quality_short %} for your organization. See [AUTOTITLE](/code-security/code-quality/how-tos/allow-in-enterprise).
1. Review the information on the Code quality page:

   * **Languages:** If you want to disable {% data variables.product.prodname_codeql %} analysis for any of the languages, clear the associated check box.
   * **Runner type:** If you want to use a different runner, choose **Labeled runner** and define the **Runner label**. See [AUTOTITLE](/actions/how-tos/manage-runners/github-hosted-runners/use-github-hosted-runners) and [AUTOTITLE](/actions/how-tos/manage-runners/self-hosted-runners/apply-labels).

1. Click **Save changes** to save your configuration for {% data variables.product.prodname_code_quality_short %}.

> [!TIP]
> If your organization has configured caching of private registries, these will be available for code quality analysis to use to resolve dependencies. See [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/giving-org-access-private-registries#code-quality-access-to-private-registries).

## Next steps

* Learn about the code quality backlog for your repository. See [AUTOTITLE](/code-security/code-quality/how-tos/interpret-results).
* Find and fix code quality issues before they reach your default branch. See [AUTOTITLE](/code-security/code-quality/tutorials/fix-findings-in-prs).
