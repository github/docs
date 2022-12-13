---
title: 엔터프라이즈에서 작업 사용 정보
intro: '{% data variables.product.product_name %}에는 대부분의 {% data variables.product.prodname_dotcom %}이 작성되었으며 {% data variables.product.prodname_dotcom_the_website %}및 {% data variables.product.prodname_marketplace %}에서 다른 작업에 액세스할 수 있는 옵션이 있습니다.'
redirect_from:
  - /enterprise/admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-actions-in-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Actions
  - Enterprise
shortTitle: About actions in your enterprise
ms.openlocfilehash: ac77d792a336c9da30e6ee3d5bbb0e382a8fb6b7
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099189'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## {% data variables.product.product_name %}에 대한 작업 정보

{% data variables.product.prodname_actions %} 워크플로는 작업을 만들고 워크플로를 사용자 지정하기 위해 결합할 수 있는 개별 작업인 _작업_ 을 사용할 수 있습니다. 사용자 고유의 작업을 만들거나 {% data variables.product.prodname_dotcom %} 커뮤니티에서 공유하는 작업을 사용 및 사용자 지정할 수 있습니다.

{% data reusables.actions.enterprise-no-internet-actions %} 개발자가 {% 데이터 variables.location.product_location %}에 저장된 작업을 사용하도록 제한할 수 있습니다. 여기에는 대부분의 공식 {% 데이터 variables.product.company_short %}작성 작업과 개발자가 만드는 모든 작업이 포함됩니다. 또는 개발자가 업계 리더 및 오픈 소스 커뮤니티에서 빌드한 작업의 전체 에코시스템을 활용할 수 있도록 {% data variables.product.prodname_dotcom_the_website %}에서 다른 작업에 대한 액세스를 구성할 수 있습니다. 

{% data variables.product.prodname_dotcom_the_website %}의 모든 작업에 대해 자동 액세스를 허용하는 것이 좋습니다. {% ifversion ghes %}그러나 {% data variables.product.prodname_dotcom_the_website %}에 대한 아웃바운드 연결을 만들려면 {% data variables.product.product_name %}이(가) 필요합니다. 이러한 연결을 허용하지 않으려는 경우 또는{% else %}{% endif %} 엔터프라이즈에서 사용되는 작업을 보다 정확하게 제어하려는 경우 {% data variables.product.prodname_dotcom_the_website %}의 특정 작업을 수동으로 동기화할 수 있습니다.

## 엔터프라이즈 인스턴스와 함께 번들로 제공되는 공식 작업

{% data reusables.actions.actions-bundled-with-ghes %}

번들로 제공되는 공식 작업에는 다음 작업이 포함됩니다.
- `actions/checkout`
- `actions/upload-artifact`
- `actions/download-artifact`
- `actions/labeler`
- 다양한 `actions/setup-` 작업

엔터프라이즈 인스턴스에 포함된 모든 공식 작업을 보려면, 인스턴스에서 `actions` 조직으로 이동합니다. <code>https://<em>HOSTNAME</em>/actions</code>.

이러한 작업을 사용하려면 {% 데이터 variables.location.product_location %}와 {% 데이터 variables.product.prodname_dotcom_the_website %} 사이에는 연결이 필요하지 않습니다.

각 작업은 `actions` 조직의 리포지토리이며, 각 작업 리포지토리에는 워크플로에서 작업을 참조하는 데 사용할 수 있는 필요한 태그, 분기 및 커밋 SHA가 포함됩니다. 번들 공식 작업을 업데이트하는 방법에 대한 자세한 내용은 “[최신 버전의 공식 번들 작업 사용](/admin/github-actions/using-the-latest-version-of-the-official-bundled-actions)”을 참조하세요.

{% note %}

**참고:** 
- 실행기를 자체 호스팅하는 {% data variables.product.product_name %}에서 `actions/setup-LANGUAGE` 같은 설정 작업을 사용할 경우 인터넷에 액세스할 수 없는 실행기에서 도구 캐시를 설정해야 할 수 있습니다. 자세한 내용은 “[인터넷에 액세스할 수 없는 자체 호스트 실행기에서 도구 캐시 설정](/enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access)”을 참조하세요.
- {% data variables.product.product_name %}이 업데이트되면 번들 작업이 업그레이드 패키지의 기본 버전으로 자동으로 대체됩니다.

{% endnote %}

## {% data variables.product.prodname_dotcom_the_website %}에서 작업에 대한 액세스 구성

{% data reusables.actions.access-actions-on-dotcom %}

{% data variables.product.prodname_dotcom_the_website %}에서 모든 작업에 대해 자동으로 액세스하도록 설정하는 것이 가장 좋습니다. {% data variables.product.prodname_github_connect %}를 사용하여 {% data variables.product.prodname_ghe_cloud %}와 {% data variables.product.product_name %}를 통합하면 됩니다. 자세한 내용은 “[{% data variables.product.prodname_github_connect %}를 사용하여 {% data variables.product.prodname_dotcom_the_website %} 작업에 대한 자동 액세스 사용](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)”을 참조하세요. 

{% ifversion ghes %} {% note %}

**참고:** {% 데이터 variables.product.prodname_dotcom_the_website %}에 대한 작업에 대한 액세스를 구성하려면 먼저 {% 데이터 variables.location.product_location %}에서 {% 데이터 variables.product.prodname_actions %}를 사용하도록 구성해야 합니다. 자세한 내용은 “[GitHub Enterprise Server용 {% data variables.product.prodname_actions %} 시작](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)”을 참조하세요.


{% endnote %} {% endif %}

{% data reusables.actions.self-hosted-runner-networking-to-dotcom %}

{% data reusables.actions.enterprise-limit-actions-use %}

또는 엔터프라이즈에서 허용되는 작업을 더 엄격하게 제어하거나 {% data variables.product.prodname_dotcom_the_website %}에 대한 아웃바운드 연결을 허용하지 않으려면 `actions-sync` 도구를 사용하여 작업을 수동으로 다운로드하여 엔터프라이즈 인스턴스로 동기화할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom_the_website %}에서 수동으로 작업 동기화](/enterprise/admin/github-actions/manually-syncing-actions-from-githubcom)”를 참조하세요.
