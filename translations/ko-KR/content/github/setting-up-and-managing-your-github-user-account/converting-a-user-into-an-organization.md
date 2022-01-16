---
title: Converting a user into an organization
redirect_from:
  - /articles/what-is-the-difference-between-create-new-organization-and-turn-account-into-an-organization/
  - /articles/explaining-the-account-transformation-warning/
  - /articles/converting-a-user-into-an-organization
intro: You can convert your user account into an organization. This allows more granular permissions for repositories that belong to the organization.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Accounts
---

{% warning %}

**Warning**: Before converting a user into an organization, keep these points in mind:

 - You will **no longer** be able to sign into the converted user account.
 - You will **no longer** be able to create or modify gists owned by the converted user account.
 - An organization **cannot** be converted back to a user.
 - The SSH keys, OAuth tokens, job profile,  reactions, and associated user information, **will not** be transferred to the organization. This is only true for the user account that's being converted, not any of the user account's collaborators.
 - Any commits made with the converted user account **will no longer be linked** to that account. The commits themselves **will** remain intact.

{% endwarning %}

### Keep your personal user account and create a new organization manually

If you want your organization to have the same name that you are currently using for your personal account, or if you want to keep your personal user account's information intact, then you must create a new organization and transfer your repositories to it instead of converting your user account into an organization.

1. To retain your current user account name for your personal use, [change the name of your personal user account](/articles/changing-your-github-username) to something new and wonderful.
2. [Create a new organization](/articles/creating-a-new-organization-from-scratch) with the original name of your personal user account.
3. [Transfer your repositories](/articles/transferring-a-repository) to your new organization account.

### Convert your personal account into an organization automatically

You can also convert your personal user account directly into an organization. Converting your account:
 - Preserves the repositories as they are without the need to transfer them to another account manually
 - Automatically invites collaborators to teams with permissions equivalent to what they had before
 {% if currentVersion == "free-pro-team@latest" %}- For user accounts on {% data variables.product.prodname_pro %}, automatically transitions billing to [the paid {% data variables.product.prodname_team %}](/articles/about-billing-for-github-accounts) without the need to re-enter payment information, adjust your billing cycle, or double pay at any time{% endif %}

1. Create a new personal account, which you'll use to sign into GitHub and access the organization and your repositories after you convert.
2.  [Leave any organizations](/articles/removing-yourself-from-an-organization) the user account you're converting has joined.
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.organizations %}
5. Under "Transform account", click **Turn <username> into an organization**. ![Organization conversion button](/assets/images/help/settings/convert-to-organization.png)
6. In the Account Transformation Warning dialog box, review and confirm the conversion. Note that the information in this box is the same as the warning at the top of this article. ![Conversion warning](/assets/images/help/organizations/organization-account-transformation-warning.png)
7. On the "Transform your user into an organization" page, under "Choose an organization owner", choose either the secondary personal account you created in the previous section or another user you trust to manage the organization. ![Add organization owner page](/assets/images/help/organizations/organization-add-owner.png)
8. Choose your new organization's subscription and enter your billing information if prompted.
9. Click **Create Organization**.
10. Sign in to the new user account you created in step one, then use the context switcher to access your new organization.

{% tip %}

**Tip**: When you convert a user account into an organization, we'll add collaborators on repositories that belong to the account to the new organization as *outside collaborators*. You can then invite *outside collaborators* to become members of your new organization if you wish. For more information, see "[Permission levels for an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/permission-levels-for-an-organization#outside-collaborators)."

{% endtip %}

### 더 읽을거리
- "[Setting up teams](/articles/setting-up-teams)"
{% if currentVersion == "free-pro-team@latest" %}- "[Inviting users to join your organization](/articles/inviting-users-to-join-your-organization)"{% endif %}
- "[Accessing an organization](/articles/accessing-an-organization)"
