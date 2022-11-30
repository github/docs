---
ms.openlocfilehash: 1c0fc320bbd41add7105a53f1ed85a10c39fb021
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147883499"
---
<a name="allowing-select-actions-to-run"></a>
<a name="allowing-specific-actions-to-run"></a>
### 선택 작업{% ifversion actions-workflow-policy %} 및 재사용 가능한 워크플로{% endif %} 실행 허용

{% data reusables.actions.policy-label-for-select-actions-workflows %}를 선택하면 로컬 작업{% ifversion actions-workflow-policy %} 및 재사용 가능한 워크플로{% endif %}가 허용되며 다른 특정 작업{% ifversion actions-workflow-policy %} 및 재사용 가능한 워크플로{% endif %}를 허용하는 추가 옵션이 있습니다.

- **{% data variables.product.prodname_dotcom %}에 의해 만들어진 작업을 허용** 합니다. {% data variables.product.prodname_dotcom %}에서 만든 모든 작업을 워크플로에서 사용하도록 허용할 수 있습니다. {% data variables.product.prodname_dotcom %}에서 만든 작업은 `actions` 및 `github` 조직에 있습니다. 자세한 내용은 [`actions`](https://github.com/actions) 및 [`github`](https://github.com/github) 조직을 참조하세요.
- **확인된 작성자의 Marketplace 작업을 허용** 합니다. {% ifversion ghes or ghae %}{% data variables.product.prodname_github_connect %}을(를) 사용하도록 설정하고 {% data variables.product.prodname_actions %}(으)로 구성한 경우 이 옵션을 사용할 수 있습니다. 자세한 내용은 “[GitHub 커넥트를 사용하여 GitHub.com 작업에 자동 액세스 사용](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)”을 참조하세요.{% endif %} 확인된 작성자가 만든 모든 {% data variables.product.prodname_marketplace %} 작업을 워크플로에서 사용하도록 허용할 수 있습니다. GitHub가 작업 작성자를 파트너 조직으로 확인하면 {% octicon "verified" aria-label="The verified badge" %} 배지가 {% data variables.product.prodname_marketplace %}의 작업 옆에 표시됩니다.
- **지정된 작업{% ifversion actions-workflow-policy %} 및 재사용 가능한 워크플로{% endif %}를 허용합니다.** 특정 조직 및 리포지토리에서 작업{% ifversion actions-workflow-policy %} 및 재사용 가능한 워크플로{% endif %}를 사용하도록 워크플로를 제한할 수 있습니다.

  특정 태그에 대한 액세스를 제한하거나 작업{% ifversion actions-workflow-policy %} 또는 재사용 가능한 워크플로{% endif %}의 SHA를 커밋하려면 워크플로에서 사용된 것과 동일한 구문을 사용하여 작업{% ifversion actions-workflow-policy %} 또는 재사용 가능한 워크플로{% endif %}를 선택합니다.
  
  - 작업의 경우 구문은 `<OWNER>/<REPO>@<TAG OR SHA>`입니다. 예를 들어 `actions/javascript-action@v1.0.1`을 사용하여 태그를 선택하거나 `actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89`를 사용하여 SHA를 선택합니다. 자세한 내용은 “[작업 찾기 및 사용자 지정](/actions/learn-github-actions/finding-and-customizing-actions#using-release-management-for-your-custom-actions)”을 참조하세요.
  {%- ifversion actions-workflow-policy %}
  - 재사용 가능한 워크플로의 경우 구문은 `<OWNER>/<REPO>/<PATH>/<FILENAME>@<TAG OR SHA>`입니다. 예: `octo-org/another-repo/.github/workflows/workflow.yml@v1`. 자세한 내용은 “[워크플로 다시 사용](/actions/using-workflows/reusing-workflows#calling-a-reusable-workflow)”을 참조하세요.
  {%- endif %}

  `*` 와일드카드 문자를 사용하여 패턴을 일치시킬 수 있습니다. 예를 들어 `space-org`로 시작하는 조직에서 모든 작업{% ifversion actions-workflow-policy %} 및 재사용 가능한 워크플로{% endif %}를 허용하려면 `space-org*/*`를 지정할 수 있습니다. octocat으로 시작하는 리포지토리에서 모든 작업{% ifversion actions-workflow-policy %} 및 재사용 가능한 워크플로{% endif %}를 허용하려면 `*/octocat**@*`을 사용할 수 있습니다. `*` 와일드카드 사용에 대한 자세한 내용은 “[GitHub Actions에 대한 워크플로 구문](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)”을 참조하세요.

  {% ifversion fpt or ghec %} {% note %}

  **참고:** **지정된 작업{% ifversion actions-workflow-policy %} 및 재사용 가능한 워크플로{% endif %} 허용** 옵션은 조직의 경우 {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_free_team %} 또는 {% data variables.product.prodname_team %} 플랜이 있는 퍼블릭 리포지토리에서만 사용할 수 있습니다.

  {% endnote %} {% endif %}

이 프로시저에서는 지정된 작업{% ifversion actions-workflow-policy %} 및 재사용 가능한 워크플로{% endif %}를 허용 목록에 추가하는 방법을 보여 줍니다.
