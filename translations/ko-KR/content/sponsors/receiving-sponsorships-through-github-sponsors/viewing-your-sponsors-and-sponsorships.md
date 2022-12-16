---
title: 스폰서 및 스폰서쉽 보기
intro: 스폰서 및 스폰서쉽에 대한 자세한 정보와 분석을 보고 내보낼 수 있습니다.
redirect_from:
  - /articles/viewing-your-sponsors-and-sponsorships
  - /github/supporting-the-open-source-community-with-github-sponsors/viewing-your-sponsors-and-sponsorships
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Open Source
  - Analytics
shortTitle: View sponsors & sponsorships
ms.openlocfilehash: 33c45171d28b77c302a04f734342b05beb04be1e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145140192'
---
## 스폰서 및 스폰서쉽 정보

현재 및 과거 스폰서쉽, 스폰서로부터 받은 지불, 스폰서쉽에 대한 취소 및 스폰서 계층 변경과 같은 이벤트에 대한 분석을 볼 수 있습니다. 새 스폰서쉽, 스폰서쉽 변경, 취소된 스폰서쉽 등의 작업을 볼 수도 있습니다. 작업 목록을 날짜별로 필터링할 수 있습니다. CSV 또는 JSON 형식으로 보고 있는 계정에 대한 스폰서쉽 데이터를 내보낼 수도 있습니다.

## 트랜잭션 메타데이터 정보

스폰서쉽의 원본 위치를 추적하려면 {% data variables.product.prodname_sponsors %} 프로필 또는 체크 아웃 페이지에 대한 메타데이터와 함께 사용자 지정 URL을 사용할 수 있습니다. 메타데이터는 메타데이터 열의 트랜잭션 내보내기에 포함됩니다. 트랜잭션 데이터를 내보내는 방법에 대한 자세한 내용은 “[스폰서쉽 데이터 내보내기](#exporting-your-sponsorship-data)”를 참조하세요.

메타데이터는 `key=value` 형식을 사용해야 하며 이러한 URL의 끝에 추가할 수 있습니다.

- 스폰서 계정 프로필: `https://github.com/sponsors/{account}`
- 스폰서쉽 체크 아웃: `https://github.com/sponsors/{account}/sponsorships`

잠재적 스폰서가 후원할 계정을 전환하고, 월별 또는 일회성 지불을 선택하고, 다른 계층을 선택하면 메타데이터가 URL에 유지됩니다.

### 구문 요구 사항

메타데이터는 다음 요구 사항을 충족해야 합니다. 이는 전달된 다른 URL 매개 변수에는 적용되지 않습니다.

- 키는 `metadata_`를 접두사로 지정해야 합니다(예: `metadata_campaign`). 트랜잭션 내보내기에서 `metadata_` 접두사는 키에서 제거됩니다.
- 키와 값은 영숫자 값, 대시 또는 밑줄만 포함해야 합니다. 허용되지 않는 문자가 키 또는 값으로 전달되면 404 오류가 표시됩니다.
- 공백은 허용되지 않습니다.
- 요청당 최대 **10** 개의 키-값 쌍이 허용됩니다. 더 많은 항목이 전달되면 처음 10개만 저장됩니다.
- 키당 최대 **25** 자가 허용됩니다. 이보다 많은 문자가 전달되면 처음 25자만 저장됩니다.
- 값 당 최대 **100** 자가 허용됩니다. 이보다 많은 문자가 전달되면 처음 100자만 저장됩니다.

예를 들어 `https://github.com/sponsors/{account}?metadata_campaign=myblog`를 사용하여 블로그에서 시작된 스폰서쉽을 추적할 수 있습니다. `metadata_campaign`은 키이며 `myblog`는 값입니다. 트랜잭션 내보내기의 메타데이터 열에서 키는 `campaign`으로 나열됩니다.

## 스폰서 및 스폰서쉽 보기

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
1. 필요에 따라 계층별로 스폰서를 필터링하려면 **필터** 드롭다운 메뉴를 사용하고, **활성 계층** 또는 **사용 중지된 계층** 을 클릭하고, 계층을 선택합니다.
  ![계층별로 필터링할 드롭다운 메뉴](/assets/images/help/sponsors/filter-drop-down.png)

## 최근 스폰서쉽 활동 보기

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.your-sponsors-tab %}

## 스폰서쉽 데이터 내보내기

매월 스폰서쉽 트랜잭션을 내보낼 수 있습니다. {% data variables.product.company_short %}은(는) 선택한 달의 모든 스폰서에 대한 트랜잭션 데이터가 포함된 메일을 보냅니다. 내보내기가 완료되면 다른 달의 데이터를 내보낼 수 있습니다. 스폰서 계정에 대해 시간당 최대 10개의 데이터 세트를 내보낼 수 있습니다.

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.your-sponsors-tab %}
1. 오른쪽 위에서 {% octicon "download" aria-label="The download icon" %} **내보내기** 를 클릭합니다.
  ![내보내기 단추](/assets/images/help/sponsors/export-all.png)
1. 내보낼 데이터의 시간 프레임 및 형식을 선택한 다음, **내보내기 시작** 을 클릭합니다.
  ![데이터 내보내기 옵션](/assets/images/help/sponsors/export-your-sponsors.png)
