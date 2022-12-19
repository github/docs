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
shortTitle: Merge multiple personal accounts
ms.openlocfilehash: 71e2b280fad682f3ee8e9ac85141aedc3bde3d06
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: "145164791"
---
{% tip %}

{% ifversion ghec %}

提示：{% data variables.product.prodname_emus %} 允许企业通过标识提供者 (IdP) 为其成员预配唯一的个人帐户。 有关详细信息，请参阅“[关于企业托管用户](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users)”。 对于其他用例，我们建议仅使用一个个人帐户来管理个人和专业存储库。

{% else %}

提示：我们建议仅使用一个个人帐户来管理个人和专业存储库。 

{% endif %}

{% endtip %}

{% warning %}

**警告：** 
- 组织和存储库访问权限不能在帐户之间转让。 如果要删除的帐户具有现有访问权限，则组织所有者或存储库管理员将需要邀请您要保留的帐户。
- 无法将使用 GitHub 提供的 `noreply` 电子邮件地址创作的任何提交从一个帐户转移到另一个帐户。 如果要删除的帐户使用了“将我的电子邮件地址设为私有”选项，则无法将要删除的帐户创作的提交转移到要保留的帐户。

{% endwarning %}

1. [将任何存储库从要删除的帐户转移](/articles/how-to-transfer-a-repository)到要保留的帐户。 议题、拉取请求和 wiki 也会转让。 确认要保留的帐户中存在仓库。
2. [更新已移动存储库的任何本地克隆中的远程 URL](/github/getting-started-with-github/managing-remote-repositories)。
3. [删除不会再使用的帐户](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/deleting-your-personal-account)。
4. 要将过去的提交归因于新帐户，请将用于创作提交的电子邮件地址添加到要保留的帐户。 有关详细信息，请参阅“[为什么我的贡献没有在我的个人资料中显示？](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile#your-local-git-commit-email-isnt-connected-to-your-account)”

## <a name="further-reading"></a>延伸阅读

- [{% data variables.product.prodname_dotcom %} 帐户类型](/articles/types-of-github-accounts)
