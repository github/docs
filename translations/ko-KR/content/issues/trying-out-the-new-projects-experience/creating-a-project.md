---
title: 프로젝트 만들기(베타)
intro: 프로젝트를 만들고, 채우고, 사용자 지정 필드를 추가하는 방법을 알아봅니다.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
- Projects
ms.openlocfilehash: 3fa7e52f09f3be67a036000b13f484b29852a741
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145135364"
---
프로젝트는 {% data variables.product.company_short %} 데이터를 사용하여 최신 상태를 유지하는 사용자 지정 가능한 항목 컬렉션입니다. 프로젝트는 문제, 끌어오기 요청, 사용자가 작성한 아이디어를 추적할 수 있습니다. 사용자 지정 필드를 추가하고 특정 용도로 보기를 만들 수 있습니다.

{% data reusables.projects.projects-beta %}

## <a name="creating-a-project"></a>프로젝트 만들기

### <a name="creating-an-organization-project"></a>조직 프로젝트 만들기

{% data reusables.projects.create-project %}

### <a name="creating-a-user-project"></a>사용자 프로젝트 만들기

{% data reusables.projects.create-user-project %}

## <a name="updating-your-project-description-and-readme"></a>프로젝트 설명 및 추가 정보 업데이트

{% data reusables.projects.project-description %}

## <a name="adding-items-to-your-project"></a>프로젝트에 항목 추가

프로젝트는 초안 문제, 문제, 끌어오기 요청을 추적할 수 있습니다.

### <a name="creating-draft-issues"></a>초안 문제 만들기

초안 문제는 아이디어를 빠르게 캡처하는 데 유용합니다.

1. {% octicon "plus" aria-label="plus icon" %} 옆에 있는 프로젝트의 아래쪽 행에 커서를 놓습니다.
1. 아이디어를 입력한 다음 **Enter** 키를 누릅니다.
1. 본문 텍스트를 추가하려면 초안 문제의 제목을 클릭합니다. 표시되는 Markdown 입력 상자에 초안 문제 본문에 대한 텍스트를 입력한 다음 **저장** 을 클릭합니다.

