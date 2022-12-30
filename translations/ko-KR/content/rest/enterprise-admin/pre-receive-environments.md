---
title: 사전 수신 환경
intro: '사전 수신 환경 API를 사용하면 사전 수신 후크 환경을 만들고, 나열하고, 업데이트하고, 삭제할 수 있습니다.'
versions:
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: e6362dc3917981c11c07f68465bccee93d5e0e11
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098894'
---
*[인증된](/rest/overview/resources-in-the-rest-api#authentication) 사이트 관리자만 사용할 수 있습니다.* 일반 사용자가 액세스하려고 하면 `404` 응답을 수신하게 됩니다.

{% data reusables.user-settings.enterprise-admin-api-classic-pat-only %}

### 개체 특성

#### 사전 수신 환경

| Name                  | 형식      | 설명                                                                |
|-----------------------|-----------|----------------------------------------------------------------------------|
| `name`                | `string`  | UI에 표시되는 환경 이름입니다.                        |
| `image_url`           | `string`  | 다운로드하고 추출할 tarball의 URL입니다.                  |
| `default_environment` | `boolean` | {% data variables.product.product_name %}와 함께 제공되는 기본 환경인지 여부입니다. |
| `download`            | `object`  | 이 환경의 다운로드 상태입니다.                                        |
| `hooks_count`         | `integer` | 이 환경을 사용하는 사전 수신 후크 수입니다.                 |

#### 사전 수신 환경 다운로드

| Name            | 형식     | 설명                                             |
|-----------------|----------|---------------------------------------------------------|
| `state`         | `string` | 가장 최근 다운로드의 상태입니다.                  |
| `downloaded_at` | `string` | 가장 최근 다운로드가 시작된 시간입니다.         |
| `message`       | `string` | 오류 발생 시 생성된 오류 메시지입니다. |

`state`의 가능한 값은 `not_started`, `in_progress`, `success`, `failed`입니다.
