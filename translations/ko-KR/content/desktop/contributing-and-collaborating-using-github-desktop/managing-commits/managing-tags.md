---
title: 태그 관리
intro: '{% data variables.product.prodname_desktop %}을 사용하여 푸시 및 보기 태그를 만들 수 있습니다.'
redirect_from:
  - /desktop/contributing-to-projects/managing-tags
  - /desktop/contributing-and-collaborating-using-github-desktop/managing-tags
versions:
  fpt: '*'
ms.openlocfilehash: 980e47f6e3300995f6312499b23768d6f0401f36
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145090128'
---
## {% data variables.product.prodname_desktop %}의 태그 정보

{% data variables.product.prodname_desktop %}을(를) 사용하면 주석 태그를 만들 수 있습니다. 태그는 커밋과 연결되므로 태그를 사용하여 릴리스 버전 번호를 포함하여 리포지토리 기록의 개별 지점을 표시할 수 있습니다. 릴리스 태그에 대한 자세한 내용은 “[릴리스 정보](/github/administering-a-repository/about-releases)”를 참조하세요.

{% data reusables.desktop.tags-push-with-commits %}

## 토큰 만들기

{% data reusables.desktop.history-tab %} {% data reusables.desktop.create-tag %} {% data reusables.desktop.name-tag %} {% data reusables.desktop.confirm-tag %}

## 태그 보기

{% data reusables.desktop.history-tab %}
2. 커밋을 클릭합니다.
  {% note %}

  **참고**: 태그가 원격 리포지토리로 푸시되지 않은 경우 {% data variables.product.prodname_desktop %}은(는) 화살표 {% octicon "arrow-up" aria-label="The up arrow icon" %}를 표시합니다.

  {% endnote %}

  ![기록에서 태그 보기](/assets/images/help/desktop/viewing-tags-in-history.png)

3. 커밋과 연결된 모든 태그는 해당 커밋의 메타데이터에 표시됩니다.
![커밋에서 태그 보기](/assets/images/help/desktop/viewing-tags-in-commit.png)

## 태그 삭제

{% note %}

**참고**: 아직 푸시되지 않은 커밋과 연결된 태그만 삭제할 수 있습니다.

{% endnote %}

{% data reusables.desktop.history-tab %} {% data reusables.desktop.delete-tag %}

## 추가 참고 자료

- Git 설명서의 “[Git 기본 사항 - 태그 지정](https://git-scm.com/book/en/v2/Git-Basics-Tagging)”
