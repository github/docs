---
title: GitHub Pages 사이트에 대한 게시 원본 구성
intro: '{% ifversion pages-custom-workflow %}변경 내용이 특정 분기에 푸시될 때 게시하도록 {% data variables.product.prodname_pages %} 사이트를 구성하거나 {% data variables.product.prodname_actions %} 워크플로를 작성하여 사이트를 게시할 수 있습니다.{% else%}{% data variables.product.prodname_pages %} 사이트에 기본 게시 원본을 사용하는 경우 사이트가 자동으로 게시됩니다. 다른 분기 또는 폴더에서 사이트를 게시하도록 선택할 수도 있습니다.{% endif %}'
redirect_from:
  - /articles/configuring-a-publishing-source-for-github-pages
  - /articles/configuring-a-publishing-source-for-your-github-pages-site
  - /github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
permissions: 'People with admin or maintainer permissions for a repository can configure a publishing source for a {% data variables.product.prodname_pages %} site.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Configure publishing source
ms.openlocfilehash: d08b5c150da5be18700312237c374059228c563d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529641'
---
## 게시 원본 정보

{% data reusables.pages.pages-about-publishing-source %}

{% data reusables.pages.private_pages_are_public_warning %}

## 분기에서 게시

1. 게시 원본으로 사용할 분기가 리포지토리에 이미 있는지 확인합니다.
{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %} {% ifversion pages-custom-workflow %}
1. "빌드 및 배포"의 "원본"에서 **분기에서 배포** 를 선택합니다.
1. "빌드 및 배포"의 "분기"에서 **없음** 또는 **분기** 드롭다운 메뉴를 사용하여 게시 원본을 선택합니다.

   ![게시 원본을 선택할 수 있는 드롭다운 메뉴](/assets/images/help/pages/publishing-source-drop-down.png) {% else %}
3. “{% data variables.product.prodname_pages %}”에서 **없음** 또는 **분기** 드롭다운 메뉴를 사용하고 게시 원본을 선택합니다.
  ![게시 원본을 선택할 수 있는 드롭다운 메뉴](/assets/images/help/pages/publishing-source-drop-down.png) {% endif %}
4. 필요에 따라 드롭다운 메뉴를 사용하여 게시 원본의 폴더를 선택합니다.
  ![게시 원본의 폴더를 선택할 수 있는 드롭다운 메뉴](/assets/images/help/pages/publishing-source-folder-drop-down.png)
5. **저장** 을 클릭합니다.
  ![게시 원본 설정에 대한 변경 내용을 저장하는 단추](/assets/images/help/pages/publishing-source-save.png)

### 분기에서 게시 문제 해결

{% data reusables.pages.admin-must-push %}

