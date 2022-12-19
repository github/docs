---
title: 패키지 삭제 및 복원
intro: 패키지를 삭제하거나 복원하는 방법을 알아봅니다.
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/deleting-a-package
  - /packages/publishing-and-managing-packages/deleting-a-package
  - /packages/manage-packages/deleting-a-package
  - /packages/guides/deleting-a-container-image
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
  ghae: '*'
shortTitle: Delete & restore a package
ms.openlocfilehash: 57f90bb6dbcda759e90444a40c7deef84d907b9c
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193075'
---
{% data reusables.package_registry.packages-ghes-release-stage %}

## {% data variables.product.prodname_dotcom %}의 패키지 삭제 및 복원 지원

필요한 액세스 권한이 있는 경우 {% data variables.product.prodname_dotcom %}에서 다음을 삭제할 수 있습니다.
- 전체 프라이빗 패키지
- 전체 퍼블릭 패키지(패키지 버전의 다운로드 수가 5,000개 이하인 경우)
- 프라이빗 패키지의 특정 버전
- 특정 버전의 퍼블릭 패키지(패키지 버전의 다운로드 수가 5,000개를 초과하지 않는 경우)

{% note %}

**참고:**
- 패키지 버전에 5,000개를 초과하는 다운로드가 있는 경우 퍼블릭 패키지를 삭제할 수 없습니다. 이 시나리오에서는 [GitHub 고객 지원팀](https://support.github.com/contact?tags=docs-packages)에 문의하여 추가 지원을 받으세요.
- 퍼블릭 패키지를 삭제할 때는 패키지에 따라 프로젝트가 중단될 수 있습니다.

{% endnote %}

{% data variables.product.prodname_dotcom %}에서 다음과 같은 경우 전체 패키지 또는 패키지 버전을 복원할 수도 있습니다.
- 패키지를 삭제한 후 30일 이내에 복원합니다.
- 동일한 패키지 네임스페이스는 계속 사용할 수 있으며 새 패키지에 사용되지 않습니다.

## 패키지 API 지원

{% data reusables.package_registry.packages-classic-pat-only %}

{% ifversion fpt or ghec %}

REST API를 사용하여 패키지를 관리할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_registry %} API](/rest/reference/packages)”를 참조하세요.

{% endif %}

{% data reusables.package_registry.about-graphql-support %}

## 패키지를 삭제하거나 복원하는 데 필요한 권한

{% ifversion packages-registries-v2 %} 세분화된 권한을 지원하는 레지스트리를 사용하면 패키지의 범위를 사용자 또는 조직으로 지정하거나 리포지토리에 연결하도록 선택할 수 있습니다.

{% ifversion ghes %}{% else %}{% endif %`https://ghcr.io/OWNER/PACKAGE-NAME`}{% ifversion packages-npm-v2 %}`https://containers.HOSTNAME/OWNER/PACKAGE-NAME` 또는 {% endif %}에 저장된 패키지와 같이 리포지토리와 별도로 세분화된 권한이 있는 `https://npm.pkg.github.com/OWNER/PACKAGE-NAME`패키지를 삭제하려면 패키지에 대한 관리자 액세스 권한이 있어야 합니다. 자세한 내용은 “[{% data variables.product.prodname_registry %}에 대한 권한 정보](/packages/learn-github-packages/about-permissions-for-github-packages)”를 참조하세요.

리포지토리에서 액세스 권한을 상속하는 패키지의 경우 리포지토리에 대한 관리자 권한이 있는 경우 패키지를 삭제할 수 있습니다.

일부 레지스트리는 리포지토리 범위 패키지 **만** 지원합니다. 이러한 레지스트리 목록은 "[{% data variables.product.prodname_registry %}에 대한 권한 정보"를 참조하세요](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages).

{% else %}

패키지가 게시되는 리포지토리에 대한 관리자 권한이 있는 경우 패키지를 삭제할 수 있습니다.

{% endif %}

## 패키지 버전 삭제

### {% data variables.product.prodname_dotcom %}에서 {% ifversion packages-registries-v2 %}리포지토리 범위 {% endif %}패키지의 버전 삭제

{% ifversion packages-registries-v2 %}리포지토리 범위 {% endif %}패키지의 버전을 삭제하려면 패키지를 소유한 리포지토리에 대한 관리자 권한이 있어야 합니다. 자세한 내용은 “[필요한 권한](#required-permissions-to-delete-or-restore-a-package)”을 참조하세요.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.package_registry.packages-from-code-tab %} {% data reusables.package_registry.package-settings-option %}
5. 왼쪽에서 **버전 관리** 를 클릭합니다.
5. 삭제하려는 버전의 오른쪽에 있는 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} 아이콘을 클릭하고 **버전 삭제** 를 클릭합니다.
  ![패키지 버전 삭제 단추](/assets/images/help/package-registry/delete-container-package-version.png)
