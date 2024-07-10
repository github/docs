---
title: Merging multiple personal accounts
intro: 'If you have separate accounts for work and personal use, you can merge the accounts.'
redirect_from:
  - /articles/can-i-merge-two-accounts
  - /articles/keeping-work-and-personal-repositories-separate
  - /articles/merging-multiple-user-accounts
  - /github/setting-up-and-managing-your-github-user-account/merging-multiple-user-accounts
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/merging-multiple-user-accounts
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/merging-multiple-user-accounts
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/merging-multiple-personal-accounts
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Merge multiple accounts
---
{% tip %}

{% ifversion ghec %}

**Tip:** {% data variables.product.prodname_emus %} allow an enterprise to provision unique personal accounts for its members through an identity provider (IdP). For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users)." For other use cases, we recommend using only one personal account to manage both personal and professional repositories.

{% else %}

**Tip:** We recommend using only one personal account to manage both personal and professional repositories.

{% endif %}

{% endtip %}

{% warning %}

**Warning:**
* Organization and repository access permissions aren't transferable between accounts. If the account you want to delete has an existing access permission, an organization owner or repository administrator will need to invite the account that you want to keep.
* Any commits authored with a {% data variables.product.company_short %}-provided `noreply` email address cannot be transferred from one account to another. If the account you want to delete used the **Keep my email address private** option, it won't be possible to transfer the commits authored by the account you are deleting to the account you want to keep.
* Issues, pull requests, and discussions will not be attributed to the new account.
* Achievements are not able to be transferred between accounts.

{% endwarning %}

1. [Transfer any repositories](/repositories/creating-and-managing-repositories/transferring-a-repository) from the account you want to delete to the account you want to keep. Issues, pull requests, and wikis are transferred as well. Verify the repositories exist on the account you want to keep.
1. [Update the remote URLs](/get-started/getting-started-with-git/managing-remote-repositories) in any local clones of the repositories that were moved.
1. To attribute past commits to the new account, add the email address you used to author the commits to the account you're keeping. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile#your-local-git-commit-email-isnt-connected-to-your-account)"
1. [Delete the account](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/deleting-your-personal-account) you no longer want to use.

## Further reading

* "[AUTOTITLE](/get-started/learning-about-github/types-of-github-accounts)"
