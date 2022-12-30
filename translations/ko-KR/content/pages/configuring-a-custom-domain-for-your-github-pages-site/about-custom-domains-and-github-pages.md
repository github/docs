---
title: 사용자 지정 도메인 및 GitHub Pages 정보
intro: '{% data variables.product.prodname_pages %}는 사용자 지정 도메인을 사용하거나 사이트 URL의 루트를 기본값(예: `octocat.github.io`)에서 사용자가 소유한 도메인으로 변경할 수 있도록 지원합니다.'
redirect_from:
  - /articles/about-custom-domains-for-github-pages-sites
  - /articles/about-supported-custom-domains
  - /articles/custom-domain-redirects-for-your-github-pages-site
  - /articles/about-custom-domains-and-github-pages
  - /github/working-with-github-pages/about-custom-domains-and-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Custom domains in GitHub Pages
ms.openlocfilehash: 4b71f14d364aabc0358e44a1651c872ca909c136
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099230'
---
## 지원되는 사용자 지정 도메인

{% data variables.product.prodname_pages %}는 하위 도메인과 apex 도메인이라는 두 가지 유형의 도메인에서 작동합니다. 지원되지 않는 사용자 지정 도메인 목록은 “[사용자 지정 도메인 및 {% data variables.product.prodname_pages %} 문제 해결](/articles/troubleshooting-custom-domains-and-github-pages/#custom-domain-names-that-are-unsupported)”을 참조하세요.

| 지원되는 사용자 지정 도메인 유형 | 예제 |
|---|---|
| `www` 하위 도메인 | `www.example.com` |
| 사용자 지정 하위 도메인 | `blog.example.com` |
| Apex 도메인        | `example.com` |

사이트에 대한 apex 및 `www` 하위 도메인 구성 중 하나 또는 둘 다를 설정할 수 있습니다. apex 도메인에 대한 자세한 내용은 “[{% data variables.product.prodname_pages %} 사이트에 apex 도메인 사용](#using-an-apex-domain-for-your-github-pages-site)”을 참조하세요.

apex 도메인을 사용하는 경우에도 항상 `www` 하위 도메인을 사용하는 것이 좋습니다. apex 도메인을 사용하여 새 사이트를 만드는 동안 사이트의 콘텐츠를 제공할 때 사용할 `www` 하위 도메인의 보안을 자동으로 시도하지만 `www` 하위 도메인을 사용하려면 DNS를 변경해야 합니다. `www` 하위 도메인을 구성하는 경우 연결된 apex 도메인의 보안을 자동으로 시도합니다. 자세한 내용은 “[{% data variables.product.prodname_pages %} 사이트의 사용자 지정 도메인 관리](/articles/managing-a-custom-domain-for-your-github-pages-site)”를 참조하세요.

사용자 또는 조직 사이트에 대한 사용자 지정 도메인을 구성한 후 사용자 지정 도메인은 사용자 지정 도메인이 구성되지 않은 계정에서 소유한 모든 프로젝트 사이트 URL의 `<user>.github.io` 또는 `<organization>.github.io` 부분을 대체합니다. 예를 들어 사용자 사이트에 대한 사용자 지정 도메인이 `www.octocat.com`이고 `octo-project`라는 리포지토리에서 게시된 사용자 지정 도메인이 구성되지 않은 프로젝트가 있는 경우 `www.octocat.com/octo-project`에서 해당 리포지토리에 대한 {% data variables.product.prodname_pages %} 사이트를 사용할 수 있습니다.
각 사이트 유형 및 사용자 지정 도메인 처리에 대한 자세한 내용은 "[{% 데이터 variables.product.prodname_pages %} 사이트 유형](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)"을 참조하세요.

## {% data variables.product.prodname_pages %} 사이트에 하위 도메인 사용

하위 도메인은 URL에서 루트 도메인 이전 부분입니다. 하위 도메인을 `www` 또는 `blog.example.com`와 같이 사이트의 고유한 섹션으로 구성할 수 있습니다.

하위 도메인은 DNS 공급자를 통해 `CNAME` 레코드로 구성됩니다. 자세한 내용은 “[{% data variables.product.prodname_pages %} 사이트의 사용자 지정 도메인 관리](/articles/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)”를 참조하세요.

### `www` 하위 도메인

`www` 하위 도메인은 가장 일반적으로 사용되는 하위 도메인 유형입니다. 예를 들어 `www.example.com`에는 `www` 하위 도메인이 포함됩니다.

`www` 하위 도메인은 {% data variables.product.product_name %}의 서버 IP 주소 변경의 영향을 받지 않으므로 `www` 하위 도메인은 가장 안정적인 유형의 사용자 지정 도메인입니다.

### 사용자 지정 하위 도메인

사용자 지정 하위 도메인은 표준 `www` 변형을 사용하지 않는 하위 도메인 유형입니다. 사용자 지정 하위 도메인은 사이트에서 두 개의 개별 섹션을 원하는 경우에 주로 사용됩니다. 예를 들어 호출된 `blog.example.com` 사이트를 만들고 해당 섹션을 `www.example.com`과 별도로 사용자 지정할 수 있습니다.

## {% data variables.product.prodname_pages %} 사이트에 apex 도메인 사용

apex 도메인은 `example.com`과 같은 하위 도메인을 포함하지 않는 사용자 지정 도메인입니다. apex 도메인은 베이스, bare, naked, 루트 apex 또는 영역 apex 도메인이라고도 합니다.

apex 도메인은 DNS 공급자를 통해 `A`, `ALIAS`, 또는 `ANAME` 레코드로 구성됩니다. 자세한 내용은 “[{% data variables.product.prodname_pages %} 사이트의 사용자 지정 도메인 관리](/articles/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)”를 참조하세요.

{% data reusables.pages.www-and-apex-domain-recommendation %} 자세한 내용은 “[{% data variables.product.prodname_pages %} 사이트의 사용자 지정 도메인 관리](/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site/#configuring-a-subdomain)”를 참조하세요.

## {% data variables.product.prodname_pages %} 사이트의 사용자 지정 도메인 보호

{% data reusables.pages.secure-your-domain %} 자세한 내용은 “[{% data variables.product.prodname_pages %}의 사용자 지정 도메인 확인](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)” 및 “[{% data variables.product.prodname_pages %} 사이트의 사용자 지정 도메인 관리](/articles/managing-a-custom-domain-for-your-github-pages-site)”를 참조하세요.

사이트가 자동으로 비활성화될 수 있는 몇 가지 이유가 있습니다.

- {% data variables.product.prodname_pro %}에서 {% data variables.product.prodname_free_user %}로 다운그레이드하는 경우 현재 계정의 프라이빗 리포지토리에서 게시된 {% data variables.product.prodname_pages %} 사이트는 게시되지 않습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 청구 플랜 다운그레이드](/articles/downgrading-your-github-billing-plan)”를 참조하세요.
- 프라이빗 리포지토리를 {% data variables.product.prodname_free_user %}를 사용하는 개인 계정으로 전송하는 경우 리포지토리는 {% data variables.product.prodname_pages %} 기능에 대한 액세스 권한을 잃게 되며 현재 게시된 {% data variables.product.prodname_pages %} 사이트는 게시되지 않습니다. 자세한 내용은 “[리포지토리 전송](/articles/transferring-a-repository)”을 참조하세요.

## 추가 참고 자료

- “[사용자 지정 도메인 및 {% data variables.product.prodname_pages %}의 문제 해결](/articles/troubleshooting-custom-domains-and-github-pages)”을 참조하세요.
