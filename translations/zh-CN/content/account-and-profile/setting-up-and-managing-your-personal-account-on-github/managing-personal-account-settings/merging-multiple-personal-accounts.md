---
title: 合并多个个人帐户
intro: 如果工作和个人分别使用不同的帐户，您可以合并这些帐户。
redirect_from:
  - /articles/can-i-merge-two-accounts
  - /articles/keeping-work-and-personal-repositories-separate
  - /articles/merging-multiple-user-accounts
  - /github/setting-up-and-managing-your-github-user-account/merging-multiple-user-accounts
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/merging-multiple-user-accounts
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/merging-multiple-user-accounts
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: 合并多个个人帐户
---

{% tip %}

{% ifversion ghec %}

**提示：** {% data variables.product.prodname_emus %} 允许企业通过身份提供商 (IdP) 为其成员配置唯一的个人帐户。 更多信息请参阅“[关于企业管理用户](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users)”。 对于其他用例，我们建议仅使用一个个人帐户来管理个人和专业存储库。

{% else %}

**提示：**建议只使用一个个人帐户来管理个人和专业仓库。

{% endif %}

{% endtip %}

{% warning %}

**警告：**
- 组织和存储库访问权限不可在帐户之间转移。 如果要删除的帐户具有现有访问权限，则组织所有者或存储库管理员将需要邀请您要保留的帐户。
- 使用 GitHub 提供的 `noreply` 电子邮件地址创建的任何提交都不能从一个帐户转移到另一个帐户。 如果要删除的帐户使用了 **Keep my email address private（将我的电子邮件地址设为私有）**选项，则无法将要删除的帐户创建的提交转移到要保留的帐户。

{% endwarning %}

1. 从您要删除的帐户[转让任何仓库](/articles/how-to-transfer-a-repository)到要保留的帐户。 议题、拉取请求和 wiki 也会转让。 确认要保留的帐户中存在仓库。
2. [更新远程 URL](/github/getting-started-with-github/managing-remote-repositories)（在移动的仓库的任何本地克隆中）。
3. [删除帐户](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/deleting-your-personal-account)（不再使用的）。
4. 要将过去的提交归因于新帐户，请将用于创作提交的电子邮件地址添加到要保留的帐户。 更多信息请参阅“[为什么我的贡献没有在我的个人资料中显示？](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile#your-local-git-commit-email-isnt-connected-to-your-account)”

## 延伸阅读

- "[{% data variables.product.prodname_dotcom %} 帐户的类型](/articles/types-of-github-accounts)"
