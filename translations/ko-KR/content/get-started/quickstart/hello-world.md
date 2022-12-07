---
title: Hello World
intro: '이 Hello World 연습을 따라 {% data variables.product.product_name %}를 시작합니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Pull requests
  - Fundamentals
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 71278b720bcbfaabc892c396ab7fb558f5309173
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145125863'
---
## 소개

{% data variables.product.product_name %}는 버전 제어 및 협업을 위한 코드 호스팅 플랫폼입니다. 사용자와 다른 사용자가 어디서나 프로젝트를 함께 작업할 수 있습니다.

이 자습서에서는 리포지토리, 분기, 커밋 및 끌어오기 요청과 같은 {% data variables.product.product_name %} 필수 사항을 설명합니다. 사용자 고유의 Hello World 리포지토리를 만들고 인기 있는 코드 작성 및 리뷰 방식인 {% data variables.product.product_name %}의 끌어오기 요청 워크플로를 알아봅니다.

이 빠른 시작 가이드에서는 다음을 수행합니다.

* 리포지토리 만들기 및 사용
* 새 분기 시작 및 관리
* 파일을 변경하고 {% data variables.product.product_name %}에 커밋으로 푸시
* 끌어오기 요청 열기 및 병합

이 자습서를 완료하려면 [{% data variables.product.product_name %} 계정](http://github.com) 및 인터넷 액세스가 필요합니다. 코딩하거나 명령줄을 사용하거나 Git({% data variables.product.product_name %}가 빌드된 버전 제어 소프트웨어)를 설치하는 방법을 알 필요가 없습니다. 이 가이드에 사용된 식에 대한 질문이 있는 경우 [용어집](/get-started/quickstart/github-glossary)으로 이동하여 용어에 대해 자세히 알아보세요.

## 리포지토리 만들기

리포지토리는 일반적으로 단일 프로젝트를 구성하는 데 사용됩니다. 리포지토리에는 프로젝트에 필요한 모든 폴더와 파일, 이미지, 비디오, 스프레드시트 및 데이터 세트가 포함될 수 있습니다. 리포지토리에 _README_ 파일, 프로젝트에 대한 정보가 포함된 파일이 있는 경우도 많습니다. _README_ 파일은 일반 텍스트 Markdown 언어로 작성됩니다. 이 [참고 자료](https://www.markdownguide.org/cheat-sheet/)를 사용하여 Markdown 구문을 시작할 수 있습니다. {% data variables.product.product_name %}를 사용하면 새 리포지토리를 만드는 동시에 _README_ 파일을 추가할 수 있습니다. {% data variables.product.product_name %}는 라이선스 파일과 같은 다른 일반적인 옵션도 제공하지만 지금 선택할 필요는 없습니다.

`hello-world` 리포지토리는 아이디어, 리소스를 저장하거나 다른 사용자와 내용을 공유하고 토론하는 장소가 될 수 있습니다.

{% data reusables.repositories.create_new %}
1. **Repository name**(리포지토리 이름) 상자에 `hello-world`를 입력합니다.
2. **Description**(설명) 상자에 간단한 설명을 작성합니다.
3. **Add a README file**(README 파일 추가)을 선택합니다.
4. 리포지토리가 **Public**(퍼블릭)인지 **Private**(프라이빗)인지 선택합니다.
5. **Create repository**(리포지토리 만들기)를 클릭합니다.

   ![hello world 리포지토리 만들기](/assets/images/help/repository/hello-world-repo.png)

## 분기 만들기

분기하면 한 번에 다른 버전의 리포지토리를 사용할 수 있습니다.

기본적으로 리포지토리에는 최종 분기로 간주되는 `main`이라는 하나의 분기가 있습니다. 리포지토리의 `main`에서 추가 분기를 만들 수 있습니다. 분기를 사용하여 한 번에 다른 버전의 프로젝트를 사용할 수 있습니다. 이 기능은 코드의 기본 소스를 변경하지 않고 프로젝트에 새 기능을 추가하려는 경우에 유용합니다. 다른 분기에서 수행된 작업은 병합할 때까지 주 분기에 표시되지 않습니다. 이 내용은 이 가이드의 뒷부분에서 설명합니다. 분기를 사용하여 분기를 `main`으로 커밋하기 전에 실험하고 편집할 수 있습니다.

분기에서 `main` 분기를 만들 때 해당 시점의 `main` 복사본 또는 스냅샷을 만듭니다. 분기에서 작업하는 동안 다른 사람이 `main` 분기를 변경한 경우 해당 업데이트를 가져올 수 있습니다.

이 다이어그램은 다음을 보여 줍니다.

* `main` 분기
* `feature`라는 새 분기
* `feature`가 `main`에 병합되기 전에 소요되는 여정

![분기 다이어그램](/assets/images/help/repository/branching.png)

다른 버전의 파일을 저장한 적이 있나요? 다음과 같은 것입니다.

* `story.txt`
* `story-edit.txt`
* `story-edit-reviewed.txt`

분기는 {% data variables.product.product_name %} 리포지토리에서 비슷한 목표를 달성합니다.

{% data variables.product.product_name %}에서 개발자, 작성자 및 디자이너는 버그 수정 및 기능 작업을 `main`(프로덕션) 분기와 별도로 유지하기 위해 분기를 사용합니다. 변경이 준비되면 분기를 `main`에 병합합니다.

### 분기 만들기

1. `hello-world` 리포지토리의 **Code**(코드) 탭을 클릭합니다.
2. **main**(기본)으로 표시된 파일 목록의 맨 위에 있는 드롭다운을 클릭합니다.
   ![분기 메뉴](/assets/images/help/branch/branch-selection-dropdown.png)
4. 텍스트 상자에 분기 이름 `readme-edits`를 입력합니다.
5. **Create branch: readme-edits from main**(기본에서 분기 readme-edits 만들기)을 클릭합니다.

![분기 메뉴](/assets/images/help/repository/new-branch.png)

이제 두 개의 분기인 `main`과 `readme-edits`가 있습니다. 지금은 둘이 정확히 같아 보입니다. 다음으로 새 분기에 변경 내용을 추가합니다.

## 변경 적용 및 커밋

이전 단계에서 새 분기를 만들면 {% data variables.product.product_name %}에서 `main`의 사본인 새 `readme-edits` 분기의 코드 페이지로 이동합니다.

리포지토리에서 파일을 변경하고 저장할 수 있습니다. {% data variables.product.product_name %}에서 저장된 변경 내용을 커밋이라고 합니다. 각 커밋에는 특정 내용을 변경한 이유에 대한 설명인 관련 커밋 메시지가 있습니다. 커밋 메시지는 다른 기여자가 사용자가 수행한 작업과 이유를 이해할 수 있도록 변경 내용의 기록을 캡처합니다.

1. 생성한 `readme-edits` 분기에서 _README.md_ 파일을 클릭합니다.
2. {% octicon "pencil" aria-label="The edit icon" %} 아이콘을 클릭하여 파일을 편집합니다.
3. 편집기에서 자신에 대한 내용을 간략하게 작성합니다. 다른 Markdown 요소를 사용해 봅니다.
4. **Commit changes**(변경 내용 커밋) 상자에서 변경 내용을 설명하는 커밋 메시지를 작성합니다.
5. **Commit changes**(변경 내용 커밋)를 클릭합니다.

   ![커밋 예제](/assets/images/help/repository/first-commit.png)

변경 내용은 `readme-edits` 분기의 README 파일에만 적용되므로 이제 이 분기에는 `main`과 다른 콘텐츠가 포함됩니다.

## 끌어오기 요청 열기

`main`의 분기가 변경되었으므로 끌어오기 요청을 열 수 있습니다.

끌어오기 요청은 {% data variables.product.product_name %} 협업의 핵심입니다. 끌어오기 요청을 열면 변경 내용을 제안하고 누군가가 기여를 검토해서 끌어온 다음 해당 분기에 병합하도록 요청합니다. 끌어오기 요청은 두 분기 콘텐츠의 diff 또는 차이점을 표시합니다. 변경 내용, 더하기 및 빼기 항목은 서로 다른 색으로 표시됩니다.

커밋하는 즉시 코드를 완료하기 전에 끌어오기 요청을 열고 토론을 시작할 수 있습니다.

끌어오기 요청 메시지에서 {% data variables.product.product_name %}의 `@mention` 기능을 사용하면 특정한 사람이나 팀이 복도 끝에 있든, 10시간의 시차가 있는 곳에 있든 상관없이 이들로부터 피드백을 요청할 수 있습니다.

사용자 고유의 리포지토리에서 끌어오기 요청을 열고 직접 병합할 수도 있습니다. 대규모 프로젝트에서 작업하기 전에 {% data variables.product.product_name %} 흐름을 학습하기 좋은 방법입니다.

1. `hello-world` 리포지토리의 **Pull requests**(끌어오기 요청) 탭을 클릭합니다.
2. **New pull request**(새 끌어오기 요청)를 클릭합니다.
3. **Example Comparisons**(예제 비교) 상자에서 생성한 분기 `readme-edits`를 선택하여 `main`(원본)과 비교합니다.
4. 비교 페이지의 diff에서 변경 내용을 살펴보고 제출하려는 내용인지 확인합니다.

   ![diff 예제](/assets/images/help/repository/diffs.png)

5. **끌어오기 요청 만들기** 를 클릭합니다.
6. 끌어오기 요청에 제목을 지정하고 변경 내용에 대한 간략한 설명을 작성합니다. 이모지와 끌어서 놓기 이미지 및 gif를 포함할 수 있습니다.
7. 필요에 따라 제목 및 설명의 오른쪽에서 **Reviewers**(검토자) 옆에 있는 {% octicon "gear" aria-label="The Gear icon" %} 아이콘을 클릭합니다. 끌어오기 요청에 해당 옵션 중 하나를 추가하려면 **Assignees**(담당자), **Labels**(라벨), **Projects**(프로젝트) 또는 **Milestone**(마일스톤)을 클릭합니다. 아직 추가할 필요는 없지만 옵션을 사용하면 끌어오기 요청을 사용하여 다양한 방식으로 협업할 수 있습니다. 자세한 내용은 “[끌어오기 요청 정보](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)”를 참조하세요.
7. **끌어오기 요청 만들기** 를 클릭합니다.

이제 협력자가 편집 내용을 검토하고 제안할 수 있습니다.

## 끌어오기 요청 병합

이 마지막 단계에서는 `readme-edits` 분기를 `main` 분기에 병합합니다.  끌어오기 요청을 병합하면 `readme-edits` 분기 관련 변경 사항이 `main`에 통합됩니다.

경우에 따라 끌어오기 요청은 `main`의 기존 코드로 충돌하는 코드를 변경할 수 있습니다. 충돌이 있는 경우 {% data variables.product.product_name %}는 충돌하는 코드에 대해 경고하고 충돌이 해결될 때까지 병합을 방지합니다. 충돌을 해결하는 커밋을 만들거나 끌어오기 요청에서 주석을 사용하여 팀 구성원과 충돌을 논의할 수 있습니다.

이 연습에서는 충돌이 없으므로 분기를 주 분기에 병합할 준비가 된 것입니다.

1. 변경 내용을 `main`에 병합하려면 **Merge pull request**(병합 끌어오기 요청)를 클릭합니다.
  ![병합 단추 스크린샷.](/assets/images/help/pull_requests/pullrequest-mergebutton.png)
2. **Confirm merge**(병합 확인)를 클릭합니다. 요청이 성공적으로 병합되고 요청이 종결되었다는 메시지가 표시됩니다.
3. **Delete branch**(분기 삭제)를 클릭합니다. 끌어오기 요청이 병합되고 변경 내용이 `main`에 있으므로 `readme-edits` 분기를 안전하게 삭제할 수 있습니다. 프로젝트를 추가로 변경하려면 항상 새 분기를 만들고 이 프로세스를 반복하면 됩니다.

## 다음 단계

이 자습서를 완료하여 프로젝트를 만들고 {% data variables.product.product_name %}에서 끌어오기 요청을 하는 방법을 배웠습니다.

이 자습서에서 수행한 작업은 다음과 같습니다.

* 오픈 소스 리포지토리 만들기
* 새 분기 시작 및 관리
* 파일 변경 및 {% data variables.product.product_name %}에 해당 변경 내용 커밋
* 끌어오기 요청 열기 및 병합

{% data variables.product.product_name %} 프로필을 살펴보면 기여도 그래프에 반영된 작업이 표시됩니다.

분기 및 끌어오기 요청의 기능에 대한 자세한 내용은 “[GitHub 흐름](/get-started/quickstart/github-flow)”을 참조하세요. {% data variables.product.product_name %}를 시작하는 방법에 대한 자세한 내용은 [빠른 시작](/get-started/quickstart)의 다른 가이드를 참조하세요.
