---
title: wiki 콘텐츠 편집
intro: wiki의 콘텐츠에 이미지와 링크를 추가하고 일부 지원되는 MediaWiki 형식을 사용할 수 있습니다.
redirect_from:
  - /articles/adding-links-to-wikis
  - /articles/how-do-i-add-links-to-my-wiki
  - /articles/how-do-i-add-or-upload-images-to-the-wiki
  - /articles/needs-writing-review-how-do-i-add-or-upload-images-to-the-wiki
  - /articles/how-do-i-add-images-to-my-wiki
  - /articles/adding-images-to-wikis
  - /articles/supported-mediawiki-formats
  - /articles/editing-wiki-content
  - /github/building-a-strong-community/editing-wiki-content
product: '{% data reusables.gated-features.wikis %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 0afae4335dbf6ff78c0b0e1a2bef4cebed637a5e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578942'
---
## 링크 추가

페이지에서 지원하는 표준 태그를 사용하거나 MediaWiki 구문을 사용하여 wiki에서 링크를 만들 수 있습니다. 예를 들면 다음과 같습니다.

- 페이지가 Markdown으로 렌더링되는 경우 링크 구문은 `[Link Text](full-URL-of-wiki-page)`입니다.
- MediaWiki 구문을 사용하면 링크 구문은 `[[nameofwikipage|Link Text]]`입니다.

## 이미지 추가

Wiki는 PNG, JPEG 및 GIF 이미지를 표시할 수 있습니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
3. Wiki 사이드바를 사용하여 변경할 페이지로 이동한 후 **편집** 을 클릭합니다.
4. 위키 도구 모음에서 **이미지** 를 클릭합니다.
   ![Wiki 이미지 추가 단추](/assets/images/help/wiki/wiki_add_image.png)
5. “이미지 삽입” 대화 상자에서 이미지 URL 및 대체 텍스트(검색 엔진 및 화면 읽기 프로그램에서 사용됨)를 입력합니다.
6. **확인** 을 클릭합니다.

### 리포지토리의 이미지에 연결

브라우저에서 URL을 복사하고 이를 이미지의 경로로 사용하여 {% data variables.product.product_name %}의 리포지토리에 있는 이미지에 연결할 수 있습니다. 예를 들어 Markdown을 사용하여 wiki에 이미지를 포함하면 다음과 같습니다.

    [[https://github.com/USERNAME/REPOSITORY/blob/main/img/octocat.png|alt=octocat]]

{% ifversion fpt or ghec or ghes > 3.6 or ghae-issue-7647 %}
## 수학 식 및 다이어그램 추가{% endif %}

{% data reusables.getting-started.math-and-diagrams %}

## 지원되는 MediaWiki 형식

위키 페이지가 작성된 태그 언어에 관계없이 특정 MediaWiki 구문을 항상 사용할 수 있습니다.
- 링크([AsciiDoc 제외](https://github.com/gollum/gollum/commit/d1cf698b456cd6a35a54c6a8e7b41d3068acec3b))
- `---`을 통한 가로줄
- 약식 기호 엔터티(예: `&delta;` 또는 `&euro;`)

보안 및 성능상의 이유로 일부 구문은 지원되지 않습니다.
- [폐색](https://www.mediawiki.org/wiki/Transclusion)
- 정의 목록
- 들여쓰기
- 목차
