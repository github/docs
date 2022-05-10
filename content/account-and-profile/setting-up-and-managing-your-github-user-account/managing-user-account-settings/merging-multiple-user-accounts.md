---
title: Merging multiple user accounts
intro: 'If you have separate accounts for work and personal use, you can merge the accounts.'
redirect_from:
  - /articles/can-i-merge-two-accounts
  - /articles/keeping-work-and-personal-repositories-separate
  - /articles/merging-multiple-user-accounts
  - /github/setting-up-and-managing-your-github-user-account/merging-multiple-user-accounts
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/merging-multiple-user-accounts
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Merge multiple personal accounts
---
{% tip %}

{% ifversion ghec %}

**Tip:** {% data variables.product.prodname_emus %} allow an enterprise to provision unique personal accounts for its members through an identity provider (IdP). For more information, see "[About Enterprise Managed Users](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users)." For other use cases, we recommend using only one personal account to manage both personal and professional repositories.

{% else %}

**Tip:** We recommend using only one personal account to manage both personal and professional repositories. 

{% endif %}

{% endtip %}

{% warning %}

**Warning:** 
- Organization and repository access permissions aren't transferable between accounts. If the account you want to delete has an existing access permission, an organization owner or repository administrator will need to invite the account that you want to keep.
- Any commits authored with a GitHub-provided `noreply` email address cannot be transferred from one account to another. If the account you want to delete used the **Keep my email address private** option, it won't be possible to transfer the commits authored by the account you are deleting to the account you want to keep.

{% endwarning %}

1. [Transfer any repositories](/articles/how-to-transfer-a-repository) from the account you want to delete to the account you want to keep. Issues, pull requests, and wikis are transferred as well. Verify the repositories exist on the account you want to keep.
2. [Update the remote URLs](/github/getting-started-with-github/managing-remote-repositories) in any local clones of the repositories that were moved.
3. [Delete the account](/articles/deleting-your-user-account) you no longer want to use.
4. To attribute past commits to the new account, add the email address you used to author the commits to the account you're keeping. For more information, see "[Why are my contributions not showing up on my profile?](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile#your-local-git-commit-email-isnt-connected-to-your-account)"

## Further reading

- "[Types of {% data variables.product.prodname_dotcom %} accounts](/articles/types-of-github-accounts)"
