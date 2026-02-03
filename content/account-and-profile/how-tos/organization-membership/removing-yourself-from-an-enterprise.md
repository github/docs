---
title: Removing yourself from an enterprise
intro: You can leave an enterprise after removing yourself from every organization in the enterprise.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Leave an enterprise
contentType: how-tos
---

If your personal {% data variables.product.github %} account is a member of an enterprise, you can leave the enterprise at any time.

After leaving an enterprise, you will no longer be a member of any organization in the enterprise, and you will lose {% data variables.product.prodname_copilot %} licenses and other privileges granted through the enterprise.

>[!NOTE] If you use a {% data variables.enterprise.prodname_managed_user %} provided by your enterprise, only administrators can remove you from the enterprise. You're using a {% data variables.enterprise.prodname_managed_user %} if all usernames in your enterprise end with a pattern like `_CODE`, or if you access the enterprise at a domain like `{% data variables.enterprise.data_residency_example_domain %}`.

## Leaving an enterprise

To leave an enterprise, you must remove yourself from every organization in the enterprise, then leave the enterprise itself.

1. Leave every organization in the enterprise.
   1. Go to the [Enterprises](https://github.com/settings/enterprises) page in your settings.
   1. Click the enterprise you want to leave, then click the **Organizations** tab.
   1. Use the **Your role** dropdown to see the organizations that you're a member of.
   1. Leave each organization by following the instructions in [AUTOTITLE](/account-and-profile/how-tos/organization-membership/removing-yourself-from-an-organization).
1. Go back to the [Enterprises](https://github.com/settings/enterprises) page and check if the enterprise is still listed. If it is **not** listed, you have left the enterprise.
1. If the enterprise **is** still listed, check your role for the enterprise and take the appropriate action to leave:

   * If you're an **unaffiliated member**, next to the enterprise name, click **Leave**.
   * If you're an **owner**, you must go to the enterprise settings and remove yourself. See [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#removing-an-enterprise-administrator-from-your-enterprise-account).
   * If you're a **billing manager**, you must ask an enterprise owner to remove you using the instructions in [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#removing-an-enterprise-administrator-from-your-enterprise-account).

   ![Screenshot of the enterprises page. Next to "unaffilated member", the "Leave" button is highlighted with an orange outline.](/assets/images/help/enterprises/enterprise-self-removal.png)
