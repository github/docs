---
title: 使用讨论与维护者协作
shortTitle: Collaborating with maintainers
intro: '您可以通过在讨论中与项目的维护者沟通，为 {% data variables.product.product_name %} 项目的目标、计划、运行状况和社区做出贡献。'
permissions: 'People with read access to a repository can start and participate in discussions and polls in the repository. People with read access to the source repository for organization discussions can start and participate in discussions and polls in the organization. {% data reusables.enterprise-accounts.emu-permission-interact %}'
versions:
  feature: discussions
ms.openlocfilehash: f090088d55e946e67c1f0b5d790deca9fd794a90
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410249'
---
## 关于使用 {% data variables.product.prodname_discussions %} 与维护者的协作

{% data reusables.discussions.about-discussions %} 如果您使用或参与某个项目，可以发起讨论，以提出建议，并就您的计划、问题、想法和反馈与维护者及社区成员进行互动。 有关详细信息，请参阅“[关于讨论](/discussions/collaborating-with-your-community-using-discussions/about-discussions)”。

{% data reusables.discussions.about-categories-and-formats %} {% data reusables.discussions.about-announcement-format %} 

存储库管理员和项目维护者可以删除该存储库中的讨论。 同样，组织讨论的源存储库的管理员和维护者也可以删除该组织中的讨论。 有关详细信息，请参阅“[管理讨论](/discussions/managing-discussions-for-your-community/managing-discussions#deleting-a-discussion)”。

{% data reusables.discussions.github-recognizes-members %} 这些成员出现在对项目讨论最有帮助的贡献者名单中。 随着项目的发展，您可以向社区的活动成员授予更高的访问权限。 有关详细信息，请参阅“[向顶级贡献者授予更高的权限](/discussions/guides/granting-higher-permissions-to-top-contributors)”。

![对项目讨论最有帮助的贡献者](/assets/images/help/discussions/most-helpful.png)

有关参与讨论的详细信息，请参阅“[参与讨论](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion)”。

## 先决条件

要在存储库讨论中与维护者合作，存储库管理员或项目维护者必须启用存储库的 {% data variables.product.prodname_discussions %}。 有关详细信息，请参阅“[启用或禁用存储库的 {% data variables.product.prodname_discussions %}](/github/administering-a-repository/enabling-or-disabling-github-discussions-for-a-repository)”。

若要与组织讨论中的维护者开展协作，必须启用组织的 {% data variables.product.prodname_discussions %}。 有关详细信息，请参阅“[启用或禁用组织的 {% data variables.product.prodname_discussions %}](/organizations/managing-organization-settings/enabling-or-disabling-github-discussions-for-an-organization)”。

## 开始讨论

{% data reusables.discussions.starting-a-discussion %}

## 启动投票

{% data reusables.discussions.starting-a-poll %}

## 过滤讨论列表

你可以在存储库或组织中搜索讨论并筛选讨论列表。 有关详细信息，请参阅“[搜索讨论](/search-github/searching-on-github/searching-discussions)”。

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %}
1. 在“搜索所有讨论”字段中，键入搜索查询。 （可选）在搜索字段右侧，单击按钮以进一步过滤结果。
  ![用于筛选讨论的搜索栏和按钮](/assets/images/help/discussions/search-and-filter-controls.png)
1. 在讨论列表中，单击要查看的讨论。
  ![讨论搜索结果](/assets/images/help/discussions/search-result.png)

## 将议题转换为讨论

{% data reusables.discussions.you-can-convert-an-issue %} 有关详细信息，请参阅“[主持讨论](/discussions/managing-discussions-for-your-community/moderating-discussions#converting-an-issue-to-a-discussion)”。

## 延伸阅读

- [关于在 {% data variables.product.prodname_dotcom %} 上编写和设置格式](/github/writing-on-github/about-writing-and-formatting-on-github){%- ifversion fpt or ghec %}
- [维护 {% data variables.product.prodname_dotcom %} 上的安全](/communities/maintaining-your-safety-on-github){%- endif %}