6. 삭제를 확인하려면 패키지 이름을 입력하고 **결과를 이해하고 있으며 이 버전을 삭제합니다.** 를 클릭합니다.
  ![패키지 삭제 확인 단추](/assets/images/help/package-registry/package-version-deletion-confirmation.png)

{% ifversion fpt or ghec or ghes %}
### GraphQL을 사용하여 {% ifversion packages-registries-v2 %}리포지토리 범위{% endif %} 패키지 버전 삭제

{% data reusables.package_registry.about-graphql-support %} {% ifversion fpt or ghec %} REST API를 대신 사용하는 방법에 대한 자세한 내용은 "[{% data variables.product.prodname_registry %} API](/rest/reference/packages)"를 참조하세요. {% endif %}

GraphQL API에서 `deletePackageVersion` 변형을 사용합니다. , `delete:packages`및 `repo` 범위와 함께 {% 데이터 variables.product.pat_v1 %}을(를) `read:packages`사용해야 합니다. {% data variables.product.pat_v1_plural %}에 대한 자세한 내용은 "[{% data variables.product.prodname_registry %}](/packages/publishing-and-managing-packages/about-github-packages#authenticating-to-github-packages)정보"를 참조하세요.

다음 예제에서는 `MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg`라는 `packageVersionId`를 사용하여 패키지 버전을 삭제하는 방법을 보여 줍니다.

```shell
curl -X POST \
-H "Accept: application/vnd.github.package-deletes-preview+json" \
-H "Authorization: bearer TOKEN" \
-d '{"query":"mutation { deletePackageVersion(input:{packageVersionId:\"MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg==\"}) { success }}"}' \
HOSTNAME/graphql
```

