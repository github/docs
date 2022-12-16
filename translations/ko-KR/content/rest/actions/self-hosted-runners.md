---
title: 자체 호스팅 실행기
intro: '자체 호스팅 실행기 API를 사용하면 자체 호스팅 실행기를 등록하고, 보고, 삭제할 수 있습니다.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 5fb3b281aab7120adeef45728ea0e4a16ae389a7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064380'
---
## 자체 호스팅 실행기 API 정보

자체 호스팅 실행기 API를 사용하면 자체 호스팅 실행기를 등록하고, 보고, 삭제할 수 있습니다. {% data reusables.actions.about-self-hosted-runners %} 자세한 내용은 “[자체 실행기 호스트](/actions/hosting-your-own-runners)”를 참조하세요.

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %}에는 `administration` 조직에 대한 리포지토리 `organization_self_hosted_runners` 사용 권한이 있어야 합니다. 인증된 사용자는 리포지토리 또는 조직에 대한 관리자 액세스 권한이 있어야 하며 엔터프라이즈에서 이 API를 사용하려면 `manage_runners:enterprise` 범위가 있어야 합니다.
