---
title: 리포지토리 사전 수신 후크
intro: 리포지토리 사전 수신 후크 API를 사용하면 리포지토리에서 사용할 수 있는 사전 수신 후크의 적용을 보고 수정할 수 있습니다.
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 883a515bd27f2e16977318086d735196e43d2abb
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098885'
---
{% data reusables.user-settings.enterprise-admin-api-classic-pat-only %}

### 개체 특성

| Name                | 형식     | 설명                                               |
|---------------------|----------|-----------------------------------------------------------|
| `name`              | `string` | 후크의 이름입니다.                                     |
| `enforcement`       | `string` | 이 리포지토리의 후크 적용 상태입니다. |
| `configuration_url` | `string` | 적용이 설정된 엔드포인트의 URL입니다.            |

적용 가능한 값은 `enabled`, `disabled` 및 `testing`입니다. `disabled`는 사전 수신 후크가 실행되지 않음을 나타냅니다. `enabled`는 0이 아닌 상태가 되는 모든 푸시를 실행하고 거부함을 나타냅니다. `testing`은 스크립트가 실행되지만 푸시가 거부되지 않음을 의미합니다.

`configuration_url`은 이 리포지토리에 대한 링크일 수 있으며, 조직 소유자 또는 전역 구성입니다. `configuration_url`의 엔드포인트에 대한 액세스 권한 부여는 소유자 또는 사이트 관리자 수준에서 결정됩니다.
