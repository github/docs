---
title: Codespace 내의 다른 리포지토리에 대한 액세스 관리
allowTitleToDifferFromFilename: true
shortTitle: Repository access
intro: '{% data variables.product.prodname_github_codespaces %}에서 액세스할 수 있는 리포지토리를 관리할 수 있습니다.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
  - Security
redirect_from:
  - /codespaces/managing-your-codespaces/managing-access-and-security-for-your-codespaces
ms.openlocfilehash: 3f8379c322bd7ccd9ff7d31e17da90a77461536d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160107'
---
## 개요

기본적으로 codespace에는 토큰이 생성된 리포지토리로 범위가 지정되는 토큰이 할당됩니다. 템플릿에서 만든 codespace를 {% data variables.product.product_name %}의 새 리포지토리에 게시하면 codespace에 새 리포지토리로 범위가 지정된 토큰이 할당됩니다. 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %}에서의 보안](/codespaces/codespaces-reference/security-in-github-codespaces#authentication)”을 참조하세요. 프로젝트에 다른 리포지토리에 대한 추가 권한이 필요한 경우 `devcontainer.json` 파일에서 이를 구성하고 다른 협력자에게 올바른 권한 집합이 있는지 확인하면 됩니다.

`devcontainer.json` 파일에 권한이 나열되면 해당 리포지토리에 대한 codespace 생성 과정의 일환으로 추가 권한을 검토하고 권한을 부여하라는 메시지가 표시됩니다. 나열된 권한에 권한을 부여하면 {% data variables.product.prodname_github_codespaces %}는 사용자의 선택을 기억하며, `devcontainer.json` 파일의 권한이 변경되지 않는 한 권한 부여를 묻는 메시지를 표시하지 않습니다.

## 필수 조건

사용자 지정 권한이 정의된 codespace를 만들려면 다음 중 하나를 사용해야 합니다.
* {% data variables.product.prodname_dotcom %} 웹 UI
* [{% data variables.product.prodname_dotcom %} CLI](https://github.com/cli/cli/releases/latest) 2.5.2 이상
* [{% data variables.product.prodname_github_codespaces %} {% data variables.product.prodname_vscode %} 확장](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces) 1.5.3 이상

## 추가 리포지토리 권한 설정

1. `devcontainer.json` 파일에서 {% data variables.product.prodname_github_codespaces %}에 대한 리포지토리 권한을 구성합니다. 리포지토리에 아직 `devcontainer.json` 파일이 없으면 지금 추가하세요. 자세한 내용은 "[프로젝트에 개발 컨테이너 추가](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)"를 참조하세요.

1. `devcontainer.json` 파일을 편집하고 `repositories` 개체에 필요한 리포지토리 이름 및 권한을 추가합니다.

  ```json{:copy}
  {
    "customizations": {
      "codespaces": {
        "repositories": {
          "my_org/my_repo": {
            "permissions": {
              "issues": "write"
            }
          }
        }
      }
    }
  }
  ```

  {% note %}

  **참고:** 현재 작업 중인 리포지토리와 동일한 개인 계정 또는 조직에 속한 리포지토리만 참조할 수 있습니다.

  {% endnote %}

  나열된 각 리포지토리에 대해 다음 권한을 원하는 만큼 부여할 수 있습니다.
   * `actions` - 읽기/쓰기
   * `checks` - 읽기/쓰기
   * `contents` - 읽기/쓰기
   * `deployments` - 읽기/쓰기
   * `discussions` - 읽기/쓰기
   * `issues` - 읽기/쓰기
   * `packages` - 읽기
   * `pages` - 읽기/쓰기
   * `pull_requests` - 읽기/쓰기
   * `repository_projects` - 읽기/쓰기
   * `statuses` - 읽기/쓰기
   * `workflows` - 쓰기

  조직 내 모든 리포지토리에 대한 사용 권한을 설정하려면 `repositories` 개체의 조직 이름 뒤에 `*` 와일드카드를 사용합니다.

  ```json
  {
    "customizations": {
      "codespaces": {
        "repositories": {
          "my_org/*": {
            "permissions": {
              "issues": "write"
            }
          }
        }
      }
    }
  }
  ```

  지정된 리포지토리에 대한 모든 권한을 설정하려면 리포지토리 개체에서 `"permissions": "read-all"` 또는 `"permissions": "write-all"`을 사용합니다.

  ```json
  {
    "customizations": {
      "codespaces": {
        "repositories": {
          "my_org/my_repo": {
            "permissions": "write-all"
          }
        }
      }
    }
  }
  ```

## 요청된 권한에 권한 부여

`devcontainer.json` 파일에 추가 리포지토리 권한이 정의되면, 이 리포지토리에 대한 codespace 또는 사전 빌드 구성을 만들 때 권한을 검토하고 필요하다면 권한에 권한을 부여하라는 메시지가 표시됩니다. 리포지토리에 대한 권한에 권한을 부여하면 {% data variables.product.prodname_github_codespaces %}는 리포지토리에 요청된 권한 집합이 변경되기 전에는 메시지를 다시 표시하지 않습니다.

![요청된 권한 페이지](/assets/images/help/codespaces/codespaces-accept-permissions.png)

알고 있으며 신뢰하는 리포지토리에 대한 권한에만 권한을 부여해야 합니다. 요청된 권한 집합을 신뢰하지 않는 경우 **권한을 부여하지 않고 계속 진행** 을 클릭하여 기본 사용 권한 집합으로 기본 권한 집합을 이용해 codespace를 만듭니다. 추가 권한을 거부하면 codespace가 자신이 생성된 리포지토리에만 액세스할 수 있으므로 codespace에서의 프로젝트 기능이 영향받을 수 있습니다.

개인 계정이 이미 소유 중인 권한에만 권한을 부여할 수 있습니다. Codespace가 사용자가 현재 액세스할 수 없는 리포지토리에 대한 권한을 요청하는 경우에는 리포지토리의 소유자 또는 관리자에게 문의하여 충분한 액세스 권한을 얻은 다음 codespace를 다시 만들어야 합니다.

## 액세스 및 보안

{% warning %}

**주의 사항**: 아래에 설명된 액세스 및 보안 설정은 이제 사용되지 않으며 여기에 참조용으로만 문서화되어 있습니다. 다른 리포지토리에 대한 확장된 액세스를 사용하도록 설정하려면, 아래 설명한 대로 codespace의 개발 컨테이너 정의에 요청된 권한을 추가해야 합니다.

{% endwarning %}

개인 계정이 소유한 리포지토리에 대한 액세스 및 보안을 사용하도록 설정하면 해당 리포지토리에 대해 만들어진 모든 codespace에는 소유한 다른 모든 리포지토리에 대한 읽기 권한이 있습니다. codespace가 액세스할 수 있는 리포지토리를 제한하려면 codespace가 열린 리포지토리 또는 특정 리포지토리로 제한할 수 있습니다. 신뢰하는 리포지토리에 대해서만 액세스 및 보안을 사용하도록 설정해야 합니다. 

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. "액세스 및 보안"에서 개인 계정에 대해 원하는 설정을 선택합니다.

  ![신뢰할 수 있는 리포지토리를 관리하는 라디오 단추](/assets/images/help/settings/codespaces-access-and-security-radio-buttons.png)

1. "선택한 리포지토리"를 선택한 경우 드롭다운 메뉴를 선택한 다음 리포지토리를 클릭하여 리포지토리의 codespace가 소유한 다른 리포지토리에 액세스할 수 있도록 합니다. 소유한 다른 리포지토리에 액세스하려는 codespace가 있는 모든 리포지토리에 대해 반복합니다.

  !["선택한 리포지토리" 드롭다운 메뉴](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)
