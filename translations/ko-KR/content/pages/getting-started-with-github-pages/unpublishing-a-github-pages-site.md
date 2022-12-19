---
title: GitHub Pages 사이트 게시 취소
intro: '사이트를 더 이상 사용할 수 없도록 {% data variables.product.prodname_pages %} 사이트를 게시 취소할 수 있습니다.'
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
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109549'
---
{% ifversion pages-custom-workflow %}

사이트를 게시 취소하면 사이트를 더 이상 사용할 수 없습니다. 기존 리포지토리 설정 또는 콘텐츠는 영향을 받지 않습니다.

{% data reusables.repositories.navigate-to-repo %}
1. **{% data variables.product.prodname_pages %}** 에서 **사이트 라이브** 메시지 옆에 있는 {% octicon "kebab-horizontal" aria-label="the horizontal kebab icon" %}을 클릭합니다.
1. 표시되는 메뉴에서 **게시 취소 사이트** 를 선택합니다.

   ![드롭다운 메뉴를 사용하여 사이트 게시 취소](/assets/images/help/pages/unpublish-site.png)

{% else %}

## 프로젝트 사이트 게시 취소

{% data reusables.repositories.navigate-to-repo %}
2. 리포지토리에 `gh-pages` 분기가 있는 경우 `gh-pages` 분기를 삭제합니다. 자세한 내용은 “[리포지토리 내에서 분기 만들기 및 삭제](/articles/creating-and-deleting-branches-within-your-repository#deleting-a-branch)”를 참조하세요.
3. `gh-pages` 분기가 게시 원본인 경우 {% ifversion fpt or ghec %}6단계로 건너뜁니다.{% else %}사이트가 게시 취소되었으며 나머지 단계{% endif %}를 건너뛸 수 있습니다.
{% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
5. “{% data variables.product.prodname_pages %}”에서 **원본** 드롭다운 메뉴를 사용하고 **없음** 을 선택합니다.
  ![드롭다운 메뉴를 사용하여 게시 원본 선택](/assets/images/help/pages/publishing-source-drop-down.png) {% data reusables.pages.update_your_dns_settings %}

## 사용자 또는 조직 사이트 게시 취소

{% data reusables.repositories.navigate-to-repo %}
2. 게시 원본으로 사용 중인 분기를 삭제하거나 전체 리포지토리를 삭제합니다. 자세한 내용은 “[리포지토리 내에서 분기 만들기 및 삭제](/articles/creating-and-deleting-branches-within-your-repository#deleting-a-branch)” 및 “[리포지토리 삭제](/articles/deleting-a-repository)”를 참조하세요.
{% data reusables.pages.update_your_dns_settings %}

{% endif %}
