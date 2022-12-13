---
title: GitHub 클래스룸에서 GitHub Codespaces 사용
shortTitle: Using Codespaces with GitHub Classroom
product: '{% data reusables.gated-features.codespaces-classroom-articles %}'
intro: '{% data variables.product.prodname_github_codespaces %}를 할당의 기본 편집기로 사용해 학생들에게 원클릭 설정으로 브라우저 기반 Visual Studio Code 환경에 대한 액세스 권한을 부여할 수 있습니다.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can enable {% data variables.product.prodname_github_codespaces %} for their organization and integrate {% data variables.product.prodname_github_codespaces %} as the supported editor for an assignment. {% data reusables.classroom.classroom-admins-link %}'
ms.openlocfilehash: 832ab470d13cc741bc4a71e77840c99da5ff3de6
ms.sourcegitcommit: a35d85531445980b5f04d3fc70180a29dad37f89
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/01/2022
ms.locfileid: '148189915'
---
## {% data variables.product.prodname_github_codespaces %} 정보

{% data variables.product.prodname_github_codespaces %}는 컨테이너를 사용하여 개발용 공용 언어, 도구, 유틸리티를 제공하는 즉각적인 클라우드 기반 개발 환경입니다. {% data variables.product.prodname_github_codespaces %}도 구성할 수 있으므로 프로젝트의 모든 사용자에 대해 동일한 사용자 지정된 개발 환경을 만들 수 있습니다. 자세한 내용은 "[{% data variables.product.prodname_github_codespaces %} 개요](/codespaces/overview)"를 참조하세요.

조직 또는 엔터프라이즈에서 {% data variables.product.prodname_github_codespaces %}을(를) 사용하도록 설정하면 사용자는 모든 분기에서 codespace를 만들거나 조직 또는 엔터프라이즈 리포지토리에서 커밋하고 클라우드 기반 컴퓨팅 리소스를 사용하여 개발을 시작할 수 있습니다. 브라우저에서 또는 Visual Studio Code 사용하여 로컬로 codespace에 연결할 수 있습니다. 

{% data reusables.codespaces.links-to-get-started %}

{% data variables.product.prodname_github_codespaces %}을(를) GitHub 교실 과제의 과제에 대한 기본 편집기로 설정하는 것은 학생과 교사 모두에게 유용합니다. {% data variables.product.prodname_github_codespaces %}는 각 codespace가 클라우드 기반이며 로컬 설정이 필요하지 않으므로 대출된 디바이스를 사용하거나 로컬 IDE 설정에 액세스할 수 없는 학생에게 좋은 옵션입니다. 학생들은 Visual Studio Code 내 과제 리포지토리에 대한 codespace를 브라우저에서 바로 시작하고, 추가 구성 없이 바로 개발을 시작할 수 있습니다.  

복잡한 설치 환경이 있는 과제의 경우 교사는 리포지토리의 codespace에 대한 개발 컨테이너 구성을 사용자 지정할 수 있습니다. 이렇게 하면 학생이 codespace를 만들면 codespace가 교사가 구성한 개발 환경과 함께 자동으로 열립니다. 개발 컨테이너에 대한 자세한 내용은 “[개발 컨테이너 소개](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)”를 참조하세요.

{% note %}

**참고**: 개별 Codespace는 중지된 채 장기간 사용되지 않은 상태로 두면 자동으로 삭제됩니다. 자세한 내용은 “[내 Codespace의 자동 삭제 구성](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)”을 참조하세요.

{% endnote %}

{% data reusables.education.student-codespaces-benefit %}

{% note %}

**참고:** {% data reusables.education.note-on-student-codespaces-usage %} 

{% endnote %}

## 확인된 교사에 대한 {% data variables.product.prodname_codespaces %} 교육 혜택 정보

{% data variables.product.prodname_codespaces %} 교육 혜택은 확인된 교사에게 {% data variables.product.prodname_classroom %}에서 사용할 수 있는 {% data variables.product.prodname_github_codespaces %} 시간의 무료 월별 수당을 제공합니다. 무료 시간은 학생당 codespace 1개가 저장된 2코어 머신에서 매월 5개의 과제를 수행하는 50명 규모 수업을 진행하기에 충분한 수준으로 추정됩니다.

