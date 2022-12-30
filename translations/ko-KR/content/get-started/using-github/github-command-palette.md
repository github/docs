---
title: GitHub 명령 팔레트
intro: '{% data variables.product.product_name %}의 명령 팔레트를 사용하여 키보드에서 직접 명령을 탐색, 검색 및 실행합니다.'
versions:
  feature: command-palette
shortTitle: GitHub Command Palette
ms.openlocfilehash: 5c6b739f2422be780cef6fa0e44e5d75663cc036
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159055'
---
{% data reusables.command-palette.beta-note %}

## {% data variables.product.prodname_command_palette %} 정보

{% data variables.product.prodname_command_palette %}를 사용하여 {% data variables.product.product_name %}에서 명령을 탐색, 검색, 실행할 수 있습니다. 명령 팔레트는 현재 컨텍스트 및 최근 사용한 리소스를 기반으로 제안을 표시하는 주문형 방법입니다. {% data variables.product.product_name %}의 어디에서나 바로 가기 키로 명령 팔레트를 열 수 있으므로 시간을 절약하고 키보드를 계속 사용할 수 있습니다.

### 빠른 탐색

명령 팔레트를 열면 제안이 최적화되어 리포지토리, 개인 계정 또는 조직의 어디에서나 이슈 페이지와 같은 최상위 페이지에 쉽게 액세스할 수 있습니다. 원하는 위치가 목록에 없으면 위치의 이름이나 번호를 입력하여 제안을 구체화합니다.

![명령 팔레트 리포지토리 제안](/assets/images/help/command-palette/command-palette-navigation-repo-default.png)

### 명령에 쉽게 액세스

일련의 메뉴를 탐색하지 않고 키보드에서 직접 명령을 실행하는 기능으로 {% data variables.product.prodname_dotcom %}의 사용 방식을 변경할 수 있습니다. 예를 들어 몇 가지 키 입력으로 테마를 전환하여, 요구 사항이 변경되면 테마 간에 쉽게 전환할 수 있습니다.

![명령 팔레트 변경 테마](/assets/images/help/command-palette/command-palette-command-change-theme.png)

## {% data variables.product.prodname_command_palette %} 열기

다음 기본 바로 가기 키 중 하나를 사용하여 명령 팔레트를 엽니다.
- Windows 및 Linux: <kbd>Ctrl</kbd>+<kbd>K</kbd> 또는 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>K</kbd>
- Mac: <kbd>Command</kbd>+<kbd>K</kbd> 또는 <kbd>Command</kbd>+<kbd>Option</kbd>+<kbd>K</kbd>

