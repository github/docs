---
title: 끌어오기
intro: '끌어오기 API를 사용하면 끌어오기 요청을 나열하고, 보고, 편집하고, 만들고, 병합할 수 있습니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: b140c41062e4fea4c1cb1299b23de774963913af
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181324'
---
## 끌어오기 API 정보

끌어오기 요청 API를 사용하면 끌어오기 요청을 나열하고, 보고, 편집하고, 만들고, 병합할 수 있습니다. 끌어오기 요청에 대한 주석은 [문제 주석 API](/rest/reference/issues#comments)를 통해 관리할 수 있습니다.

모든 끌어오기 요청은 문제이지만 모든 문제가 끌어오기 요청인 것은 아닙니다. 이러한 이유로 두 기능(예: 담당자, 레이블, 마일스톤 조작)에 대한 “공유” 작업이 [문제 API](/rest/reference/issues) 내에서 제공됩니다.

### 끌어오기 요청에 대한 사용자 지정 미디어 유형

끌어오기 요청에 지원되는 미디어 유형입니다.

    application/vnd.github.raw+json
    application/vnd.github.text+json
    application/vnd.github.html+json
    application/vnd.github.full+json
    application/vnd.github.diff
    application/vnd.github.patch

자세한 내용은 “[사용자 지정 미디어 유형](/rest/overview/media-types)”을 참조하세요.

Diff가 손상된 경우 {% data variables.contact.contact_support %}에 문의하세요. 메시지에 리포지토리 이름 및 끌어오기 요청 ID를 포함합니다.

### 관계 연결

끌어오기 요청에는 다음과 같은 가능한 연결 관계가 있습니다.

Name | 설명
-----|-----------|
`self`| 이 끌어오기 요청의 API 위치입니다.
`html`| 이 끌어오기 요청의 HTML 위치입니다.
`issue`| 이 끌어오기 요청의 [문제](/rest/reference/issues)의 API 위치입니다.
`comments`| 이 끌어오기 요청의 [문제 설명](/rest/reference/issues#comments)의 API 위치입니다.
`review_comments`| 이 끌어오기 요청의 [검토 설명](/rest/reference/pulls#comments)의 API 위치입니다.
`review_comment`| 이 끌어오기 요청의 리포지토리에서 [검토 설명](/rest/reference/pulls#comments)의 API 위치를 구성하는 [URL 템플릿](/rest#hypermedia)입니다.
`commits`|이 끌어오기 요청의 [커밋](#list-commits-on-a-pull-request)의 API 위치입니다.
`statuses`| 이 끌어오기 요청의 [커밋 상태](/rest/reference/commits#commit-statuses)(해당 `head` 분기의 상태)의 API 위치입니다.
