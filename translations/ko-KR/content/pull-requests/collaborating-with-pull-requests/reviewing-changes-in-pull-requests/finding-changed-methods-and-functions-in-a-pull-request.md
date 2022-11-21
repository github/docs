---
title: 끌어오기 요청에서 변경된 메서드 및 함수 찾기
intro: '*.go* *,.js*, *.ts*, *.py, .* *php* 및 .*rb* 파일의 끌어오기 요청에서 메서드 또는 함수에 대해 제안된 변경 내용을 빠르게 찾을 수 있습니다.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/finding-changed-methods-and-functions-in-a-pull-request
  - /articles/finding-changed-methods-and-functions-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/finding-changed-methods-and-functions-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/finding-changed-methods-and-functions-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Methods & functions
ms.openlocfilehash: be891fe01166ee0eccf9ba7c824a1017c9d8fc11
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145139192'
---
리포지토리에 대한 읽기 권한이 있는 사용자는 끌어오기 요청의 특정 파일에서 함수 및 메서드 변경 내용의 요약 목록을 볼 수 있습니다.

메서드 및 함수의 요약 목록은 다음과 같은 지원되는 파일 형식에서 만들어집니다.
  - Go
  - JavaScript(Typescript, Flow, 기타 유형의 JavaScript 포함)
  - PHP
  - Python
  - Ruby

{% data reusables.repositories.sidebar-pr %}
2. 끌어오기 요청 목록에서, 변경된 함수 및 메서드를 찾으려는 끌어오기 요청을 클릭합니다.
{% data reusables.repositories.changed-files %}
4. 변경된 함수 및 메서드의 요약 목록을 보려면 **이동...** 을 클릭합니다. ![이동 드롭다운 메뉴](/assets/images/help/pull_requests/jump-to-menu.png)
5. 드롭다운 메뉴에서 변경된 함수 또는 메서드를 선택합니다. 함수 또는 메서드의 이름을 입력하여 결과를 필터링할 수도 있습니다.
  ![함수 및 메서드 필터링](/assets/images/help/pull_requests/filter-function-and-methods.png)

 {% note %}

 **참고:** 예상한 함수 또는 메서드가 표시되지 않으면 코드가 컴파일되는지와 코드에 오류가 없는지를 확인합니다. 이 끌어오기 요청에서 변경되었고 *.go*, *.js*, *.ts*, *.py*, *.php*, *.rb* 파일에서 발견된 함수와 메서드만 드롭다운 메뉴에 나타납니다.

 {% endnote %}

6. 선택한 함수 또는 메서드의 첫 번째 줄로 리디렉션됩니다.
 ![변경된 파일의 함수 또는 메서드 보기](/assets/images/help/pull_requests/view-selected-function-or-method.png)

## 추가 참고 자료

- “[끌어오기 요청의 분기 비교 정보](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)”
- “[파일 형식별로 끌어오기 요청에서 파일 필터링](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request)”