사용자 설정의 [접근성 섹션](https://github.com/settings/accessibility)에서 명령 팔레트를 여는 데 사용하는 바로 가기 키를 사용자 지정할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_command_palette %} 바로 가기 키 사용자 지정](#customizing-your-github-command-palette-keyboard-shortcuts)”을 참조하세요.

명령 팔레트를 열면 왼쪽 위에 자신의 위치가 표시되며 이는 제안을 위한 범위(예: `mashed-avocado` 조직)로 사용됩니다.

![명령 팔레트 시작](/assets/images/help/command-palette/command-palette-launch.png)

{% note %}

**참고:**
- Markdown 텍스트를 편집 중인 경우 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>K</kbd>(Windows 및 Linux) 또는 <kbd>Command</kbd>+<kbd>Option</kbd>+<kbd>K</kbd>(Mac) 키를 사용하여 명령 팔레트를 엽니다.{% ifversion projects-v2 %}
- {% data variables.projects.project_v2 %}에서 작업하는 경우 프로젝트별 명령 팔레트가 대신 표시됩니다. 자세한 내용은 “[보기 사용자 지정](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)”을 참조하세요.{% endif %}

{% endnote %}

### {% data variables.product.prodname_command_palette %} 바로 가기 키 사용자 지정


명령 팔레트를 여는 데 사용되는 기본 바로 가기 키는 기본 OS 및 브라우저 바로 가기 키와 충돌할 수 있습니다. 계정 설정의 [접근성 섹션](https://github.com/settings/accessibility)에 바로 가기 키를 사용자 지정할 수 있는 옵션이 있습니다. 명령 팔레트 설정에서, 검색 모드와 명령 모드 모두에서 명령 팔레트를 열기 위한 바로 가기 키를 사용자 지정할 수 있습니다. 

![명령 팔레트 바로 가기 키 설정](/assets/images/help/command-palette/command-palette-keyboard-shortcut-settings.png)
## {% data variables.product.prodname_command_palette %}를 사용하여 탐색

명령 팔레트를 사용하여 {% data variables.product.product_name %}에서 액세스할 수 있는 페이지로 이동할 수 있습니다.

{% data reusables.command-palette.open-palette %}

2. 탐색할 경로를 입력하기 시작합니다. 명령 팔레트의 제안이 텍스트와 일치하도록 변경됩니다.

   ![명령 팔레트 탐색 현재 범위](/assets/images/help/command-palette/command-palette-navigation-current-scope.png)

{% data reusables.command-palette.change-scope %}

   키 입력을 사용하여 검색 범위를 좁힐 수도 있습니다. 자세한 내용은 “[키 입력 함수](#keystroke-functions)”를 참조하세요.

4. 경로 입력을 완료하거나, 화살표 키를 사용하여 제안 목록에서 원하는 경로를 강조 표시합니다.

5. <kbd>Enter</kbd> 키를 사용하여 선택한 위치로 이동합니다. 아니면 <kbd>Ctrl</kbd>+<kbd>Enter</kbd>(Windows 및 Linux) 또는 <kbd>Command</kbd>+<kbd>Enter</kbd>(Mac) 키를 사용하여 새 브라우저 탭에서 위치를 엽니다.

## {% data variables.product.prodname_command_palette %}를 사용하여 검색

명령 팔레트를 사용하여 {% data variables.location.product_location %}에서 무엇이든 검색할 수 있습니다.

{% data reusables.command-palette.open-palette %}

{% data reusables.command-palette.change-scope %}

3. 필요에 따라 키 입력을 사용하여 특정 유형의 리소스를 찾습니다.

   - <kbd>#</kbd> 이슈, 끌어오기 요청, 토론, 프로젝트 검색
   - <kbd>!</kbd> 프로젝트 검색
   - <kbd>@</kbd> 사용자, 조직, 리포지토리 검색
   - <kbd>/</kbd> 리포지토리 범위 내에서 파일 검색

   ![명령 팔레트 검색 파일](/assets/images/help/command-palette/command-palette-search-files.png)

4. 검색어 입력을 시작합니다. 명령 팔레트는 검색 범위에 따라 제안된 검색 범위를 제공합니다.

   {% tip %}

   명령 팔레트 내에서 {% data variables.product.prodname_dotcom %} 통합 검색의 전체 구문을 사용할 수도 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %}에서 정보 검색](/search-github)”을 참조하세요.

   {% endtip %}

5. 화살표 키를 사용하여 원하는 검색 결과를 강조 표시하고 <kbd>Enter</kbd> 키를 사용하여 선택한 위치로 이동합니다. 아니면 <kbd>Ctrl</kbd>+<kbd>Enter</kbd>(Windows 및 Linux) 또는 <kbd>Command</kbd>+<kbd>Enter</kbd>(Mac) 키를 사용하여 새 브라우저 탭에서 위치를 엽니다.

## {% data variables.product.prodname_command_palette %}에서 명령 실행

{% data variables.product.prodname_command_palette %}를 사용하여 명령을 실행할 수 있습니다. 예를 들어 새 리포지토리 또는 새 이슈를 만들거나, 테마를 변경할 수 있습니다. 명령을 실행할 때 해당 작업의 위치는 명령 팔레트에 표시된 기본 페이지 또는 범위에 따라 결정됩니다.

- 끌어오기 요청 및 이슈 명령은 항상 기본 페이지에서 실행됩니다.
- 더 높은 수준의 명령(예: 리포지토리 명령)은 명령 팔레트에 표시된 범위에서 실행됩니다.

지원되는 명령의 전체 목록은 “[{% data variables.product.prodname_command_palette %} 참조](#github-command-palette-reference)”를 참조하세요.

1. 명령 모드에서 명령 팔레트를 여는 기본 바로 가기 키는 <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>K</kbd>(Windows 및 Linux) 또는 <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>K</kbd>(Mac)입니다. 명령 팔레트가 이미 열려 있는 경우 <kbd>></kbd> 키를 눌러 명령 모드로 전환합니다. {% data variables.product.prodname_dotcom %}는 사용자의 위치에 따라 명령을 제안합니다.

   ![명령 팔레트 명령 모드](/assets/images/help/command-palette/command-palette-command-mode.png)

{% data reusables.command-palette.change-scope %}

3. 원하는 명령이 표시되지 않으면 범위를 확인한 다음 텍스트 상자에 명령 이름을 입력하기 시작합니다.

4. 화살표 키를 사용하여 원하는 명령을 강조 표시하고 <kbd>Enter</kbd> 키를 사용하여 실행합니다.


## 명령 팔레트 닫기

명령 팔레트가 활성 상태이면 다음 바로 가기 키 중 하나를 사용하여 명령 팔레트를 닫을 수 있습니다.

- 검색 및 탐색 모드: <kbd>Esc</kbd> 또는 <kbd>Ctrl</kbd>+<kbd>K</kbd>(Windows 및 Linux)  <kbd>Command</kbd>+<kbd>K</kbd>(Mac)
- 명령 모드: <kbd>Esc</kbd> 또는 <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>K</kbd>(Windows 및 Linux)  <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>K</kbd>(Mac)

접근성 설정에서 명령 팔레트 바로 가기 키를 사용자 지정한 경우, 명령 팔레트를 열고 닫는 데 사용자 지정된 바로 가기 키가 사용됩니다.  

## {% data variables.product.prodname_command_palette %} 참조

### 키 입력 기능

명령 팔레트가 탐색 및 검색 모드에 있을 때 다음 키 입력을 사용할 수 있습니다(명령 모드에서는 사용 불가).

| 키 입력 | 기능 |
| :- | :- |
|<kbd>></kbd>| 명령 모드로 들어갑니다. 자세한 내용은 “[{% data variables.product.prodname_command_palette %}에서 명령 실행](#running-commands-from-the-github-command-palette)”을 참조하세요. |
|<kbd>#</kbd>| 이슈, 끌어오기 요청, 토론, 프로젝트를 검색합니다. 자세한 내용은 “[{% data variables.product.prodname_command_palette %}를 사용하여 검색](#searching-with-the-github-command-palette)”을 참조하세요.|
|<kbd>@</kbd>| 사용자, 조직, 리포지토리를 검색합니다. 자세한 내용은 “[{% data variables.product.prodname_command_palette %}를 사용하여 검색](#searching-with-the-github-command-palette)”을 참조하세요.|
|<kbd>/</kbd>| 리포지토리 범위 내의 파일 또는 조직 범위 내의 리포지토리를 검색합니다. 자세한 내용은 “[{% data variables.product.prodname_command_palette %}를 사용하여 검색](#searching-with-the-github-command-palette)”을 참조하세요. |
|<kbd>!</kbd>| 프로젝트만 검색합니다. 자세한 내용은 “[{% data variables.product.prodname_command_palette %}를 사용하여 검색](#searching-with-the-github-command-palette)”을 참조하세요.|
|<kbd>Ctrl</kbd>+<kbd>C</kbd> 또는 <kbd>Command</kbd>+<kbd>C</kbd>| 강조 표시된 결과의 검색 또는 탐색 URL을 클립보드에 복사합니다.|
|<kbd>Enter</kbd>| 강조 표시된 결과로 이동하거나 강조 표시된 명령을 실행합니다.|
|<kbd>Ctrl</kbd>+<kbd>Enter</kbd> 또는 <kbd>Command</kbd>+<kbd>Enter</kbd>| 새 브라우저 탭에서 강조 표시된 검색 또는 탐색 결과를 엽니다.|
|<kbd>?</kbd>| 명령 팔레트 내에서 도움말을 표시합니다.|

### 전역 명령

다음 명령은 모든 범위에서 사용할 수 있습니다.

| 명령 | 동작|
| :- | :- | :- |
|`Import repository`|다른 버전 제어 시스템에서 프로젝트를 가져와 새 리포지토리를 만듭니다. 자세한 내용은 “[GitHub importer를 사용하여 리포지토리 가져오기](/get-started/importing-your-projects-to-github/importing-source-code-to-github/importing-a-repository-with-github-importer)”를 참조하세요.  |
|`New gist`|새 gist를 엽니다. 자세한 내용은 “[gist 만들기](/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists)”를 참조하세요. |
|`New organization`|새 조직을 만듭니다. 자세한 내용은 “[처음부터 새 조직 만들기](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)”를 참조하세요. |
|`New project`|새 프로젝트 보드를 만듭니다. 자세한 내용은 “[프로젝트 만들기](/issues/planning-and-tracking-with-projects/creating-projects/creating-a-project)”를 참조하세요.  |
|`New repository`|처음부터 새 리포지토리를 만듭니다. 자세한 내용은 “[새 리포지토리 만들기](/repositories/creating-and-managing-repositories/creating-a-new-repository)”를 참조하세요. |
|`Switch theme to <theme name>`|UI에 대한 다른 테마로 직접 변경합니다. 자세한 내용은 “[테마 설정 관리](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-your-theme-settings)”를 참조하세요. |


### 조직 명령

다음 명령은 조직의 범위 내에서만 사용할 수 있습니다.

| 명령 | 동작|
| :- | :- |
| `New team`| 현재 조직에서 새 팀을 만듭니다. 자세한 내용은 “[팀 만들기](/organizations/organizing-members-into-teams/creating-a-team)”를 참조하세요.

### 리포지토리 명령

다음 명령의 대부분은 리포지토리의 홈페이지에서만 사용할 수 있습니다. 다른 페이지에서도 명령을 사용할 수 있는 경우 동작 열에 기록됩니다.

| 명령 | 동작|
| :- | :- |
|`Clone repository: <URL type>`|{% data variables.product.prodname_cli %}, HTTPS 또는 SSH를 사용하여 리포지토리를 복제하는 데 필요한 URL을 클립보드에 복사합니다. 자세한 내용은 “[리포지토리 복제](/repositories/creating-and-managing-repositories/cloning-a-repository)”를 참조하세요.|
|`New discussion`|리포지토리에서 새 토론을 만듭니다. 자세한 내용은 “[새 토론 만들기](/discussions/quickstart#creating-a-new-discussion)”를 참조하세요.|
|`New file`|리포지토리의 페이지에서 새 파일을 만듭니다. 자세한 내용은 “[리포지토리에 파일 추가](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)”를 참조하세요.
|`New issue`|리포지토리의 페이지에서 새 이슈를 엽니다. 자세한 내용은 “[이슈 만들기](/issues/tracking-your-work-with-issues/creating-an-issue)”를 참조하세요.|
|`Open in new codespace`|이 리포지토리에 대한 codespace를 만들고 엽니다. 자세한 내용은 "[리포지토리에 대한 codespace 만들기"를 참조하세요](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository).|
|`Open in github.dev editor`|github.dev 편집기에서 현재 리포지토리를 엽니다. 자세한 내용은 “[웹 기반 편집기 열기](/codespaces/the-githubdev-web-based-editor#opening-the-web-based-editor)”를 참조하세요.|

### 파일 명령

다음 명령은 리포지토리의 파일에서 명령 팔레트를 열 때만 사용할 수 있습니다.

| 명령 | 동작|
| :- | :- |
|`Copy permalink`|현재 커밋 SHA가 포함된 파일에 대한 링크를 만들고 클립보드에 링크를 복사합니다. 자세한 내용은 “[파일에 대한 고정 링크 가져오기](/repositories/working-with-files/using-files/getting-permanent-links-to-files#press-y-to-permalink-to-a-file-in-a-specific-commit)”를 참조하세요.
|`Open in github.dev editor`|github.dev 편집기에서 현재 표시된 파일을 엽니다. 자세한 내용은 “[웹 기반 편집기 열기](/codespaces/the-githubdev-web-based-editor#opening-the-web-based-editor)”를 참조하세요.|

### 토론 명령

다음 명령은 토론에서 명령 팔레트를 열 때만 사용할 수 있습니다. 현재 페이지에서 작동하며 명령 팔레트에 설정된 범위의 영향을 받지 않습니다.

| 명령 | 동작|
| :- | :- |
|`Delete discussion...`|토론을 영구적으로 삭제합니다. 자세한 내용은 “[토론 관리](/discussions/managing-discussions-for-your-community/managing-discussions#deleting-a-discussion)”를 참조하세요.
|`Edit discussion body`|편집할 준비가 된 토론의 본문을 엽니다.
|`Subscribe`/`unsubscribe`|토론에 추가하기 위한 알림을 옵트인하거나 옵트아웃합니다. 자세한 내용은 “[알림 정보](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)”를 참조하세요.
|`Transfer discussion...`|토론을 다른 리포지토리로 이동합니다. 자세한 내용은 “[토론 관리](/discussions/managing-discussions-for-your-community/managing-discussions#transferring-a-discussion)”를 참조하세요.

### 이슈 명령

다음 명령은 이슈에서 명령 팔레트를 열 때만 사용할 수 있습니다. 현재 페이지에서 작동하며 명령 팔레트에 설정된 범위의 영향을 받지 않습니다.

| 명령 | 동작|
| :- | :- |
|`Close`/`reopen issue`|현재 이슈를 닫거나 다시 엽니다. 자세한 내용은 “[이슈 정보](/issues/tracking-your-work-with-issues/about-issues)”를 참조하세요.|
|`Convert issue to discussion...`|현재 이슈를 토론으로 변환합니다. 자세한 내용은 “[토론 조정](/discussions/managing-discussions-for-your-community/moderating-discussions#converting-an-issue-to-a-discussion)”을 참조하세요.
|`Delete issue...`|현재 이슈를 삭제합니다. 자세한 내용은 “[이슈 삭제](/issues/tracking-your-work-with-issues/deleting-an-issue)”를 참조하세요.|
|`Edit issue body`|편집할 준비가 된 이슈의 본문을 엽니다.
|`Edit issue title`|편집할 준비가 된 이슈의 제목을 엽니다.
|`Lock issue`|리포지토리에 대한 쓰기 액세스 권한이 있는 사용자로 새 주석을 제한합니다. 자세한 내용은 “[대화 잠금](/communities/moderating-comments-and-conversations/locking-conversations)”을 참조하세요.
|`Pin`/`unpin issue`|리포지토리의 고정된 이슈 섹션에 이슈가 표시되는지 여부를 변경합니다. 자세한 내용은 “[리포지토리에 이슈 고정](/issues/tracking-your-work-with-issues/pinning-an-issue-to-your-repository)”을 참조하세요.|
|`Subscribe`/`unsubscribe`|이 이슈의 변경 내용에 대한 알림을 옵트인하거나 옵트아웃합니다. 자세한 내용은 “[알림 정보](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)”를 참조하세요.
|`Transfer issue...`|이슈를 다른 리포지토리로 전송합니다. 자세한 내용은 “[이슈를 다른 리포지토리로 전송](/issues/tracking-your-work-with-issues/transferring-an-issue-to-another-repository)”을 참조하세요.|

### 끌어오기 요청 명령

다음 명령은 끌어오기 요청에서 명령 팔레트를 열 때만 사용할 수 있습니다. 현재 페이지에서 작동하며 명령 팔레트에 설정된 범위의 영향을 받지 않습니다.

| 명령 | 동작|
| :- | :- |
|`Close`/`reopen pull request`|현재 끌어오기 요청을 닫거나 다시 엽니다. 자세한 내용은 “[끌어오기 요청 정보](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)”를 참조하세요.|
|`Convert to draft`/`Mark pull request as ready for review`|끌어오기 요청의 상태를 변경하여 검토할 준비가 되었는지, 되지 않았는지로 표시합니다. 자세한 내용은 “[끌어오기 요청의 상태 변경](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)”을 참조하세요.|
|`Copy current branch name`| 끌어오기 요청의 헤드 분기 이름을 클립보드에 추가합니다.
|`Edit pull request body`|편집할 준비가 된 끌어오기 요청의 본문을 엽니다.
|`Edit pull request title`|편집할 준비가 된 끌어오기 요청의 제목을 엽니다.
|`Open in new codespace`|끌어오기 요청의 헤드 분기에 대한 codespace를 만들고 엽니다. 자세한 내용은 "[리포지토리에 대한 codespace 만들기"를 참조하세요](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository).
|`Subscribe`/`unsubscribe`|이 끌어오기 요청의 변경 내용에 대한 알림을 옵트인하거나 옵트아웃합니다. 자세한 내용은 “[알림 정보](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)”를 참조하세요.
|`Update current branch`|끌어오기 요청의 헤드 분기를 기본 분기의 변경 내용으로 업데이트합니다. 이는 리포지토리의 기본 분기를 대상으로 하는 끌어오기 요청에만 사용할 수 있습니다. 자세한 내용은 “[분기 정보](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)”를 참조하세요.|
