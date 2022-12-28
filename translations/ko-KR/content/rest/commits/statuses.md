---
title: 커밋 상태
intro: '커밋 상태 API를 사용하면 외부 서비스가 커밋을 상태로 표시할 수 있으며, 이는 해당 커밋과 관련된 끌어오기 요청에 반영됩니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 4c75b4817ecddad0e91460d7d12eddabc634d588
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882297'
---
## 커밋 상태 API 정보

커밋 상태 API를 사용하면 외부 서비스가 커밋을 `error`, `failure`, `pending` 또는 `success` 상태로 표시할 수 있으며, 이는 해당 커밋과 관련된 끌어오기 요청에 반영됩니다. 상태에는 선택 사항인 `description` 및 `target_url`도 포함될 수 있으며 GitHub UI에서 상태를 더 유용하게 만들 수 있으므로 제공하는 것이 좋습니다.

예를 들어 연속 통합 서비스에서 커밋을 상태를 사용하여 빌드를 통과 또는 실패로 표시하는 것이 일반적인 용도입니다.  `target_url`은 빌드 출력의 전체 URL이고 `description`은 빌드에서 발생한 일에 대한 상위 수준 요약입니다.

상태에는 해당 상태를 제공하는 서비스를 나타내는 `context`가 포함될 수 있습니다. 예를 들어 컨텍스트가 `ci`인 연속 통합 서비스 푸시 상태와 컨텍스트가 `security`인 보안 감사 도구 푸시 상태가 있을 수 있습니다.  그런 다음 [특정 참조에 대한 결합 상태 가져오기](/rest/reference/commits#get-the-combined-status-for-a-specific-reference)를 사용하여 커밋의 전체 상태를 검색할 수 있습니다.

`repo:status` [OAuth 범위](/developers/apps/scopes-for-oauth-apps)는 리포지토리 코드에 대한 액세스 권한도 부여하지 **않은** 상태에 대한 대상 액세스 권한을 부여하는 반면 `repo` 범위는 상태뿐 아니라 코드에 대한 권한도 부여합니다.

GitHub 앱을 개발 중이고 외부 서비스에 대한 더 자세한 정보를 제공하려는 경우 [검사 API](/rest/reference/checks)를 사용할 수 있습니다.
