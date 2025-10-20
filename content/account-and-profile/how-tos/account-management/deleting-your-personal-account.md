---
title: Deleting your personal account
intro: You can delete your personal account on {% data variables.location.product_location %} at any time.
redirect_from:
  - /articles/deleting-a-user-account
  - /articles/deleting-your-user-account
  - /github/setting-up-and-managing-your-github-user-account/deleting-your-user-account
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/deleting-your-user-account
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/deleting-your-user-account
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/deleting-your-personal-account
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/deleting-your-personal-account
  - /account-and-profile/how-tos/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/deleting-your-personal-account
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Delete your account
contentType: how-tos
---

{% ifversion ghec %}

> [!NOTE]
> If your enterprise manages your account and you sign into {% data variables.product.github %} through your company's identity provider (IdP), you cannot delete your account. For more information, see [AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users).

{% endif %}

{% ifversion ghes %}

> [!NOTE]
> * You should contact an enterprise owner before deleting your account on {% data variables.product.prodname_ghe_server %}.

{% endif %}

## Back up your account data

Before you delete your personal account, make a copy of all repositories, private forks, wikis, issues, and pull requests owned by your account.  For more information, see the following articles:

* [AUTOTITLE](/repositories/archiving-a-github-repository/backing-up-a-repository).
* [AUTOTITLE](/account-and-profile/reference/personal-account-reference#side-effects-of-account-deletion)

## Deleting your personal account

> [!WARNING]
> Once your personal account has been deleted, {% ifversion fpt or ghec %}{% data variables.product.company_short %}{% elsif ghes %}an enterprise owner{% endif %} cannot restore your content.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.account_settings %}
1. At the bottom of the Account Settings page, under "Delete account", click **Delete your account**. Before you can delete your personal account:
1. In the "Make sure you want to do this" dialog box, complete the steps to confirm you understand what happens when your account is deleted:
    * In the first field, type your username or email.
    * In the second field, type the phrase from the prompt.

## Next steps

For reference information, see [AUTOTITLE](/account-and-profile/reference/personal-account-reference).
