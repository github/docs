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
1. In the sidebar, under **{% data variables.product.prodname_security_and_quality_tab %}**, click **{% data variables.code-quality.code_quality_ui_settings %}** to display the "{% data variables.code-quality.code_quality_ui %}" page.
1. Under **{% data variables.product.prodname_code_quality_short %} analysis**, toggle from **On** to **Off**.

This stops all future {% data variables.product.prodname_code_quality_short %} scans for that repository, along with the {% data variables.product.prodname_actions %} minutes and {% data variables.product.prodname_ai_credits_short %} those scans use. License charges continue for a period after you disable {% data variables.product.prodname_code_quality_short %}. See [When billing stops](#when-billing-stops).

## Disabling {% data variables.product.prodname_code_quality_short %} for an organization

Disabling at the organization level turns {% data variables.product.prodname_code_quality_short %} off across your organization in a single change.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
1. In the sidebar, under "Security", click **{% data variables.code-quality.code_quality_ui_settings %}**.
1. Under "Repository access", select **No repositories** from the dropdown menu. This sets your organization's default to off, disabling {% data variables.product.prodname_code_quality_short %} in every repository that follows the organization default, for both current and future repositories.
1. To also disable {% data variables.product.prodname_code_quality_short %} in repositories where an administrator has deliberately enabled it, and to prevent administrators from re-enabling it, turn on **Enforce access**. Without enforcement, those repositories keep {% data variables.product.prodname_code_quality_short %} enabled.
1. Unless you select **Let repositories decide**, a "Review enablement and billing changes" dialog appears, showing the total number of affected repositories. Review the details, then click **Confirm**.

For repositories affected by the organization-level change, disabling stops future scans and the metered usage they generate. Repositories that are explicitly enabled continue scanning unless you turn on **Enforce access**. License charges continue for a period after the change. See [When billing stops](#when-billing-stops).

For the full list of access options and how enforcement works, see [AUTOTITLE](/code-security/concepts/code-quality/enablement-at-scale#organization-level-repository-access).

## What happens to your existing data

Disabling {% data variables.product.prodname_code_quality_short %}:

* Turns off future scanning. It doesn't remove your repository's code or commit history.
* Retains your existing {% data variables.product.prodname_code_quality_short %} data. Findings, quality scores, and history from previous scans aren't deleted when you disable {% data variables.product.prodname_code_quality_short %}, so there's no data loss, and this data is available again if you re-enable it.

## When billing stops

Disabling {% data variables.product.prodname_code_quality_short %} stops metered usage immediately, but license charges continue for a period afterwards. For an overview of what {% data variables.product.prodname_code_quality_short %} bills for, see [AUTOTITLE](/billing/concepts/product-billing/github-code-quality).

### Metered usage stops immediately

Disabling stops new scans right away, so you use no further {% data variables.product.prodname_actions %} minutes or {% data variables.product.prodname_ai_credits_short %}.

Usage from before you disabled still bills as normal. Metered usage adds up over the course of the month and appears on your next bill.

### License charges can continue

Disabling {% data variables.product.prodname_code_quality_short %} can reduce the number of licenses you use:

* A committer who contributed only to repositories where you disable {% data variables.product.prodname_code_quality_short %} no longer counts towards your license usage.
* A committer who also contributed to another repository where {% data variables.product.prodname_code_quality_short %} remains enabled continues to count. They stop counting 90 days after their most recent commit to an enabled repository.

For each billing period, you're charged for the highest number of licenses used at any point during that period, not the number in use at the end. Disabling {% data variables.product.prodname_code_quality_short %} can free licenses for the next period, but it doesn't reduce the charge for the current period.

{% data variables.product.prodname_code_quality_short %} uses the same licensing model as {% data variables.product.prodname_GHAS %}. To see how the active committer count changes as people stop committing and as repositories are enabled and disabled, see [AUTOTITLE](/billing/concepts/product-billing/github-advanced-security#example-showing-how-the-active-committer-count-changes-over-time).

## Confirming {% data variables.product.prodname_code_quality_short %} is off

What confirms the change depends on the level you disabled it at.

**At the organization level**, open the organization's "{% data variables.code-quality.code_quality_ui %}" settings page and check that **Repository access** shows your selection (for example, **No repositories**) and that **Enforce access** is on if you enforced it. The organization-level {% data variables.product.prodname_code_quality_short %} dashboard also stops showing data for the affected repositories. See [AUTOTITLE](/code-security/how-tos/maintain-quality-code/explore-code-quality).

**At the repository level**, the repository's "{% data variables.code-quality.code_quality_ui %}" settings page shows that {% data variables.product.prodname_code_quality_short %} analysis is disabled. If organization or enterprise enforcement applies, the page also shows a message that a policy prevents changing the setting. No new runs start on later pull requests or pushes. On the **Actions** tab, identify existing {% data variables.product.prodname_code_quality_short %} runs by the actor `{% data variables.code-quality.workflow_actor %}` or by a run name such as "{% data variables.product.prodname_code_quality_short %}: push on main."
