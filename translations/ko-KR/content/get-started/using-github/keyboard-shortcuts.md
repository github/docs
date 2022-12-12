---
title: 바로 가기 키
intro: '{% data variables.product.prodname_dotcom %}의 거의 모든 페이지에는 작업을 더 빠르게 수행할 수 있는 바로 가기 키가 있습니다.'
redirect_from:
  - /articles/using-keyboard-shortcuts
  - /categories/75/articles
  - /categories/keyboard-shortcuts
  - /articles/keyboard-shortcuts
  - /github/getting-started-with-github/keyboard-shortcuts
  - /github/getting-started-with-github/using-github/keyboard-shortcuts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: ad75d2afe5750ee2596d2695334ab5c7101aee79
ms.sourcegitcommit: f5ec7f52d2945ba8b7c14f8f604e4784a8feda19
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180779'
---
## 바로 가기 키 정보

<kbd>?</kbd>를 {% data variables.product.prodname_dotcom %}에서 입력하면 해당 페이지에 사용할 수 있는 바로 가기 키가 나열된 대화 상자가 나타납니다. 이러한 바로 가기 키를 사용하면 마우스를 사용하여 탐색하지 않고도 사이트 전체에서 작업을 수행할 수 있습니다.

{% ifversion keyboard-shortcut-accessibility-setting %} 접근성 설정에서 한정자 키를 사용하는 바로 가기를 허용하면서 문자 키 바로 가기를 사용하지 않도록 설정할 수 있습니다. 자세한 내용은 “[접근성 설정 관리](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-accessibility-settings)”를 참조하세요. {% endif %}

{% ifversion command-palette %} 또한 {% data variables.product.prodname_command_palette %}를 사용하면 바로 가기 키를 기억할 필요 없이 광범위한 작업에 빠르게 액세스할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)”를 참조하세요.{% endif %}

다음 섹션에서는 {% data variables.location.product_location %}에서 사용할 수 있는 페이지별로 구성된 사용 가능한 바로 가기 키 중 일부를 나열합니다.

## 사이트 전체 바로 가기

| 키보드 바로 가기 키 | 설명
|-----------|------------
|<kbd>S</kbd> 또는 <kbd>/</kbd> | 검색 창에 포커스를 둡니다. 자세한 내용은 “[{% data variables.product.company_short %} 검색 정보](/search-github/getting-started-with-searching-on-github/about-searching-on-github)”를 참조하세요.
|<kbd>G</kbd> <kbd>N</kbd> | 알림으로 이동합니다. 자세한 내용은 “[알림 정보](/github/managing-subscriptions-and-notifications-on-github/about-notifications)”를 참조하세요.
|<kbd>Esc</kbd> | 사용자, 이슈 또는 끌어오기 요청 호버 카드에 포커스를 둔 경우 호버 카드를 닫고 호버 카드가 있는 요소에 다시 포커스를 둡니다.
{% ifversion command-palette %}|<kbd>Command</kbd>+<kbd>K</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>K</kbd>(Windows/Linux) | {% data variables.product.prodname_command_palette %}를 엽니다. Markdown 텍스트를 편집 중인 경우 <kbd>Command</kbd>+<kbd>Option</kbd>+<kbd>K</kbd> 또는 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>K</kbd>를 사용하여 명령 팔레트를 엽니다. 자세한 내용은 “[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)”를 참조하세요.{% endif %}

## 리포지토리

| 키보드 바로 가기 키 | 설명
|-----------|------------
|<kbd>G</kbd> <kbd>C</kbd> | **코드** 탭으로 이동합니다.
|<kbd>G</kbd> <kbd>I</kbd> | **이슈** 탭으로 이동합니다. 자세한 내용은 “[이슈 정보](/articles/about-issues)”를 참조하세요.
|<kbd>G</kbd> <kbd>P</kbd> | **끌어오기 요청** 탭으로 이동합니다. 자세한 내용은 “[끌어오기 요청 정보](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)”를 참조하세요.{% ifversion fpt or ghes or ghec %}
|<kbd>G</kbd> <kbd>A</kbd> | **작업** 탭으로 이동합니다. 자세한 내용은 “[작업 정보](/actions/getting-started-with-github-actions/about-github-actions)”를 참조하세요.{% endif %}
|<kbd>G</kbd> <kbd>B</kbd> | **프로젝트** 탭으로 이동합니다. 자세한 내용은 “[프로젝트 보드 정보](/articles/about-project-boards)”를 참조하세요.
|<kbd>G</kbd> <kbd>W</kbd> | **Wiki** 탭으로 이동합니다. 자세한 내용은 “[Wiki 정보](/communities/documenting-your-project-with-wikis/about-wikis)”를 참조하세요.{% ifversion discussions %}
|<kbd>G</kbd> <kbd>G</kbd> | **토론** 탭으로 이동합니다. 자세한 내용은 “[토론 정보](/discussions/collaborating-with-your-community-using-discussions/about-discussions)”를 참조하세요.{% endif %}

