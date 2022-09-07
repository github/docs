---
title: 使用主题对仓库分类
intro: 为帮助其他人找到并参与您的项目，可以为仓库添加主题，这些主题可以与项目的预期目的、学科领域、关联团队或其他重要特点相关。
redirect_from:
  - /articles/about-topics
  - /articles/classifying-your-repository-with-topics
  - /github/administering-a-repository/classifying-your-repository-with-topics
  - /github/administering-a-repository/managing-repository-settings/classifying-your-repository-with-topics
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Classify with topics
ms.openlocfilehash: 68bd754ac6c50968961c61e533cb6b9de26e4cc4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145129349'
---
## 关于主题

使用主题可以探索特定主题领域的仓库，查找要参与的项目，以及发现特定问题的新解决方案。 主题显示在仓库的主页面上。 可以单击主题名称以{% ifversion fpt or ghec %}查看相关主题和按该主题分类的其他存储库列表{% else %}搜索具有该主题的其他存储库{% endif %}。

![显示主题的测试仓库主页面](/assets/images/help/repository/os-repo-with-topics.png)

若要浏览最常用的主题，请转到 https://github.com/topics/ 。

{% ifversion fpt or ghec %}可以在 [github/explore](https://github.com/github/explore) 存储库中参与 {% data variables.product.product_name %} 的一组精选主题。 {% endif %}

仓库管理员可以添加他们喜欢的任何主题到仓库。 用于对存储库进行分类的有用主题包括存储库的预期用途、主题领域、社区或语言。{% ifversion fpt or ghec %}此外，{% data variables.product.product_name %} 分析公共存储库内容，并生成存储库管理员可接受或拒绝的建议主题。 私有仓库内容不可分析，也不会收到主题建议。{% endif %}

{% ifversion fpt %}公共和私有{% elsif ghec or ghes %}公共、私有和内部{% elsif ghae %}私有和内部{% endif %} 存储库可以包含主题，但您只会在主题搜索结果中看到您有权访问的私有存储库。

您可以搜索与公共仓库关联的仓库。 有关详细信息，请参阅“[搜索存储库](/search-github/searching-on-github/searching-for-repositories#search-by-topic)”。 您也可以搜索 {% data variables.product.product_name %} 中的主题列表。 有关详细信息，请参阅“[搜索主题](/search-github/searching-on-github/searching-topics)”。

## 添加主题到仓库

{% data reusables.repositories.navigate-to-repo %}
2. 在“关于”右侧，单击 {% octicon "gear" aria-label="The Gear icon" %}。
  ![存储库主页上的齿轮图标](/assets/images/help/repository/edit-repository-details-gear.png)
3. 在“"Topics（主题）”下，键入要添加到仓库的主题，然后键入空格。
  ![用于输入主题的表单](/assets/images/help/repository/add-topic-form.png)
4. 完成添加主题后，单击“保存更改”。
  ![“编辑存储库详细信息”中的“保存更改”按钮](/assets/images/help/repository/edit-repository-details-save-changes-button.png)
