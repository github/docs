---
ms.openlocfilehash: 1c0fc320bbd41add7105a53f1ed85a10c39fb021
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147883494"
---
<a name="allowing-select-actions-to-run"></a>
<a name="allowing-specific-actions-to-run"></a>
### Permitindo a execução de ações selecionadas{% ifversion actions-workflow-policy %} e fluxos de trabalho reutilizáveis{% endif %}

Quando você escolhe {% data reusables.actions.policy-label-for-select-actions-workflows %}, as ações locais{% ifversion actions-workflow-policy %} e os fluxos de trabalho reutilizáveis{% endif %} são permitidos e há opções adicionais para permitir outras ações específicas{% ifversion actions-workflow-policy %} e fluxos de trabalho reutilizáveis{% endif %}:

- **Permitir ações criadas pelo {% data variables.product.prodname_dotcom %}:** você pode permitir que todas as ações criadas pelo {% data variables.product.prodname_dotcom %} sejam usadas por fluxos de trabalho. As ações criadas pelo {% data variables.product.prodname_dotcom %} estão localizadas nas organizações `actions` e `github`. Para obter mais informações, confira [`actions`](https://github.com/actions) e organizações [`github`](https://github.com/github).
- **Permitir ações do Marketplace de criadores verificados:** {% ifversion ghes or ghae %}Essa opção ficará disponível se você tiver o {% data variables.product.prodname_github_connect %} habilitado e configurado com o {% data variables.product.prodname_actions %}. Para obter mais informações, confira "[Como habilitar o acesso automático às ações do GitHub.com usando o GitHub Connect](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)".{% endif %} Você pode permitir que todas as ações do {% data variables.product.prodname_marketplace %} criadas por criadores verificados sejam usadas por fluxos de trabalho. Quando o GitHub verificou o criador da ação como uma organização parceira, o selo de {% octicon "verified" aria-label="The verified badge" %} é exibido ao lado da ação em {% data variables.product.prodname_marketplace %}.
- **Permitir ações especificadas{% ifversion actions-workflow-policy %} e fluxos de trabalho reutilizáveis{% endif %}:** você pode restringir os fluxos de trabalho a usar ações{% ifversion actions-workflow-policy %} e fluxos de trabalho reutilizáveis{% endif %} em organizações e repositórios específicos.

  Para restringir o acesso a tags ou SHAs de commit específicos de uma ação{% ifversion actions-workflow-policy %} ou um fluxo de trabalho reutilizável{% endif %}, use a mesma sintaxe usada no fluxo de trabalho para selecionar a ação{% ifversion actions-workflow-policy %} ou o fluxo de trabalho reutilizável{% endif %}.
  
  - Para uma ação, a sintaxe é `<OWNER>/<REPO>@<TAG OR SHA>`. Por exemplo, use `actions/javascript-action@v1.0.1` para selecionar uma tag ou `actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89` para selecionar um SHA. Para obter mais informações, confira "[Como encontrar e personalizar ações](/actions/learn-github-actions/finding-and-customizing-actions#using-release-management-for-your-custom-actions)".
  {%- ifversion actions-workflow-policy %}
  - Para um fluxo de trabalho reutilizável, a sintaxe é `<OWNER>/<REPO>/<PATH>/<FILENAME>@<TAG OR SHA>`. Por exemplo, `octo-org/another-repo/.github/workflows/workflow.yml@v1`. Para obter mais informações, confira "[Como reutilizar fluxos de trabalho](/actions/using-workflows/reusing-workflows#calling-a-reusable-workflow)".
  {%- endif %}

  Você pode usar o caractere curinga `*` para fazer a correspondência de padrões. Por exemplo, para permitir todas as ações{% ifversion actions-workflow-policy %} e fluxos de trabalho reutilizáveis{% endif %} em organizações que começam com `space-org`, especifique `space-org*/*`. Para permitir todas as ações{% ifversion actions-workflow-policy %} e fluxos de trabalho reutilizáveis{% endif %} em repositórios que começam com octocat, use `*/octocat**@*`. Para obter mais informações sobre como usar o curinga `*`, confira "[Sintaxe de fluxo de trabalho do GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)".

  {% ifversion fpt or ghec %} {% note %}

  **Observação:** a opção **Permitir ações{% ifversion actions-workflow-policy %} e fluxos de trabalho reutilizáveis{% endif %} especificados** só está disponível em repositórios públicos com o {% data variables.product.prodname_free_user %}, o {% data variables.product.prodname_pro %}, o {% data variables.product.prodname_free_team %} para organizações ou o plano do {% data variables.product.prodname_team %}.

  {% endnote %} {% endif %}

Este procedimento demonstra como adicionar ações{% ifversion actions-workflow-policy %} e fluxos de trabalho reutilizáveis{% endif %} específicos à lista de permissões.
