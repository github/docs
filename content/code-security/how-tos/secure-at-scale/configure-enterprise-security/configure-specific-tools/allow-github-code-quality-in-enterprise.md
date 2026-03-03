---
title: Allowing use of {% data variables.product.prodname_code_quality %} in your enterprise
shortTitle: Allow {% data variables.product.prodname_code_quality_short %}
intro: Control {% data variables.product.prodname_code_quality_short %} enablement for your repositories by defining policies.
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

> [!NOTE]
> * {% data variables.product.prodname_code_quality %} is currently in {% data variables.release-phases.public_preview %} and subject to change. During {% data variables.release-phases.public_preview %}, {% data variables.product.prodname_code_quality_short %} will not be billed, although {% data variables.product.prodname_code_quality_short %} scans will consume {% data variables.product.prodname_actions %} minutes.
> * Previously, {% data variables.product.prodname_AS %} policies also controlled access to {% data variables.product.prodname_code_quality_short %}. Those existing policy settings are automatically applied to the standalone {% data variables.product.prodname_code_quality_short %} policies.

1. Navigate to your enterprise. For example, from [https://github.com/settings/enterprises](https://github.com/settings/enterprises?ref_product=ghec&ref_type=engagement&ref_style=text).
{% data reusables.enterprise-accounts.policies-tab %}
1. In the sidebar, click {% octicon "code-square" aria-hidden="true" aria-label="code-square" %} **{% data variables.product.prodname_code_quality_short %}**.
1. Select the "Organization access" dropdown menu, then click **Allow for all organizations** or **Allow for selected organizations**.
1. If you choose "Allow for selected organizations", select the dropdown menu for each organization where you want to enable {% data variables.product.prodname_code_quality_short %}, then click **Available**.
1. To allow repository administrators to enable {% data variables.product.prodname_code_quality_short %} on their repositories, select the "Repository admin policy" dropdown menu, then click **Allowed**.

## Next steps

To see {% data variables.product.prodname_code_quality_short %} in action, turn the feature on for one or more repositories. See [AUTOTITLE](/code-security/code-quality/how-tos/enable-code-quality).
