---
title: 过滤拉取请求中的文件
intro: '为了帮助你快速查看大型拉取请求中的更改，可以筛选更改的文件{% ifversion pr-tree-view %} 或使用文件树在文件之间导航{% endif %}。'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request
  - /articles/filtering-files-in-a-pull-request-by-file-type
  - /articles/filtering-files-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/filtering-files-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Filter files
ms.openlocfilehash: 1ca50334e4329d40ee164cd01523abc69e127ab3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146346611'
---
可以按文件扩展名类型（如 `.html` 或 `.js`）、缺少扩展名、代码所有权或点文件筛选拉取请求中的文件。{% ifversion pr-tree-view %}还可以使用文件树按文件路径进行筛选、在文件之间导航或查看已更改文件的高级视图。{% endif %}

## 使用文件筛选器下拉列表

{% tip %}

提示：为了简化拉取请求差异视图，也可以从文件筛选器下拉菜单中暂时隐藏已删除的文件或已在拉取请求差异中查看过的文件。

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. 在拉取请求列表中，单击要过滤的拉取请求。
{% data reusables.repositories.changed-files %}
4. 使用文件过滤器下拉菜单选择、取消选择或单击所需的过滤器。
  ![拉取请求差异上方的文件筛选器选项](/assets/images/help/pull_requests/file-filter-option.png)
5. （可选）若要清除筛选器选择，请在“已更改的文件”选项卡下单击“清除” 。
  ![清除文件筛选器选择](/assets/images/help/pull_requests/clear-file-filter.png)

{% ifversion pr-tree-view %}
## 使用文件树

{% data reusables.repositories.sidebar-pr %}
1. 在拉取请求列表中，单击要过滤的拉取请求。
{% data reusables.repositories.changed-files %}

1. 单击文件树中的文件可查看相应的文件差异 如果文件树已隐藏，请单击 {% octicon "sidebar-collapse" aria-label="The sidebar collapse icon" %} 以显示文件树。

   {% note %}

   注意：如果屏幕宽度太窄或拉取请求仅包含一个文件，则文件树将不会显示。

   {% endnote %}
   
   ![突出显示“筛选已更改的文件”搜索框和文件树的屏幕截图](/assets/images/help/repository/file-tree.png)
1. 若要按文件路径进行筛选，请在“筛选已更改的文件”搜索框中输入部分或全部文件路径。 或者，使用文件筛选器下拉列表。 有关详细信息，请参阅“[使用文件筛选器下拉菜单](#using-the-file-filter-dropdown)”。

{% endif %}

## 延伸阅读

- “[关于比较拉取请求中的分支](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)”
- “[在拉取请求中查找已更改的方法和函数](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/finding-changed-methods-and-functions-in-a-pull-request)”
