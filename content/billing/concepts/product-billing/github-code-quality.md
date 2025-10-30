---
title: '{% data variables.product.prodname_code_quality %} billing'
intro: 'Learn how usage of {% data variables.product.prodname_code_quality_short %} is measured.'
product: '{% data reusables.gated-features.code-quality-availability %}'
versions:
  feature: code-quality
topics:
  - Code Quality
  - Billing
  - Enterprise
  - Licensing
shortTitle: GitHub Code Quality
contentType: concepts
---

> [!NOTE]
> {% data variables.product.prodname_code_quality %} is currently in {% data variables.release-phases.public_preview %} and subject to change.

## How use of {% data variables.product.prodname_code_quality %} is measured

{% data variables.product.prodname_code_quality %} usage is **free** for all **public repositories**.

### For general availability

When {% data variables.product.prodname_code_quality_short %} is generally available, scanning **private repositories** will incur two types of costs for an organization:

* Premium requests
* {% data variables.product.prodname_actions %} minutes needed to run the scans unless you use self-hosted runners

### For the {% data variables.release-phases.public_preview %}

When you scan private repositories during the {% data variables.release-phases.public_preview %}, you **will not be billed** for premium request usage, but {% data variables.product.prodname_actions %} minutes **will be consumed**.

To view consumption of actions by the `{% data variables.code-quality.workflow_name_billing %}` workflow, download a detailed usage report from the "Billing and licensing" tab. See [AUTOTITLE](/billing/how-tos/products/view-productlicense-use).

> [!NOTE]
> {% data reusables.code-quality.shared-workflow-preview %}

## Further reading

* [AUTOTITLE](/code-security/code-quality/get-started/quickstart)
* [AUTOTITLE](/code-security/code-quality/how-tos/enable-code-quality)
