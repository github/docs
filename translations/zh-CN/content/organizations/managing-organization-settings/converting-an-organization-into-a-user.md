---
title: 将组织转换为用户
intro: 无法将组织转换为个人用户帐户，但您可以创建一个新用户帐户，然后将组织的仓库转让给该帐户。
redirect_from:
  - /articles/converting-an-organization-into-a-user
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-organization-into-a-user
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Organizations
  - Teams
---

{% if currentVersion == "free-pro-team@latest" %}

1. [注册](/articles/signing-up-for-a-new-github-account)新 GitHub 用户帐户。
2. [将用户的角色更改为所有者](/articles/changing-a-person-s-role-to-owner)。
3. {% data variables.product.signin_link %} 到新用户帐户。
4. [将每个组织仓库转让](/articles/how-to-transfer-a-repository)给新用户帐户。
5. [删除组织](/articles/deleting-an-organization-account)。
6. [将用户重命名](/articles/changing-your-github-username)为组织的名称。

{% else %}

1. 注册新 GitHub Enterprise 用户帐户。
2. [将用户的角色更改为所有者](/articles/changing-a-person-s-role-to-owner)。
3. {% data variables.product.signin_link %} 到新用户帐户。
4. [将每个组织仓库转让](/articles/how-to-transfer-a-repository)给新用户帐户。
5. [删除组织](/articles/deleting-an-organization-account)。
6. [将用户重命名](/articles/changing-your-github-username)为组织的名称。

{% endif %}
