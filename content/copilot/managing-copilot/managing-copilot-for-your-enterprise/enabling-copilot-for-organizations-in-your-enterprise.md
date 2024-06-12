---
title: Enabling Copilot for organizations in your enterprise
shortTitle: Enable for organizations
intro: 'Enable {% data variables.product.prodname_copilot %} for some or all of the organizations in your enterprise.'
permissions: Enterprise admins
product: '{% data variables.product.prodname_copilot_enterprise_short %} or {% data variables.product.prodname_copilot_business_short %}'
versions:
  feature: copilot-enterprise
topics:
  - Copilot
---

Admins of enterprises that have a {% data variables.product.prodname_copilot_enterprise_short %} or {% data variables.product.prodname_copilot_business_short %} subscription can enable {% data variables.product.prodname_copilot %} for all, none, or some organizations within the enterprise.

{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
1. In the "{% data variables.product.prodname_copilot_short %} is active in your enterprise" section, configure the access for your {% data variables.product.prodname_copilot %} subscription.
    - To enable {% data variables.product.prodname_copilot %} for all organizations in your enterprise, both current and future, select **Allow for: All organizations**.
    - To enable {% data variables.product.prodname_copilot %} for specific organizations, select **Allow for specific organizations**.

1. If you selected **Allow for specific organizations**, select the organizations you want to enable {% data variables.product.prodname_copilot %} for. Then, click the **Set organization permissions** dropdown and select **Enable** to grant {% data variables.product.prodname_copilot %} access for the specified organizations.

1. Click **Save**.

## Next steps

When {% data variables.product.prodname_copilot_short %} is enabled for an organization, owners of the organization can grant access to some or all members of the organization. See "[AUTOTITLE](/copilot/managing-github-copilot-in-your-organization/managing-access-for-copilot-business-in-your-organization)."
