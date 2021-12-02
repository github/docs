---
title: Removing organizations from your enterprise
intro: 'If an organization should no longer be a part of an enterprise that you administer, you can remove them from the enterprise.'
permissions: 'Enterprise owners can remove any organization from their enterprise.'
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
2. In the **Find an organization** search bar, begin typing the organization's username until it appears.
![organization search](/assets/images/help/enterprises/organization-search.png)
3. Next to the organization, use the drop-down and click **Remove organization**.
![remove organization](/assets/images/help/enterprises/remove-organization.png)
4. In the Approve removal of organization dialog box, review and confirm the removal. Note that the information in this box is the same as the warning at the top of this article.
![approve organization approval dialogue box](/assets/images/help/enterprises/remove-organization-warning.png)
