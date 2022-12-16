---
title: 取消发布 GitHub Pages 站点
intro: '您可以取消发布 {% data variables.product.prodname_pages %} 站点，使该站点不再可用。'
redirect_from:
  - /articles/how-do-i-unpublish-a-project-page
  - /articles/unpublishing-a-project-page
  - /articles/unpublishing-a-project-pages-site
  - /articles/unpublishing-a-user-pages-site
  - /articles/unpublishing-a-github-pages-site
  - /github/working-with-github-pages/unpublishing-a-github-pages-site
product: '{% data reusables.gated-features.pages %}'
permissions: 'People with admin or maintainer permissions for a repository can unpublish a {% data variables.product.prodname_pages %} site.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Unpublish Pages site
ms.openlocfilehash: bfb22638b51560cb0006cca49a55b9842d8b807d
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108631'
---
{% ifversion pages-custom-workflow %}

取消发布站点时，该站点将不再可用。 所有现有存储库设置或内容都不受影响。

{% data reusables.repositories.navigate-to-repo %}
1. 在 {% data variables.product.prodname_pages %} 下的“站点所在位置”消息旁，单击 {% octicon "kebab-horizontal" aria-label="the horizontal kebab icon" %} 。
1. 在显示的菜单中，选择“取消发布站点”。

   ![用于取消发布站点的下拉菜单](/assets/images/help/pages/unpublish-site.png)

{% else %}

## 取消发布项目站点

{% data reusables.repositories.navigate-to-repo %}
2. 如果存储库中存在 `gh-pages` 分支，请删除 `gh-pages` 分支。 有关详细信息，请参阅“[创建和删除存储库中的分支](/articles/creating-and-deleting-branches-within-your-repository#deleting-a-branch)”。
3. 如果 `gh-pages` 分支是发布源，{% ifversion fpt or ghec %}请跳到步骤 6{% else %}你的网站现在已取消发布，你可以跳过其余步骤{% endif %}。
{% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
5. 在“{% data variables.product.prodname_pages %}”下，使用“源”下拉菜单，然后选择“无”。
  ![用于选择发布源的下拉菜单](/assets/images/help/pages/publishing-source-drop-down.png) {% data reusables.pages.update_your_dns_settings %} 

## 取消发布用户或组织站点

{% data reusables.repositories.navigate-to-repo %}
2. 删除用作发布源的分支，或删除整个仓库。 有关详细信息，请参阅“[创建和删除存储库中的分支](/articles/creating-and-deleting-branches-within-your-repository#deleting-a-branch)”和“[删除存储库](/articles/deleting-a-repository)”。
{% data reusables.pages.update_your_dns_settings %}

{% endif %}
