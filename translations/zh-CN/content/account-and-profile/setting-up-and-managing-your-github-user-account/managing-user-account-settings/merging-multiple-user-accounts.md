---
title: 合并多个用户帐户
intro: 如果工作和个人分别使用不同的帐户，您可以合并这些帐户。
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
shortTitle: 合并多个用户帐户
---

{% tip %}

{% ifversion ghec %}

**Tip:** {% data variables.product.prodname_emus %} allow an enterprise to provision unique user accounts for its members through an identity provider (IdP). For more information, see "[About Enterprise Managed Users](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users)." For other use cases, we recommend using only one user account to manage both personal and professional repositories.

{% else %}

**提示：**建议只使用一个用户帐户来管理个人和专业仓库。

{% endif %}

{% endtip %}

{% warning %}

**Warning:** Organization and repository access permissions aren't transferable between accounts. If the account you want to delete has an existing access permission, an organization owner or repository administrator will need to invite the account that you want to keep.

{% endwarning %}

1. 从您要删除的帐户[转让任何仓库](/articles/how-to-transfer-a-repository)到要保留的帐户。 议题、拉取请求和 wiki 也会转让。 确认要保留的帐户中存在仓库。
2. [更新远程 URL](/github/getting-started-with-github/managing-remote-repositories)（在移动的仓库的任何本地克隆中）。
3. [删除帐户](/articles/deleting-your-user-account)（不再使用的）。
4. To attribute past commits to the new account, add the email address you used to author the commits to the account you're keeping. 更多信息请参阅“[为什么我的贡献没有在我的个人资料中显示？](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile#your-local-git-commit-email-isnt-connected-to-your-account)”

## 延伸阅读

- "[{% data variables.product.prodname_dotcom %} 帐户的类型](/articles/types-of-github-accounts)"
