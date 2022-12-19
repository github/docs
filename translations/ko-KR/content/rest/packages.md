---
title: 패키지
intro: 'REST API를 사용하여 {% data variables.product.prodname_registry %}와 상호 작용합니다.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/packages
ms.openlocfilehash: a40709d8c51e445fb815c78eadbdb7886b5d60db
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192827'
---
## {% data variables.product.prodname_registry %} 정보

REST API를 사용하여 {% data variables.product.prodname_dotcom %} 리포지토리 및 조직의 패키지를 관리할 수 있습니다. 자세한 내용은 "[패키지 복원 및 삭제"를 참조하세요.](/packages/learn-github-packages/deleting-and-restoring-a-package)

REST API를 사용하여 {% data variables.product.prodname_registry %}을(를) 관리하려면 {% data variables.product.pat_v1 %}를 사용하여 인증해야 합니다.
  - 패키지 메타데이터에 액세스하려면 토큰에 `read:packages` 범위가 포함되어야 합니다.
  - 패키지 및 패키지 버전을 삭제하려면 토큰에 `read:packages` 및 `delete:packages` 범위가 포함되어야 합니다.
  - 패키지 및 패키지 버전을 복원하려면 토큰에 `read:packages` 및 `write:packages` 범위가 포함되어야 합니다.

패키지가 세분화된 권한을 지원하는 레지스트리에 있는 경우 토큰은 이 패키지에 액세스하거나 관리하기 위해 범위가 `repo` 필요하지 않습니다. 패키지가 리포지토리 범위 권한만 지원하는 레지스트리에 있는 경우 패키지가 {% data variables.product.prodname_dotcom %} 리포지토리에서 권한을 상속하므로 토큰에도 범위가 포함되어 `repo` 야 합니다. 리포지토리 범위 권한만 지원하는 레지스트리 목록은 "[{% data variables.product.prodname_registry %}에 대한 권한 정보"를 참조하세요](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages).

SSO를 사용하도록 설정된 조직의 리소스에 액세스하려면 {% data variables.product.pat_v1 %}에 대해 SSO를 사용하도록 설정해야 합니다. 자세한 내용은 [{% data variables.product.prodname_ghe_cloud %} 설명서의 "SAML Single Sign-On에 사용할 {% data variables.product.pat_generic %} 권한 부여](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %}"를 참조하세요. {% else %}." {% endif %}