{% data reusables.classroom.free-limited-codespaces-for-verified-teachers-beta-note %}

확인된 교사가 되려면 교육자 또는 교사 혜택에 대한 승인을 받아야 합니다. 자세한 내용은 “[교사로 {% data variables.product.prodname_global_campus %}에 신청](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers/apply-to-github-global-campus-as-a-teacher)”을 참조하세요. 

정식 교사임을 확인받았다면 [교사용 {% data variables.product.prodname_global_campus %}](https://education.github.com/globalcampus/teacher)를 방문하여 조직을 GitHub Team으로 업그레이드하세요. 자세한 내용은 "[GitHub 제품](/get-started/learning-about-github/githubs-products#github-team)"을 참조하세요. 

{% data variables.product.prodname_codespaces %} 교육 혜택을 받을 자격이 있는 경우 조직에 대해 {% data variables.product.prodname_classroom %}에서 {% data variables.product.prodname_github_codespaces %}를 사용하도록 설정하면 GitHub는 자동으로 Codespace 정책을 추가하여 조직의 모든 codespace에 대한 컴퓨터 유형을 2개의 핵심 컴퓨터로 제한합니다. 이렇게 하면 무료 {% 데이터 variables.product.prodname_github_codespaces %} 사용량을 최대한 활용할 수 있습니다. 조직 설정에서 이러한 정책을 변경하거나 제거할 수 있습니다. 자세한 내용은 “[머신 유형에 대한 액세스 제한](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)”을 참조하세요.

{% data variables.product.prodname_codespaces %} 교육 혜택이 베타에서 벗어나면 조직에서 {% data variables.product.prodname_github_codespaces %} 사용량에 대한 무료 수당을 초과하면 조직에 추가 사용 요금이 청구됩니다. 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %} 청구 정보](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)”를 참조하세요.

## 조직용 {% data variables.product.prodname_codespaces %} 사용

{% data variables.product.prodname_github_codespaces %}은(는) {% data variables.product.prodname_team %}을(를) 사용하는 조직의 {% data variables.product.prodname_classroom %}에서 사용할 수 있습니다. {% data variables.product.prodname_codespaces %} 교육 혜택을 받을 자격이 있는 경우 조직 설정에서 직접 사용하도록 설정하는 대신 {% data variables.product.prodname_classroom %}를 통해 {% data variables.product.prodname_github_codespaces %}를 사용하도록 설정해야 합니다. 그렇지 않으면 조직에 {% data variables.product.prodname_github_codespaces %}의 모든 사용량에 대해 직접 요금이 청구됩니다.

### 새 클래스룸을 만들 때 조직에 Codespaces 사용
{% data reusables.classroom.sign-into-github-classroom %}
1. **새 클래스룸** 을 클릭합니다.
   
  !["새 클래스룸" 단추](/assets/images/help/classroom/click-new-classroom-button.png)

1. 조직 목록에서 클래스룸에 사용할 조직을 클릭합니다. {% data variables.product.prodname_github_codespaces %}을(를) 받을 자격이 있는 조직에는 자격이 있음을 보여 주는 메모가 있습니다. 필요하다면 새 조직을 만들 수 있습니다. 자세한 내용은 “[처음부터 새 조직 만들기](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)”를 참조하세요.

  ![Codespaces 자격이 있는 클래스룸을 위한 조직 선택](/assets/images/help/classroom/org-view-codespaces-eligibility.png)

1. "교실 이름 지정" 페이지의 클래스룸의 "{% data variables.product.prodname_codespaces %}"에서 **사용** 을 클릭합니다. 이렇게 하면 조직의 모든 리포지토리 및 사용자에 대해 {% data variables.product.prodname_github_codespaces %}이(가) 활성화됩니다.

  !["클래스룸 기본 설정" 페이지에서 조직에 Codespaces 사용](/assets/images/help/classroom/setup-classroom-enable-codespaces-button.png)

1. 새 클래스룸을 만들 준비가 되면 **클래스룸 만들기** 를 클릭합니다.

