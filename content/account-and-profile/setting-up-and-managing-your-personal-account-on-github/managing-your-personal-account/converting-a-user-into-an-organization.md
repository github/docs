---
title: Converting a user into an organization
redirect_from:
  - /articles/what-is-the-difference-between-create-new-organization-and-turn-account-into-an-organization
  - /articles/explaining-the-account-transformation-warning
  - /articles/converting-a-user-into-an-organization
  - /github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/converting-a-user-into-an-organization
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/converting-a-user-into-an-organization
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/converting-a-user-into-an-organization
intro: You can convert your personal account into an organization. This allows more granular permissions for repositories that belong to the organization.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: User into an organization
---
{% warning %}

**Warning**: Before converting a user into an organization, keep these points in mind.

- You will **no longer** be able to sign into the converted personal account.
- You will **no longer** be able to create or modify gists owned by the converted personal account.
- An organization **cannot** be converted back to a user.
- The SSH keys, OAuth tokens, job profile, reactions, and associated user information, **will not** be transferred to the organization. This is only true for the personal account that's being converted, not any of the personal account's collaborators.
- Any {% data variables.product.prodname_github_apps %} installed on the converted personal account will be uninstalled.
- Any commits made with the converted personal account **will no longer be linked** to that account. The commits themselves **will** remain intact.
- Any existing comments made by the converted personal account **will no longer be linked** to that account. The comments themselves **will** remain intact, but will be associated with the `ghost` user.
- Any forks of private repositories made with the converted personal account will be deleted.
{% endwarning %}

{% ifversion fpt or ghec or ghes %}

## Keep your personal account and create a new organization manually

If you want your organization to have the same name that you are currently using for your personal account, or if you want to keep your personal account's information intact, then you must create a new organization and transfer your repositories to it instead of converting your personal account into an organization.

1. To retain your current personal account name for your personal use, [change the name of your personal account](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-user-account-settings/changing-your-github-username) to something new and wonderful.
1. [Create a new organization](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch) with the original name of your personal account.
1. [Transfer your repositories](/repositories/creating-and-managing-repositories/transferring-a-repository) to your new organization account.{% endif %}

## Convert your personal account into an organization automatically

You can also convert your personal account directly into an organization. Converting your account:
- Preserves the repositories as they are without the need to transfer them to another account manually
- Automatically invites collaborators to teams with permissions equivalent to what they had before
{%- ifversion fpt or ghec %}
- For personal accounts on {% data variables.product.prodname_pro %}, automatically transitions billing to [the paid {% data variables.product.prodname_team %}](/billing/managing-the-plan-for-your-github-account/about-billing-for-plans) without the need to re-enter payment information, adjust your billing cycle, or double pay at any time
{%- endif %}

When you convert a personal account into an organization, we'll add collaborators on repositories that belong to the account to the new organization as outside collaborators. You can then invite outside collaborators to become members of your new organization if you wish. For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators)."

1. Create a new personal account, which you'll use to sign into GitHub and access the organization and your repositories after you convert.
1. [Leave any organizations](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/removing-yourself-from-an-organization) the personal account you're converting has joined.
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.organizations %}
1. In the "Transform account" section, click **Turn USERNAME into an organization**.
1. Review the warning, then click **Turn USERNAME into an organization**.
1. Under "Choose an organization owner", type either the secondary personal account you created in the previous section, or another user you trust, to manage the organization.
1. Choose your new organization's subscription and enter your billing information, if prompted.
1. Click **Create Organization**.
1. Sign in to the new personal account you created earlier, then use the context switcher to access your new organization.

## Further reading

- "[AUTOTITLE](/organizations/organizing-members-into-teams)"
{% ifversion fpt or ghec %}
- "[AUTOTITLE](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)"
{% endif %}
- "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/accessing-an-organization)"
