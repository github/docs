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
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/converting-a-user-into-an-organization
  - /account-and-profile/how-tos/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/converting-a-user-into-an-organization
intro: You can convert your personal account into an organization. This allows more granular permissions for repositories that belong to the organization.
versions:
  ghes: '<3.21'
topics:
  - Accounts
shortTitle: Convert your account
contentType: how-tos
---

## Prerequisites

The personal account you want to convert cannot be a member of any organizations. If the personal account you want to convert is a member of an organization, you must leave the organization before you can convert the account.

You may not be able to convert a personal account into an organization if an enterprise owner has set a policy at the enterprise level. See, [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/preventing-users-from-creating-organizations).

## Keep your personal account and create a new organization manually

If you want your organization to have the same name that you are currently using for your personal account, or if you want to keep your personal account's information intact, then you must create a new organization and transfer your repositories to it instead of converting your personal account into an organization.

1. To retain your current personal account for your personal use, [change the name of your personal account](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-user-account-settings/changing-your-github-username) to something new and wonderful.
1. [Create a new organization](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch) with the original name of your personal account.
1. [Transfer your repositories](/repositories/creating-and-managing-repositories/transferring-a-repository) to your new organization account.

## Convert your personal account into an organization automatically

To convert your personal account into an organization, follow these steps:

1. Create a new personal account, which you'll use to sign into {% data variables.product.github %} and access the organization and your repositories after you convert.
1. [Leave any organizations](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/removing-yourself-from-an-organization) the personal account you're converting has joined.
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.organizations %}
1. In the "Transform account" section, click **Turn USERNAME into an organization**.
1. Review the warning, then click **Turn USERNAME into an organization**.
1. Under "Choose an organization owner", type either the secondary personal account you created in the previous section, or another user you trust, to manage the organization.
1. Choose your new organization's subscription and enter your billing information, if prompted.
1. Click **Create Organization**.
1. Sign in to the new personal account you created earlier, then use the context switcher to access your new organization.

## Next steps

* [AUTOTITLE](/account-and-profile/reference/personal-account-reference#side-effects-of-converting-an-account-to-an-organization)
* [AUTOTITLE](/organizations/organizing-members-into-teams)
* [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/accessing-an-organization)
