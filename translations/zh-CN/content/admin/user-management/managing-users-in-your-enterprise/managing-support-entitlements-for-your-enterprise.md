---
title: 管理企业的支持权限
intro: 您可以授予企业会员管理企业账户支持事件单的能力。
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise
versions:
  ghec: '*'
topics:
  - Enterprise
  - Support
shortTitle: 管理支持权利
---

## 关于支持权利

拥有企业帐户支持权限的人员可以使用支持门户打开、查看和评论与企业帐户相关的支持事件单。

企业所有人和帐单管理员自动拥有支持权利。 企业所有者可以向企业帐户拥有的最多 20 个额外组织成员添加支持权利。

## 向企业成员添加支持权利

{% note %}

**注意**：在您添加支持权利后，企业成员可能需要注销并重新登录才可管理事件单。

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
3. 在“Settings（设置）”下，单击 **Support（支持）**。 ![支持菜单项](/assets/images/help/enterprises/settings-support.png)
4. 在“Add support member（添加支持成员）”下，开始键入要提供支持权利的人员的名称或用户名。 在匹配列表中单击其名称。 ![添加支持权利搜索](/assets/images/help/enterprises/settings-support-entitlement-search.png)
5. 单击 **Add support entitlement（添加支持权利）**。 ![添加支持权利按钮](/assets/images/help/enterprises/settings-support-add-entitlement.png)

## 从企业成员删除支持权利

您可以从企业成员删除支持权利。 您不能从企业所有者或帐单管理员删除支持权利。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
3. 在“Settings（设置）”下的边栏中，单击 **Support（支持）**。 ![支持菜单项](/assets/images/help/enterprises/settings-support.png)
4. 在“Support members（支持成员）”下，在您想要删除支持权利的人员右侧，单击 {% octicon "trash" aria-label="The trash icon" %}。 ![删除支持权利](/assets/images/help/enterprises/settings-support-remove-entitlement.png)

## 延伸阅读

- "[使用 GitHub 支持](/github/working-with-github-support)"
