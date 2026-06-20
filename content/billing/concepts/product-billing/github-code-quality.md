---
title: '{% data variables.product.prodname_code_quality %} billing'
intro: 'Learn how usage of {% data variables.product.prodname_code_quality_short %} is measured.'
product: '{% data reusables.gated-features.code-quality-availability %}'
versions:
  feature: code-quality
shortTitle: GitHub Code Quality
contentType: concepts
category:
  - Understand product costs
---

<!-- expires 2026-07-20 -->

> [!NOTE]
> {% data variables.product.prodname_code_quality %} will become generally available on July 20, 2026, at which point usage will incur charges. To avoid being charged, disable {% data variables.product.prodname_code_quality_short %} before that date. See [AUTOTITLE](/code-security/how-tos/maintain-quality-code/disable-code-quality).

<!-- end expires 2026-07-20 -->

## How use of {% data variables.product.prodname_code_quality %} is measured

<!-- expires 2026-07-20 -->

{% data variables.product.prodname_code_quality_short %} billing depends on whether the product is generally available or in {% data variables.release-phases.public_preview %}. The feature will move from {% data variables.release-phases.public_preview %} to general availability on July 20, 2026.

### During the {% data variables.release-phases.public_preview %} (until July 20, 2026)

When you scan private repositories during the {% data variables.release-phases.public_preview %}, you **will not be billed** for {% data variables.product.prodname_ai_credits_short %} or active committer usage, but {% data variables.product.prodname_actions %} minutes **will be consumed**.

To view consumption of actions by the `{% data variables.code-quality.workflow_name_billing %}` workflow, download a detailed usage report from the "Billing and licensing" tab. See [AUTOTITLE](/billing/how-tos/products/view-productlicense-use).

> [!NOTE]
> {% data reusables.code-quality.shared-workflow-preview %}

<!-- end expires 2026-07-20 -->

<!-- expires 2026-07-20 -->
### After general availability (from July 20, 2026)
<!-- end expires 2026-07-20 -->
<!-- On July 20, 2026, replace the heading above with a generic heading, such as "Billing for Code Quality" -->

When {% data variables.product.prodname_code_quality_short %} is generally available, use of the product will incur three types of costs for an organization:
* **{% data variables.product.prodname_actions %} minutes** — {% data variables.product.prodname_code_quality_short %} scans run as {% data variables.product.prodname_actions %} workflows and consume {% data variables.product.prodname_actions %} minutes, unless you use self-hosted runners. For more information, see [AUTOTITLE](/billing/concepts/product-billing/github-actions).
* **{% data variables.product.prodname_ai_credits %}** — {% data variables.product.prodname_code_quality_short %} features that use AI models consume {% data variables.product.prodname_ai_credits_short %}. Each interaction is priced based on the number of tokens consumed, where 1 {% data variables.product.prodname_ai_credit_singular %} = {% data variables.product.prodname_ai_credits_value %}. {% data reusables.code-quality.model-usage %} For more information about how {% data variables.product.prodname_ai_credits_short %} work, see [AUTOTITLE](/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises).
* **Active committers** — Your license usage is calculated based on the number of unique, active committers to repositories with {% data variables.product.prodname_code_quality_short %} enabled. {% data variables.product.prodname_github_app %} bots are ignored. For information about differences between bot and machine accounts, see [AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/differences-between-github-apps-and-oauth-apps#machine-vs-bot-accounts).

#### Active and unique committers

Each **active committer** to at least one repository with {% data variables.product.prodname_code_quality_short %} enabled uses **one license**. A committer is considered active if one of their commits has been pushed to the repository within the last 90 days, regardless of when it was originally authored.

* **Active committers** are committers who contributed to at least one repository and have a {% data variables.product.prodname_team %} or {% data variables.product.prodname_enterprise %} license with your organization or enterprise. That is, they are also a member, an enterprise-managed user, an external collaborator, or have a pending invitation to join your organization or enterprise.
* **Unique committers** is the number of active committers who contributed only to one repository, or only to repositories in one organization. You can free up this number of licenses by disabling {% data variables.product.prodname_code_quality_short %} for that repository or organization.

Users can contribute to multiple repositories or organizations. Usage is measured across the whole organization or enterprise to ensure that each member uses one license regardless of how many repositories or organizations the user contributes to.

## Further reading

* [AUTOTITLE](/code-security/code-quality/get-started/quickstart)
* [AUTOTITLE](/billing/concepts/product-billing/github-actions)
* [AUTOTITLE](/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises)
