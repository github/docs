---
title: 자동 링크된 참조 및 URL
intro: 'URL, 문제, 끌어오기 요청 및 커밋에 대한 참조는 자동으로 단축되어 링크로 변환됩니다.'
redirect_from:
  - /articles/autolinked-references-and-urls
  - /github/writing-on-github/autolinked-references-and-urls
  - /github/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Auto linked references
ms.openlocfilehash: 9df56a50880477e445df09b1e4d01f6d9d10188e
ms.sourcegitcommit: 5beb76e9fdaed2e891ed4a26f75b55c733f6454f
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/12/2022
ms.locfileid: '148044307'
---
## URL

{% data variables.product.product_name %}는 표준 URL에서 자동으로 링크를 만듭니다.

`Visit https://github.com`

![렌더링된 자동 링크된 URL](/assets/images/help/writing/url-autolink-rendered.png)

링크 만들기에 대한 자세한 내용은 “[기본 쓰기 및 서식 지정 구문](/articles/basic-writing-and-formatting-syntax/#links)”을 참조하세요.

## 이슈 및 끌어오기 요청

{% data variables.product.product_name %}의 대화 내에서 이슈 및 끌어오기 요청에 대한 참조는 자동으로 단축된 링크로 변환됩니다.

{% note %}

**참고:** 자동 링크된 참조는 wiki 또는 리포지토리의 파일에 만들어지지 않습니다.

{% endnote %}

| 참조 형식 | 원시 참조 | 짧은 링크 |
| --- | --- | --- |
| 이슈 또는 끌어오기 요청 URL | https://github.com/jlord/sheetsee.js/issues/26 | [#26](https://github.com/jlord/sheetsee.js/issues/26)
| `#` 및 이슈 또는 끌어오기 요청 번호 | #26 | [#26](https://github.com/jlord/sheetsee.js/issues/26) |
| `GH-` 및 이슈 또는 끌어오기 요청 번호 | GH-26 | [GH-26](https://github.com/jlord/sheetsee.js/issues/26) |
| `Username/Repository#` 및 이슈 또는 끌어오기 요청 번호 | jlord/sheetsee.js#26 | [jlord/sheetsee.js#26](https://github.com/jlord/sheetsee.js/issues/26)
| `Organization_name/Repository#` 및 이슈 또는 끌어오기 요청 번호 | github/linguist#4039 | [github/linguist#4039](https://github.com/github/linguist/pull/4039)

{% ifversion fpt or ghec %} 목록에서 이슈, 끌어오기 요청 또는 토론을 참조하는 경우 제목과 상태를 대신 표시하도록 참조가 펼쳐집니다. 작업 목록에 대한 자세한 내용은 “[작업 목록 정보](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)”를 참조하세요.
{% endif %}

## 레이블
Markdown에서 레이블의 URL을 참조할 때 레이블이 자동으로 렌더링됩니다. 동일한 리포지토리의 레이블만 렌더링되고, 다른 리포지토리의 레이블을 가리키는 URL은 모든 [URL](/get-started/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls#urls)로 렌더링됩니다.

레이블의 URL은 레이블 페이지로 이동하여 레이블을 클릭하여 찾을 수 있습니다. 예를 들어 퍼블릭 [문서 리포지토리](https://github.com/github/docs/)에 있는 “향상” 레이블의 ​​URL은 다음과 같습니다.

```md
https://github.com/github/docs/labels/enhancement
```
{% note %}

**참고:** 레이블 이름에 마침표(`.`)가 포함되어 있으면 레이블 URL에서 레이블이 자동으로 렌더링되지 않습니다.

{% endnote %}

## SHA 커밋

커밋의 SHA 해시에 대한 참조는 {% data variables.product.product_name %}에서 커밋에 대한 단축된 링크로 자동으로 변환됩니다.

| 참조 형식 | 원시 참조 | 짧은 링크 |
| --- | --- | --- |
| 커밋 URL | [`https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e`](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) | [a5c3785](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) |
| SHA | a5c3785ed8d6a35868bc169f07e40e889087fd2e | [a5c3785](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) |
| User@SHA | jlord@a5c3785ed8d6a35868bc169f07e40e889087fd2e | [jlord@a5c3785](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e)
| `Username/Repository@SHA` | `jlord/sheetsee.js@a5c3785ed8d6a35868bc169f07e40e889087fd2e` | [`jlord/sheetsee.js@a5c3785`](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) |

## 외부 리소스에 대한 사용자 지정 자동 링크

{% data reusables.repositories.autolink-references %}

## 추가 참고 자료

- “[기본 쓰기 및 서식 지정 구문](/articles/basic-writing-and-formatting-syntax)”
