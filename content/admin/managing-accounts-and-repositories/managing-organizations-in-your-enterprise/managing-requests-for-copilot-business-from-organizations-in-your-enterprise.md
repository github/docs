---
title: Managing requests for Copilot Business from organizations in your enterprise
intro: Learn how to view and satisfy requests to access Copilot from organizations owned by your enterprise.
permissions: Enterprise owners
product: Enterprise accounts with a subscription to {% data variables.product.prodname_copilot_for_business %}.
versions:
  ghec: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - Organizations
shortTitle: Manage requests for Copilot
---

Organization owners might not have the necessary permissions to satisfy requests from members. For example, if an organization owner is not an enterprise owner, and {% data variables.product.prodname_copilot_for_business %} is not enabled for that organization, they will not have the permissions to approve requests for {% data variables.product.prodname_copilot_for_business %}.

In these cases, when an organization member requests access to {% data variables.product.prodname_copilot_for_business %}, the organization owner will be prompted to ask the enterprise owners to enable {% data variables.product.prodname_copilot_short %} for the organization.

As an enterprise owner, you can view or dismiss these requests from your notifications page. You can approve the request by enabling {% data variables.product.prodname_copilot_short %} for the organization.

## Approving requests for {% data variables.product.prodname_copilot_for_business %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
1. Under "{% octicon "law" aria-hidden="true" %} Policies", click **Copilot**.
1. In the "Access management" section, next to the organization you want to give access, select the dropdown menu and click **Enabled**.
