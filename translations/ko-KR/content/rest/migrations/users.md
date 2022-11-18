---
title: 사용자 마이그레이션
allowTitleToDifferFromFilename: true
shortTitle: Users
intro: ''
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 500f1c4d73dc3bab613641072387e42d5f8894d4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145125140'
---
## 사용자 마이그레이션 API 정보

사용자 마이그레이션 API는 인증된 계정 소유자만 사용할 수 있습니다. 자세한 내용은 "[기타 인증 방법](/rest/overview/other-authentication-methods)"을 참조하세요.

{% data variables.migrations.user_migrations_intro %} 다운로드할 수 있는 마이그레이션 데이터 목록은 "[사용자 마이그레이션 보관 다운로드](#download-a-user-migration-archive)"를 참조하세요.

보관을 다운로드하려면 먼저 사용자 마이그레이션을 시작해야 합니다. 마이그레이션 상태가 `exported`가 되면 마이그레이션을 다운로드할 수 있습니다.

마이그레이션 보관을 만든 후에는 7일 동안 다운로드할 수 있습니다. 하지만 원하는 경우 사용자 마이그레이션 보관을 더 빨리 삭제할 수 있습니다. 마이그레이션이 `exported`인 경우 리포지토리의 잠금을 해제하여 리토지토리 사용을 다시 시작하거나 더 이상 원본 데이터가 필요하지 않은 경우 리포지토리를 삭제할 수 있습니다.
