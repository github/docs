---
title: 关于离开公司的最佳实践
intro: If you use your account on {% data variables.product.product_name %} for both personal and work purposes, there are a few things to keep in mind when you leave your company or organization.
redirect_from:
- /articles/best-practices-for-leaving-your-company
- /github/setting-up-and-managing-your-github-user-account/best-practices-for-leaving-your-company
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/best-practices-for-leaving-your-company
versions:
  fpt: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Leaving your company
ms.openlocfilehash: 4384955c0b81e887cb2671a537291b438664e621
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 05/17/2022
ms.locfileid: "145087324"
---
在离开公司之前，请确保在个人帐户中更新以下信息：

- 通过[在电子邮件设置中删除公司电子邮件地址](/articles/changing-your-primary-email-address)来取消其验证。 然后，您可以在不验证的情况下重新添加它，以保留与您的帐户相关联的所有相关提交。
- [将你的主电子邮件地址](/articles/changing-your-primary-email-address)从公司电子邮件地址更改为个人电子邮件地址。
{% ifversion fpt or ghec %}
- [验证新的主电子邮件地址](/articles/verifying-your-email-address)。
{% endif %}
- [更改你的 GitHub 用户名](/articles/changing-your-github-username)以删除对公司或组织的任何引用（如有必要）。

## <a name="leaving-organizations"></a>离开组织

如果你在使用属于组织的存储库，则应[删除自己的组织成员身份](/articles/removing-yourself-from-an-organization)。 请注意，如果你是组织所有者，应先将[组织的所有权转让](/articles/transferring-organization-ownership)给其他人。

## <a name="removing-professional-associations-with-personal-repositories"></a>删除与个人仓库的职业关联

如果你在属于其他人的个人帐户的存储库中与其进行了专业协作，则应从这些存储库中[删除自己的协作者身份](/articles/removing-yourself-from-a-collaborator-s-repository)。

- [停止关注与工作相关的存储库](https://github.com/watching)。 您不再需要这些通知了！
- [转让你拥有的存储库](/articles/how-to-transfer-a-repository)，在你离开后，其他人可能需要继续使用该存储库处理工作。
- [删除与你的工作相关且属于你的分支](/articles/deleting-a-repository)。 不用担心，删除复刻不会删除上游仓库。
- 删除您的计算机上可能存在的复刻本地副本：

```shell
$ rm -rf <em>work_directory</em>
```
