---
title: codespaces에 대한 기본 이미지 제한
shortTitle: Restrict base image
intro: 조직 내에서 만든 새 codespace에 사용할 수 있는 기본 이미지를 지정할 수 있습니다.
permissions: 'To manage image constraints for an organization''s codespaces, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
ms.openlocfilehash: 1da438a680dd3e60c1deeec46a98fbcf48f84e5b
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158999'
---
## 개요

codespace를 만들면 원격 가상 머신에 Docker 컨테이너가 자동으로 만들어집니다. Docker 컨테이너는 Docker 이미지에서 만들어집니다. 이미지는 사실상 Docker 컨테이너에 대한 템플릿이며 codespace에서 제공하는 결과 환경의 여러 측면을 결정합니다.

리포지토리에 대한 개발 컨테이너 구성에 지정하여 codespaces에 사용할 이미지를 선택할 수 있습니다. 예를 들어 파일의 `image` 속성을 `devcontainer.json` 사용하여 이 작업을 수행할 수 있습니다.

```json{:copy}
"image": "mcr.microsoft.com/vscode/devcontainers/javascript-node:18",
```

자세한 내용은 containers.dev [개발 컨테이너 사양](https://containers.dev/implementors/json_reference/) 을 참조하세요.

리포지토리에 대한 개발 컨테이너 구성에서 이미지를 지정하지 않으면 기본 이미지가 사용됩니다. 기본 이미지에는 널리 사용되는 언어 및 일반적으로 사용되는 도구에 대한 여러 런타임 버전이 포함되어 있습니다. 자세한 내용은 “[개발 컨테이너 소개](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#using-the-default-dev-container-configuration)”를 참조하세요.

조직 소유자는 조직 내에서 만든 codespace에 사용할 수 있는 이미지를 제한하는 정책을 추가할 수 있습니다.

개발 컨테이너 구성에 지정된 이미지가 허용된 이미지 중 하나와 일치하지 않으면 다른 사용자가 리포지토리에 대한 codespace를 만들려고 할 때 다음 메시지가 표시됩니다.

> Codespace를 만들 수 없습니다. 기본 이미지 'DEV CONTAINER CONFIGURATION의 세부 정보'는 조직 관리자가 설정한 조직 정책에 따라 허용되지 않습니다.

{% note %}

**참고**: 
* 기본 이미지 정책은 codespace를 만들 때만 적용됩니다. 컨테이너를 다시 빌드할 때는 현재 적용되지 않습니다. 이는 향후 릴리스에서 변경될 예정입니다. 자세한 내용은 "[codespace 수명 주기"를 참조하세요](/codespaces/developing-in-codespaces/the-codespace-lifecycle#rebuilding-a-codespace).
* 기본 이미지 정책은 기본 이미지 또는 컨테이너를 다시 빌드할 수 없는 개발 컨테이너 구성에 오류가 발생하는 경우 codespace를 복구하는 데 사용되는 이미지에 적용되지 않습니다. 

{% endnote %}

### 조직 전체 및 리포지토리별 정책 설정

정책을 만들 때 조직의 모든 리포지토리에 적용할지 또는 지정된 리포지토리에만 적용할지 선택합니다. 조직 전체 정책을 설정하는 경우 개별 리포지토리에 대해 설정한 정책은 조직 수준에서 설정된 제한에 속해야 합니다. 정책을 추가하면 이미지를 더 많이 선택할 수 있습니다.

예를 들어 기본 이미지를 지정된 10개 이미지로 제한하는 조직 전체 정책을 만들 수 있습니다. 그런 다음, 리포지토리 A에 대한 정책을 설정하여 이미지를 조직 수준에서 지정된 두 이미지의 하위 집합으로 제한할 수 있습니다. 리포지토리 A에 대한 추가 이미지를 지정해도 해당 이미지는 조직 수준 정책에 지정되지 않으므로 영향을 주지 않습니다. 조직 전체 정책을 추가하는 경우 조직의 모든 리포지토리에 사용할 수 있는 가장 큰 이미지 선택으로 설정해야 합니다. 그런 다음, 리포지토리별 정책을 추가하여 선택을 추가로 제한할 수 있습니다.

{% data reusables.codespaces.codespaces-org-policies-note %}

## 허용되는 이미지를 정의하는 정책 추가

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.codespaces.codespaces-org-policies %}
1. **제약 조건 추가** 를 클릭하고 **기본 이미지를** 선택합니다.

   !['제약 조건 추가' 드롭다운 메뉴의 스크린샷](/assets/images/help/codespaces/add-constraint-dropdown-image.png)

1. {% octicon "pencil" aria-label="The edit icon" %}을 클릭하여 제약 조건을 편집합니다.

   ![제약 조건을 편집하기 위한 연필 아이콘의 스크린샷](/assets/images/help/codespaces/edit-image-constraint.png)

1. "허용되는 값" 필드에 허용하려는 이미지의 전체 URL을 입력합니다.

   !['허용되는 값' 필드의 항목 스크린샷](/assets/images/help/codespaces/image-allowed-values.png)
 
   {% note %}

   **참고**: 개발 컨테이너 구성에 지정된 값과 정확히 일치하는 이미지 URL을 지정해야 합니다.

   {% endnote %}

1. 더하기 단추({% octicon "plus" aria-label="The plus icon" %})를 클릭하여 값을 추가합니다.
1. 필요한 경우 이전 두 단계를 반복하여 이미지 URL을 더 추가합니다.
{% data reusables.codespaces.codespaces-policy-targets %}
1. 정책에 다른 제약 조건을 추가하려면 **제약 조건 추가** 를 클릭하고 다른 제약 조건을 선택합니다. 다른 제약 조건에 대한 자세한 내용은 다음을 참조하세요.
   * “[머신 유형에 대한 액세스 제한](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)”
   * "[전달된 포트의 표시 유형 제한](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)"
   * "[유휴 시간 제한 기간 제한](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)"
   * "[codespaces에 대한 보존 기간 제한](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)"
1. 정책에 제약 조건 추가를 완료한 후 **저장** 을 클릭합니다.

정책은 누구나 조직에 청구할 수 있는 새 codespace를 만들려고 할 때 적용됩니다. 기본 이미지 제약 조건은 활성 또는 중지된 기존 codespace에 영향을 주지 않습니다.

## 정책 편집

기존 정책을 편집할 수 있습니다. 예를 들어 정책에서 제약 조건을 추가하거나 제거할 수 있습니다.

1. “Codespace 정책” 페이지를 표시합니다. 자세한 내용은 "[허용되는 이미지를 정의하는 정책 추가](#adding-a-policy-to-define-the-allowed-images)"를 참조하세요.
1. 편집할 정책의 이름을 클릭합니다.
1. "기본 이미지" 제약 조건 옆에 있는 연필 아이콘({% octicon "pencil" aria-label="The edit icon" %})을 클릭합니다.
1. 이미지 URL을 추가하거나 제거합니다.
1. **저장** 을 클릭합니다.

## 정책 삭제 

1. “Codespace 정책” 페이지를 표시합니다. 자세한 내용은 "[허용되는 이미지를 정의하는 정책 추가](#adding-a-policy-to-define-the-allowed-images)"를 참조하세요.
1. 삭제하려는 정책 오른쪽에 있는 삭제 단추를 클릭합니다.

   ![정책에 대한 삭제 단추의 스크린샷](/assets/images/help/codespaces/policy-delete.png)
