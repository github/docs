---
title: Merging multiple personal accounts
intro: If you have separate accounts for work and personal use, you can merge the accounts.
redirect_from:
  - /articles/can-i-merge-two-accounts
  - /articles/keeping-work-and-personal-repositories-separate
  - /articles/merging-multiple-user-accounts
  - /github/setting-up-and-managing-your-github-user-account/merging-multiple-user-accounts
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/merging-multiple-user-accounts
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/merging-multiple-user-accounts
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/merging-multiple-personal-accounts
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/merging-multiple-personal-accounts
  - /account-and-profile/how-tos/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/merging-multiple-personal-accounts
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Merge multiple accounts
contentType: how-tos
---

{% ifversion ghec %}

> [!TIP]
> {% data variables.product.prodname_emus %} allow an enterprise to provision unique personal accounts for its members through an identity provider (IdP). For more information, see [AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users). For other use cases, we recommend using only one personal account to manage both personal and professional repositories.

{% else %}

> [!TIP]
> We recommend using only one personal account to manage both personal and professional repositories.

{% endif %}

1. [Transfer any repositories](/repositories/creating-and-managing-repositories/transferring-a-repository) from the account you want to delete to the account you want to keep. Issues, pull requests, and wikis are transferred as well. Verify the repositories exist on the account you want to keep.
1. [Update the remote URLs](/get-started/git-basics/managing-remote-repositories) in any local clones of the repositories that were moved.
1. [Delete the account](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/deleting-your-personal-account) you no longer want to use.
1. To attribute past commits to the new account, add the email address you used to author the commits to the account you're keeping.
   > [!NOTE]
   > There are additional requirements for commits to count as contributions that you will need to ensure are met. See [AUTOTITLE](/account-and-profile/reference/why-are-my-contributions-not-showing-up-on-my-profile#contribution-criteria-for-commits).

## Next steps

* [AUTOTITLE](/account-and-profile/reference/personal-account-reference#side-effects-of-merging-accounts)
* [AUTOTITLE](/get-started/learning-about-github/types-of-github-accounts)
* [AUTOTITLE](/account-and-profile/reference/best-practices-for-leaving-your-company)