## 소스 코드 편집

| 바로 가기 키 | 설명 |-----------|------------{% ifversion fpt or ghec %} |<kbd>.</kbd> | 동일한 브라우저 탭의 웹 기반 편집기에서 리포지토리 또는 끌어오기 요청을 엽니다. 편집기를 사용하려면 로그인해야 합니다. 자세한 내용은 "[웹 기반 편집기"를 참조하세요](/codespaces/developing-in-codespaces/web-based-editor).
|<kbd>></kbd> | 새 브라우저 탭의 웹 기반 편집기에서 리포지토리 또는 끌어오기 요청을 엽니다. 편집기를 사용하려면 로그인해야 합니다. 자세한 내용은 “[웹 기반 편집기](/codespaces/developing-in-codespaces/web-based-editor)”를 참조하세요.{% endif %} |<kbd>Command</kbd>+<kbd>B</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>B</kbd>(Windows/Linux) | 굵은 텍스트를 위한 Markdown 서식 삽입 |<kbd>Command</kbd>+<kbd>I</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>I</kbd>(Windows/Linux) | 기울임꼴 텍스트를 위한 Markdown 서식 삽입 |<kbd>Command</kbd>+<kbd>K</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>K</kbd>(Windows/Linux) | 링크를 만들기 위한 Markdown 서식 삽입{% ifversion fpt or ghec or ghae or ghes > 3.3 %} |<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>7</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>7</kbd>(Windows/Linux) | 순서가 지정된 목록을 위한 Markdown 서식 삽입 |<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>8</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>8</kbd>(Windows/Linux) | 순서가 지정되지 않은 목록을 위한 Markdown 서식 삽입 |<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd> (Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd> (Windows/Linux) | 따옴표를 위한 Markdown 서식 삽입{% endif %} |<kbd>E</kbd> | **파일 편집** 탭에서 소스 코드 열기 |<kbd>Command</kbd>+<kbd>F</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>F</kbd>(Windows/Linux) | 파일 편집기에서 검색 시작 |<kbd>Command</kbd>+<kbd>G</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>G</kbd>(Windows/Linux) | 텍스트 찾기 |<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>G</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>G</kbd>(Windows/Linux) | 이전 찾기 |<kbd>Command</kbd>+<kbd>Option</kbd>+<kbd>F</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>F</kbd>(Windows/Linux) | 바꾸기 |<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>Option</kbd>+<kbd>F</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>R</kbd>(Windows/Linux) | 모두 바꾸기 |<kbd>Alt</kbd>+<kbd>G</kbd> | 줄로 이동 |<kbd>Command</kbd>+<kbd>Z</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>Z</kbd>(Windows/Linux) | 실행 취소 |<kbd>Command</kbd>+<kbd>Y</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>Y</kbd>(Windows/Linux) | 실행 취소 |<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> | **파일 편집** 탭과 **변경 내용 미리 보기** 탭 간에 전환 |<kbd>Command</kbd>+<kbd>S</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>S</kbd>(Windows/Linux) | 커밋 메시지 작성

바로 가기 키를 더 많이 보려면 [CodeMirror 설명서](https://codemirror.net/doc/manual.html#commands)를 참조하세요.

## 소스 코드 검색

| 키보드 바로 가기 키 | 설명
|-----------|------------
|<kbd>T</kbd> | File Finder 활성화
|<kbd>L</kbd> | 코드의 줄로 이동
|<kbd>W</kbd> | 새 분기 또는 태그로 전환
|<kbd>예</kbd> | URL을 정규형으로 확장. 자세한 내용은 “[파일에 대한 고정 링크 가져오기](/articles/getting-permanent-links-to-files)”를 참조하세요.
|<kbd>I</kbd> | 차이(diff)에 대한 주석(comment) 표시 또는 숨기기. 자세한 내용은 “[끌어오기 요청의 차이에 대한 주석 처리](/articles/commenting-on-the-diff-of-a-pull-request)”를 참조하세요.
|<kbd>A</kbd> | 차이(diff)에 대한 주석(annotation) 표시 또는 숨기기
|<kbd>B</kbd> | Blame 보기 열기. 자세한 내용은 “[파일의 변경 내용 추적](/articles/tracing-changes-in-a-file)”을 참조하세요.

## 의견

| 키보드 바로 가기 키 | 설명
|-----------|------------
|<kbd>Command</kbd>+<kbd>B</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>B</kbd>(Windows/Linux) | 굵은 텍스트를 위한 Markdown 서식 삽입
|<kbd>Command</kbd>+<kbd>I</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>I</kbd>(Windows/Linux) | 기울임꼴 텍스트를 위한 Markdown 서식 삽입
|<kbd>Command</kbd>+<kbd>E</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>E</kbd>(Windows/Linux) | 줄 내에 코드 또는 명령에 대한 Markdown 서식을 삽입합니다{% ifversion fpt or ghae > 3.3 or ghes or ghec %}
|<kbd>Command</kbd>+<kbd>K</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>K</kbd>(Windows/Linux) | 링크를 만들기 위한 Markdown 서식 삽입{% endif %}{% ifversion fpt or ghae > 3.5 or ghes > 3.5 or ghec %}
|<kbd>Command</kbd>+<kbd>V</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>V</kbd>(Windows/Linux) | 강조 표시된 텍스트 위에 적용할 때 Markdown 링크 만들기{% endif %}
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>(Windows/Linux) | **쓰기** 탭과 **미리 보기** 주석 탭 간에 전환{% ifversion fpt or ghae or ghes > 3.4 or ghec %}
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd>(Windows/Linux) | HTML 링크를 일반 텍스트로 붙여넣습니다{% endif %}
|<kbd>명령</kbd>+ <kbd>Shift</kbd>+ <kbd>옵션</kbd>+ <kbd>V</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>V</kbd>(Windows/Linux) | HTML 링크를 일반 텍스트로 붙여넣습니다.
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>7</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>7</kbd>(Windows/Linux) | 순서가 지정된 목록을 위한 Markdown 서식 삽입
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>8</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>8</kbd>(Windows/Linux) | 순서가 지정되지 않은 목록에 대한 Markdown 서식을 삽입합니다.
|<kbd>Command</kbd>+<kbd>Enter</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>Enter</kbd>(Windows/Linux) | 주석 제출
|<kbd>Ctrl</kbd>+ <kbd>.</kbd> 그런 다음 <kbd>Ctrl</kbd>+<kbd>[saved reply number]</kbd> | 저장된 회신 메뉴를 연 다음 저장된 회신으로 주석 필드를 자동으로 채웁니다. 자세한 내용은 "[저장된 회신 정보](/articles/about-saved-replies)"를 참조하세요.
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd> (Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd> (Windows/Linux) | 따옴표에 Markdown 서식을 삽입합니다{% ifversion fpt or ghec %}
|<kbd>Command</kbd>+<kbd>G</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>G</kbd>(Windows/Linux) | 제안 삽입. 자세한 내용은 “[끌어오기 요청에서 제안된 변경 내용 검토](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)”를 참조하세요. |{% endif %}
|<kbd>R</kbd> | 회신에서 선택한 텍스트 인용. 자세한 내용은 “[기본 쓰기 및 서식 지정 구문](/articles/basic-writing-and-formatting-syntax#quoting-text)”을 참조하세요. |

## 이슈 및 끌어오기 요청 목록

| 키보드 바로 가기 키 | 설명
|-----------|------------
|<kbd>C</kbd> | 문제 만들기
|<kbd>Command</kbd>+<kbd>/</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>/</kbd>(Windows/Linux) | 이슈 또는 끌어오기 요청 검색 창에 포커스 두기. 자세한 내용은 “[이슈 및 끌어오기 요청을 필터링하고 검색하기](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)”를 참조하세요.||
|<kbd>U</kbd> | 작성자별 필터링
|<kbd>L</kbd> | 레이블을 필터링 또는 편집. 자세한 내용은 “[레이블로 이슈 및 끌어오기 요청 필터링](/articles/filtering-issues-and-pull-requests-by-labels)”을 참조하세요.
|<kbd>Alt</kbd> 및 클릭 | 레이블로 필터링하는 한편 레이블 제외. 자세한 내용은 “[레이블로 이슈 및 끌어오기 요청 필터링](/articles/filtering-issues-and-pull-requests-by-labels)”을 참조하세요.
|<kbd>M</kbd> | 중요 시점으로 필터링 또는 중요 시점 편집. 자세한 내용은 [중요 시점으로 이슈 및 끌어오기 요청 필터링](/articles/filtering-issues-and-pull-requests-by-milestone)을 참조하세요.
|<kbd>A</kbd> | 담당자로 필터링 또는 담당자 편집. 자세한 내용은 “[담당자로 이슈 및 끌어오기 요청 필터링](/articles/filtering-issues-and-pull-requests-by-assignees)”을 참조하세요.
|<kbd>O</kbd> 또는 <kbd>Enter</kbd> | 이슈 열기

## 이슈 및 끌어오기 요청
| 키보드 바로 가기 키 | 설명
|-----------|------------
|<kbd>Q</kbd> | 검토자 요청. 자세한 내용은 “[끌어오기 요청 검토 요청](/articles/requesting-a-pull-request-review/)”을 참조하세요.
|<kbd>M</kbd> | 중요 시점 설정. 자세한 내용은 “[중요 시점을 이슈 및 끌어오기 요청과 연결](/articles/associating-milestones-with-issues-and-pull-requests/)”을 참조하세요.
|<kbd>L</kbd> | 레이블 적용. 자세한 내용은 “[이슈 및 끌어오기 요청에 레이블 적용](/articles/applying-labels-to-issues-and-pull-requests/)”을 참조하세요.
|<kbd>A</kbd> | 담당자 설정. 자세한 내용은 “[이슈 및 끌어오기 요청을 다른 {% data variables.product.company_short %} 사용자에게 할당](/articles/assigning-issues-and-pull-requests-to-other-github-users/)”을 참조하세요.
|<kbd>X</kbd> | 동일한 리포지토리에서 이슈 또는 끌어오기 요청 연결. 자세한 내용은 “[끌어오기 요청을 이슈에 연결](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue/)”을 참조하세요.
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>(Windows/Linux) | **쓰기** 탭과 **미리 보기** 탭 간에 전환{% ifversion fpt or ghec %}
|<kbd>Alt</kbd> 및 클릭 | 작업 목록에서 이슈를 만들 때 <kbd>Alt</kbd> 키를 누른 상태에서 작업의 오른쪽 상단에 있는 {% octicon "issue-opened" aria-label="The issue opened icon" %}을 클릭하여 현재 탭에서 새 이슈 양식을 엽니다. 자세한 내용은 “[작업 목록 정보](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)”를 참조하세요.
|<kbd>Shift</kbd> 및 클릭 | 작업 목록에서 이슈를 만들 때 <kbd>Shift</kbd> 키를 누른 상태에서 작업의 오른쪽 상단에 있는 {% octicon "issue-opened" aria-label="The issue opened icon" %}을 클릭하여 새 탭에서 새 이슈 양식을 엽니다. 자세한 내용은 “[작업 목록 정보](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)”를 참조하세요.
|<kbd>Command</kbd> 및 클릭(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd> 및 클릭(Windows/Linux) | 작업 목록에서 이슈를 만들 때 <kbd>Command</kbd> 또는 <kbd>Ctrl</kbd>+<kbd>Shift</kbd> 키를 누른 상태에서 작업의 오른쪽 상단에 있는 {% octicon "issue-opened" aria-label="The issue opened icon" %}을 클릭하여 새 창에서 새 이슈 양식을 엽니다. 자세한 내용은 “[작업 목록 정보](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)”를 참조하세요.{% endif %}

## 끌어오기 요청의 "파일 변경됨" 탭

| 키보드 바로 가기 키 | 설명
|-----------|------------
|<kbd>C</kbd> | **커밋** 드롭다운 메뉴를 열어 diffs에 표시되는 커밋을 필터링합니다.
|<kbd>T</kbd> | 커서를 "변경된 파일 필터링" 필드로 이동
|<kbd>명령</kbd>+ <kbd>Shift</kbd>+ <kbd>Enter</kbd>(Mac) 또는 <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Enter</kbd>(Windows/Linux) | 검토 주석 제출 |
|<kbd>옵션</kbd> 및 클릭 (Mac) 또는 <kbd>Alt</kbd> 및 클릭 (Windows/Linux) | 끌어오기 요청에서 모든 오래된 검토 주석 또는 해결된 검토 주석 축소 및 확장 간에 전환합니다(예: <kbd>Alt</kbd> 키를 누른 채 **오래된 항목 표시 또는 오래된** 항목 **숨기기** 클릭). |
|클릭 이후 <kbd>Shift</kbd> 및 클릭 | 줄 번호를 클릭하고 <kbd>Shift</kbd> 키를 누른 다음 또 다른 줄 번호를 클릭하여 끌어오기 요청의 여러 줄에 주석을 달 수 있습니다. 자세한 내용은 “[끌어오기 요청에 대한 주석 처리](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)”를 참조하세요.|

{% ifversion projects-v2 %}

## {% data variables.projects.projects_v2_caps %}

### 프로젝트 탐색

| 키보드 바로 가기 키 | 설명
|-----------|------------
|<kbd>명령</kbd>+ <kbd>f</kbd>(Mac) 또는 <kbd>Ctrl</kbd>+<kbd>f</kbd>(Windows/Linux) | 포커스 필터 필드
|<kbd>←</kbd> | 셀 포커스를 왼쪽으로 이동
|<kbd>→</kbd> | 셀 포커스를 오른쪽으로 이동
|<kbd>↑</kbd> | 셀 포커스 위로 이동
|<kbd>↓</kbd> | 셀 포커스를 아래로 이동

### 프로젝트 조작

| 키보드 바로 가기 키 | 설명
|-----------|------------
|<kbd>Enter</kbd> | 포커스가 있는 셀에 대한 편집 모드 토글
|<kbd>Esc</kbd> | 포커스가 있는 셀에 대한 편집 취소
|<kbd>명령</kbd>+ <kbd>Shift</kbd>+<kbd>\</kbd> (Mac) 또는 <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>\</kbd>(Windows/Linux) | 행 작업 메뉴 열기
|<kbd>Shift</kbd>+<kbd>Space</kbd> | 항목 선택
|<kbd>스페이스바</kbd> | 선택한 항목 열기
|<kbd>e</kbd> | 선택한 항목 보관

{% endif %}

## {% data variables.product.prodname_projects_v1_caps %}

### 열 이동

| 키보드 바로 가기 키 | 설명
|-----------|------------
|<kbd>Enter</kbd> 또는 <kbd>Space</kbd> | 포커스가 있는 열 이동 시작
|<kbd>Esc</kbd> | 진행 중인 이동 취소
|<kbd>Enter</kbd> | 진행 중인 이동 완료
|<kbd>←</kbd> 또는 <kbd>H</kbd> | 열을 왼쪽으로 이동
|<kbd>Command</kbd>+<kbd>←</kbd> 또는 <kbd>Command</kbd>+<kbd>H</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>←</kbd> 또는 <kbd>Ctrl</kbd>+<kbd>H</kbd>(Windows/Linux) | 열을 맨 왼쪽 위치로 이동
|<kbd>→</kbd> 또는 <kbd>L</kbd> | 열을 오른쪽으로 이동
|<kbd>Command</kbd>+<kbd>→</kbd> 또는 <kbd>Command</kbd>+<kbd>L</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>→</kbd> 또는 <kbd>Ctrl</kbd>+<kbd>L</kbd>(Windows/Linux) | 열을 맨 오른쪽 위치로 이동

### 카드 이동

| 키보드 바로 가기 키 | 설명
|-----------|------------
|<kbd>Enter</kbd> 또는 <kbd>Space</kbd> | 포커스가 있는 카드 이동 시작
|<kbd>Esc</kbd> | 진행 중인 이동 취소
|<kbd>Enter</kbd> | 진행 중인 이동 완료
|<kbd>↓</kbd> 또는 <kbd>J</kbd> | 카드를 아래로 이동
|<kbd>Command</kbd>+<kbd>↓</kbd> 또는 <kbd>Command</kbd>+<kbd>J</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>↓</kbd> 또는 <kbd>Ctrl</kbd>+<kbd>J</kbd>(Windows/Linux) | 카드를 열의 맨 아래로 이동
|<kbd>↑</kbd> 또는 <kbd>K</kbd> | 카드를 위로 이동
|<kbd>Command</kbd>+<kbd>↑</kbd> 또는 <kbd>Command</kbd>+<kbd>K</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>↑</kbd> 또는 <kbd>Ctrl</kbd>+<kbd>K</kbd>(Windows/Linux) | 카드를 열의 맨 위로 이동
|<kbd>←</kbd> 또는 <kbd>H</kbd> | 카드를 왼쪽 열의 맨 아래로 이동
|<kbd>Shift</kbd>+<kbd>←</kbd> 또는 <kbd>Shift</kbd>+<kbd>H</kbd> | 카드를 왼쪽 열의 맨 위로 이동
|<kbd>Command</kbd>+<kbd>←</kbd> 또는 <kbd>Command</kbd>+<kbd>H</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>←</kbd> 또는 <kbd>Ctrl</kbd>+<kbd>H</kbd>(Windows/Linux) | 카드를 맨 왼쪽 열의 맨 아래로 이동
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>←</kbd> 또는 <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>H</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>←</kbd> 또는 <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>H</kbd>(Windows/Linux) | 카드를 맨 왼쪽 열의 맨 위로 이동
|<kbd>→</kbd> | 카드를 오른쪽 열의 맨 아래로 이동
|<kbd>Shift</kbd>+<kbd>→</kbd> 또는 <kbd>Shift</kbd>+<kbd>L</kbd> | 카드를 오른쪽 열의 맨 위로 이동
|<kbd>Command</kbd>+<kbd>→</kbd> 또는 <kbd>Command</kbd>+<kbd>L</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>→</kbd> 또는 <kbd>Ctrl</kbd>+<kbd>L</kbd>(Windows/Linux) | 카드를 맨 오른쪽 열의 맨 아래로 이동
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>→</kbd> 또는 <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>L</kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>→</kbd> 또는 <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>L</kbd>(Windows/Linux) | 카드를 맨 오른쪽 열의 맨 아래로 이동

### 카드 미리 보기

| 키보드 바로 가기 키 | 설명
|-----------|------------
|<kbd>Esc</kbd> | 카드 미리 보기 창 닫기

{% ifversion fpt or ghec %}
## {% data variables.product.prodname_actions %}

| 키보드 바로 가기 키 | 설명
|-----------|------------
|<kbd>Command</kbd>+<kbd>Space </kbd>(Mac) 또는 </br> <kbd>Ctrl</kbd>+<kbd>Space</kbd>(Windows/Linux) | 워크플로 편집기에서 워크플로 파일에 대한 제안을 가져옵니다.
|<kbd>G</kbd> <kbd>F</kbd> | 워크플로 파일로 이동
|<kbd>Shift</kbd>+<kbd>T</kbd> 또는 <kbd>T</kbd> | 로그에서 타임스탬프 전환
|<kbd>Shift</kbd>+<kbd>F</kbd> 또는 <kbd>F</kbd> | 전체 화면 로그 전환
|<kbd>Esc</kbd> | 전체 화면 로그 종료

{% endif %}

## 알림

| 키보드 바로 가기 키 | 설명
|-----------|------------
|<kbd>E</kbd> | 완료 상태로 표시
|<kbd>Shift</kbd>+<kbd>U</kbd>| 읽지 않은 상태로 표시
|<kbd>Shift</kbd>+<kbd>I</kbd>| 읽은 상태로 표시
|<kbd>Shift</kbd>+<kbd>M</kbd> | 구독 취소

## 네트워크 그래프

| 키보드 바로 가기 키 | 설명
|-----------|------------
|<kbd>←</kbd> 또는 <kbd>H</kbd> | 왼쪽으로 스크롤
|<kbd>→</kbd> 또는 <kbd>L</kbd> | 오른쪽으로 스크롤
|<kbd>↑</kbd> 또는 <kbd>K</kbd> | 위로 스크롤
|<kbd>↓</kbd> 또는 <kbd>J</kbd> | 아래로 스크롤
|<kbd>Shift</kbd>+<kbd>←</kbd>(Mac) 또는 </br> <kbd>Shift</kbd>+<kbd>H</kbd>(Windows/Linux) | 맨 왼쪽까지 스크롤
|<kbd>Shift</kbd>+<kbd>→</kbd>(Mac) 또는 </br> <kbd>Shift</kbd>+<kbd>L</kbd>(Windows/Linux) | 맨 오른쪽까지 스크롤
|<kbd>Shift</kbd>+<kbd>↑</kbd>(Mac) 또는 </br> <kbd>Shift</kbd>+<kbd>K</kbd>(Windows/Linux) | 맨 위까지 스크롤
|<kbd>Shift</kbd>+<kbd>←</kbd>(Mac) 또는 </br> <kbd>Shift</kbd>+<kbd>J</kbd>(Windows/Linux) | 맨 아래까지 스크롤
