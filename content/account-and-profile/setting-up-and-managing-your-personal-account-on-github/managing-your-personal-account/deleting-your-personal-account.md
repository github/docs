---
title: Deleting your personal account
intro: 'You can delete your personal account on {% data variables.location.product_location %} at any time.'
redirect_from:
  - /articles/deleting-a-user-account
  - /articles/deleting-your-user-account
  - /github/setting-up-and-managing-your-github-user-account/deleting-your-user-account
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/deleting-your-user-account
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/deleting-your-user-account
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/deleting-your-personal-account
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Delete your account
---

## About deletion of your personal account

Deleting your personal account removes all repositories, forks of private repositories, wikis, issues, pull requests, and pages owned by your account. {% ifversion fpt or ghec %}Issues and pull requests you've created and comments you've made in repositories owned by other users will not be deleted. Your resources and comments will become associated with the [ghost user](https://github.com/ghost).{% else %}Issues and pull requests you've created and comments you've made in repositories owned by other users will not be deleted.{% endif %}

{% ifversion fpt or ghec %}

{% data reusables.accounts.delete-account-repo-namespace-retirement %}

{% endif %}

{% data reusables.package_registry.delete-account-namespace-retirement %}

{% ifversion ghec %}

{% note %}

**Note**: If your enterprise manages your account and you sign into {% data variables.location.product_location %} through your company's identity provider (IdP), you cannot delete your account. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users)."

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %}When you delete your account we stop billing you. The email address associated with the account becomes available for use with a different account on {% data variables.location.product_location %}. After 90 days, the account name also becomes available to anyone else to use on a new account. {% endif %}

If you're the only owner of an organization, you must transfer ownership to another person or delete the organization before you can delete your personal account. If there are other owners in the organization, you must remove yourself from the organization before you can delete your personal account.

For more information, see the following articles.

* "[AUTOTITLE](/organizations/managing-organization-settings/transferring-organization-ownership)"
* "[AUTOTITLE](/organizations/managing-organization-settings/deleting-an-organization-account)"
* "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/removing-yourself-from-an-organization)"

{% ifversion ghes %}
> [!NOTE]
> * You should contact an enterprise owner before deleting your account on {% data variables.product.product_name %}.
{% endif %}

## Back up your account data

Before you delete your personal account, make a copy of all repositories, private forks, wikis, issues, and pull requests owned by your account. For more information, see "[AUTOTITLE](/repositories/archiving-a-github-repository/backing-up-a-repository)."

{% warning %}

**Warning:** Once your personal account has been deleted, {% ifversion fpt or ghec %}{% data variables.product.company_short %}{% elsif ghes %}an enterprise owner{% endif %} cannot restore your content.

{% endwarning %}

## Deleting your personal account

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.account_settings %}
1. At the bottom of the Account Settings page, under "Delete account", click **Delete your account**. Before you can delete your personal account:
    * If you're the only owner in the organization, you must transfer ownership to another person or delete your organization.
    * If there are other organization owners in the organization, you must remove yourself from the organization.
1. In the "Make sure you want to do this" dialog box, complete the steps to confirm you understand what happens when your account is deleted:
   {% ifversion fpt or ghec %}- Recall that all repositories, forks of private repositories, wikis, issues, pull requests and {% data variables.product.prodname_pages %} sites owned by your account will be deleted. Your billing will end immediately. Your username will be available to anyone for use on {% data variables.product.product_name %} after 90 days.{% else %}
    * Recall that all repositories, forks of private repositories, wikis, issues, pull requests and pages owned by your account will be deleted, and your username will be available for use on {% data variables.product.product_name %}.{% endif %}
    * In the first field, type your {% data variables.product.product_name %} username or email.
    * In the second field, type the phrase from the prompt.
