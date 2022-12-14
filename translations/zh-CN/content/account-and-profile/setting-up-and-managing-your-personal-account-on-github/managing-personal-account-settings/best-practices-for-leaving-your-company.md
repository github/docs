---
title: 关于离开公司的最佳实践
intro: 如果你的 {% data variables.product.product_name %} 帐户同时用于个人和工作用途，那么你在离开公司或组织的时候需要注意一些问题。
redirect_from:
- /articles/best-practices-for-leaving-your-company
- /github/setting-up-and-managing-your-github-user-account/best-practices-for-leaving-your-company
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/best-practices-for-leaving-your-company
- /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/best-practices-for-leaving-your-company
versions:
  fpt: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Leaving your company
ms.openlocfilehash: e7de0fa01082731ae54e988ed49310b5ce6afbea
ms.sourcegitcommit: 8544f120269257d01adfe4a27b62f08fc8691727
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 08/02/2022
ms.locfileid: "147444643"
---
在离开公司之前，请确保在个人帐户中更新以下信息：

- 通过[在电子邮件设置中删除公司电子邮件地址](/articles/changing-your-primary-email-address)来取消其验证。 然后，您可以在不验证的情况下重新添加它，以保留与您的帐户相关联的所有相关提交。
- [将你的主电子邮件地址](/articles/changing-your-primary-email-address)从公司电子邮件地址更改为个人电子邮件地址。
- [验证新的主电子邮件地址](/articles/verifying-your-email-address)。
- [更改你的 GitHub 用户名](/articles/changing-your-github-username)以删除对公司或组织的任何引用（如有必要）。
- 如果为个人帐户启用了双重 (2FA) 身份验证，请确保由自己（而不是你的公司）控制你已配置的 2FA 身份验证方法。 有关详细信息，请参阅“[配置双因素身份验证](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)”。

## <a name="leaving-organizations"></a>离开组织

如果你在使用属于组织的存储库，则应[删除自己的组织成员身份](/articles/removing-yourself-from-an-organization)。 请注意，如果你是组织所有者，应先将[组织的所有权转让](/articles/transferring-organization-ownership)给其他人。

除非使用的是 {% data variables.product.prodname_managed_user %}，否则即使离开组织，你仍然可以访问你的个人帐户。 有关 {% data variables.product.prodname_emus %} 的详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[关于 {% data variables.product.prodname_emus %}]({% ifversion not ghec%}/enterprise-cloud@latest{% endif %}/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users){% ifversion not ghec %}”。{% else %}。{% endif %}

## <a name="removing-professional-associations-with-personal-repositories"></a>删除与个人仓库的职业关联

如果你在属于其他人的个人帐户的存储库中与其进行了专业协作，则应从这些存储库中[删除自己的协作者身份](/articles/removing-yourself-from-a-collaborator-s-repository)。

- [停止关注与工作相关的存储库](https://github.com/watching)。 您不再需要这些通知了！
- [转让你拥有的存储库](/articles/how-to-transfer-a-repository)，在你离开后，其他人可能需要继续使用该存储库处理工作。
- [删除与你的工作相关且属于你的分支](/articles/deleting-a-repository)。 不用担心，删除复刻不会删除上游仓库。
- 删除您的计算机上可能存在的复刻本地副本：

```shell
$ rm -rf <em>work_directory</em>
```
