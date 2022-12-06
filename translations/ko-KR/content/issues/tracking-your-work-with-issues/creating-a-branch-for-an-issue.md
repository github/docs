---
title: 문제 작업을 위한 분기 만들기
intro: 문제 페이지에서 직접 문제를 해결할 분기를 만들고 바로 시작할 수 있습니다.
versions:
  fpt: '*'
  ghes: '>=3.5'
  ghae: '>= 3.5'
  ghec: '*'
allowTitleToDifferFromFilename: true
topics:
  - Issues
shortTitle: Create branch for issue
ms.openlocfilehash: 062b41705836537de23d882acc5342e0713c316d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061139'
---
{% note %}

**참고:** 문제를 위한 분기를 만드는 기능은 현재 공개 베타 버전이며 변경될 수 있습니다.

{% endnote %}

## 문제에 연결된 분기 정보
문제에 연결된 분기는 문제의 사이드바에 있는 ‘개발’ 섹션 아래에 표시됩니다. 분기 중 하나에 대한 끌어오기 요청을 만들면 문제에 자동으로 연결됩니다. 해당 분기와의 연결이 끊어지고 끌어오기 요청만 “개발” 섹션에 표시됩니다. 자세한 내용은 “[이슈에 끌어오기 요청 연결](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)”을 참조하세요.

## 문제에 대한 분기 만들기

리포지토리에 대한 쓰기 권한이 있는 사용자는 문제에 대한 분기를 만들 수 있습니다. 문제에 대해 여러 분기를 연결할 수 있습니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %}
3. 문제 목록에서 분기를 만들려는 문제를 클릭합니다.
4. ‘개발’의 오른쪽 사이드바 아래에서 **분기 만들기** 를 클릭합니다. 문제가 이미 연결된 분기 또는 끌어오기 요청이 있는 경우 {% octicon "gear" aria-label="The Gear icon" %} 아이콘을 클릭하고 드롭다운 메뉴 아래쪽에서 **분기 만들기** 를 클릭합니다.
   ![사이드바에 강조 표시된 분기 만들기 옵션을 보여 주는 스크린샷](/assets/images/help/issues/create-a-branch.png)
5. 기본적으로 새 분기는 기본 분기의 현재 리포지토리에 만들어집니다. “이 문제에 대한 분기 만들기” 대화 상자에서 필요에 따라 분기 이름 및 세부 정보를 편집합니다.
   ![분기 만들기 대화 상자 옵션을 보여 주는 스크린샷](/assets/images/help/issues/create-a-branch-options.png)
6. 분기에서 로컬로 작업할지 아니면 GitHub Desktop에서 열지 선택합니다.
7. 분기를 만들 준비가 되면 **분기 만들기** 를 클릭합니다.
