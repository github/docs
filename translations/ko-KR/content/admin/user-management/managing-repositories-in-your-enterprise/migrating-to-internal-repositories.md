---
title: 내부 리포지토리로 마이그레이션
intro: '내부 리포지토리로 마이그레이션하여 {% data variables.product.prodname_ghe_server %} 및 {% data variables.product.prodname_ghe_cloud %}를 모두 사용하는 개발자를 위해 내부 소스 환경을 통합할 수 있습니다.'
redirect_from:
  - /enterprise/admin/installation/migrating-to-internal-repositories
  - /enterprise/admin/user-management/migrating-to-internal-repositories
  - /admin/user-management/migrating-to-internal-repositories
permissions: Site administrators can migrate to internal repositories.
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Privacy
  - Repositories
  - Security
shortTitle: Internal repository migration
ms.openlocfilehash: 66a535d8fd2e20cbcc78791588ca2b50ae8ede79
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147878770'
---
## 내부 리포지토리 정보

내부 리포지토리는 {% data variables.product.prodname_ghe_server %} 2.20 이상에서 사용할 수 있습니다. {% data reusables.repositories.about-internal-repos %} 자세한 내용은 “[리포지토리 정보](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)”를 참조하세요.

{% data variables.product.prodname_ghe_server %}의 향후 릴리스에서는 퍼블릭, 내부 및 프라이빗이라는 용어가 {% data variables.product.prodname_ghe_server %} 및 {% data variables.product.prodname_ghe_cloud %}에서 개발자에게 동일한 의미를 갖도록 리포지토리 표시 여부의 작동 방식을 조정합니다.

변경 내용을 준비하기 위해 프라이빗 모드를 사용하도록 설정한 경우 인스턴스에서 마이그레이션을 실행하여 퍼블릭 리포지토리를 내부 리포지토리로 변환할 수 있습니다. 이 마이그레이션은 현재 선택 사항으로, 비프로덕션 인스턴스에서 변경 내용을 테스트할 수 있습니다. 마이그레이션은 향후 필수가 됩니다.

마이그레이션을 실행하면 인스턴스의 조직이 소유한 모든 퍼블릭 리포지토리가 내부 리포지토리가 됩니다. 해당 리포지토리에 포크가 있는 경우 포크는 프라이빗이 됩니다. 프라이빗 리포지토리는 프라이빗으로 유지됩니다.

인스턴스의 사용자 계정이 소유한 모든 퍼블릭 리포지토리는 프라이빗 리포지토리가 됩니다. 해당 리포지토리에 포크가 있는 경우 포크도 프라이빗이 됩니다. 각 포크의 소유자에게는 포크의 부모에 대한 읽기 권한이 부여됩니다.

익명 Git 읽기 액세스는 내부 또는 프라이빗이 되는 각 퍼블릭 리포지토리에 대해 사용하지 않도록 설정됩니다.

리포지토리에 대한 현재 기본 표시 여부가 퍼블릭인 경우 기본값은 내부가 됩니다. 현재 기본값이 프라이빗인 경우 기본값은 변경되지 않습니다. 언제든지 기본값을 변경할 수 있습니다. 자세한 내용은 “[엔터프라이즈에서 리포지토리 관리 정책 적용](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-the-default-visibility-of-new-repositories-in-your-enterprise)”을 참조하세요.

인스턴스에 대한 리포지토리 만들기 정책은 퍼블릭 리포지토리를 사용하지 않도록 설정하고 프라이빗 및 내부 리포지토리를 허용하도록 변경됩니다. 이 정책은 언제든지 업데이트할 수 있습니다. 자세한 내용은 “[인스턴스의 리포지토리 만들기 제한](/enterprise/admin/user-management/restricting-repository-creation-in-your-instance)”을 참조하세요.

프라이빗 모드를 사용하도록 설정하지 않은 경우 마이그레이션 스크립트는 영향을 주지 않습니다.

## 마이그레이션 실행

1. 관리 셸에 연결합니다. 자세한 내용은 “[관리 셸(SSH) 액세스](/enterprise/admin/installation/accessing-the-administrative-shell-ssh)”를 참조하세요.
{% ifversion ghes or ghae %}
2. 마이그레이션 명령을 실행합니다.

   ```shell
   github-env bin/safe-ruby lib/github/transitions/20191210220630_convert_public_ghes_repos_to_internal.rb --verbose -w |  tee -a /tmp/convert_public_ghes_repos_to_internal.log
   ```

{% else %}
2. `/data/github/current` 디렉터리로 이동합니다.
   ```shell
   cd /data/github/current
   ```
3. 마이그레이션 명령을 실행합니다.
   ```shell
   sudo bin/safe-ruby lib/github/transitions/20191210220630_convert_public_ghes_repos_to_internal.rb --verbose -w | tee -a /tmp/convert_public_ghes_repos_to_internal.log
   ```
{% endif %}

로그 출력이 터미널 및 `/tmp/convert_public_ghes_repos_to_internal.log`에 나타납니다.

## 추가 참고 자료

- “[프라이빗 모드 사용 설정](/enterprise/admin/installation/enabling-private-mode)”
