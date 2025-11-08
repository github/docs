---
title: Managing requests for Copilot Business
intro: Meet your developers' needs by accepting Copilot requests from organizations in your enterprise.
permissions: Enterprise owners
product: Enterprise accounts with a subscription to {% data variables.copilot.copilot_for_business %}.
versions:
  ghec: '*'
type: how_to
redirect_from:
  - /admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/managing-requests-for-copilot-business-from-organizations-in-your-enterprise
topics:
  - Administrator
  - Enterprise
  - Organizations
shortTitle: Manage requests for Copilot
---

Organization owners might not have the necessary permissions to satisfy requests from members. For example, if an organization owner is not an enterprise owner, and {% data variables.copilot.copilot_for_business %} is not enabled for that organization, they will not have the permissions to approve requests for {% data variables.copilot.copilot_for_business %}.

In these cases, when an organization member requests access to {% data variables.copilot.copilot_for_business %}, the organization owner will be prompted to ask the enterprise owners to enable {% data variables.product.prodname_copilot_short %} for the organization.

As an enterprise owner, you can view or dismiss these requests from your notifications page. You can approve the request by enabling {% data variables.product.prodname_copilot_short %} for the organization.

## Approving requests for {% data variables.copilot.copilot_for_business %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.ai-controls-tab %}
{% data reusables.enterprise-accounts.view-copilot-policies %}
1. Click {% octicon "law" aria-hidden="true" aria-label="law" %} **Access management**.
1. In the "{% data variables.product.prodname_copilot_short %} access" section, click the {% octicon "organization" aria-hidden="true" aria-label="organization" %} **Organizations** tab.
1. Next to the organization you want to give access to, select the dropdown menu, then choose an access level.