분기의 `docs` 폴더를 게시 원본으로 선택하고 나중에 리포지토리의 해당 분기에서 `/docs` 폴더를 제거한 경우 사이트가 빌드되지 않으며 누락된 `/docs` 폴더에 대한 페이지 빌드 오류 메시지가 표시됩니다. 자세한 내용은 “[{% data variables.product.prodname_pages %} 사이트에 대한 Jekyll 빌드 오류 문제 해결](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites#missing-docs-folder)”을 참조하세요.

{% ifversion build-pages-with-actions %}

다른 CI 도구를 사용하여 {% data variables.product.prodname_pages %} 사이트를 빌드하도록 구성한 경우에도 {% data variables.product.prodname_pages %} 사이트는 항상 {% data variables.product.prodname_actions %} 워크플로 실행과 함께 배포됩니다. 대부분의 외부 CI 워크플로는 빌드 출력을 리포지토리의 `gh-pages` 분기에 커밋하여 GitHub Pages에 “배포”하며 일반적으로 `.nojekyll` 파일을 포함합니다. 이 경우 {% data variables.product.prodname_actions %} 워크플로는 분기에 빌드 단계가 필요하지 않은 상태를 검색하고 사이트를 {% data variables.product.prodname_pages %} 서버에 배포하는 데 필요한 단계만 실행합니다.

빌드 또는 배포에서 잠재적인 오류를 찾으려면 리포지토리의 워크플로 실행을 검토하여 {% data variables.product.prodname_pages %} 사이트에 대한 워크플로 실행을 검사할 수 있습니다. 자세한 내용은 “[워크플로 실행 기록 보기](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)”를 참조하세요. 오류가 발생할 경우 워크플로를 다시 실행하는 방법에 대한 자세한 내용은 “[워크플로 및 작업 다시 실행](/actions/managing-workflow-runs/re-running-workflows-and-jobs)”을 참조하세요.

{% endif %}

{% ifversion pages-custom-workflow %}

## 사용자 지정 {% data variables.product.prodname_actions %} 워크플로를 사용하여 게시

{% data reusables.pages.pages-custom-workflow-beta %}

{% data variables.product.prodname_actions %}을(를) 사용하여 게시하도록 사이트를 구성하려면 다음을 수행합니다.

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
1. "빌드 및 배포"의 "원본"에서 **GitHub Actions** 을(를) 선택합니다.
1. {% data variables.product.product_name %}은(는) 몇 가지 시작 워크플로를 제안합니다. 사이트를 게시할 워크플로가 이미 있는 경우 이 단계를 건너뛸 수 있습니다. 그렇지 않으면 {% data variables.product.prodname_actions %} 워크플로를 만드는 옵션 중 하나를 선택합니다. 사용자 지정 워크플로를 만드는 방법에 대한 자세한 내용은 "[사이트를 게시하는 사용자 지정 {% data variables.product.prodname_actions %} 워크플로 만들기](#creating-a-custom-github-actions-workflow-to-publish-your-site)"를 참조하세요.

   {% data variables.product.prodname_pages %}은(는) 특정 워크플로를 {% data variables.product.prodname_pages %} 설정에 연결하지 않습니다. 그러나 {% data variables.product.prodname_pages %} 설정은 가장 최근에 사이트를 배포한 워크플로 실행에 연결됩니다.

### 사용자 지정 {% data variables.product.prodname_actions %} 워크플로를 만들어 사이트 게시

{% data variables.product.prodname_actions %}에 대한 자세한 내용은 "[작업](/actions)"을(를) 참조하세요.

{% data variables.product.prodname_actions %}을(를) 사용하여 게시하도록 사이트를 구성할 때 {% data variables.product.product_name %}은(는) 일반적인 게시 시나리오에 대한 시작 워크플로를 제안합니다. 워크플로의 일반적인 흐름은 다음과 같습니다.

1. 리포지토리의 기본 분기로의 푸시가 있을 때마다 또는 기본 분기를 대상으로 하는 끌어오기 요청이 열리거나, 다시 열리거나, 다시 열리거나, 업데이트될 때마다 트리거됩니다.
1. [`actions/checkout`](https://github.com/actions/checkout) 작업을 사용하여 리포지토리 콘텐츠를 확인합니다.
1. 사이트에서 필요한 경우 정적 사이트 파일을 빌드합니다.
1. [`actions/upload-pages-artifact`](https://github.com/actions/upload-pages-artifact) 작업을 사용하여 정적 파일을 아티팩트로 업로드합니다.
1. 워크플로가 기본 분기로 푸시하여 트리거된 경우 [`actions/deploy-pages`](https://github.com/actions/deploy-pages) 작업을 사용하여 아티팩트를 배포합니다. 워크플로가 끌어오기 요청에 의해 트리거된 경우 이 단계를 건너뜁니다.

시작 워크플로는 `github-pages`라는 배포 환경을 사용합니다. 리포지토리에 아직 `github-pages`라는 환경이 포함되어 있지 않으면 환경이 자동으로 만들어집니다. 기본 분기만 이 환경에 배포할 수 있도록 환경 보호 규칙을 추가하는 것이 좋습니다. 자세한 내용은 “[배포에 환경 사용](/actions/deployment/targeting-different-environments/using-environments-for-deployment)”을 참조하세요.

{% note %}

**참고**: 리포지토리 파일의 `CNAME` 파일은 사용자 지정 도메인을 자동으로 추가하거나 제거하지 않습니다. 대신 리포지토리 설정 또는 API를 통해 사용자 지정 도메인을 구성해야 합니다. 자세한 내용은 "[GitHub Pages 사이트의 사용자 지정 도메인 관리](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)" 및 [Pages API 참조 설명서](/rest/pages#update-information-about-a-github-pages-site)를 참조하세요.

{% endnote %}

### 사용자 지정 {% data variables.product.prodname_actions %} 워크플로를 사용하여 게시 문제 해결

{% data variables.product.prodname_actions %} 워크플로의 문제를 해결하는 방법에 대한 자세한 내용은 "[모니터링 및 문제 해결 정보](/actions/monitoring-and-troubleshooting-workflows/about-monitoring-and-troubleshooting)"를 참조하세요.

{% endif %}
