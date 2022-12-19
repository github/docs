---
title: 엔터프라이즈에 대한 참조 페이지 정책 구성
shortTitle: Configure referrer policy
intro: '원본 간 요청에 대한 정책을 구성하여 {% 데이터 variables.location.product_location %}의 개인 정보를 늘릴 수 있습니다.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Networking
  - Privacy
  - Security
ms.openlocfilehash: 7e767d8d131428627ee4fd5c2842d278471b4720
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098316'
---
## 엔터프라이즈에 대한 참조 페이지 정책 정보

참조자 정책은 누군가가 {% 데이터 variables.location.product_location %}에서 외부 사이트로의 링크를 방문할 때 {% 데이터 variables.product.product_name %}이(가) HTTP 헤더에서 전송하는 정보를 제어합니다.

기본적으로 {% 데이터 variables.location.product_location %}의 사용자가 파일 또는 인스턴스에 대한 메모에서 다른 사이트에 대한 링크를 방문하면 요청에는 인스턴스의 호스트 이름이 헤더 내 `Referer` 의 일반 텍스트로 포함됩니다. 링크가 외부 웹 사이트로 연결되는 경우 웹 사이트의 소유자는 요청 또는 로그 파일에서 인스턴스의 호스트 이름을 읽을 수 있습니다.

사용자가 인스턴스에서 링크를 방문할 때 {% data variables.product.product_name %}에서 전송하는 정보를 제어할 수 있습니다.

## `same-origin` 참조 페이지 정책 사용 설정

참조자 정책을 사용하도록 설정 `same-origin` 하여 최신 브라우저에 요청에서 외부 웹 사이트로의 {% 데이터 variables.location.product_location %}의 호스트 이름을 제외하도록 지시할 수 있습니다. 이 설정은 인스턴스의 웹 인터페이스에 있는 모든 링크에 적용됩니다. 기본적으로 {% data variables.product.product_name %}는 `origin-when-cross-origin` 및 `strict-origin-when-cross-origin` 참조 페이지 정책을 사용하며, 이는 인스턴스의 호스트 이름이 외부 웹 사이트에 대한 HTTP 및 HTTPS 요청에 표시된다는 의미입니다.

{% note %}

**참고**: 참조 페이지 정책을 `same-origin`으로 변경하면 요청에 대한 HTTP 헤더의 호스트 이름이 예상되는 외부 사이트에 영향을 줄 수 있습니다.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. “사용자 에이전트 참조 페이지 정책”에서 **모든 조직에 대해 동일한 원본 참조 페이지 정책 사용 설정** 을 선택합니다.
  ![동일한 원본 페이지 참조 페이지 정책을 사용 설정하기 위한 확인란](/assets/images/enterprise/settings/referrer-policy-checkbox.png)
1. **저장** 을 클릭합니다.
  ![동일한 원본 페이지 참조 페이지 정책을 사용 설정하기 위한 저장 단추](/assets/images/enterprise/settings/referrer-policy-save-button.png)
