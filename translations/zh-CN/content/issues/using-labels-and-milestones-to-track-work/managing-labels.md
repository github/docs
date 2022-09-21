---
title: 管理标签
intro: '可以通过创建、编辑、应用和删除标签，对 {% ifversion fpt or ghec %}问题、拉取请求和讨论{% else %}问题和拉取请求{% endif %}进行分类。'
permissions: '{% data reusables.enterprise-accounts.emu-permission-repo %}'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/managing-labels
  - /articles/managing-Labels
  - /articles/labeling-issues-and-pull-requests
  - /github/managing-your-work-on-github/labeling-issues-and-pull-requests
  - /articles/about-labels
  - /github/managing-your-work-on-github/about-labels
  - /articles/creating-and-editing-labels-for-issues-and-pull-requests
  - /articles/creating-a-label
  - /github/managing-your-work-on-github/creating-a-label
  - /articles/customizing-issue-labels
  - /articles/applying-labels-to-issues-and-pull-requests
  - /github/managing-your-work-on-github/applying-labels-to-issues-and-pull-requests
  - /articles/editing-a-label
  - /github/managing-your-work-on-github/editing-a-label
  - /articles/deleting-a-label
  - /github/managing-your-work-on-github/deleting-a-label
  - /github/managing-your-work-on-github/managing-labels
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Project management
type: how_to
ms.openlocfilehash: 42feddd5ebbdee81140d3aab48b81f83a2c6e69f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145128619'
---
## 关于标签

可以通过创建标签来分类{% ifversion fpt or ghec %}问题、拉取请求和讨论{% else %}问题和拉取请求{% endif %}，以便管理 {% data variables.product.product_name %} 上的工作。 您可以在创建标签的仓库中应用标签。 创建标签后，可以在该存储库中的任何{% ifversion fpt or ghec %}问题、拉取请求或讨论{% else %}问题或拉取请求{% endif %}上使用标签。

## 关于默认标签

{% data variables.product.product_name %} 在每个新仓库中提供默认标签。 您可以使用这些默认标签帮助在仓库中创建标准工作流程。

Label | 说明
---  | ---
`bug` | 表示意外的问题或意外的行为{% ifversion fpt or ghes or ghec %}
`documentation` | 表示文档需要改进或补充{% endif %}
`duplicate` | 表示类似的{% ifversion fpt or ghec %}问题、拉动请求或讨论{% else %}问题或拉动请求{% endif %}
`enhancement` | 表示新功能申请
`good first issue` | 表示适用首次贡献者的议题
`help wanted` | 表示维护员需要议题或拉取请求方面的帮助
`invalid` | 表示{% ifversion fpt or ghec %}问题、拉动请求或讨论{% else %}问题或拉动请求{% endif %}已不再相关
`question` | 表示{% ifversion fpt or ghec %}问题、拉动请求或讨论{% else %}问题或拉动请求{% endif %}需要更多的信息
`wontfix` | 表示不会再继续处理某个{% ifversion fpt or ghec %}问题、拉动请求或讨论{% else %}问题或拉动请求{% endif %}

创建仓库时，每个新仓库中均包含默认标签，但您稍后可以编辑或删除标签。

带有 `good first issue` 标签的问题用于填充存储库的 `contribute` 页面。 有关 `contribute` 页面的示例，请参阅 [github/docs/contribute](https://github.com/github/docs/contribute)。 

{% ifversion fpt or ghes or ghec %} 组织所有者可以为其组织中的存储库定制默认标签。 有关详细信息，请参阅“[管理组织中存储库的默认标签](/articles/managing-default-labels-for-repositories-in-your-organization)”。
{% endif %}

## 创建标签

对存储库具有写入访问权限的任何人都可以创建标签。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %} {% data reusables.project-management.labels %}
4. 在搜索字段右侧，单击“新建标签”。
{% data reusables.project-management.name-label %} {% data reusables.project-management.label-description %} {% data reusables.project-management.label-color-randomizer %} {% data reusables.project-management.create-label %}

## 应用标记

对存储库具有分类访问权限的任何人都可以应用和忽略标签。

1. 导航到{% ifversion fpt or ghec %}问题、拉取请求或讨论{% else %}问题或拉取请求{% endif %}。
1. 在右侧边栏中“Labels（标签）”的右侧，单击 {% octicon "gear" aria-label="The gear icon" %}，然后单击标签。
  ![“标签”下拉菜单](/assets/images/help/issues/labels-drop-down.png)

## 编辑标签

对存储库具有写入权限的任何人都可以编辑现有标签。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %} {% data reusables.project-management.labels %} {% data reusables.project-management.edit-label %} {% data reusables.project-management.name-label %} {% data reusables.project-management.label-description %} {% data reusables.project-management.label-color-randomizer %} {% data reusables.project-management.save-label %}

## 删除标签

对存储库具有写入权限的任何人都可以删除现有标签。

删除标签将从议题和拉取请求中删除标签。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %} {% data reusables.project-management.labels %} {% data reusables.project-management.delete-label %}

## 延伸阅读
- [筛选和搜索问题和拉取请求](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests){% ifversion fpt or ghes or ghec %}
- [管理组织中存储库的默认标签](/articles/managing-default-labels-for-repositories-in-your-organization){% endif %}{% ifversion fpt or ghec %}
- [使用标签鼓励对项目做出有益的贡献](/communities/setting-up-your-project-for-healthy-contributions/encouraging-helpful-contributions-to-your-project-with-labels){% endif %}
- [基本撰写和格式设置语法](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#using-emoji)
