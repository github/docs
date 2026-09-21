---
title: Allowing use of {% data variables.product.prodname_code_quality %} in your enterprise
shortTitle: Allow {% data variables.product.prodname_code_quality_short %}
intro: Set enterprise policies for {% data variables.product.prodname_code_quality_short %} to give organizations access while keeping repository enablement under your control.
versions:
  feature: code-quality
product: '{% data reusables.gated-features.code-quality-availability %}'
permissions: Enterprise owners
audience:
  - driver
contentType: how-tos
allowTitleToDifferFromFilename: true
redirect_from:
  - /code-security/code-quality/how-tos/allow-in-enterprise
category:
  - Secure at scale
---

> [!NOTE]
> {% data variables.product.prodname_code_quality_short %} has its own standalone enterprise policies. Access was previously controlled by your {% data variables.product.prodname_AS %} policies, and those existing settings are automatically applied to the new {% data variables.product.prodname_code_quality_short %} policies.

{% data reusables.code-quality.agentic-autofix-preview-note %}

When you allow {% data variables.product.prodname_code_quality_short %} for an organization and set the repository admin policy to **Allowed**, repository administrators can enable {% data variables.product.prodname_code_quality_short %} scans and all associated capabilities, including bulk agentic remediation with {% data variables.product.prodname_copilot_short %}. There is no separate policy for agentic remediation.

If you restrict {% data variables.product.prodname_code_quality_short %}, repository administrators cannot enable scans or use {% data variables.product.prodname_copilot_short %}-powered autofixes for code quality findings.

1. Navigate to your enterprise. For example, from [https://github.com/settings/enterprises](https://github.com/settings/enterprises?ref_product=ghec&ref_type=engagement&ref_style=text).
{% data reusables.enterprise-accounts.policies-tab %}
1. In the sidebar, click {% octicon "code-square" aria-hidden="true" aria-label="code-square" %} **{% data variables.product.prodname_code_quality_short %}**.
1. Select the "Organization access" dropdown menu, then click **Allow for all organizations** or **Allow for selected organizations**.
1. If you choose "Allow for selected organizations", select the dropdown menu for each organization where you want to enable {% data variables.product.prodname_code_quality_short %}, then click **Available**.
1. To allow repository administrators to enable {% data variables.product.prodname_code_quality_short %} on their repositories, select the "Repository admin policy" dropdown menu, then click **Allowed**.

## Next steps

To see {% data variables.product.prodname_code_quality_short %} in action, turn the feature on for one or more repositories. See [AUTOTITLE](/code-security/how-tos/maintain-quality-code/enable-code-quality).
