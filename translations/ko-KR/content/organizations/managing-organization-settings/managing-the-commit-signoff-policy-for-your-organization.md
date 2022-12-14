---
title: 조직에 대한 커밋 승인 정책 관리
intro: '사용자가 조직 소유의 리포지토리에 대한 {% data variables.product.product_name %}의 웹 인터페이스에서 수행한 모든 커밋을 자동으로 승인하도록 요구할 수 있습니다.'
versions:
  feature: commit-signoffs
permissions: Organization owners can require all commits to repositories owned by the organization be signed off by the commit author.
topics:
  - Organizations
shortTitle: Manage the commit signoff policy
ms.openlocfilehash: 3d567d9f592758a2a9998df07556c4f2a04a852c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109437'
---
## 커밋 승인 정보

커밋이 리포지토리를 관리하는 규칙 및 라이선스를 준수한다는 것을 확인하려면 많은 조직에서 개발자가 모든 커밋을 승인하도록 요구합니다. 조직에서 커밋 승인을 요구하는 경우 {% data variables.product.product_name %}의 웹 인터페이스를 통해 커밋하는 사용자에 대해 필수 커밋 승인을 사용하도록 설정하여 커밋 프로세스 중에 승인을 원활하게 진행할 수 있습니다. 조직에 대해 필수 커밋 승인을 사용하도록 설정하면 커밋 작성자는 {% data variables.product.product_name %}의 웹 인터페이스를 통해 해당 조직의 리포지토리에 대한 모든 커밋을 자동으로 승인합니다.

리포지토리에 대한 관리자 액세스 권한이 있는 사용자는 리포지토리 수준에서 필수 커밋 승인을 사용하도록 설정할 수도 있습니다. 자세한 내용은 “[리포지토리의 커밋 승인 정책 관리](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-commit-signoff-policy-for-your-repository)”를 참조하세요.

{% data reusables.repositories.commit-signoffs %}

## 조직에 대한 필수 커밋 승인 관리

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.repository-defaults %}
1. **기여자가 웹 기반 커밋을 승인하도록 요구** 를 선택하거나 선택 취소합니다.
  ![기여자가 웹 기반 커밋을 승인하도록 요구 스크린샷](/assets/images/help/organizations/require-signoffs.png)
