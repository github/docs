---
title: GitHub에서의 쓰기 및 서식 지정 정보
intro: GitHub는 GitHub Flavored Markdown이라는 텍스트 서식 지정 구문을 몇 가지 고유한 쓰기 기능과 결합합니다.
redirect_from:
  - /articles/about-writing-and-formatting-on-github
  - /github/writing-on-github/about-writing-and-formatting-on-github
  - /github/writing-on-github/getting-started-with-writing-and-formatting-on-github/about-writing-and-formatting-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: About writing & formatting
ms.openlocfilehash: d120c0e1e617314edae5a518eb59271aaa7df917
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009164'
---
[Markdown](http://daringfireball.net/projects/markdown/)은 일반 텍스트 서식을 지정하기 위한 읽기 쉽고 쓰기 쉬운 구문입니다.

사이트 전체에서 산문과 코드의 서식을 지정하는 데 사용되는 {% data variables.product.prodname_dotcom %} Flavored Markdown을 만들기 위한 몇 가지 사용자 지정 기능이 추가되었습니다.

또한 [@mentions](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams), [이슈 및 PR 참조](/articles/basic-writing-and-formatting-syntax/#referencing-issues-and-pull-requests), [이모지](/articles/basic-writing-and-formatting-syntax/#using-emoji) 같은 기능을 사용하여 끌어오기 요청 및 이슈에서 다른 사용자와 상호 작용할 수 있습니다.

## 텍스트 서식 지정 도구 모음

{% data variables.product.product_name %}의 모든 주석 필드에는 텍스트 서식 지정 도구 모음이 포함되어 있으므로 Markdown 구문을 학습하지 않고도 텍스트의 서식을 지정할 수 있습니다. 굵게 및 기울임꼴 스타일과 같은 Markdown 서식 지정과 헤더, 링크, 목록 만들기 외에도 도구 모음에는 @mentions, 작업 목록, 이슈 및 끌어오기 요청에 대한 링크 등 {% data variables.product.product_name %} 관련 기능이 포함되어 있습니다.

{% ifversion fixed-width-font-gfm-fields %}

## 편집기에서 고정 너비 글꼴 사용

{% data variables.product.product_name %}의 모든 주석 필드에서 고정 너비 글꼴을 사용하도록 설정할 수 있습니다. 고정 너비 또는 고정 폭의 각 문자는 동일한 가로 공간을 차지하므로 테이블 및 코드 조각과 같은 고급 Markdown 구조를 더 쉽게 편집할 수 있습니다.

![고정 너비 글꼴을 사용하도록 설정된 {% data variables.product.product_name %} 주석 필드를 보여 주는 스크린샷](/assets/images/help/writing/fixed-width-example.png)

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.appearance-settings %}
1. “Markdown 편집기 글꼴 기본 설정”에서 **Markdown을 편집할 때 고정 너비(고정 폭) 글꼴 사용** 을 선택합니다.
  ![고정 너비 글꼴을 사용하도록 설정된 {% data variables.product.product_name %} 주석 필드를 보여 주는 스크린샷](/assets/images/help/writing/enable-fixed-width.png)

{% endif %}

## 추가 참고 자료

- [{% data variables.product.prodname_dotcom %} Flavored Markdown 사양](https://github.github.com/gfm/)
- “[기본 쓰기 및 서식 지정 구문](/articles/basic-writing-and-formatting-syntax)”
- “[고급 서식 지정 작업](/articles/working-with-advanced-formatting)”
- "[{% 데이터 variables.product.prodname_dotcom %}에 쓰기 위한 빠른 시작](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github)"
