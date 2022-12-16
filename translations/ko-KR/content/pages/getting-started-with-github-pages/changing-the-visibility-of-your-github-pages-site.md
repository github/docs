---
title: GitHub Pages 사이트의 표시 여부 변경
intro: 사이트를 공개 또는 비공개로 게시하여 프로젝트 사이트에 대한 액세스 제어를 관리할 수 있습니다.
versions:
  ghec: '*'
permissions: 'People with admin access to a repository can change the visibility of a {% data variables.product.prodname_pages %} site.'
redirect_from:
  - /github/working-with-github-pages/changing-the-visibility-of-your-github-pages-site
shortTitle: Change visibility of site
ms.openlocfilehash: f80ec04f0f16413414a4334e02ee3b45f534b46c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145282859'
---
## {% data variables.product.prodname_pages %} 사이트에 대한 액세스 제어 정보

{% data variables.product.prodname_pages %}에 대한 액세스 제어를 사용하면 사이트를 비공개로 게시하여 프로젝트 사이트에 대한 액세스를 제한할 수 있습니다. 비공개로 게시된 사이트는 사이트가 게시된 리포지토리에 대한 읽기 권한이 있는 사용자만 액세스할 수 있습니다. 비공개로 게시된 사이트를 사용하여 내부 설명서 또는 기술 자료를 엔터프라이즈 구성원과 공유할 수 있습니다. 

{% data reusables.pages.privately-publish-ghec-only %}

엔터프라이즈에서 {% data variables.product.prodname_emus %}를 사용하는 경우 액세스 제어를 사용할 수 없으며 모든 {% data variables.product.prodname_pages %} 사이트는 다른 엔터프라이즈 구성원만 액세스할 수 있습니다. {% data variables.product.prodname_emus %}에 대한 자세한 내용은 “[{% data variables.product.prodname_pages %} 정보](/pages/getting-started-with-github-pages/about-github-pages#limitations-for-enterprise-managed-users)”를 참조하세요.

조직에서 {% data variables.product.prodname_emus %} 없이 {% data variables.product.prodname_ghe_cloud %}를 사용하는 경우 프로젝트 사이트를 비공개로 또는 인터넷에 있는 모든 사람에게 공개로 게시하도록 선택할 수 있습니다.

액세스 제어는 조직이 소유한 프라이빗 또는 내부 리포지토리에서 게시된 프로젝트 사이트에 사용할 수 있습니다. 조직 사이트에 대한 액세스 제어는 관리할 수 없습니다. {% data variables.product.prodname_pages %} 사이트의 유형에 대한 자세한 내용은 “[{% data variables.product.prodname_pages %} 정보](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)”를 참조하세요.

## 비공개로 게시된 사이트의 하위 도메인 정보

비공개로 게시된 사이트는 공개적으로 게시된 사이트와 다른 하위 도메인에서 사용할 수 있습니다. 이렇게 하면 {% data variables.product.prodname_pages %} 사이트가 게시된 순간부터 안전하게 보호됩니다.

- TLS 인증서를 사용하여 `*.pages.github.io`의 모든 하위 도메인을 자동으로 보호하고, 브라우저가 항상 HTTPS를 통해 페이지를 제공하도록 HSTS를 적용합니다.
- 비공개로 게시된 사이트에 고유한 하위 도메인을 사용하여 조직의 다른 리포지토리가 사이트와 동일한 원본에 콘텐츠를 게시할 수 없도록 합니다. 이렇게 하면 사이트가 "[쿠키 토싱](https://github.blog/2013-04-09-yummy-cookies-across-domains/)"으로부터 보호됩니다. 또한 `github.com` 도메인에서 {% data variables.product.prodname_pages %} 사이트를 호스트하지 않습니다.

리포지토리 설정의 "페이지" 탭에서 사이트의 고유한 하위 도메인을 볼 수 있습니다. 리포지토리 이름을 경로로 사용하여 사이트를 빌드하도록 구성된 정적 사이트 생성기를 사용하는 경우 사이트를 비공개로 변경할 때 정적 사이트 생성기의 설정을 업데이트해야 할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_pages %} 사이트에서 Jekyll 구성](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)” 또는 정적 사이트 생성기에 대한 설명서를 참조하세요.

비공개로 게시된 사이트에 더 짧고 기억하기 쉬운 도메인을 사용하려면 사용자 지정 도메인을 구성할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_pages %} 사이트의 사용자 지정 도메인 구성](/pages/configuring-a-custom-domain-for-your-github-pages-site)”을 참조하세요.

## {% data variables.product.prodname_pages %} 사이트의 표시 여부 변경

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
3. “{% data variables.product.prodname_pages %}”에서 **{% data variables.product.prodname_pages %} 표시 여부** 드롭다운 메뉴를 선택한 다음 표시 여부를 클릭합니다.
   ![사이트의 표시 유형을 선택하는 드롭다운](/assets/images/help/pages/public-or-private-visibility.png)
4. 게시된 사이트를 보려면 “{% data variables.product.prodname_pages %}”에서 사이트의 URL을 클릭합니다.
![비공개로 게시된 사이트의 URL](/assets/images/help/pages/click-private-pages-url-to-preview.png)

  {% note %}

  {% data reusables.pages.twenty-minutes-to-publish %}

  {% endnote %}
