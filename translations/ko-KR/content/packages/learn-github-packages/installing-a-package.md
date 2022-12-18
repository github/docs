---
title: 패키지 설치
intro: '{% data variables.product.prodname_registry %}에서 패키지를 설치하고 자체 프로젝트에서 패키지를 종속성으로 사용할 수 있습니다.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/installing-a-package
  - /packages/publishing-and-managing-packages/installing-a-package
  - /packages/manage-packages/installing-a-package
permissions: You can install any package that you have permission to view.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: a9e472f2bd995e3af92f37db587be4101cd03443
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099237'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## 패키지 설치 정보

{% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}에서 검색하여 자체 프로젝트에 설치할 수 있는 {% 데이터 variables.product.prodname_registry %}에서 패키지를 찾을 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_registry %}에서 패키지 검색](/search-github/searching-on-github/searching-for-packages)”을 참조하세요.

패키지를 찾은 후 패키지 페이지에서 패키지에 대한 설명과 설치 및 사용 지침을 읽을 수 있습니다.

## 패키지 설치

{% data variables.product.prodname_registry %}에서 동일한 일반 지침에 따라 {% ifversion fpt or ghae or ghec %}지원되는 패키지 클라이언트{% else %}인스턴스에 사용된 패키지 유형{% endif %} 사용을 통해 패키지를 설치할 수 있습니다.

1. 패키지 클라이언트에 대한 지침을 사용하여 {% data variables.product.prodname_registry %}에 인증합니다. 자세한 내용은 “[GitHub Packages 인증](/packages/learn-github-packages/introduction-to-github-packages#authenticating-to-github-packages)”을 참조하세요.
2. 패키지 클라이언트에 대한 지침을 사용하여 패키지를 설치합니다.

패키지 클라이언트와 관련된 지침은 “[{% data variables.product.prodname_registry %} 레지스트리 작업](/packages/working-with-a-github-packages-registry)”을 참조하세요.
