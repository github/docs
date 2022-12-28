---
title: 리포지토리에 대한 커밋 승인 정책 관리
intro: '사용자가 {% data variables.product.product_name %}의 웹 인터페이스를 사용하여 리포지토리에 대한 커밋을 자동으로 승인하도록 요구할 수 있습니다.'
versions:
  feature: commit-signoffs
permissions: Organization owners and repository administrators can require all commits to a repository to be signed off by the commit author.
topics:
  - Repositories
shortTitle: Manage the commit signoff policy
ms.openlocfilehash: 078e80ed9f2b916c2c82b522eaad709fae5dc46c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107695'
---
## 커밋 승인 정보

커밋 승인을 사용하면 사용자는 커밋이 리포지토리를 관리하는 규칙 및 라이선스를 준수하는지 확인할 수 있습니다. {% data variables.location.product_location %}의 웹 인터페이스를 통해 커밋하는 사용자에 대해 개별 리포지토리에서 강제 커밋 로그오프를 사용하도록 설정하여 커밋 프로세스의 일부분만 커밋에서 로그오프할 수 있습니다. 리포지토리에 대해 강제 커밋 로그오프를 사용하도록 설정하면 {% data variables.location.product_location %}의 웹 인터페이스를 통해 해당 리포지토리에 대한 모든 커밋이 커밋 작성자가 자동으로 로그오프합니다.

조직 소유자는 조직 수준에서 필수 커밋 승인을 사용하도록 설정할 수도 있습니다. 자세한 내용은 “[조직의 커밋 승인 정책 관리](/organizations/managing-organization-settings/managing-the-commit-signoff-policy-for-your-organization)”를 참조하세요.

{% data reusables.repositories.commit-signoffs %}

## 리포지토리에 대한 필수 커밋 승인 사용 또는 사용 안 함

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. **기여자가 웹 기반 커밋을 승인하도록 요구** 를 선택합니다.
  ![기여자가 웹 기반 커밋을 승인하도록 요구 스크린샷](/assets/images/help/repository/require-signoffs.png)
