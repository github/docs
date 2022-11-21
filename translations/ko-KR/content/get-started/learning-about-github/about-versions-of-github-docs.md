---
title: GitHub Docs 버전 정보
intro: 현재 사용 중인 {% data variables.product.company_short %} 제품을 반영하는 설명서를 읽을 수 있습니다.
versions: '*'
shortTitle: Docs versions
ms.openlocfilehash: 656cb53b79409329299d63e9f77b14a56b809f6c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146681297"
---
## {% data variables.product.prodname_docs %} 버전 정보

{% data variables.product.company_short %}는 코드를 저장하고 협업하기 위한 다양한 제품을 제공합니다. 사용하는 제품에 따라 사용 가능한 기능이 결정됩니다. 자세한 내용은 “[{% data variables.product.company_short %} 제품](/get-started/learning-about-github/githubs-products)”을 참조하세요.

{% data variables.product.prodname_docs %} 웹 사이트에서는 모든 {% data variables.product.company_short %} 제품에 대한 설명서를 제공합니다. 읽고 있는 콘텐츠가 둘 이상의 제품에 적용되는 경우 현재 사용 중인 제품을 선택하여 관련된 설명서의 버전을 선택할 수 있습니다.

{% data variables.product.prodname_docs %} 페이지 맨 위에서 드롭다운 메뉴를 선택하고 제품을 클릭합니다. 브라우저 창이 전체 탐색 모음을 표시할 만큼 넓지 않은 경우 먼저 {% octicon "three-bars" aria-label="The three bars icon" %}을 클릭해야 할 수 있습니다.

![보려는 {% data variables.product.prodname_docs %} 버전을 선택하기 위한 드롭다운 메뉴 스크린샷](/assets/images/help/docs/version-picker.png)

{% note %}

**참고**: 이제 버전을 변경할 수 있습니다. 이 문서의 {% ifversion ghes %}{% else %}{% endif %}{% ifversion fpt %}Free, Pro, Team{% else %}{% data variables.product.product_name %}{% endif %} 버전을 보고 있습니다.

{% endnote %}

## 사용하는 {% data variables.product.company_short %} 제품 확인

브라우저의 주소 표시줄에 있는 URL과 {% data variables.product.prodname_dotcom %} 웹 사이트의 제목을 검토하여 현재 사용 중인 {% data variables.product.company_short %} 제품을 확인할 수 있습니다.

둘 이상의 {% data variables.product.company_short %} 제품을 사용할 수 있습니다. 예를 들어 {% data variables.product.prodname_dotcom_the_website %}에서 오픈 소스에 기여하고 고용주의 {% data variables.product.prodname_ghe_server %} 인스턴스에서 코드를 협업할 수 있습니다. 현재 해결하려는 문제에 따라 동일한 문서의 각 버전을 서로 다른 시간에 확인해야 할 수도 있습니다.

### {% data variables.product.prodname_dotcom_the_website %} 플랜 또는 {% data variables.product.prodname_ghe_cloud %}

https://github.com 에서 {% data variables.product.prodname_dotcom %}에 액세스하는 경우 Free, Pro 또는 Team 플랜의 기능을 사용하거나 {% data variables.product.prodname_ghe_cloud %}를 사용하는 것입니다.

넓은 브라우저 창에서 머리글 왼쪽의 {% data variables.product.company_short %} 로고 바로 뒤에 아무 텍스트도 표시되지 않습니다.

![브라우저의 주소 표시줄 및 {% data variables.product.prodname_dotcom_the_website %} 머리글 스크린샷](/assets/images/help/docs/header-dotcom.png)

{% data variables.product.prodname_dotcom_the_website %}에서 각 계정에는 고유한 플랜이 있습니다. 각 개인 계정에는 특정 기능에 대한 액세스를 제공하는 관련 플랜이 있으며 조직마다 다른 플랜이 연결되어 있습니다. 개인 계정이 {% data variables.product.prodname_dotcom_the_website %}에서 조직의 맴버인 경우 개인 계정이 소유한 리소스를 사용할 때와 해당 조직이 소유한 리소스를 사용할 때 서로 다른 기능에 액세스할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 계정 유형](/get-started/learning-about-github/types-of-github-accounts)”을 참조하세요.

조직에서 {% data variables.product.prodname_ghe_cloud %}를 사용하는지 여부를 모르겠으면 조직 소유자에게 문의하세요. 자세한 내용은 “[조직의 사용자 역할 보기](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization)”를 참조하세요.

### {% data variables.product.prodname_ghe_server %}

https://github.com , `https://*.githubenterprise.com`, `https://*.github.us` 또는 `https://*.ghe.com` 이외의 URL에서 {% data variables.product.prodname_dotcom %}에 액세스하는 경우 {% data variables.product.prodname_ghe_server %}를 사용하는 것입니다. 예를 들어 `https://github.YOUR-COMPANY-NAME.com`에서 {% data variables.product.prodname_ghe_server %}에 액세스할 수 있습니다. 관리자는 “{% data variables.product.company_short %}”라는 단어가 포함되지 않은 URL을 선택할 수 있습니다.

넓은 브라우저 창에서 머리글 왼쪽의 {% data variables.product.company_short %} 로고 바로 뒤에 “Enterprise” 단어가 표시됩니다.

![브라우저의 주소 표시줄 및 {% data variables.product.prodname_ghe_server %} 머리글 스크린샷](/assets/images/help/docs/header-ghes.png)

페이지의 바닥글에서 사용 중인 {% data variables.product.prodname_ghe_server %}의 버전을 볼 수 있습니다.

![버전이 강조 표시된 {% data variables.product.prodname_ghe_server %} 바닥글의 스크린샷](/assets/images/help/docs/ghes-version-in-footer.png)

### {% data variables.product.prodname_ghe_managed %}

`https://*.githubenterprise.com`, `https://*.github.us` 또는 `https://*.ghe.com`에서 {% data variables.product.prodname_dotcom %}에 액세스하는 경우 {% data variables.product.prodname_ghe_managed %}를 사용하는 것입니다.

넓은 브라우저 창에서 머리글의 {% data variables.product.company_short %} 로고 바로 뒤에 “{% data variables.product.prodname_ghe_managed %}” 단어가 표시됩니다.

![브라우저의 주소 표시줄 및 {% data variables.product.prodname_ghe_managed %} 머리글](/assets/images/help/docs/header-ghae.png)
