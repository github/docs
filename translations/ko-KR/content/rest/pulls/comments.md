---
title: 끌어오기 요청 검토 설명
shortTitle: Review comments
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 6d49aa3d5bca7f74a21c1cce32cecd38abe9366d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067732'
---
## 끌어오기 요청 검토 주석 API 정보

끌어오기 요청 검토 주석은 끌어오기 요청 검토 중에 만든 통합 차이의 일부에 대한 주석입니다. 주석 커밋 및 주석 발행은 끌어오기 요청 검토 주석과 다릅니다. 커밋에 직접 커밋 주석을 적용하고 통합 차이의 일부를 참조하지 않고 문제 주석을 적용합니다. 자세한 내용은 “[커밋 주석 만들기](/rest/reference/commits#create-a-commit-comment)” 및 “[문제 주석 만들기](/rest/reference/issues#create-an-issue-comment)”를 참조하세요.

### 끌어오기 요청 검토 주석에 대한 사용자 지정 미디어 유형

끌어오기 요청 검토 주석에 지원되는 미디어 유형입니다.

    application/vnd.github.VERSION.raw+json
    application/vnd.github.VERSION.text+json
    application/vnd.github.VERSION.html+json
    application/vnd.github.VERSION.full+json

자세한 내용은 “[사용자 지정 미디어 유형](/rest/overview/media-types)”을 참조하세요.
