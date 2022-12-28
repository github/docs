---
title: 리포지토리가 삭제되거나 표시 여부가 변경되면 포크는 어떻게 되나요?
intro: 리포지토리를 삭제하거나 표시 여부를 변경하면 리포지토리의 포크에 영향을 줍니다.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /articles/changing-the-visibility-of-a-network
  - /articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /github/collaborating-with-issues-and-pull-requests/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /github/collaborating-with-pull-requests/working-with-forks/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Deleted or changes visibility
ms.openlocfilehash: 95296f33d9163cd1171481386efd0a2351095c39
ms.sourcegitcommit: 468a0323fa636517985a3e08e2772dbb0545cab8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/03/2022
ms.locfileid: '148191370'
---
{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

## 프라이빗 리포지토리 삭제

프라이빗 리포지토리를 삭제하면 모든 프라이빗 포크도 삭제됩니다.

{% ifversion fpt or ghes or ghec %}

## 퍼블릭 리포지토리 삭제

퍼블릭 리포지토리를 삭제하면 기존 퍼블릭 포크 중 하나가 새 업스트림 리포지토리로 선택됩니다. 다른 모든 리포지토리는 이 새로운 업스트림에서 포크되고 후속 끌어오기 요청은 이 새로운 업스트림 리포지토리로 이동합니다.

{% endif %}

## 프라이빗 포크 및 권한

{% data reusables.repositories.private_forks_inherit_permissions %}

{% ifversion fpt or ghes or ghec %}

## 퍼블릭 리포지토리를 프라이빗 리포지토리로 변경

퍼블릭 리포지토리가 프라이빗으로 전환되면 퍼블릭 포크가 새 네트워크로 분할됩니다. 퍼블릭 리포지토리 삭제와 마찬가지로 기존 퍼블릭 포크 중 하나가 새 업스트림 리포지토리로 선택되고 다른 모든 리포지토리는 이 새로운 업스트림에서 포크됩니다. 후속 끌어오기 요청은 이 새로운 업스트림 리포지토리로 이동합니다.

즉, 퍼블릭 리포지토리의 포크는 업스트림 리포지토리를 비공개로 만든 후에도 별도의 리포지토리 네트워크에서 공용으로 유지됩니다. 이렇게 하면 포크 소유자가 중단 없이 계속 작업하고 협업할 수 있습니다. 이러한 방식으로 퍼블릭 포크가 별도의 네트워크로 이동되지 않은 경우 해당 포크의 소유자는 이전에 해당 권한이 필요하지 않았음에도 불구하고 변경 내용을 끌어오고 (현재 프라이빗) 업스트림 리포지토리에 끌어오기 요청을 제출할 수 있는 적절한 [액세스 권한을](/articles/access-permissions-on-github) 가져와야 합니다.

{% ifversion ghes or ghae %} 퍼블릭 리포지토리에서 익명 Git 읽기 권한이 사용하도록 설정되어 있고 리포지토리가 프라이빗으로 설정된 경우, 모든 리포지토리의 포크는 익명 Git 읽기 권한을 잃고 사용되지 않는 기본 설정으로 돌아갑니다. 포크된 리포지토리가 퍼블릭으로 설정되면, 리포지토리 관리자는 익명 Git 읽기 권한을 다시 사용하도록 설정할 수 있습니다. 자세한 내용은 “[리포지토리에 익명 Git 읽기 권한 사용](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository)”을 참조하세요.
{% endif %}

### 프라이빗 리포지토리 삭제

퍼블릭 리포지토리를 프라이빗으로 설정한 다음 삭제하면 해당 퍼블릭 포크는 별도의 네트워크에 계속 존재하게 됩니다.

## 프라이빗 리포지토리를 퍼블릭 리포지토리로 변경

프라이빗 리포지토리가 공개되면 각 프라이빗 포크가 독립 실행형 프라이빗 리포지토리로 바뀌고 자체 새 리포지토리 네트워크의 업스트림이 됩니다. 프라이빗 포크는 공개적으로 노출되어서는 안 되는 중요한 커밋을 포함할 수 있으므로 자동으로 퍼블릭으로 설정되지 않습니다.

### 퍼블릭 리포지토리 삭제

프라이빗 리포지토리를 퍼블릭으로 설정한 다음 삭제하면 해당 프라이빗 포크는 별도의 네트워크에 독립 실행형 프라이빗 리포지토리로 계속 존재하게 됩니다.

{% endif %}

{% ifversion ghes or ghec or ghae %}

## 내부 리포지토리의 표시 여부 변경



엔터프라이즈에 대한 정책에서 포크를 허용하는 경우 내부 리포지토리의 포크는 프라이빗이 됩니다. 내부 리포지토리의 표시 여부를 변경하는 경우 조직 또는 개인 계정이 소유한 포크는 프라이빗으로 유지됩니다.

### 내부 리포지토리 삭제

내부 리포지토리의 표시 여부를 변경한 다음 리포지토리를 삭제하면 포크가 별도의 네트워크에 계속 존재하게 됩니다.

{% endif %}

## 추가 참고 자료

- “[리포지토리 표시 여부 설정](/articles/setting-repository-visibility)”
- “[포크 정보](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)”
- “[리포지토리에 대한 포크 정책 관리](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)”
- “[조직에 대한 포크 정책 관리](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)”
- “[엔터프라이즈에서 리포지토리 관리 정책 적용](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-on-forking-private-or-internal-repositories)”
