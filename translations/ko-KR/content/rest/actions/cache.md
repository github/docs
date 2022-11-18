---
title: GitHub Actions 캐시
allowTitleToDifferFromFilename: true
shortTitle: Cache
intro: '{% data variables.product.prodname_actions %} 캐시 API를 사용하면 리포지토리에 대한 {% data variables.product.prodname_actions %} 캐시를 쿼리하고 관리할 수 있습니다.'
topics:
  - API
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.4'
ms.openlocfilehash: faaa0f8c0f182f2693039c017e8898ca9ea878ba
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147430399'
---
## 캐시 API 정보

{% data variables.product.prodname_actions %} 캐시 API를 사용하면 리포지토리에 대한 {% data variables.product.prodname_actions %} 캐시를 쿼리하고 관리할 수 있습니다. {% ifversion actions-cache-management %} {% data variables.product.prodname_cli %} 확장을 설치하여 명령줄에서 캐시를 관리할 수도 있습니다. {% endif %}자세한 내용은 "[워크플로 속도를 높이기 위한 종속성 캐싱](/actions/advanced-guides/caching-dependencies-to-speed-up-workflows#managing-caches)"을 참조하세요.
