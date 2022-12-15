---
title: 将用户转换为组织
redirect_from:
- /articles/what-is-the-difference-between-create-new-organization-and-turn-account-into-an-organization
- /articles/explaining-the-account-transformation-warning
- /articles/converting-a-user-into-an-organization
- /github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/converting-a-user-into-an-organization
- /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/converting-a-user-into-an-organization
intro: 可以将个人帐户转换为组织。 这样可以对属于组织的仓库设置更细化的权限。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: User into an organization
ms.openlocfilehash: 641172d82581ad83bd7281fed941171ce6c817b7
ms.sourcegitcommit: 2298858ef68ffb4e79490ddbb9d6a64081dfbc39
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/21/2022
ms.locfileid: "147389391"
---
{% warning %}

警告：在将用户转换为组织之前，请记住以下几点。

* 你将无法再登录转换后的个人帐户。
* 你将无法再创建或修改转换后的个人帐户所拥有的 Gist。
* 组织无法转换回用户。
* 不会将 SSH 密钥、OAuth 标记、作业配置文件、反应和关联的用户信息传输到组织。 这只适用于被转换的个人帐户，而不适用于该个人帐户的任何协作者。
* 使用转换后的个人帐户所做的任何提交将不再链接到该帐户。 提交本身将保持不变。
* 转换后的个人帐户所做的任何现有注释将不再链接至该帐户。 注释本身将保持不变，但会与 `ghost` 用户关联。
* 将删除使用转换后的个人帐户创建的任何专用存储库的分支。
{% endwarning %}

{% ifversion fpt or ghec or ghes %}
## <a name="keep-your-personal-account-and-create-a-new-organization-manually"></a>保留个人帐户并手动创建新组织

如果希望组织的名称与目前用于个人帐户的名称相同，或者要保留个人帐户的信息不变，则必须创建一个新组织，然后将存储库转让给该组织，而不是将个人帐户转换为组织。

1. 要保留当前个人帐户名称以供个人使用，[请将个人帐户名称更改为](/articles/changing-your-github-username)一个好听的新名称。
2. 使用个人帐户的原始名称[创建新组织](/articles/creating-a-new-organization-from-scratch)。
3. [将存储库转移到](/articles/transferring-a-repository)新的组织帐户。{% endif %}

## <a name="convert-your-personal-account-into-an-organization-automatically"></a>自动将个人帐户转换为组织

也可以将个人帐户直接转换为组织。 转换帐户：
 - 按原样保留仓库，无需手动将其转让给另一个帐户
 - 自动邀请协作者加入具有与其之前相同权限的团队 {% ifversion fpt or ghec %}- 对于 {% data variables.product.prodname_pro %} 上的个人帐户，自动将计费转换到[付费的 {% data variables.product.prodname_team %}](/articles/about-billing-for-github-accounts)，无需重新输入付款信息、调整计费周期或随时双倍付款{% endif %}

1. 创建新的个人帐户，转换后您将用它来登录 GitHub 以及访问组织和仓库。
2.  [退出组织](/articles/removing-yourself-from-an-organization)（你要转换的个人帐户已加入的组织）。
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.organizations %}
5. 在“转换帐户”下，单击“将 <username> 转换为组织”。
    ![组织转换按钮](/assets/images/help/settings/convert-to-organization.png)
6. 在 Account Transformation Warning（帐户转换警告）对话框中，查看并确认转换。 请注意，此框中的信息与本文顶部的警告信息相同。
    ![转换警告](/assets/images/help/organizations/organization-account-transformation-warning.png)
7. 在“Transform your user into an organization（将用户转换为组织）”页面的“Choose an organization owner（选择组织所有者）”下，选择您在前面创建的备用个人帐户或您信任的其他用户来管理组织。
    ![添加组织所有者页面](/assets/images/help/organizations/organization-add-owner.png)
8. 选择新组织的订阅，并在提示时输入帐单信息。
9. 单击“创建组织”。
10. 登录在第一步中创建的新个人帐户，然后使用上下文切换器访问新组织。

{% tip %}

提示：将个人帐户转换为组织时，我们会将属于该帐户的存储库中的协作者作为外部协作者添加到新组织。 然后，你可以根据需要邀请外部协作者成为新组织的成员。 有关详细信息，请参阅“[组织中的角色](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators)”。

{% endtip %}

## <a name="further-reading"></a>延伸阅读
- [设置团队](/articles/setting-up-teams) {% ifversion fpt or ghec %}- [邀请用户加入组织](/articles/inviting-users-to-join-your-organization){% endif %}
- [访问组织](/articles/accessing-an-organization)