초안 문제에는 프로젝트의 제목, 텍스트 본문, 담당자, 사용자 지정 필드가 있을 수 있습니다. 초안 문제에 대한 리포지토리, 레이블 또는 마일스톤을 채우려면 먼저 초안 문제를 문제로 변환해야 합니다. 자세한 내용은 “[초안 문제를 문제로 변환](#converting-draft-issues-to-issues)”을 참조하세요.

{% note %}

**참고**: 사용자는 초안 문제가 문제로 변환되지 않는 한 초안 문제에 할당되거나 언급될 때 알림을 받지 못합니다.

{% endnote %}

### <a name="issues-and-pull-requests"></a>문제 및 끌어오기 요청

#### <a name="paste-the-url-of-an-issue-or-pull-request"></a>문제 또는 끌어오기 요청의 URL 붙여넣기

1. {% octicon "plus" aria-label="plus icon" %} 옆에 있는 프로젝트의 아래쪽 행에 커서를 놓습니다.
1. 문제 또는 끌어오기 요청의 URL을 붙여넣습니다.

#### <a name="searching-for-an-issue-or-pull-request"></a>문제 또는 끌어오기 요청 검색

1. {% octicon "plus" aria-label="plus icon" %} 옆에 있는 프로젝트의 아래쪽 행에 커서를 놓습니다.
2. <kbd>#</kbd> 을 입력합니다.
3. 끌어오기 요청 또는 문제가 있는 리포지토리를 선택합니다. 리포지토리 이름의 일부를 입력하여 옵션 범위를 좁힐 수 있습니다.
4. 문제 또는 끌어오기 요청을 선택합니다. 제목의 일부를 입력하여 옵션 범위를 좁힐 수 있습니다.

#### <a name="adding-multiple-issues-or-pull-requests-from-a-repository"></a>리포지토리에서 여러 문제 또는 끌어오기 요청 추가

1. {% data variables.product.product_location %}에서 프로젝트에 추가할 문제 또는 끌어오기 요청이 포함된 리포지토리로 이동합니다.
{% data reusables.repositories.sidebar-issue-pr %}
1. 각 문제 제목 왼쪽에서 프로젝트에 추가할 문제를 선택합니다.
  ![문제 또는 끌어오기 요청을 선택하는 확인란을 보여 주는 스크린샷](/assets/images/help/issues/select-issue-checkbox.png)
1. 필요에 따라 페이지에서 모든 문제 또는 끌어오기 요청을 선택하려면 문제 또는 끌어오기 요청 목록 맨 위에서 모두를 선택합니다. 
  ![화면에서 모두를 선택하는 확인란을 보여 주는 스크린샷](/assets/images/help/issues/select-all-checkbox.png)
1. 문제 또는 끌어오기 요청 목록 위에서 **프로젝트(베타)** 를 클릭합니다. 
  ![화면에서 모두를 선택하는 확인란을 보여 주는 스크린샷](/assets/images/help/issues/projects-beta-assign-button.png)
1. 선택한 문제 또는 끌어오기 요청을 추가할 프로젝트를 클릭합니다.
  ![화면에서 모두를 선택하는 확인란을 보여 주는 스크린샷](/assets/images/help/issues/projects-beta-assign-dropdown.png)

#### <a name="assigning-a-project-from-within-an-issue-or-pull-request"></a>문제 또는 끌어오기 요청 내에서 프로젝트 할당

1. 프로젝트에 추가하려는 문제 또는 끌어오기 요청으로 이동합니다.
2. 사이드바에서 **프로젝트** 를 클릭합니다.
3. 문제나 끌어오기 요청을 추가하려는 프로젝트를 선택합니다.
4. 필요에 따라 사용자 지정 필드를 채웁니다.

   ![프로젝트 사이드바](/assets/images/help/issues/project_side_bar.png)

## <a name="converting-draft-issues-to-issues"></a>초안 문제를 문제로 변환

테이블 레이아웃에서:

1. 변환하려는 초안 문제에서 {% octicon "triangle-down" aria-label="the item menu" %}를 클릭합니다.
2. **문제로 변환** 을 선택합니다.
3. 문제를 추가하려는 리포지토리를 선택합니다.
4. 또는 변환하려는 초안 문제의 `labels`, `milestone` 또는 `repository` 필드를 편집합니다.

보드 레이아웃에서:

1. 변환하려는 초안 문제에서 {% octicon "kebab-horizontal" aria-label="the item menu" %}를 클릭합니다.
2. **문제로 변환** 을 선택합니다.
3. 문제를 추가하려는 리포지토리를 선택합니다.

## <a name="removing-items-from-your-project"></a>프로젝트에서 항목 제거

항목을 보관하여 프로젝트의 항목에 대한 컨텍스트를 유지하지만 프로젝트 보기에서는 제거할 수 있습니다. 항목을 삭제하여 프로젝트에서 완전히 제거할 수 있습니다.

1. 보관하거나 삭제할 항목을 선택합니다. 여러 항목을 선택하려면 다음 중 하나를 수행합니다.
     - 각 항목을 <kbd>Command</kbd> + 클릭(Mac)하거나 <kbd>Ctrl</kbd> + 클릭(Windows/Linux)합니다.
     - 항목을 선택한 다음 <kbd>Shift</kbd>+<kbd>(</kbd> 또는 <kbd>Shift</kbd>+<kbd>)</kbd> 를 선택하여 처음에 선택한 항목 위 또는 아래에 있는 추가 항목을 선택합니다.
     - 항목을 선택한 다음 <kbd>Shift</kbd> + 다른 항목을 클릭하여 두 항목 사이의 모든 항목을 선택합니다.
     - <kbd>Command</kbd>+<kbd>A</kbd>(Mac) 또는 <kbd>Ctrl</kbd>+<kbd>A</kbd>(Windows/Linux)를 입력하여 보드 레이아웃의 열에 있는 모든 항목 또는 테이블 레이아웃의 모든 항목을 선택합니다.
2. 선택한 모든 항목을 보관하려면 <kbd>E</kbd>를 입력합니다. 선택한 항목을 모두 삭제하려면 <kbd>Del</kbd>을 입력합니다. 또는 {% octicon "triangle-down" aria-label="the item menu" %}(테이블 레이아웃에서) 또는 {% octicon "kebab-horizontal" aria-label="the item menu" %}(보드 레이아웃에서)를 선택한 다음 원하는 작업을 선택합니다.

보관된 항목은 복원할 수 있지만 삭제된 항목은 복원할 수 없습니다. 자세한 내용은 “[보관된 항목 복원](#restoring-archived-items)”을 참조하세요.

## <a name="restoring-archived-items"></a>보관된 항목 복원

1. 프로젝트로 이동합니다.
1. 오른쪽 위에서 {% octicon "kebab-horizontal" aria-label="the kebab icon" %} 아이콘을 클릭합니다.
1. 메뉴에서 **보관된 항목** 을 클릭합니다.
1. 필요에 따라 표시된 보관된 항목을 필터링하려면 항목 목록 위의 텍스트 상자에 필터를 입력합니다. 사용 가능한 필터에 대한 자세한 내용은 "[프로젝트 필터링(베타)"](/issues/trying-out-the-new-projects-experience/filtering-projects)을 참조하세요.

   ![보관된 항목을 필터링하는 필드를 보여 주는 스크린샷](/assets/images/help/issues/filter-archived-items.png)
   
1. 각 항목 제목 왼쪽에서 복원할 항목을 선택합니다.

   ![보관된 항목 옆의 확인란을 보여 주는 스크린샷](/assets/images/help/issues/select-archived-item.png)
   
1. 선택한 항목을 복원하려면 항목 목록 위에서 **복원** 을 클릭합니다. 

   !["복원" 단추를 보여 주는 스크린샷](/assets/images/help/issues/restore-archived-item-button.png)

## <a name="adding-fields"></a>필드 추가

필드 값이 변경되면 프로젝트와 추적하는 항목이 최신 상태가 되도록 자동으로 동기화됩니다.

### <a name="showing-existing-fields"></a>기존 필드 표시

프로젝트는 제목, 담당자, 레이블, 마일스톤, 리포지토리, 검토자, 연결된 끌어오기 요청에 대한 변경 내용을 포함하여 문제 및 끌어오기 요청에 대한 최신 정보를 추적합니다. 프로젝트가 초기화되면 “제목”과 “담당자”가 표시되고 다른 필드는 숨겨져 있습니다. 프로젝트에서 이러한 필드의 표시 여부를 변경할 수 있습니다.

1. {% data reusables.projects.open-command-palette %}
2. “표시”를 입력하기 시작합니다.
3. 원하는 명령을 선택합니다(예: “Show: Repository”).

또는 UI에서 이 작업을 수행할 수 있습니다.

1. 맨 오른쪽 필드 머리글에서 {% octicon "plus" aria-label="the plus icon" %}을 클릭합니다. 프로젝트 필드가 있는 드롭다운 메뉴가 나타납니다.
   ![필드 표시 또는 숨기기](/assets/images/help/issues/projects_fields_menu.png)
2. 표시하거나 숨기려는 필드를 선택합니다. {% octicon "check" aria-label="check icon" %}은 표시되는 필드를 나타냅니다.

### <a name="adding-custom-fields"></a>사용자 지정 필드 추가

프로젝트에 사용자 지정 필드를 추가할 수 있습니다. 사용자 지정 필드는 프로젝트의 문제 및 끌어오기 요청의 사이드바에 표시됩니다.

사용자 지정 필드는 텍스트, 숫자, 날짜, 단일 선택 또는 반복일 수 있습니다.

- 텍스트: 값은 모든 텍스트일 수 있습니다.
- 숫자: 값은 숫자여야 합니다.
- 날짜: 값은 날짜여야 합니다.
- 단일 선택: 지정된 값 집합에서 값을 선택해야 합니다.
- 반복: 날짜 범위 집합(반복)에서 값을 선택해야 합니다. 과거의 반복은 자동으로 “완료됨”으로 표시되고 현재 날짜 범위를 포함하는 반복은 “현재”로 표시됩니다. 자세한 내용은 “[프로젝트에서 반복 관리](/issues/trying-out-the-new-projects-experience/managing-iterations)”를 참조하세요.

1. {% data reusables.projects.open-command-palette %} “새 필드 만들기”의 일부를 입력하기 시작합니다. 명령 팔레트에 “새 필드 만들기”가 표시되면 선택합니다.
2. 또는 맨 오른쪽 필드 머리글에서 {% octicon "plus" aria-label="the plus icon" %}을 클릭합니다. 프로젝트 필드가 있는 드롭다운 메뉴가 나타납니다. **새 필드** 를 클릭합니다.
3. 새 필드에 대한 정보를 입력할 수 있는 팝업이 표시됩니다.
   ![새 필드](/assets/images/help/issues/projects_new_field.png)
4. 텍스트 상자에 새 필드의 이름을 입력합니다.
5. 드롭다운 메뉴를 선택하고 원하는 형식을 클릭합니다.
6. **단일 선택** 을 형식으로 지정한 경우 옵션을 입력합니다.
7. **반복** 을 형식으로 지정한 경우 첫 번째 반복의 시작 날짜와 반복 기간을 입력합니다. 세 번의 반복이 자동으로 만들어지고 프로젝트의 설정 페이지에서 추가 반복을 추가할 수 있습니다.

사용자 지정 필드를 편집할 수도 있습니다.

{% data reusables.projects.project-settings %}
1. **필드** 에서 편집하려는 필드를 선택합니다.
1. 단일 선택 필드의 경우 옵션을 추가, 삭제 또는 다시 정렬할 수 있습니다.
1. 반복 필드의 경우 반복을 추가 또는 삭제하고 반복 이름을 변경하고 반복의 시작 날짜와 기간을 변경할 수 있습니다.

   반복 필드 수정에 대한 자세한 내용은 “[프로젝트에서 반복 관리](/issues/trying-out-the-new-projects-experience/managing-iterations)”를 참조하세요.

## <a name="customizing-your-views"></a>보기 사용자 지정

프로젝트를 테이블 또는 보드로 보고, 필드별로 항목을 그룹화하고, 항목을 필터링하는 등의 작업을 수행할 수 있습니다. 자세한 내용은 “[프로젝트(베타) 보기 사용자 지정](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)”을 참조하세요.

## <a name="configuring-built-in-automation"></a>기본 제공 자동화 구성

{% data reusables.projects.about-workflows %}

프로젝트에 대한 기본 제공 워크플로를 사용하거나 사용하지 않을 수 있습니다.

{% data reusables.projects.enable-basic-workflow %}

## <a name="adding-your-project-to-a-repository"></a>리포지토리에 프로젝트 추가

리포지토리에서 관련 프로젝트를 나열할 수 있습니다. 리포지토리를 소유한 동일한 사용자 또는 조직이 소유한 프로젝트만 나열할 수 있습니다.

리포지토리 멤버가 리포지토리에 나열되어 있는 프로젝트를 보려면 프로젝트에 대한 가시성이 있어야 합니다. 자세한 내용은 “[프로젝트의 표시 여부 관리(베타)](/issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects)” 및 “[프로젝트에 대한 액세스 관리(베타)](/issues/trying-out-the-new-projects-experience/managing-access-to-projects)”를 참조하세요.

1. {% data variables.product.prodname_dotcom %}에서 리포지토리의 기본 페이지로 이동합니다.
1. {% octicon "table" aria-label="the project icon" %} **프로젝트** 를 클릭합니다.
1. 사이드바에서 **프로젝트(베타)** 를 클릭합니다.
1. **프로젝트 추가** 를 클릭합니다.
1. 표시되는 검색 창에서 리포지토리를 소유한 동일한 사용자 또는 조직이 소유한 프로젝트를 검색합니다.
1. 프로젝트를 클릭하여 리포지토리에 나열합니다.