{% data variables.product.prodname_registry %}에 게시한 모든 프라이빗 패키지를 패키지의 버전 ID와 함께 찾으려면 `repository` 개체를 통해 `packages` 연결을 사용할 수 있습니다. 및 `repo` 범위가 있는 {% 데이터 variables.product.pat_v1 %}이 `read:packages` 필요합니다. 자세한 내용은 [`packages`](/graphql/reference/objects#repository) 연결 또는 [`PackageOwner`](/graphql/reference/interfaces#packageowner) 인터페이스를 참조하세요.

`deletePackageVersion` 변형에 대한 자세한 내용은 “[`deletePackageVersion`](/graphql/reference/mutations#deletepackageversion)”을 참조하세요.

GraphQL을 사용하여 전체 패키지를 직접 삭제할 수는 없지만 패키지의 모든 버전을 삭제하면 패키지가 {% data variables.product.product_name %}에 더 이상 표시되지 않습니다.

{% endif %}

{% ifversion fpt or ghec %}
### {% data variables.product.prodname_dotcom %}에서 사용자 범위 패키지 버전 삭제

{% data variables.product.prodname_dotcom %}에서 사용자 범위 패키지의 특정 버전, 예를 들어 `ghcr.io`에 있는 Docker 이미지의 특정 버전을 삭제하려면 다음 단계를 사용합니다. 전체 패키지를 삭제하려면 “[{% data variables.product.prodname_dotcom %}에서 전체 사용자 범위 패키지 삭제](#deleting-an-entire-user-scoped-package-on-github)”를 참조하세요.

패키지 버전을 삭제할 수 있는 사용자를 검토하려면 “[필요한 권한](#required-permissions-to-delete-or-restore-a-package)”을 참조하세요.

{% data reusables.package_registry.package-settings-from-user-level %} {% data reusables.package_registry.package-settings-option %}
5. 왼쪽에서 **버전 관리** 를 클릭합니다.
5. 삭제하려는 버전의 오른쪽에 있는 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} 아이콘을 클릭하고 **버전 삭제** 를 클릭합니다.
  ![패키지 버전 삭제 단추](/assets/images/help/package-registry/delete-container-package-version.png)
6. 삭제를 확인하려면 패키지 이름을 입력하고 **결과를 이해하고 있으며 이 버전을 삭제합니다.** 를 클릭합니다.
  ![패키지 삭제 확인 단추](/assets/images/help/package-registry/confirm-container-package-version-deletion.png)

### {% data variables.product.prodname_dotcom %}에서 조직 범위 패키지 버전 삭제

{% data variables.product.prodname_dotcom %}에서 조직 범위 패키지의 특정 버전, 예를 들어 `ghcr.io`에 있는 Docker 이미지의 특정 버전을 삭제하려면 다음 단계를 사용합니다.
전체 패키지를 삭제하려면 “[{% data variables.product.prodname_dotcom %}에서 전체 조직 범위 패키지 삭제](#deleting-an-entire-organization-scoped-package-on-github)”를 참조하세요.

패키지 버전을 삭제할 수 있는 사용자를 검토하려면 [“패키지를 삭제하거나 복원하는 데 필요한 권한](#required-permissions-to-delete-or-restore-a-package)”을 참조하세요.

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
5. 왼쪽에서 **버전 관리** 를 클릭합니다.
5. 삭제하려는 버전의 오른쪽에 있는 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} 아이콘을 클릭하고 **버전 삭제** 를 클릭합니다.
  ![패키지 버전 삭제 단추](/assets/images/help/package-registry/delete-container-package-version.png)
6. 삭제를 확인하려면 패키지 이름을 입력하고 **결과를 이해하고 있으며 이 버전을 삭제합니다.** 를 클릭합니다.
  ![패키지 버전 삭제 확인 단추](/assets/images/help/package-registry/confirm-container-package-version-deletion.png) {% endif %}

## 전체 패키지 삭제

### {% data variables.product.prodname_dotcom %}에서 전체 리포지토리 범위 패키지 삭제

전체 리포지토리 범위 패키지를 삭제하려면 패키지를 소유하는 리포지토리에 대한 관리자 권한이 있어야 합니다. 자세한 내용은 “[필요한 권한](#required-permissions-to-delete-or-restore-a-package)”을 참조하세요.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.package_registry.packages-from-code-tab %} {% data reusables.package_registry.package-settings-option %}
4. “위험 영역”에서 **이 패키지 삭제** 를 클릭합니다.
5. 확인하려면 확인 메시지를 검토하고 패키지 이름을 입력한 다음 **이 패키지를 삭제합니다.** 를 클릭합니다.
  ![패키지 삭제 확인 단추](/assets/images/help/package-registry/package-version-deletion-confirmation.png)

{% ifversion fpt or ghec %}
### {% data variables.product.prodname_dotcom %}에서 전체 사용자 범위 패키지 삭제

패키지를 삭제할 수 있는 사용자를 검토하려면 “[필요한 권한](#required-permissions-to-delete-or-restore-a-package)”을 참조하세요.

{% data reusables.package_registry.package-settings-from-user-level %} {% data reusables.package_registry.package-settings-option %}
5. 왼쪽에서 **옵션** 을 클릭합니다.
  ![“옵션” 메뉴 옵션](/assets/images/help/package-registry/options-for-container-settings.png)
6. “위험 영역”에서 **이 패키지 삭제** 를 클릭합니다.
  ![패키지 버전 삭제 단추](/assets/images/help/package-registry/delete-container-package-button.png)
6. 삭제를 확인하려면 패키지 이름을 입력하고 **결과를 이해하고 있으며 이 패키지를 삭제합니다.** 를 클릭합니다.
  ![패키지 버전 삭제 확인 단추](/assets/images/help/package-registry/confirm-container-package-deletion.png)

### {% data variables.product.prodname_dotcom %}에서 전체 조직 범위 패키지 삭제

패키지를 삭제할 수 있는 사용자를 검토하려면 “[필요한 권한](#required-permissions-to-delete-or-restore-a-package)”을 참조하세요.

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
5. 왼쪽에서 **옵션** 을 클릭합니다.
  ![“옵션” 메뉴 옵션](/assets/images/help/package-registry/options-for-container-settings.png)
6. “위험 영역”에서 **이 패키지 삭제** 를 클릭합니다.
  ![패키지 삭제 단추](/assets/images/help/package-registry/delete-container-package-button.png)
6. 삭제를 확인하려면 패키지 이름을 입력하고 **결과를 이해하고 있으며 이 패키지를 삭제합니다.** 를 클릭합니다.
  ![패키지 삭제 확인 단추](/assets/images/help/package-registry/confirm-container-package-deletion.png) {% endif %}

## 패키지 복원

다음과 같은 경우 삭제된 패키지 또는 버전을 복원할 수 있습니다.
- 패키지를 삭제한 후 30일 이내에 복원합니다.
- 동일한 패키지 네임스페이스 및 버전을 여전히 사용할 수 있으며 새 패키지에 다시 사용되지 않습니다.

예를 들어 `octo-repo-owner/octo-repo` 리포지토리로 범위가 지정된 `octo-package`라는 RubyGems 패키지를 삭제한 경우, 패키지 네임스페이스 `rubygem.pkg.github.com/octo-repo-owner/octo-repo/octo-package`를 계속 사용할 수 있고 30일이 아직 지나지 않은 경우에만 패키지를 복원할 수 있습니다.

{% ifversion fpt or ghec %} 삭제된 패키지를 복원하려면 다음 권한 요구 사항 중 하나도 충족해야 합니다.
  - 리포지토리 범위 패키지의 경우: 삭제된 패키지를 소유하는 리포지토리에 대한 관리자 권한이 있습니다.{% ifversion fpt or ghec %}
  - 사용자 계정 범위 패키지의 경우: 개인 계정이 삭제된 패키지를 소유합니다.
  - 조직 범위 패키지의 경우: 패키지를 소유한 조직의 삭제된 패키지에 대한 관리자 권한이 있습니다.{% endif %} {% endif %}

{% ifversion ghae or ghes %} 패키지를 삭제하려면 삭제된 패키지를 소유하는 리포지토리에 대한 관리자 권한도 있어야 합니다.
{% endif %}

자세한 내용은 “[필요한 권한](#required-permissions-to-delete-or-restore-a-package)”을 참조하세요.

패키지가 복원되면 패키지는 이전과 동일한 네임스페이스를 사용합니다. 동일한 패키지 네임스페이스를 사용할 수 없는 경우 패키지를 복원할 수 없습니다. 이 시나리오에서 삭제된 패키지를 복원하려면 먼저 삭제된 패키지의 네임스페이스를 사용하는 새 패키지를 삭제해야 합니다.

### 조직에서 패키지 복원

 패키지가 조직에서 소유한 리포지토리에 있는 경우{% ifversion fpt or ghec %} 또는 세분화된 사용 권한이 있고 조직 계정으로 범위가 지정된 경우{% endif %} 조직 계정 설정을 통해 삭제된 패키지를 복원할 수 있습니다.

조직에서 패키지를 복원할 수 있는 사용자를 검토하려면 “[필요한 권한](#required-permissions-to-delete-or-restore-a-package)”을 참조하세요.

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %}
3. 왼쪽에서 **패키지** 를 클릭합니다.
4. “삭제된 패키지”에서 복원하려는 패키지 옆에 있는 **복원** 을 클릭합니다.
  ![복원 단추](/assets/images/help/package-registry/restore-option-for-deleted-package-in-an-org.png)
5. 확인하려면 패키지 이름을 입력하고 **결과를 이해하고 있으며 이 패키지를 복원합니다.** 를 클릭합니다.
  ![패키지 복원 확인 단추](/assets/images/help/package-registry/type-package-name-and-restore-button.png)

{% ifversion fpt or ghec %}

### 사용자 계정 범위 패키지 복원

패키지가 리포지토리 중 하나에 있거나 개인 계정으로 범위가 지정된 경우 개인 계정 설정을 통해 삭제된 패키지를 복원할 수 있습니다. 자세한 내용은 “[필요한 권한](#required-permissions-to-delete-or-restore-a-package)”을 참조하세요.

{% data reusables.user-settings.access_settings %}
2. 왼쪽에서 **패키지** 를 클릭합니다.
4. “삭제된 패키지”에서 복원하려는 패키지 옆에 있는 **복원** 을 클릭합니다.
  ![복원 단추](/assets/images/help/package-registry/restore-option-for-deleted-package-in-an-org.png)
5. 확인하려면 패키지 이름을 입력하고 **결과를 이해하고 있으며 이 패키지를 복원합니다.** 를 클릭합니다.
  ![패키지 복원 확인 단추](/assets/images/help/package-registry/type-package-name-and-restore-button.png)

{% endif %}

### 패키지 버전 복원

패키지의 방문 페이지에서 패키지 버전을 복원할 수 있습니다. 패키지를 복원할 수 있는 사용자를 검토하려면 “[필요한 권한](#required-permissions-to-delete-or-restore-a-package)”을 참조하세요.

1. 패키지의 방문 페이지로 이동합니다.
2. 오른쪽에서 **패키지 설정** 을 클릭합니다.
2. 왼쪽에서 **버전 관리** 를 클릭합니다.
3. 오른쪽 위에서 “버전” 드롭다운 메뉴를 사용하고 **삭제됨** 을 선택합니다.
  ![삭제됨 옵션을 보여 주는 버전 드롭다운 메뉴](/assets/images/help/package-registry/versions-drop-down-menu.png)
4. 복원하려는 삭제된 패키지 버전 옆에 있는 **복원** 을 클릭합니다.
  ![삭제된 패키지 버전 옆에 있는 복원 옵션](/assets/images/help/package-registry/restore-package-version.png)
5. 확인하려면 **결과를 이해하고 있으며 이 버전을 복원합니다.** 를 클릭합니다.
  ![패키지 버전 복원 확인](/assets/images/help/package-registry/confirm-package-version-restoration.png)
