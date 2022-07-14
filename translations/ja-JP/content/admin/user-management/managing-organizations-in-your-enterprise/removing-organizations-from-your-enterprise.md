---
title: Removing organizations from your enterprise
intro: 'If an organization should no longer be a part of your enterprise, you can remove the organization.'
permissions: Enterprise owners can remove any organization from their enterprise.
versions:
  ghec: '*'
type: how_to
topics:
  - Enterprise
shortTitle: Removing organizations
---

{% warning %}

**Warning**: When you remove an organization from your enterprise:
- Billing, identity management, 2FA requirements, and other policies for the organization will no longer be governed by your enterprise.
- The organization will be downgraded to the free plan.
- The organization will be governed by our standard Terms of Service.
- Any internal repositories within the organization will be converted to private repositories.

{% endwarning %}

## Removing an organization from your Enterprise

{% data reusables.enterprise-accounts.access-enterprise %}
2. Under "Organizations", in the search bar, begin typing the organization's name until the organization appears in the search results. ![Screenshot of the search field for organizations](/assets/images/help/enterprises/organization-search.png)
3. To the right of the organization's name, select the {% octicon "gear" aria-label="The gear icon" %} drop-down menu and click **Remove organization**. ![Screenshot of an organization in search results](/assets/images/help/enterprises/remove-organization.png)
4. Review the warnings, then click **Remove organization**. ![Screenshot of a warning message and button to remove organization](/assets/images/help/enterprises/remove-organization-warning.png)
