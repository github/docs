---
title: 패키지 게시
intro: '패키지를 {% data variables.product.prodname_registry %}에 게시하여 다른 사용자가 패키지를 다운로드하고 다시 사용하도록 할 수 있습니다.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/publishing-a-package
  - /packages/publishing-and-managing-packages/publishing-a-package
permissions: Anyone with write permissions for a repository can publish a package to that repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: c6bd2aa72340bc2817b7d9c1bf88003ff6428550
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099318'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## 게시된 패키지 정보

패키지 페이지에 설치 및 사용 지침과 같은 설명과 기타 세부 정보를 제공하여 사람들이 패키지를 이해하고 사용하도록 도울 수 있습니다. {% data variables.product.product_name %}는 게시 날짜, 다운로드 활동 및 최근 버전과 같은 각 버전에 대한 메타데이터를 제공합니다. 예제 패키지 페이지는 [@Codertocat/hello-world-npm](https://github.com/Codertocat/hello-world-npm/packages/10696?version=1.0.1)을 참조하세요.

{% data reusables.package_registry.public-or-private-packages %} 리포지토리를 둘 이상의 패키지에 연결할 수 있습니다. 혼동을 방지하려면 추가 정보 및 설명이 각 패키지에 대한 정보를 명확하게 제공해야 합니다.

{% ifversion fpt or ghec %} 패키지의 새 버전이 보안 취약성을 수정하는 경우 리포지토리에 보안 공지를 게시해야 합니다. {% data variables.product.prodname_dotcom %}는 게시된 각 보안 공지를 검토하고 이를 사용하여 영향을 받는 리포지토리에 {% data variables.product.prodname_dependabot_alerts %}를 보낼 수 있습니다. 자세한 내용은 “[GitHub 보안 공지 정보](/github/managing-security-vulnerabilities/about-github-security-advisories)”를 참조하세요.
{% endif %}

## 패키지 게시

{% data reusables.package_registry.packages-classic-pat-only %}

동일한 일반 지침에 따라 {% ifversion fpt or ghae or ghec %}지원되는 패키지 클라이언트{% else %}인스턴스에 사용된 패키지 유형{% endif %} 사용을 통해 {% data variables.product.prodname_registry %}에 패키지를 게시할 수 있습니다.

1. 수행하려는 작업에 대한 적절한 범위로 기존 {% 데이터 variables.product.pat_v1 %}을(를) 만들거나 사용합니다. 자세한 내용은 “[{% data variables.product.prodname_registry %}에 대한 권한 정보](/packages/learn-github-packages/about-permissions-for-github-packages)”를 참조하세요.
2. {% 데이터 variables.product.pat_v1 %} 및 패키지 클라이언트에 대한 지침을 사용하여 {% 데이터 variables.product.prodname_registry %}에 인증합니다.
3. 패키지 클라이언트에 대한 지침을 사용하여 패키지를 게시합니다.

패키지 클라이언트와 관련된 지침은 “[GitHub Packages 레지스트리 작업](/packages/working-with-a-github-packages-registry)”을 참조하세요.

패키지를 게시한 후 {% data variables.product.prodname_dotcom %}에서 패키지를 볼 수 있습니다. 자세한 내용은 “[패키지 보기](/packages/learn-github-packages/viewing-packages)”를 참조하세요.
