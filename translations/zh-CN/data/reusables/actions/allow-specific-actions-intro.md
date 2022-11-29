---
ms.openlocfilehash: 1c0fc320bbd41add7105a53f1ed85a10c39fb021
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "147883495"
---
<a name="allowing-select-actions-to-run"></a>
<a name="allowing-specific-actions-to-run"></a>
### 允许选择操作{% ifversion actions-workflow-policy %}和可重用工作流{% endif %}以运行

如果选择 {% data reusables.actions.policy-label-for-select-actions-workflows %}，则允许本地操作{% ifversion actions-workflow-policy %}和可重用工作流{% endif %}，并且还允许其他特定操作{% ifversion actions-workflow-policy %}和可重用工作流{% endif %}的其他选项：

- **允许 {% data variables.product.prodname_dotcom %} 创建的操作：** 可以允许工作流使用 {% data variables.product.prodname_dotcom %} 创建的所有操作。 {% data variables.product.prodname_dotcom %} 创建的操作位于 `actions` 和 `github` 组织中。 有关详细信息，请参阅 [`actions`](https://github.com/actions) 和 [`github`](https://github.com/github) 组织。
- 允许经过验证的创建者执行的 Marketplace 操作：{% ifversion ghes or ghae %}如果已启用 {% data variables.product.prodname_github_connect %} 并配置了 {% data variables.product.prodname_actions %}，则此选项可用。 有关详细信息，请参阅“[使用 GitHub Connect 启用对 GitHub.com 操作的自动访问](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)。”{% endif %}可以允许工作流使用由经过验证的创建者创建的所有 {% data variables.product.prodname_marketplace %} 操作。 如果 GitHub 验证该操作的创建者为合作伙伴组织，{% octicon "verified" aria-label="The verified badge" %} 徽章将显示在 {% data variables.product.prodname_marketplace %} 中的操作旁边。
- 允许指定的操作{% ifversion actions-workflow-policy %}和可重用的工作流{% endif %}：可以限制工作流使用特定组织和存储库中的操作{% ifversion actions-workflow-policy %}和可重用工作流{% endif %}。

  若要限制对操作{% ifversion actions-workflow-policy %}或可重用工作流{% endif %}的特定标记或提交 SHA 的访问，请使用工作流中使用的相同语法来选择操作{% ifversion actions-workflow-policy %}或可重用工作流{% endif %}。
  
  - 对于操作，语法为 `<OWNER>/<REPO>@<TAG OR SHA>`。 例如，使用 `actions/javascript-action@v1.0.1` 选择标记或使用 `actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89` 选择 SHA。 有关详细信息，请参阅“[查找和自定义操作](/actions/learn-github-actions/finding-and-customizing-actions#using-release-management-for-your-custom-actions)”。
  {%- ifversion actions-workflow-policy %}
  - 对于可重用的工作流，语法为 `<OWNER>/<REPO>/<PATH>/<FILENAME>@<TAG OR SHA>`. 例如，`octo-org/another-repo/.github/workflows/workflow.yml@v1`。 有关详细信息，请参阅“[重用工作流](/actions/using-workflows/reusing-workflows#calling-a-reusable-workflow)”。
  {%- endif %}

  可以使用 `*` 通配符来匹配模式。 例如，若要允许以 `space-org` 开头的组织中的所有操作{% ifversion actions-workflow-policy %}和可重用工作流{% endif %}，可以指定 `space-org*/*`。 若要允许以 octocat 开头的存储库中的所有操作{% ifversion actions-workflow-policy %}和可重用工作流{% endif %}，可以使用 `*/octocat**@*`。 有关使用 `*` 通配符的详细信息，请参阅“[GitHub 操作的工作流语法](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)”。

  {% ifversion fpt or ghec %} {% note %}

  注意：“允许指定操作{% ifversion actions-workflow-policy %}和可重用工作流{% endif %}”选项仅可用于具有 {% data variables.product.prodname_free_user %}、{% data variables.product.prodname_pro %}、组织的 {% data variables.product.prodname_free_team %} 或 {% data variables.product.prodname_team %} 计划的公共存储库。

  {% endnote %} {% endif %}

此过程演示如何将特定操作{% ifversion actions-workflow-policy %}和可重用工作流{% endif %}添加到允许列表。
