---
title: 保持个人帐户仓库的所有权连续性
intro: 如果您无法管理用户拥有的仓库，可以邀请他人管理。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
  - Repositories
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories
  - /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/maintaining-ownership-continuity-of-your-user-accounts-repositories
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/maintaining-ownership-continuity-of-your-user-accounts-repositories
shortTitle: 所有权连续性
---

## 关于继承者

如果您无法管理您的用户拥有的仓库，建议邀请其他 {% data variables.product.company_short %} 用户作为继承者管理。 作为继承者，他们拥有以下权限：

- 存档您的公共仓库。
- 将公共仓库转移到他们自己的用户拥有的帐户。
- 将您的公共仓库转移到他们可在其中创建仓库的组织。

继承者不能登录到您的帐户。

指定的继承者在提交死亡证明并等待 7 天或者提交讣告并等待 21 天后，便可管理您的公共仓库。 更多信息请参阅“[{% data variables.product.company_short %} 已故用户政策](/free-pro-team@latest/github/site-policy/github-deceased-user-policy)”。

要请求作为继承者管理仓库，请联系 [GitHub 支持](https://support.github.com/contact?tags=docs-accounts)。

## 邀请继承者
您邀请作为继承者的人必须拥有 {% data variables.product.company_short %} 帐户。

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.account_settings %}
3. 要邀请继承者，在“Successor settings（继承者设置）”下开始输入用户名、全名或电子邮件地址，然后单击出现的姓名。 ![继承者邀请搜索字段](/assets/images/help/settings/settings-invite-successor-search-field.png)
4. 单击 **Add successor（添加继承者）**。
{% data reusables.user-settings.sudo-mode-popup %}
6. 您邀请的用户将被列为“Pending（待定）”，直到他们同意成为您的继承者。 ![待定继承者邀请](/assets/images/help/settings/settings-pending-successor.png)
