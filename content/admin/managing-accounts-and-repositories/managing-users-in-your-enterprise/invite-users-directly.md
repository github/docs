---
title: Inviting users to your enterprise directly
shortTitle: Invite users directly
intro: 'You can invite people directly to your enterprise as unaffiliated users.'
permissions: 'Enterprise owners'
versions:
  ghec: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - User account
product: 'Enterprises that use **personal accounts** on {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.copilot.direct-assignment-rollout %}'
---

You can invite people directly to your enterprise as **unaffiliated users**. You can then add these users to organizations or enterprise teams and assign {% data variables.product.prodname_copilot_short %} licenses to them. For more information about unaffiliated users, see [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/roles-in-an-enterprise#unaffiliated-users).

>[!NOTE] If you use {% data variables.product.prodname_emus %}, you must add users to your enterprise from your identity provider using SCIM.

## Inviting users

1. In the top-right corner of {% data variables.product.github %}, click your profile picture.
1. Click **Your enterprises** then click the enterprise you want to view.
{% data reusables.enterprise-accounts.people-tab %}
1. On the "Members" page, click **Invite member**.
1. Search for the users you want to invite, then click **Invite**.

After you invite someone to join the enterprise account, they must accept the emailed invitation before they can access the enterprise account. Pending invitations will expire after 7 days.

## Next steps

* To add users to organizations, see [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/managing-organization-members-in-your-enterprise).
* To add users to an enterprise team, see [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/create-enterprise-teams).
* To assign {% data variables.product.prodname_copilot_short %} licenses, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access/grant-access).
