---
title: 쿼리 매개 변수를 사용하여 릴리스 양식 자동화
intro: 새 릴리스 양식을 사용자 지정 정보로 자동 채우기하여 릴리스를 빠르게 만들기 위해 릴리스 양식 페이지의 URL에 쿼리 매개 변수를 추가할 수 있습니다.
redirect_from:
  - /articles/automation-for-release-forms-with-query-parameters
  - /github/administering-a-repository/automation-for-release-forms-with-query-parameters
  - /github/administering-a-repository/releasing-projects-on-github/automation-for-release-forms-with-query-parameters
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Automate release forms
ms.openlocfilehash: 75c7fe4b79a6103060151742f1277861f23785c4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145193565'
---
쿼리 매개 변수는 {% data variables.product.prodname_dotcom %}의 검색 필터 결과, 이슈 템플릿 또는 릴리스 양식 페이지와 같은 특정 웹 페이지 보기를 공유하도록 사용자 지정할 수 있는 URL의 선택적 부분입니다. 사용자 고유의 쿼리 매개 변수를 만들려면 키 및 값 쌍과 일치해야 합니다.

해당하는 쿼리 매개 변수를 사용하려면 모든 작업에 대한 적절한 사용 권한이 있어야 합니다. 예를 들어 릴리스 양식을 미리 채우기 위해 릴리스를 만들 수 있는 권한이 있어야 합니다. 자세한 내용은 “[리포지토리에서 릴리스 관리](/github/administering-a-repository/managing-releases-in-a-repository)”를 참조하세요.

쿼리 매개 변수를 사용하여 잘못된 URL을 만들거나 적절한 사용 권한이 없는 경우 URL은 404 오류 페이지를 반환합니다.  

## 지원되는 쿼리 매개 변수

쿼리 매개 변수 | 예제
---  | ---
`tag` | `https://github.com/octo-org/octo-repo/releases/new?tag=v1.0.1`은 "v1.0.1"이라는 태그를 기준으로 릴리스를 만듭니다.
`target` | `https://github.com/octo-org/octo-repo/releases/new?target=release-1.0.1`은 "release-1.0.1" 분기에 대한 최신 커밋을 기준으로 릴리스를 만듭니다.
`title` | `https://github.com/octo-org/octo-repo/releases/new?tag=v1.0.1&title=octo-1.0.1`은 "v1.0.1"이라는 태그를 기준으로 "octo-1.0.1"이라는 릴리스를 만듭니다.
`body` | `https://github.com/octo-org/octo-repo/releases/new?body=Adds+widgets+support`는 릴리스 본문에 "위젯 지원 추가" 설명이 포함된 릴리스를 만듭니다.
`prerelease` | `https://github.com/octo-org/octo-repo/releases/new?prerelease=1`은 비프로덕션 준비 완료 상태로 식별되는 릴리스를 만듭니다.

## 추가 참고 자료

- “[URL 쿼리에서 이슈 만들기](/issues/tracking-your-work-with-issues/creating-an-issue#creating-an-issue-from-a-url-query)”
- “[쿼리 매개 변수를 사용하여 끌어오기 요청 만들기](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request/)”
