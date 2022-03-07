---
title: Removing a member from your enterprise
intro: You can remove a member from all organizations owned by your enterprise.
permissions: Enterprise owners can remove an enterprise member from the enterprise.
versions:
  feature: remove-enterprise-members
type: how_to
topics:
  - Enterprise
shortTitle: Remove member
---

{% note %}

**Note:** The ability to remove enterprise members is in beta and subject to change.

{% endnote %}

## About removal of enterprise members

When you remove an enterprise member from your enterprise, the member is removed from all organizations owned by your enterprise.

If the enterprise member you're removing is the last owner of an organization owned by your enterprise, you will become an owner of that organization.

If your enterprise or any of the organizations owned by your enterprise uses an identity provider (IdP) to manage organization membership, the member may be added back to the organization by the IdP. Make sure to also make any necessary changes in your IdP.

## Removing a member from your enterprise

{% note %}

**Note:** If an enterprise member uses only {% data variables.product.prodname_ghe_server %}, and not {% data variables.product.prodname_ghe_cloud %}, you cannot remove the enterprise member this way.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. To the right of the person you want to remove, select the {% octicon "gear" aria-label="The gear icon" %} dropdown menu and click **Remove from enterprise**.

   ![Screenshot of the "Remove from enterprise" option for an enterprise member](/assets/images/help/business-accounts/remove-member.png)
