---
title: 将组织转换为用户
intro: 无法将组织转换为个人帐户，但可以创建一个新的个人帐户，然后将组织的仓库转让给该帐户。
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
shortTitle: Convert organization to user
ms.openlocfilehash: ef6baa2db188570476ee36d5f6932a87d615d2ec
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145149796'
---
{% ifversion fpt or ghec %}

{% note %}

**注意**：删除帐户后，删除时的用户名将在 90 天内无法重复使用。 要立即重复使用组织的用户名，您必须在删除组织之前更改用户名。

 {% endnote %}

1. 在 GitHub 上[注册](/articles/signing-up-for-a-new-github-account)一个新帐户。
2. [将用户的角色更改为所有者](/articles/changing-a-person-s-role-to-owner)。
3. {% data variables.product.signin_link %} 到新个人帐户。
4. [将每个组织存储库转移](/articles/how-to-transfer-a-repository)到新的个人帐户。
5. [为组织重命名](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/changing-your-github-username)，以使当前用户名可用。
6. [将用户重命名](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/changing-your-github-username)为组织的名称。
7. [删除组织](/organizations/managing-organization-settings/deleting-an-organization-account)。


{% else %}

1. 注册新 GitHub Enterprise 个人帐户。
2. [将用户的角色更改为所有者](/articles/changing-a-person-s-role-to-owner)。
3. {% data variables.product.signin_link %} 到新个人帐户。
4. [将每个组织存储库转移](/articles/how-to-transfer-a-repository)到新的个人帐户。
5. [删除组织](/articles/deleting-an-organization-account)。
6. [将用户重命名](/articles/changing-your-github-username)为组织的名称。

{% endif %}
