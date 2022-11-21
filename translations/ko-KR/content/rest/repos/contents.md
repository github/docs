---
title: 리포지토리 콘텐츠
allowTitleToDifferFromFilename: true
shortTitle: Contents
intro: 'API 엔드포인트를 사용하면 리포지토리에서 Base64로 인코드된 콘텐츠를 만들고, 수정하고, 삭제할 수 있습니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 50875021a506201a90cbac62db521604a390a586
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060332'
---
## 리포지토리 콘텐츠 API 정보

원시 형식 또는 렌더링된 HTML(지원되는 경우)을 요청하려면 리포지토리 콘텐츠에 사용자 지정 미디어 형식을 사용합니다.

### 리포지토리 콘텐츠의 사용자 지정 미디어 형식

[README](/rest/reference/repos#get-a-repository-readme), [파일](/rest/reference/repos#get-repository-content), [symlink](/rest/reference/repos#get-repository-content)는 다음과 같은 사용자 지정 미디어 형식을 지원합니다.

    application/vnd.github.VERSION.raw
    application/vnd.github.VERSION.html

파일 내용을 검색하려면 `.raw` 미디어 형식을 사용합니다.

Markdown 또는 AsciiDoc와 같은 태그 파일의 경우 `.html` 미디어 형식을 사용하여 렌더링된 HTML을 검색할 수 있습니다. 태그 언어는 오픈 소스 [태그 라이브러리](https://github.com/github/markup)를 사용하여 HTML로 렌더링됩니다.

[모든 개체](/rest/reference/repos#get-repository-content)는 다음과 같은 사용자 지정 미디어 형식을 지원합니다.

    application/vnd.github.VERSION.object

콘텐츠 형식에 관계없이 일관된 개체 형식으로 콘텐츠를 검색하려면 `object` 미디어 형식 매개 변수를 사용합니다. 예를 들어 응답은 디렉터리의 개체 배열 대신 개체 배열을 포함하는 `entries` 특성이 있는 개체가 됩니다.

API에서 미디어 형식을 사용하는 방법에 대한 자세한 내용은 [여기](/rest/overview/media-types)를 참조하세요.
