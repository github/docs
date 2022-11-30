---
title: 自动合并拉取请求
intro: 您可以通过启用拉取请求自动合并（使拉取请求在满足所有合并要求时自动合并）来提高开发速度。
product: '{% data reusables.gated-features.auto-merge %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/automatically-merging-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request
shortTitle: Merge PR automatically
ms.openlocfilehash: bdba774e193661f630dd35b034d0a4454ec5c1ee
ms.sourcegitcommit: da73949b8f8bd71d40247f1f9c49f8f4c362ecd0
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/28/2022
ms.locfileid: '147431942'
---
## <a name="about-auto-merge"></a>关于自动合并

如果启用拉取请求自动合并，则拉取请求在满足所有必需审查并且状态检查通过时将自动合并。 自动合并使您无需等待满足要求，可以继续执行其他任务。

在使用拉取请求自动合并之前，必需对仓库启用自动合并。 有关详细信息，请参阅“[管理存储库中拉取请求的自动合并](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository)”。

对拉取请求启用自动合并后，如果没有仓库写入权限的人员将新更改推送到头部分支或切换拉取请求的基础分支，则自动合并将被禁用。 例如，如果维护者允许从分支自动合并拉取请求，则在贡献者推送对拉取请求的新更改后，自动合并将被禁用。

可以通过 [{% data variables.product.prodname_github_community %} 讨论](https://github.com/orgs/community/discussions/categories/pull-requests)提供有关自动合并的反馈。

## <a name="enabling-auto-merge"></a>启用自动合并

{% data reusables.pull_requests.auto-merge-requires-branch-protection %}

拥有仓库写入权限的人可启用拉取请求自动合并。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
1. 在“Pull Requests（拉取请求）”列表中，单击要自动合并的拉取请求。
1. （可选）若要选择合并方法，请选择“启用自动合并”下拉菜单，然后单击合并方法。 有关详细信息，请参阅“[关于拉取请求合并](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges)”。
  ![“启用自动合并”下拉菜单](/assets/images/help/pull_requests/enable-auto-merge-drop-down.png)
1. 单击“启用自动合并”。
  ![用于启用自动合并的按钮](/assets/images/help/pull_requests/enable-auto-merge-button.png) {% ifversion fpt %}
1. 如果选择合并或压缩并合并方法，请输入提交消息和说明，然后选择要创作合并提交的电子邮件地址。
  ![用于输入提交消息和说明并选择提交作者电子邮件的字段](/assets/images/help/pull_requests/pull-request-information-fields.png) {% note %}

  **注意：** 如果你启用了电子邮件隐私，或者只有一封经过验证的可见电子邮件与你的 {% data variables.product.company_short %} 帐户相关联，则电子邮件下拉菜单不可用。

  {% endnote %} {% endif %} {% ifversion ghes or ghae or ghec %}
1. 如果选择了合并或压缩并合并方法，请键入提交消息和说明。
   ![用于输入提交消息和说明的字段](/assets/images/help/pull_requests/pull-request-information-fields-enterprise.png) {% endif %}
1. 单击“确认自动合并”。

## <a name="disabling-auto-merge"></a>禁用自动合并

拥有仓库写入权限的人和拉取请求作者可禁用拉取请求自动合并。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
1. 在“Pull Requests（拉取请求）”列表中，单击要禁用自动合并的拉取请求。
1. 在合并框中，单击“禁用自动合并”。
  ![用于禁用自动合并的按钮](/assets/images/help/pull_requests/disable-auto-merge-button.png)
