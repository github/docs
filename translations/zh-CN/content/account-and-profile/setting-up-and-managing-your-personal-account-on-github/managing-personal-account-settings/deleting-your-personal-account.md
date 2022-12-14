---
title: 删除个人帐户
intro: 可随时删除 {% data variables.product.product_name %} 上的个人帐户。
redirect_from:
- /articles/deleting-a-user-account
- /articles/deleting-your-user-account
- /github/setting-up-and-managing-your-github-user-account/deleting-your-user-account
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/deleting-your-user-account
- /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/deleting-your-user-account
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Delete your personal account
ms.openlocfilehash: 4c02698cbe312d3f13553e49dd324fde4f3ad7bb
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: "145164757"
---
删除个人帐户将删除帐户所拥有的所有存储库、专用存储库的分支、Wiki、问题、拉取请求和页面。 {% ifversion fpt or ghec %} 在其他用户拥有的存储库中创建的问题和拉取请求以及所做的评论不会被删除，而是与我们的 [Ghost 用户](https://github.com/ghost)关联。{% else %}在其他用户拥有的存储库中创建的问题和拉取请求以及所做的评论不会被删除。{% endif %}

{% ifversion fpt or ghec %} 当您删除帐户时，我们会停止对您计费。 与该帐户关联的电子邮件地址可用于 {% data variables.product.product_location %} 上不同的帐户。 90 天后，该帐户名称也可供其他任何人用于新帐户。 {% endif %}

如果你是组织的唯一所有者，则必须先将所有权转让给其他人或删除该组织，然后才能删除个人帐户。 如果组织中有其他所有者，则必须先从组织中删除自己，然后才能删除个人帐户。

有关详细信息，请参阅：
- [转让组织所有权](/articles/transferring-organization-ownership)
- [删除组织帐户](/articles/deleting-an-organization-account)
- [从组织中删除自己](/articles/removing-yourself-from-an-organization/)

## <a name="back-up-your-account-data"></a>备份帐户数据

在删除个人帐户之前，请复制帐户所拥有的所有存储库、专用分支、Wiki、问题和拉取请求。

{% warning %}

警告：删除个人帐户后，GitHub 将无法还原内容。

{% endwarning %}

## <a name="delete-your-personal-account"></a>删除个人帐户

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. 在帐户设置页面底部的“删除帐户”下，单击“删除帐户”。 在删除个人帐户之前：
    - 如果您是组织中的唯一所有者，则必须将所有权转让给其他人或删除您的组织。
    - 如果组织中有其他组织所有者，则必须将自己从组织中删除。
   ![帐户删除按钮](/assets/images/help/settings/settings-account-delete.png)
4. 在“确认要执行此操作”对话框中，完成相关步骤以确认你了解删除帐户的后果：![删除帐户确认对话框](/assets/images/help/settings/settings-account-deleteconfirm.png) {% ifversion fpt or ghec %}- 重新确认帐户拥有的所有存储库、专用存储库分支、wiki、问题、拉取请求和 {% data variables.product.prodname_pages %} 站点都将删除，计费将立即结束，并且 90 天后任何人都可在 {% data variables.product.product_name %} 上使用你的用户名。
  {% else %}- 重新考虑一下，您帐户拥有的所有仓库、私有仓库分支、wiki、议题、提取请求和网页都将被删除，并且任何人将可在 {% data variables.product.product_name %} 上使用您的用户名。
  {% endif %}- 在第一个字段中，输入您的 {% data variables.product.product_name %} 用户名或电子邮件。
    - 在第二个字段中，键入提示短语。
