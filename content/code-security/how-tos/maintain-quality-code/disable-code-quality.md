---
title: Disabling {% data variables.product.prodname_code_quality %}
shortTitle: Disable Code Quality
intro: Stop {% data variables.product.prodname_code_quality_short %} scans on a repository or across your organization, and know what happens to billing and your existing data before you do.
versions:
  feature: code-quality
product: '{% data reusables.gated-features.code-quality-availability %}'
permissions: '{% data reusables.permissions.code-quality-repo-enable %}'
audience:
  - driver
contentType: how-tos
category:
  - Improve code quality
---

## Disabling {% data variables.product.prodname_code_quality_short %} for your repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the sidebar, under "Security", click **{% data variables.code-quality.code_quality_ui_settings %}** to display the "{% data variables.code-quality.code_quality_ui %}" page.
1. Click **Disable**.
1. Click **Save changes**.

This stops all future {% data variables.product.prodname_code_quality_short %} scans, and the billing they generate, for that repository.

## Disabling {% data variables.product.prodname_code_quality_short %} for an organization

Disabling at the organization level turns {% data variables.product.prodname_code_quality_short %} off across your organization in a single change.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
1. In the sidebar, under "Security", click **{% data variables.code-quality.code_quality_ui_settings %}**.
1. Under "Repository access", select **No repositories** from the dropdown menu. This sets your organization's default to off, disabling {% data variables.product.prodname_code_quality_short %} in every repository that follows the organization default, for both current and future repositories.
1. To also disable {% data variables.product.prodname_code_quality_short %} in repositories where an administrator has deliberately enabled it, and to prevent administrators from re-enabling it, turn on **Enforce access**. Without enforcement, those repositories keep {% data variables.product.prodname_code_quality_short %} enabled.
1. Unless you select **Let repositories decide**, a "Review enablement and billing changes" dialog appears, showing the total number of affected repositories. Review the details, then click **Confirm**.

For the full list of access options and how enforcement works, see [AUTOTITLE](/code-security/concepts/code-quality/enablement-at-scale#organization-level-repository-access).

## What happens to your existing data

Disabling {% data variables.product.prodname_code_quality_short %}:

* Turns off future scanning. It doesn't remove your repository's code or commit history.
* Retains your existing {% data variables.product.prodname_code_quality_short %} data. Findings, quality scores, and history from previous scans aren't deleted when you disable {% data variables.product.prodname_code_quality_short %}, so there's no data loss, and this data is available again if you re-enable it.

## When billing stops

Disabling stops new scans right away, so no further {% data variables.product.prodname_actions %} minutes or {% data variables.product.prodname_ai_credits_short %} are consumed.

Usage you've already accrued this cycle still bills as normal. All metered usage adds up over the course of the month and bills on your next billing cycle date, so your next bill will show the {% data variables.product.prodname_ai_credits_short %} usage and licenses consumed before you disabled the feature. You won't see new charges accrue after the disable date.

## Confirming {% data variables.product.prodname_code_quality_short %} is off

What confirms the change depends on the level you disabled it at.

**At the organization level**, open the organization's "{% data variables.code-quality.code_quality_ui %}" settings page and check that **Repository access** shows your selection (for example, **No repositories**) and that **Enforce access** is on if you enforced it. The organization-level {% data variables.product.prodname_code_quality_short %} dashboard also stops showing data for the affected repositories. See [AUTOTITLE](/code-security/how-tos/maintain-quality-code/explore-code-quality).

**At the repository level**, the repository's "{% data variables.code-quality.code_quality_ui %}" settings page shows that {% data variables.product.prodname_code_quality_short %} analysis is disabled. If organization or enterprise enforcement applies, the page also shows a message that a policy prevents changing the {% data variables.product.prodname_code_quality_short %} setting. No new {% data variables.product.prodname_code_quality_short %} runs start on later pull requests or pushes; on the **Actions** tab, these runs are labeled by trigger, for example "{% data variables.product.prodname_code_quality_short %}: push on main".

> [!NOTE]
> These runs use the workflow name {% data variables.product.prodname_codeql %}, the same name {% data variables.product.prodname_code_scanning %} uses, so you can't reliably tell {% data variables.product.prodname_code_quality_short %} and {% data variables.product.prodname_code_scanning %} runs apart by workflow name. Identify {% data variables.product.prodname_code_quality_short %} runs by their {% data variables.product.prodname_actions %} label instead, for example "{% data variables.product.prodname_code_quality_short %}: push on main".
