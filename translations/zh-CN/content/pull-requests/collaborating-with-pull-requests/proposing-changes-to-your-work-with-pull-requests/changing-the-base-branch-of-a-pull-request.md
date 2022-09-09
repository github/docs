---
title: 更改拉取请求的基本分支
intro: 打开拉取请求后，您可以更改基本分支，以根据不同的分支比较拉取请求中的更改。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request
  - /articles/changing-the-base-branch-of-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/changing-the-base-branch-of-a-pull-request
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Change the base branch
ms.openlocfilehash: 6e8e78ac4f3e0d3f81b5efc07bb48151040baa9d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145129629'
---
{% warning %}

警告：更改拉取请求的基本分支时，有些提交可能会从时间表中被删除。 审查评论也可能过时，因为评论引用的代码行可能不再是拉取请求中更改的一部分。

{% endwarning %}

{% data reusables.repositories.sidebar-pr %}
2. 在“Pull Requests（拉取请求）”列表中，单击要修改的拉取请求。
3. 在拉取请求的标题旁边，单击“编辑”。 ![拉取请求编辑按钮](/assets/images/help/pull_requests/pull-request-edit.png)
4. 在基本分支下拉菜单中，选择要[比较更改](/github/committing-changes-to-your-project/comparing-commits#comparing-branches)的基本分支。 ![基本分支下拉菜单](/assets/images/help/pull_requests/pull-request-edit-base-branch.png)
5. 阅读有关更改基本分支的信息，然后单击“更改基本分支”。 ![基本分支更改确认按钮](/assets/images/help/pull_requests/pull-request-base-branch-confirm.png)

{% tip %}

提示：打开拉取请求时，{% data variables.product.product_name %} 会将基础设置为分支引用的提交。 如果将来更新该分支，{% data variables.product.product_name %} 不会更新基础分支的提交。

{% endtip %}

## 延伸阅读

- [创建拉取请求](/articles/creating-a-pull-request)
- [关于拉取请求](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
- [查看拉取请求中的建议更改](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)
