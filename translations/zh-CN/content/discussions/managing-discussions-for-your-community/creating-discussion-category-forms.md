---
title: 创建讨论类别表单
shortTitle: Create discussion category forms
intro: 可以自定义社区成员在存储库中打开新讨论时可使用的模板。
versions:
  feature: discussion-category-forms
ms.openlocfilehash: f87bd6369bcb4f1b6e2e47fe11cd61626b1fbe7d
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193229'
---
{% data reusables.discussions.discussion-category-forms-beta %}

## 关于讨论类别表单

在存储库中使用讨论表单可以鼓励社区成员在其讨论中包含特定的结构化信息。 通过讨论类别表单，可以创建具有可自定义 Web 表单字段的讨论模板。 讨论表单使用 {% data variables.product.prodname_dotcom %} 表单架构以 YAML 编写。 有关详细信息，请参阅“[{% data variables.product.prodname_dotcom %} 的表单架构语法](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema)”。 

{% data reusables.actions.learn-more-about-yaml %}

若要在存储库中使用讨论类别表单，必须创建一个新文件并将它添加到存储库中的 `/.github/DISCUSSION_TEMPLATE/` 文件夹。 

还可以为组织创建讨论类别表单。 有关详细信息，请参阅“[创建默认社区运行状况文件](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)”。

投票不支持使用讨论类别表单。 有关投票的详细信息，请参阅“[关于投票](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-polls)”。

下面是议题表单的呈现版本。

  ![呈现的讨论类别表单的屏幕截图](/assets/images/help/discussions/discussion-category-form-sample.png)

## 创建讨论类别表单

对存储库具有写入权限的人员可以创建讨论类别窗体。 

1. 导航到要在其中创建讨论类别表单的存储库。 
2. 在存储库中，创建一个名为 `/.github/DISCUSSION_TEMPLATE/FORM-NAME.yml` 的文件，然后将 `FORM-NAME` 替换为讨论类别表单的名称。 {% data reusables.discussions.discussion-category-forms-name %}有关在 GitHub 上创建新文件的详细信息，请参阅“[创建新文件](/github/managing-files-in-a-repository/creating-new-files)”。
3. 在新文件的正文中，键入讨论类别表单的内容。 有关详细信息，请参阅“[讨论类别表单的语法](/discussions/managing-discussions-for-your-community/syntax-for-discussion-category-forms)”。
4. 将文件提交到仓库的默认分支。 有关详细信息，请参阅“[新建文件](/github/managing-files-in-a-repository/creating-new-files)”。
