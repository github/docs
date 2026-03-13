---
title: Allowing use of {% data variables.product.prodname_code_quality %} in your enterprise
shortTitle: Allow {% data variables.product.prodname_code_quality_short %}
intro: Define policies for {% data variables.product.prodname_AS %} that allow repository owners to enable {% data variables.product.prodname_code_quality %}.
versions:
  feature: code-quality
product: '{% data reusables.gated-features.code-quality-availability %}'
permissions: Enterprise owners
audience:
  - driver
topics:
  - Code Quality
contentType: how-tos
allowTitleToDifferFromFilename: true
redirect_from:
  - /code-security/code-quality/how-tos/allow-in-enterprise
---

{% data reusables.code-quality.code-quality-preview-note %}

## Policy control during the {% data variables.release-phases.public_preview %}

During the {% data variables.release-phases.public_preview %}, the {% data variables.product.prodname_AS %} policies have been extended to control access to {% data variables.product.prodname_code_quality %}. If you create a new enterprise, {% data variables.product.prodname_GH_secret_protection %}, {% data variables.product.prodname_GH_code_security %}, and {% data variables.product.prodname_code_quality %} are initially available for repository owners to use across all organizations.

For an existing enterprise, {% data variables.product.prodname_code_quality %} is available to repository owners if the {% data variables.product.prodname_AS %} policy already allows the use of {% data variables.product.prodname_GH_code_security %}.

## Allowing repository owners to enable {% data variables.product.prodname_code_quality_short %}

1. Navigate to your enterprise. For example, from [https://github.com/settings/enterprises](https://github.com/settings/enterprises?ref_product=ghec&ref_type=engagement&ref_style=text).
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. Under "General", select **Allow for all organizations**, or **Allow for selected organizations**.
1. If you choose "Allow for selected organizations", for each organization of interest ensure that the policy is **All plans** or **{% data variables.product.prodname_code_security %} and {% data variables.product.prodname_code_quality_short %} only**.
1. In the "{% data variables.product.prodname_code_security %} and {% data variables.product.prodname_code_quality_short %}" section, set the "Repository administrators can enable or disable {% data variables.product.prodname_code_security %} and {% data variables.product.prodname_code_quality_short %}" option to **All repositories: Allowed**.

For more information about policies for {% data variables.product.prodname_AS %}, see [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise).

## Next steps

To see {% data variables.product.prodname_code_quality_short %} in action, turn the feature on for one or more repositories, [AUTOTITLE](/code-security/code-quality/how-tos/enable-code-quality).
