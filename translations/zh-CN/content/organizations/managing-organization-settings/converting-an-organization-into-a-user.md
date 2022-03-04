---
title: 将组织转换为用户
intro: 无法将组织转换为个人用户帐户，但您可以创建一个新用户帐户，然后将组织的仓库转让给该帐户。
redirect_from:
  - /articles/converting-an-organization-into-a-user
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-organization-into-a-user
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 将组织转换为用户
---

{% ifversion fpt or ghec %}

{% note %}

**注意**：删除帐户后，删除时的用户名将在 90 天内无法重复使用。 要立即重复使用组织的用户名，您必须在删除组织之前更改用户名。

 {% endnote %}

1. [注册](/articles/signing-up-for-a-new-github-account)新 GitHub 用户帐户。
2. [将用户的角色更改为所有者](/articles/changing-a-person-s-role-to-owner)。
3. {% data variables.product.signin_link %} 到新用户帐户。
4. [将每个组织仓库转让](/articles/how-to-transfer-a-repository)给新用户帐户。
5. [重命名组织](/account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username)以使当前用户名可用。
6. [将用户重命名](/account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username)为组织的名称。
7. [删除组织](/organizations/managing-organization-settings/deleting-an-organization-account)。


{% else %}

1. 注册新 GitHub Enterprise 用户帐户。
2. [将用户的角色更改为所有者](/articles/changing-a-person-s-role-to-owner)。
3. {% data variables.product.signin_link %} 到新用户帐户。
4. [将每个组织仓库转让](/articles/how-to-transfer-a-repository)给新用户帐户。
5. [删除组织](/articles/deleting-an-organization-account)。
6. [将用户重命名](/articles/changing-your-github-username)为组织的名称。

{% endif %}
