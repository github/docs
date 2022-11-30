---
title: 미디어 유형
intro: 사용하려는 데이터의 형식을 지정하기 위한 미디어 형식에 대해 알아봅니다.
redirect_from:
  - /v3/media
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: d93ba31647967f2f3a38dd47c5cc6d8a623c6c6e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146681127'
---
사용자 지정 미디어 유형은 API에서 소비자들이 수신하고자 하는 데이터의 형식을 선택하는 데 사용됩니다. 이 작업은 요청을 수행할 때 `Accept` 헤더에 다음 형식 중 하나 이상을 추가하여 수행됩니다. 미디어 유형은 리소스에 따라 다르기 때문에 독립적으로 변경하고 다른 리소스에서 지원하지 않는 형식을 지원할 수 있습니다.

모든 {% data variables.product.product_name %} 미디어 유형은 다음과 같습니다.

    application/vnd.github.param[+json]

API에서 지원하는 가장 기본적인 미디어 유형은 다음과 같습니다.

    application/vnd.github+json
    application/json

{% note %}

**참고:** 과거에는 `Accept` 헤더에 `v3`를 포함하는 것이 좋았습니다. 이는 더 이상 필요하지 않으며 API 요청에 영향을 주지 않습니다.

{% endnote %}

속성(예: 아래에 정의된 full/raw/etc)을 지정하는 경우 `github` 뒤에 배치합니다.

    application/vnd.github.raw+json

## 주석 본문 속성

주석 본문은 [GitHub Flavored Markdown][gfm], [문제](/rest/reference/issues), [문제 주석](/rest/reference/issues#comments), [끌어오기 요청 주석](/rest/reference/pulls#comments) 및 [gist 주석](/rest/reference/gists#comments) API에서 작성할 수 있습니다.

### Raw

    application/vnd.github.raw+json

원시 Markdown 본문을 반환합니다. 응답에 `body`이(가) 포함됩니다. 특정 미디어 유형을 전달하지 않는 경우 기본값입니다.

### 텍스트

    application/vnd.github.text+json

Markdown 본문의 텍스트 전용 표현을 반환합니다. 응답에 `body_text`이(가) 포함됩니다.

### HTML

    application/vnd.github.html+json

본문의 Markdown에서 렌더링된 HTML을 반환합니다. 응답에 `body_html`이(가) 포함됩니다.

### 전체

    application/vnd.github.full+json

원시, 텍스트 및 HTML 표현을 반환합니다. 응답에 `body`, `body_text` 및 `body_html`이(가) 포함됩니다.

## Git Blob 속성

[Blob을 가져올](/rest/reference/git#get-a-blob) 때 허용되는 미디어 유형은 다음과 같습니다.

### JSON

    application/vnd.github+json
    application/json

base64로 인코딩된 문자열인 `content`(으)로 Blob의 JSON 표현을 반환합니다. 아무것도 전달하지 않으면 기본값입니다.

### Raw

    application/vnd.github.raw

원시 Blob 데이터를 반환합니다.

## 커밋, 커밋 비교 및 끌어오기 요청

[커밋 API](/rest/reference/repos#commits) 및 [끌어오기 요청 API](/rest/reference/pulls)는 [diff][git-diff] 및 [패치][git-patch] 형식을 지원합니다.

### diff

    application/vnd.github.diff

### 패치

    application/vnd.github.patch

### sha

    application/vnd.github.sha

## 리포지토리 콘텐츠

### Raw

    application/vnd.github.raw

파일의 원시 콘텐츠를 반환합니다. 특정 미디어 유형을 전달하지 않는 경우 기본값입니다.

### HTML

    application/vnd.github.html

Markdown 또는 AsciiDoc와 같은 태그 파일의 경우 `.html` 미디어 형식을 사용하여 렌더링된 HTML을 검색할 수 있습니다. 태그 언어는 오픈 소스 [태그 라이브러리](https://github.com/github/markup)를 사용하여 HTML로 렌더링됩니다.

## Gists

### Raw

    application/vnd.github.raw

gist의 원시 콘텐츠를 반환합니다. 특정 미디어 유형을 전달하지 않는 경우 기본값입니다.

### base64

    application/vnd.github.base64

gist 콘텐츠는 전송되기 전에 base64로 인코딩됩니다. 이는 gist에 잘못된 UTF-8 시퀀스가 포함된 경우에 유용할 수 있습니다.

[gfm]:http://github.github.com/github-flavored-markdown/
[git-diff]: http://git-scm.com/docs/git-diff
[git-patch]: http://git-scm.com/docs/git-format-patch
[hypermedia]: /rest#hypermedia
[versions]: /developers/overview/about-githubs-apis
