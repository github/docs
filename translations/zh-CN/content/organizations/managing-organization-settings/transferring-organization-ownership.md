---
title: 转让组织所有权
intro: '要使其他人成为组织帐户的所有者，您必须添加新所有者{% ifversion fpt or ghec %}，确保帐单信息已更新，{% endif %}然后将自身从该帐户中删除。'
redirect_from:
  - /articles/needs-polish-how-do-i-give-ownership-to-an-organization-to-someone-else
  - /articles/transferring-organization-ownership
  - /github/setting-up-and-managing-organizations-and-teams/transferring-organization-ownership
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 转移所有权
---

{% ifversion ghec %}
{% note %}

**注：**{% data reusables.enterprise-accounts.invite-organization %}

{% endnote %}{% endif %}

1. 如果您是具有*所有者*权限的唯一成员，则授予其他组织成员所有者角色。 更多信息请参阅“[任命组织所有者](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization#appointing-an-organization-owner)”。
2. 联系新的所有者，确保其能够[访问组织的设置](/articles/accessing-your-organization-s-settings)。
{% ifversion fpt or ghec %}
3. 如果您目前负责为组织中的 GitHub 付款，则还需要让新所有者或[帐单管理员](/articles/adding-a-billing-manager-to-your-organization/)更新组织的付款信息。 更多信息请参阅“[添加或编辑付款方式](/articles/adding-or-editing-a-payment-method)”。

  {% warning %}

  **警告**：从组织中删除自身**不会**更新组织帐户存档的帐单信息。 新的所有者或帐单管理员必须更新存档的帐单信息，以删除您的信用卡或 PayPal 信息。

  {% endwarning %}

{% endif %}
4. 从组织中[删除自身](/articles/removing-yourself-from-an-organization)。
