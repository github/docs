---
title: 리포지토리 전송
intro: 리포지토리를 다른 사용자 또는 조직 계정으로 전송할 수 있습니다.
redirect_from:
  - /articles/about-repository-transfers
  - /move-a-repo
  - /moving-a-repo
  - /articles/what-is-transferred-with-a-repository
  - /articles/what-is-transferred-with-a-repo
  - /articles/how-to-transfer-a-repo
  - /articles/how-to-transfer-a-repository
  - /articles/transferring-a-repository-owned-by-your-personal-account
  - /articles/transferring-a-repository-owned-by-your-organization
  - /articles/transferring-a-repository
  - /github/administering-a-repository/transferring-a-repository
  - /github/administering-a-repository/managing-repository-settings/transferring-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: f37ebc1492ae26998a596d90734d1d509b8f73c9
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160682'
---
## 리포지토리 전송 정보

리포지토리를 새 소유자에게 전송하면 리포지토리의 콘텐츠, 문제, 끌어오기 요청, 릴리스, {% data variables.product.prodname_projects_v1 %} 및 설정을 즉시 관리할 수 있습니다.

리포지토리 전송을 위한 필수 구성 요소는 다음과 같습니다.
- 소유한 리포지토리를 다른 개인 계정으로 전송하면 새 소유자가 확인 메일을 받게 됩니다.{% ifversion fpt or ghec %} 확인 메일에는 전송을 수락하기 위한 지침이 포함되어 있습니다. 새 소유자가 1일 이내에 전송을 수락하지 않으면 초대가 만료됩니다.{% endif %}
- 소유한 리포지토리를 조직에 전송하려면 대상 조직에서 리포지토리를 만들 수 있는 권한이 있어야 합니다.
- 대상 계정에는 동일한 이름의 리포지토리 또는 동일한 네트워크에 포크가 없어야 합니다.
- 리포지토리의 원래 소유자는 전송된 리포지토리의 협력자로 추가됩니다. 전송된 리포지토리에 대한 다른 협력자는 그대로 유지됩니다. {% ifversion ghes < 3.7 or ghae %}
- 내부 리포지토리는 전송할 수 없습니다.{% endif %}
- 프라이빗 포크는 전송할 수 없습니다.
{%- ifversion ghec %}
- 한 엔터프라이즈 계정이 소유한 조직에서 다른 엔터프라이즈 계정이 소유한 조직으로 내부 리포지토리를 전송할 수 없습니다.
{%- endif %}

{% ifversion fpt or ghec %}프라이빗 리포지토리를 {% data variables.product.prodname_free_user %} 사용자 또는 조직 계정으로 전송하는 경우 리포지토리는 보호된 분기 및 {% data variables.product.prodname_pages %}와(과) 같은 기능에 액세스할 수 없게 됩니다. {% data reusables.gated-features.more-info %}{% endif %}

### 리포지토리를 사용하여 전송되는 항목은 무엇인가요?

리포지토리를 전송하면 해당 문제, 끌어오기 요청, 위키, 별, 감시자도 전송됩니다. 전송된 리포지토리에 웹후크, 서비스, 비밀 또는 배포 키가 포함된 경우 전송이 완료된 후에도 연결된 상태로 유지됩니다. 기여를 포함하여 커밋에 대한 Git 정보가 유지됩니다. 다음 액세스 권한도 필요합니다.