### 기존 클래스룸을 통해 조직에 Codespaces 사용

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-settings %}
1. "{% data variables.product.prodname_github_codespaces %}"에서 **사용** 을 클릭합니다. 이렇게 하면 조직의 모든 리포지토리 및 사용자에 대해 {% data variables.product.prodname_github_codespaces %}이(가) 활성화됩니다. 조직의 모든 codespace에 대한 머신 유형을 2코어 머신으로 제한하는 새 Codespace 정책도 추가됩니다. 
  
  ![기존 클래스룸 설정에서 조직에 Codespaces 사용](/assets/images/help/classroom/classroom-settings-enable-codespaces-button.png)

위와 동일한 방법을 사용하여 조직에 대해 {% data variables.product.prodname_github_codespaces %}를 사용하지 않도록 설정할 수도 있습니다. 이렇게 하면 조직의 모든 사용자 및 리포지토리에 대해 {% data variables.product.prodname_github_codespaces %}이(가) 비활성화됩니다. 

## {% data variables.product.prodname_codespaces %}를 사용하도록 할당 구성
{% data variables.product.prodname_github_codespaces %}을(를) 학생이 과제에 사용할 수 있도록 하려면 {% data variables.product.prodname_github_codespaces %}을(를) 과제에 지원되는 편집기로 선택할 수 있습니다. 새 할당을 만들 때 "시작 코드 추가 및 선택적 온라인 IDE 선택" 페이지에 있는 "지원되는 편집기 추가"의 드롭다운 메뉴에서 **{% data variables.product.prodname_github_codespaces %}** 를 선택합니다. 

![Codespaces를 과제에 지원되는 편집기로 선택](/assets/images/help/classroom/select-supported-editor-including-codespaces.png)

과제에 템플릿 리포지토리를 사용하는 경우 리포지토리에서 개발 컨테이너를 정의하여, 학생들이 과제를 수행하기 위해 codespace를 시작할 때 사용할 수 있는 도구와 런타임을 사용자 지정할 수 있습니다. 개발 컨테이너를 정의하지 않으면 {% data variables.product.prodname_github_codespaces %}는 학생들이 개발하는 데 필요할 수 있는 많은 공통 도구를 포함하는 기본 구성을 사용합니다. 개발 컨테이너 정의에 대한 자세한 내용은 "[리포지토리에 개발 컨테이너 구성 추가](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)"를 참조하세요.

## {% data variables.product.prodname_github_codespaces %}을(를) 사용하여 할당 시작

학생이 과제를 열면 리포지토리의 추가 정보 파일에는 작업에 사용해야 하는 IDE에 대한 교사의 권장 사항이 포함됩니다.

![학생 과제 리포지토리를 위한 추가 정보 파일의 Codespaces 메모 스크린샷](/assets/images/help/classroom/student-codespaces-readme-link.png)

학생은 추가 정보 **에서 GitHub Codespace에서 열기** 단추를 클릭하거나 과제 리포지토리의 기본 페이지에서 **{% octicon "code" aria-label="The code icon" %} 코드** 단추를 클릭한 다음 **Codespaces** 탭을 선택하여 새 코드 영역 또는 기존 codespace를 시작할 수 있습니다. **Codespaces** 탭에서 기존 codespace를 선택하거나 새 codespace를 만들 수 있습니다. 자세한 내용은 "[리포지토리에 대한 codespace 만들기"를 참조하세요](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository).

![할당 리포지토리에서 새 codespace 시작](/assets/images/help/classroom/student-launch-new-codespace.png)

교사는 과제 개요 페이지에서 과제에 대한 각 학생의 codespace를 볼 수 있습니다. 각 학생 행의 오른쪽에 있는 Codespaces 아이콘을 클릭하여 codespace를 시작할 수 있습니다. 

![학생의 codespace가 있는 교사 과제 개요](/assets/images/help/classroom/teacher-assignment-view-with-codespaces.png)

브라우저를 통해 codespace에 연결하면 자동 저장이 자동으로 사용하도록 설정됩니다. 리포지토리에 변경 내용을 저장하려면 변경 내용을 커밋하고 원격 분기에 푸시해야 합니다. 기본적으로 codespace를 실행하고 30분 동안 상호 작용하지 않으면 codespace가 시간 초과되고 실행이 중지됩니다. 데이터는 마지막으로 변경한 시점에서 유지됩니다. codespace의 수명 주기에 대한 자세한 내용은 "[codespace 수명 주기](/codespaces/getting-started/the-codespace-lifecycle)"를 참조하세요.
