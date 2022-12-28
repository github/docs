---
title: GitHub IP 주소 정보
intro: '{% data variables.product.product_name %}는 API를 사용하여 이용 가능한 여러 IP 주소 범위의 애플리케이션에 사용됩니다.'
redirect_from:
  - /articles/what-ip-addresses-does-github-use-that-i-should-whitelist
  - /categories/73/articles
  - /categories/administration
  - /articles/github-s-ip-addresses
  - /articles/about-github-s-ip-addresses
  - /articles/about-githubs-ip-addresses
  - /github/authenticating-to-github/about-githubs-ip-addresses
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/about-githubs-ip-addresses
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: GitHub's IP addresses
ms.openlocfilehash: ab598fa408512a43ab07c069119480b5ae03278e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145119983'
---
[meta](https://api.github.com/meta) API 엔드포인트에서 {% data variables.product.prodname_dotcom %} IP 주소 목록을 검색할 수 있습니다. 자세한 내용은 “[Meta](/rest/reference/meta)”를 참조하세요.

{% note %}

**참고:** Meta API에서 반환된 {% data variables.product.prodname_dotcom %} IP 주소 목록은 전체 목록이 아닙니다. 예를 들어 일부 {% data variables.product.prodname_dotcom %} 서비스의 IP 주소는 나열되지 않을 수 있습니다(예: LFS 또는 {% data variables.product.prodname_registry %}).

{% endnote %}

IP 주소는 {% data variables.product.prodname_dotcom %}에서 콘텐츠를 제공하고, 웹후크를 전달하고, 호스트된 {% data variables.product.prodname_actions %} 빌드를 수행하는 데 사용됩니다.

범위는 [CIDR 표기법](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)으로 표시됩니다. 온라인 변환 도구를 사용하여 CIDR 표기법에서 IP 주소 범위로 변환할 수 있습니다(예: [CIDR-IPv4 변환 사이트](https://www.ipaddressguide.com/cidr)).

IP 주소는 수시로 변경됩니다. IP 주소로 허용하는 것은 권장되지 않지만, IP 범위를 사용하는 경우 API를 정기적으로 모니터링하는 것이 좋습니다.

애플리케이션이 작동하려면 `github.com`의 IP 범위를 통해 TCP 포트 22, 80, 443, 9418을 허용해야 합니다.

## 추가 참고 자료

- “[연결 문제 해결](/articles/troubleshooting-connectivity-problems)”
