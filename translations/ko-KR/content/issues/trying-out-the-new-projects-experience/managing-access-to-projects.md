---
title: 프로젝트에 대한 액세스 관리(베타)
intro: 프로젝트를 보거나 편집하거나 관리할 수 있는 사용자를 제어할 수 있습니다.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
- Projects
- Organizations
ms.openlocfilehash: 2c50343bfe8e3fd4e65a9a39b798f355cf0f13bb
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145135346"
---
{% data reusables.projects.projects-beta %}

## <a name="about-project-access"></a>프로젝트 액세스 정보

조직 수준 프로젝트의 관리자는 전체 조직, 팀, 개별 조직 구성원 및 외부 협력자의 액세스를 관리할 수 있습니다. 

사용자 수준 프로젝트의 관리자는 개별 협력자를 초대하고 액세스를 관리할 수 있습니다.

프로젝트 관리자는 인터넷의 모든 사용자에 대한 프로젝트 표시 유형을 제어할 수도 있습니다. 자세한 내용은 "[프로젝트 표시 유형 관리](/issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects)"를 참조하세요.

## <a name="managing-access-for-organization-level-projects"></a>조직 수준 프로젝트에 대한 액세스 관리

### <a name="managing-access-for-everyone-in-your-organization"></a>조직 내 모든 사용자의 액세스 관리

기본 역할은 `write`입니다. 즉, 조직의 모든 사용자가 프로젝트를 보고 편집할 수 있습니다. 조직의 모든 사용자에 대해 프로젝트 액세스 권한을 변경하려면 기본 역할을 변경할 수 있습니다. 기본 역할 변경 내용은 조직 소유자가 아니고 개별 액세스 권한이 부여되지 않은 조직 구성원에게만 적용됩니다.

{% data reusables.projects.project-settings %}
1. **액세스 관리** 를 클릭합니다.
2. **기본 역할** 에서 기본 역할을 선택합니다.
   - **액세스 권한 없음**: 개별 액세스 권한이 부여된 조직 소유자 및 사용자만 프로젝트를 볼 수 있습니다. 조직 소유자는 프로젝트의 관리자이기도 합니다.
   - **읽기**: 조직의 모든 사용자가 프로젝트를 볼 수 있습니다. 조직 소유자는 프로젝트의 관리자이기도 합니다.
   - **쓰기**: 조직의 모든 사용자가 프로젝트를 보고 편집할 수 있습니다. 조직 소유자는 프로젝트의 관리자이기도 합니다.
   - **관리자**: 조직의 모든 사용자가 프로젝트의 관리자입니다.

### <a name="managing-access-for-teams-and-individual-members-of-your-organization"></a>팀 및 조직의 개별 구성원의 액세스 권한 관리

팀, 외부 협력자 및 개별 조직 구성원을 조직 수준 프로젝트의 협력자로 추가할 수도 있습니다. 자세한 내용은 “[팀 정보](/organizations/organizing-members-into-teams/about-teams)”를 참조하세요.

이미 조직의 구성원이거나 조직 내 하나 이상의 리포지토리에서 외부 협력자인 경우에만 개별 사용자를 조직 수준 프로젝트에서 협업하도록 초대할 수 있습니다.

{% data reusables.projects.project-settings %}
1. **액세스 관리** 를 클릭합니다.
2. **협력자 초대** 에서 초대하려는 팀 또는 개별 사용자를 검색합니다.
3. 협력자의 역할을 선택합니다.
   - **읽기**: 팀 또는 개인이 프로젝트를 볼 수 있습니다.
   - **쓰기**: 팀 또는 개인이 프로젝트를 보고 편집할 수 있습니다.
   - **관리자**: 팀 또는 개인이 프로젝트를 보고, 편집하고, 새 협력자를 추가할 수 있습니다.
4. **초대** 를 클릭합니다.

### <a name="managing-access-of-an-existing-collaborator-on-your-project"></a>프로젝트에서 기존 협력자의 액세스 권한 관리

{% data reusables.projects.project-settings %}
1. **액세스 관리** 를 클릭합니다.
1. **액세스 관리** 에서 권한을 수정하려는 협력자를 찾습니다.

   **유형** 및 **역할** 드롭다운 메뉴를 사용하여 액세스 목록을 필터링할 수 있습니다.

1. 협력자의 역할을 편집하거나 {% octicon "trash" aria-label="the trash icon" %}을 클릭하여 협력자를 제거합니다.

## <a name="managing-access-for-user-level-projects"></a>사용자 수준 프로젝트에 대한 액세스 관리

### <a name="granting-a-collaborator-access-to-your-project"></a>협력자에게 프로젝트에 대한 액세스 권한 부여

{% note %}

이 설정은 프로젝트의 리포지토리가 아닌 프로젝트의 협력자에게만 영향을 줍니다. 프로젝트에서 항목을 보려면 항목이 속한 리포지토리에 필요한 권한이 있어야 합니다. 프로젝트에 프라이빗 리포지토리의 항목이 포함된 경우 리포지토리의 협력자가 아닌 사용자는 해당 리포지토리의 항목을 볼 수 없습니다. 자세한 내용은 "[리포지토리 표시 유형 설정](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility)" 및 "[리포지토리에 대한 액세스 권한이 있는 팀 및 사용자 관리](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)"를 참조하세요.

{% endnote %}

{% data reusables.projects.project-settings %}
1. **액세스 관리** 를 클릭합니다.
2. **협력자 초대** 에서 초대하려는 사용자를 검색합니다.
3. 협력자의 역할을 선택합니다.
   - **읽기**: 사용자가 프로젝트를 볼 수 있습니다.
   - **쓰기**: 사용자가 프로젝트를 보고 편집할 수 있습니다.
   - **관리자**: 사용자가 프로젝트를 보고, 편집하고, 새 협력자를 추가할 수 있습니다.
4. **초대** 를 클릭합니다.

### <a name="managing-access-of-an-existing-collaborator-on-your-project"></a>프로젝트에서 기존 협력자의 액세스 권한 관리

{% data reusables.projects.project-settings %}
1. **액세스 관리** 를 클릭합니다.
1. **액세스 관리** 에서 권한을 수정하려는 협력자를 찾습니다.

   **역할** 드롭다운 메뉴를 사용하여 액세스 목록을 필터링할 수 있습니다.

1. 협력자의 역할을 편집하거나 {% octicon "trash" aria-label="the trash icon" %}을 클릭하여 협력자를 제거합니다.
