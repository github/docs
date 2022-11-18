---
title: 커밋 설명
intro: 커밋 주석 API를 사용하면 특정 커밋과 관련된 주석을 만들고 편집할 수 있습니다.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e959f04a9df15d2d9ce2765d2669cce7e8de0e5b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065348'
---
## 커밋 주석 API 정보

커밋 주석 API를 사용하면 특정 커밋과 관련된 주석을 만들고 편집할 수 있습니다.

### 커밋 주석에 대한 사용자 지정 미디어 유형

다음은 커밋 주석에 지원되는 미디어 유형입니다. API에서 미디어 형식을 사용하는 방법에 대한 자세한 내용은 [여기](/rest/overview/media-types)를 참조하세요.

    application/vnd.github-commitcomment.raw+json
    application/vnd.github-commitcomment.text+json
    application/vnd.github-commitcomment.html+json
    application/vnd.github-commitcomment.full+json

자세한 내용은 “[사용자 지정 미디어 유형](/rest/overview/media-types)”을 참조하세요.
