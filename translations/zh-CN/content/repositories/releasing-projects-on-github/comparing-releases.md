---
title: 比较发行版
intro: 您可以比较发行版标记以查看不同发行版之间的仓库变化。
permissions: People with read access to a repository can view and compare releases.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/comparing-releases
  - /github/administering-a-repository/releasing-projects-on-github/comparing-releases
ms.openlocfilehash: 12ec28717e8de8575a58487b02d5665044f471eb
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145129303'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
3. 在要用作基础映像的版本旁边，单击“比较”。
  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}![“比较”版本标记菜单](/assets/images/help/releases/refreshed-compare-tags.png) {% else %}![“比较”版本标记菜单](/assets/images/help/releases/compare-tags-menu.png) {% endif %}
4. 使用“Compare（比较）”下拉菜单并选择要比较的标记。
  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}![“比较”版本标记菜单](/assets/images/help/releases/refreshed-compare-tags-menu-options.png) {% else %}![“比较”版本标记菜单选项](/assets/images/help/releases/compare-tags-menu-options.png) {% endif %}
