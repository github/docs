---
title: 关于分叉
intro: 复刻是您管理的仓库的副本。 复刻用于更改项目而不影响原始仓库。 您可以通过拉取请求从原始仓库提取更新，或者提交更改到原始仓库。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/about-forks
  - /articles/about-forks
  - /github/collaborating-with-issues-and-pull-requests/about-forks
  - /github/collaborating-with-pull-requests/working-with-forks/about-forks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 83372d27f052ee8c22730f5ce5d22e9efbf04fbb
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158747'
---
复刻仓库类似于复制仓库，主要有两点差异：

* 可以使用拉取请求来建议从用户拥有的分支到其 GitHub 实例中的原始存储库（也称为“上游”存储库）的更改。
* 您可以通过同步复刻与上游仓库，将更改从上游仓库提交到本地复刻。

{% data reusables.repositories.you-can-fork %}

{% ifversion fpt or ghec %}

如果你是 {% data variables.enterprise.prodname_emu_enterprise %} 的成员，则对可以创建分支的存储库有更多的限制。 {% data reusables.enterprise-accounts.emu-forks %} 有关详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[关于 {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users){% ifversion fpt %}”。{% else %}."{% endif %}

{% endif %}

{% data reusables.repositories.desktop-fork %}

删除复刻不会删除原始上游仓库。 可以对分支进行任何所需的更改（添加协作者、重命名文件、生成 {% data variables.product.prodname_pages %}），而不影响原始版本。{% ifversion fpt or ghec %} 无法还原已删除的分支存储库。 有关详细信息，请参阅“[还原已删除的存储库](/articles/restoring-a-deleted-repository)”。{% endif %}

在开源项目中，复刻常用于迭代想法或更改，然后将其提交回上游仓库。 在用户拥有的复刻中进行更改，然后打开拉取请求以比较您的工作与上游仓库，便可允许对上游仓库具有推送权限的任何推送更改到拉取请求分支（包括删除分支）。 这可加速协作，让仓库维护员在合并之前于本地从用户拥有的复刻对拉取请求进行提交或运行测试。 不可向组织拥有的复刻授予推送权限。 

{% data reusables.repositories.private_forks_inherit_permissions %}

如果以后要从现有仓库的内容创建新仓库，但不想合并上游更改，您可以复制仓库 ，或者，如果该仓库是模板，您可以使用该仓库作为模板。 有关详细信息，请参阅“[复制存储库](/articles/duplicating-a-repository)”和“[从模板创建存储库](/articles/creating-a-repository-from-a-template)”。

## 延伸阅读

- “[关于协作开发模型](/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models)”
- “[从分支创建拉取请求](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)”
- [开源指南](https://opensource.guide/){% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
