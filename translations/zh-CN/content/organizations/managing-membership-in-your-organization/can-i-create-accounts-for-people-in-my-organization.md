---
title: 我可以为组织中的人员创建帐户吗？
intro: 虽然您可以将用户添加到您创建的组织，但您无法代表其他人创建其个人用户帐户。
redirect_from:
  - /articles/can-i-create-accounts-for-those-in-my-organization/
  - /articles/can-i-create-accounts-for-people-in-my-organization
  - /github/setting-up-and-managing-organizations-and-teams/can-i-create-accounts-for-people-in-my-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 为人员创建帐户
---

## 关于用户帐户

由于访问组织需要登录用户帐户，因此每个团队成员都需要创建自己的用户帐户。 在有了要添加到组织的每个人的用户名后，就可以将用户添加到团队。

{% ifversion fpt or ghec %}
如果您需要更好地控制组织成员的用户帐户，请考虑 {% data variables.product.prodname_emus %}。 {% data reusables.enterprise-accounts.emu-short-summary %}
{% endif %}

## 将用户添加到您的组织

1. 向每个人提供关于[创建用户帐户](/articles/signing-up-for-a-new-github-account)的说明。
2. 获取要赋予其组织成员资格的每个人的用户名。
3. [邀请新个人帐户加入](/articles/inviting-users-to-join-your-organization)您的组织。 使用[组织角色](/articles/permission-levels-for-an-organization)和[仓库权限](/articles/repository-permission-levels-for-an-organization)限制每个帐户的访问权限。
