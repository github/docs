---
title: 조직의 GitHub Pages 사이트 게시 관리
intro: '조직 구성원이 조직의 리포지토리에서 {% data variables.product.prodname_pages %} 사이트를 게시할 수 있는지 여부를 제어하고 {% ifversion ghec %} 구성원이 사이트에 대해 선택하는 공개 여부를 제한할 수 있습니다{% endif %}.'
permissions: 'Organization owners can manage the publication of {% data variables.product.prodname_pages %} sites from repositories in the organization.'
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/disabling-publication-of-github-pages-sites-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-publication-of-github-pages-sites-for-your-organization
topics:
  - Organizations
  - Teams
shortTitle: Manage Pages site publication
ms.openlocfilehash: cce086c19dd6f20de28dde599c13074c48851753
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878534'
---
{% ifversion fpt %} 조직 멤버가 {% data variables.product.prodname_pages %} 사이트를 게시할 수 있도록 허용하거나 허용하지 않도록 선택할 수 있습니다. {% data variables.product.prodname_ghe_cloud %}를 사용하는 조직은 공개적으로 게시된 사이트, 비공개로 게시된 사이트 또는 이를 둘 다 허용하거나 하나도 허용하지 않도록 선택할 수도 있습니다. 자세한 내용은 [{% data variables.product.prodname_ghe_cloud %} 설명서](/enterprise-cloud@latest/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)를 참조하세요.
{% elsif ghec %} 조직 멤버가 공개적으로 게시된 사이트, 비공개로 게시된 사이트 또는 이를 둘 다 만들거나 하나도 만들지 않도록 허용할 수 있습니다. {% data variables.product.prodname_pages %} 사이트의 액세스 제어에 대한 자세한 내용은 “[{% data variables.product.prodname_pages %} 사이트의 표시 여부 변경](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)”을 참조하세요.
{% endif %}

{% data variables.product.prodname_pages %} 사이트의 게시를 허용하지 않는 경우 이미 게시된 모든 사이트는 게시된 상태로 유지됩니다. 사이트의 게시를 수동으로 취소할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_pages %} 사이트 게시 취소](/pages/getting-started-with-github-pages/unpublishing-a-github-pages-site)”를 참조하세요.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}{% ifversion fpt %}
1. “페이지 만들기”에서 **퍼블릭** 을 선택하거나 선택 취소합니다.

   ![{% data variables.product.prodname_pages %} 사이트 만들기를 허용하거나 허용하지 않기 위한 확인란](/assets/images/help/organizations/github-pages-creation-checkboxes-fpt.png){% elsif ghec %}
1. “페이지 만들기”에서 허용하려는 표시 여부를 선택하고 허용하지 않을 표시 여부의 선택을 취소합니다.

   ![{% data variables.product.prodname_pages %} 사이트 만들기를 허용하거나 허용하지 않기 위한 확인란](/assets/images/help/organizations/github-pages-creation-checkboxes.png){% else %}
1. “페이지 만들기”에서 **멤버가 사이트를 게시할 수 있도록 허용** 을 선택하거나 선택 취소합니다.

   ![“멤버가 사이트를 게시할 수 있도록 허용” 옵션에 대한 선택되지 않은 확인란](/assets/images/help/organizations/org-settings-pages-disable-publication-checkbox.png){% endif %}{% ifversion fpt or ghec %}

   {% indented_data_reference reusables.pages.privately-publish-ghec-only spaces=3%}{% endif %}

1. **저장** 을 클릭합니다.

## 추가 참고 자료

- “[{% data variables.product.prodname_pages %} 정보](/pages/getting-started-with-github-pages/about-github-pages)”
