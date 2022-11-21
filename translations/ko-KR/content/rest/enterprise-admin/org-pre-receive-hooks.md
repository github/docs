---
title: 조직 사전 수신 후크
intro: 조직 사전 수신 후크 API를 사용하면 조직에서 사용할 수 있는 사전 수신 후크의 적용을 보고 수정할 수 있습니다.
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 48b6cc6321892ebbd0910cf883b84cbbc6548344
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098262'
---
{% data reusables.user-settings.enterprise-admin-api-classic-pat-only %}

### 개체 특성

| Name                             | 형식      | 설명                                               |
|----------------------------------|-----------|-----------------------------------------------------------|
| `name`                           | `string`  | 후크의 이름입니다.                                     |
| `enforcement`                    | `string`  | 이 리포지토리의 후크 적용 상태입니다. |
| `allow_downstream_configuration` | `boolean` | 리포지토리가 적용을 재정의할 수 있는지 여부입니다.            |
| `configuration_url`              | `string`  | 적용이 설정된 엔드포인트의 URL입니다.            |

적용 가능한 값은 `enabled`, `disabled` 및 `testing`입니다. `disabled`는 사전 수신 후크가 실행되지 않음을 나타냅니다. `enabled`는 0이 아닌 상태가 되는 모든 푸시를 실행하고 거부함을 나타냅니다. `testing`은 스크립트가 실행되지만 푸시가 거부되지 않음을 의미합니다.

`configuration_url`은 이 엔드포인트 또는 이 후크의 전역 구성에 대한 링크일 수 있습니다. 사이트 관리자만 전역 구성에 액세스할 수 있습니다.
