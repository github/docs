---
title: 사전 수신 후크
intro: '사전 수신 후크 API를 사용하면 사전 수신 후크를 만들고, 나열하고, 업데이트하고, 삭제할 수 있습니다.'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: cfda2bb88d276b8d0bd34888475eb9c32a5a4872
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098886'
---
*[인증된](/rest/overview/resources-in-the-rest-api#authentication) 사이트 관리자만 사용할 수 있습니다.* 일반 사용자가 액세스하려고 하면 `404` 응답을 수신하게 됩니다.

{% data reusables.user-settings.enterprise-admin-api-classic-pat-only %}

### 개체 특성

#### 사전 수신 후크

| Name                             | 형식      | 설명                                                     |
|----------------------------------|-----------|-----------------------------------------------------------------|
| `name`                           | `string`  | 후크의 이름입니다.                                           |
| `script`                         | `string`  | 후크가 실행하는 스크립트입니다.                                  |
| `script_repository`              | `object`  | 스크립트가 보관된 GitHub 리포지토리입니다.                 |
| `environment`                    | `object`  | 스크립트가 실행되는 사전 수신 환경입니다.       |
| `enforcement`                    | `string`  | 이 후크의 적용 상태입니다.                         |
| `allow_downstream_configuration` | `boolean` | 조직 또는 리포지토리 수준에서 적용을 재정의할 수 있는지 여부입니다. |

적용 가능한 값은 `enabled`, `disabled` 및 `testing`입니다. `disabled`는 사전 수신 후크가 실행되지 않음을 나타냅니다. `enabled`는 0이 아닌 상태가 되는 모든 푸시를 실행하고 거부함을 나타냅니다. `testing`은 스크립트가 실행되지만 푸시가 거부되지 않음을 의미합니다.