- 전송된 리포지토리가 포크인 경우 업스트림 리포지토리와 연결된 상태로 유지됩니다.
- 전송된 리포지토리에 포크가 있는 경우 해당 포크는 전송이 완료된 후에도 리포지토리와 연결된 상태로 유지됩니다.
- 전송된 리포지토리에서 {% data variables.large_files.product_name_long %}을(를) 사용하는 경우 모든 {% data variables.large_files.product_name_short %} 개체가 자동으로 이동됩니다. 이 전송은 백그라운드에서 발생하므로 많은 수의 {% data variables.large_files.product_name_short %} 개체가 있거나 {% data variables.large_files.product_name_short %} 개체 자체가 큰 경우 전송하는 데 다소 시간이 걸릴 수 있습니다.{% ifversion fpt or ghec %} {% data variables.large_files.product_name_short %}을(를) 사용하는 리포지토리를 전송하기 전에 수신 계정에 이동할 {% data variables.large_files.product_name_short %} 개체를 저장할 충분한 데이터 팩이 있는지 확인합니다. 개인 계정용 스토리지를 추가하는 방법에 대한 자세한 내용은 “[{% data variables.large_files.product_name_long %}업그레이드](/articles/upgrading-git-large-file-storage)”를 참조하세요.{% endif %}
- 두 개인 계정 간에 리포지토리가 전송되면 문제 할당은 그대로 유지됩니다. 개인 계정에서 조직으로 리포지토리를 전송하는 경우 조직의 구성원에게 할당된 문제는 그대로 유지되고 다른 모든 문제 담당자는 지워집니다. 조직의 소유자만 새 문제 할당을 만들 수 있습니다. 조직에서 개인 계정으로 리포지토리를 전송하는 경우 리포지토리의 소유자에게 할당된 문제만 유지되고 다른 모든 문제 담당자는 제거됩니다.
- 전송된 리포지토리에 {% data variables.product.prodname_pages %} 사이트가 포함된 경우 웹 및 Git 활동을 통해 Git 리포지토리에 대한 링크가 리디렉션됩니다. 그러나 리포지토리와 연결된 {% data variables.product.prodname_pages %}은(는) 리디렉션하지 않습니다.
- 이전 리포지토리 위치에 대한 모든 링크는 자동으로 새 위치로 리디렉션됩니다. 전송된 리포지토리에서 `git clone`, `git fetch` 또는 `git push`를 사용하는 경우 이러한 명령은 새 리포지토리 위치 또는 URL로 리디렉션됩니다. 그러나 혼동을 방지하려면 새 리포지토리 URL을 가리키도록 기존 로컬 클론을 업데이트하는 것이 좋습니다. 명령줄에서 `git remote`를 사용하여 이 작업을 수행할 수 있습니다.

  ```shell
  $ git remote set-url origin NEW_URL
  ```

  {% warning %}

  **경고**: 나중에 계정 아래에 새 리포지토리를 만드는 경우 전송된 리포지토리의 원래 이름을 다시 사용하지 마세요. 이렇게 하면 전송된 리포지토리로 리디렉션이 더 이상 작동하지 않습니다.

  {% endwarning %}

- 조직에서 개인 계정으로 리포지토리를 전송하는 경우 리포지토리의 읽기 전용 협력자는 전송되지 않습니다. 협력자는 개인 계정이 소유한 리포지토리에 대한 읽기 전용 액세스 권한을 가질 수 없기 때문입니다. 리포지토리 권한 수준에 대한 자세한 내용은 “[개인 계정 리포지토리에 대한 권한 수준](/github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository)” 및 “[조직의 리포지토리 역할](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”을 참조하세요.{% ifversion fpt or ghec %}
- 스폰서쉽 계층을 통해 리포지토리에 액세스할 수 있는 스폰서가 영향을 받을 수 있습니다. 자세한 내용은 “[스폰서쉽 계층에 리포지토리 추가](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers#adding-a-repository-to-a-sponsorship-tier)”를 참조하세요.{% endif %}

자세한 내용은 “[원격 리포지토리 관리](/github/getting-started-with-github/managing-remote-repositories)”를 참조하세요.

### 리포지토리 전송 및 조직

리포지토리를 조직에 전송하려면 수신 조직에 리포지토리 만들기 권한이 있어야 합니다. 조직 소유자가 조직 구성원에 의해 리포지토리 만들기를 사용하지 않도록 설정한 경우 조직 소유자만 리포지토리를 조직 외부 또는 내부로 전송할 수 있습니다.

리포지토리가 조직으로 전송되면 조직의 기본 리포지토리 권한 설정 및 기본 멤버 자격 권한이 전송된 리포지토리에 적용됩니다.

## 개인 계정이 소유한 리포지토리 전송

리포지토리 전송을 수락하는 개인 계정으로 리포지토리를 전송할 수 있습니다. 두 개인 계정 간에 리포지토리가 전송되면 원래 리포지토리 소유자와 협력자가 새 리포지토리에 협력자로 자동으로 추가됩니다.

{% ifversion fpt or ghec %}개인 리포지토리에 {% data variables.product.prodname_pages %} 사이트를 게시하고 사용자 지정 도메인을 추가한 경우 리포지토리를 전송하기 전에 도메인 인수의 위험을 방지하기 위해 DNS 레코드를 제거하거나 업데이트할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_pages %} 사이트의 사용자 지정 도메인 관리](/articles/managing-a-custom-domain-for-your-github-pages-site)”를 참조하세요.{% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.transfer-repository-steps %}

## 조직이 소유한 리포지토리 전송

조직의 소유자 권한 또는 관리자 권한이 해당 리포지토리 중 하나에 있는 경우 조직 소유의 리포지토리를 개인 계정 또는 다른 조직으로 전송할 수 있습니다.

1. 리포지토리를 소유한 조직의 관리자 또는 소유자 권한이 있는 개인 계정에 로그인합니다.
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.transfer-repository-steps %}
