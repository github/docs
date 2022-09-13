---
ms.openlocfilehash: 1c0fc320bbd41add7105a53f1ed85a10c39fb021
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "147883498"
---
<a name="allowing-select-actions-to-run"></a>
<a name="allowing-specific-actions-to-run"></a>
### 選択したアクション{% ifversion actions-workflow-policy %}と再利用可能なワークフロー{% endif %}の実行の許可

[{% data reusables.actions.policy-label-for-select-actions-workflows %}] を選ぶと、ローカル アクション{% ifversion actions-workflow-policy %}と再利用可能なワークフロー{% endif %}が許可され、他の特定のアクション{% ifversion actions-workflow-policy %}や再利用可能なワークフロー{% endif %}を許可するための追加のオプションがあります。

- **[{% data variables.product.prodname_dotcom %} によって作成されたアクションを許可する]:** {% data variables.product.prodname_dotcom %} によって作成されたすべてのアクションを、ワークフローで使用できるようにします。 {% data variables.product.prodname_dotcom %} によって作成されたアクションは、`actions` および `github` 組織にあります。 詳しくは、[`actions`](https://github.com/actions) および [`github`](https://github.com/github) の Organization をご覧ください。
- **[検証済みの作成者による Marketplace アクションを許可する]:** {% ifversion ghes or ghae %} このオプションは、{% data variables.product.prodname_github_connect %} が有効になっていて、{% data variables.product.prodname_actions %} で構成されている場合に使用できます。 詳細については、「[GitHub Connect を使用して GitHub.com アクションへの自動アクセスを有効にする](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)」を参照してください。{% endif %}検証済みの作成者によって作成されたすべての {% data variables.product.prodname_marketplace %} アクションを、ワークフローで使用できるようにします。 GitHubがアクションの作者をパートナーOrganizationとして検証すると、{% data variables.product.prodname_marketplace %}でアクションの隣に{% octicon "verified" aria-label="The verified badge" %}バッジが表示されるようになります。
- **[指定したアクション{% ifversion actions-workflow-policy %}と再利用可能なワークフロー{% endif %}を許可する]:** ワークフローで使用できるアクション{% ifversion actions-workflow-policy %}と再利用可能なワークフロー{% endif %}を、特定の組織とリポジトリのものに制限します。

  アクション{% ifversion actions-workflow-policy %}または再利用可能なワークフロー{% endif %}の特定のタグまたはコミット SHA へのアクセスを制限するには、ワークフローで使われているのと同じ構文を使って、アクション{% ifversion actions-workflow-policy %}または再利用可能なワークフロー{% endif %}を選びます。
  
  - アクションの場合の構文は、`<OWNER>/<REPO>@<TAG OR SHA>` です。 たとえば、タグを選択するには `actions/javascript-action@v1.0.1` を使用し、SHA を選択するには `actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89` を使用します。 詳細については、「[アクションの検索とカスタマイズ](/actions/learn-github-actions/finding-and-customizing-actions#using-release-management-for-your-custom-actions)」を参照してください。
  {%- ifversion actions-workflow-policy %}
  - 再利用可能なワークフローの場合の構文は、`<OWNER>/<REPO>/<PATH>/<FILENAME>@<TAG OR SHA>` です。 たとえば、`octo-org/another-repo/.github/workflows/workflow.yml@v1` のように指定します。 詳細については、「[ワークフローの再利用](/actions/using-workflows/reusing-workflows#calling-a-reusable-workflow)」を参照してください。
  {%- endif %}

  パターンのマッチには、ワイルドカード文字 `*` を使用できます。 たとえば、`space-org` で始まる Organization のすべてのアクション{% ifversion actions-workflow-policy %}と再利用可能なワークフロー{% endif %}を許可するには、`space-org*/*` と指定できます。 octocat で始まるリポジトリのすべてのアクション{% ifversion actions-workflow-policy %}と再利用可能なワークフロー{% endif %}を許可するには、`*/octocat**@*` を使用できます。 `*` ワイルドカードの使用の詳細については、「[GitHub Actions のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)」を参照してください。

  {% ifversion fpt or ghec %} {% note %}

  **注:** **[指定したアクション{% ifversion actions-workflow-policy %}と再利用可能なワークフロー{% endif %}を許可する]** オプションを使用できるのは、{% data variables.product.prodname_free_user %}、{% data variables.product.prodname_pro %}、Organization の {% data variables.product.prodname_free_team %}、または {% data variables.product.prodname_team %} プランのパブリック リポジトリのみです。

  {% endnote %} {% endif %}

この手順では、特定のアクション{% ifversion actions-workflow-policy %}と再利用可能なワークフロー{% endif %}を許可リストに追加する方法を示します。
