---
ms.openlocfilehash: a314a101135f5b47bfd573b1be6d7867db4ac26d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145127661"
---
#### Fluxos de trabalho em repositórios com fork

Por padrão, os fluxos de trabalho não são executados em repositórios com fork. É preciso habilitar o GitHub Actions na guia **Actions** do repositório com fork.

{% data reusables.actions.forked-secrets %} O `GITHUB_TOKEN` tem permissões somente leitura em repositórios com forks. Para obter mais informações, confira "[Como se autenticar com o GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)".

#### Eventos de pull request para repositórios bifurcados

Para solicitações de pull de um repositório com fork para o repositório base, o {% data variables.product.product_name %} envia os eventos `pull_request`, `issue_comment`, `pull_request_review_comment`, `pull_request_review` e `pull_request_target` para o repositório base. Nenhum evento de solicitação de pull ocorre no repositório com fork.

{% ifversion fpt or ghec %} Quando um colaborador envia uma solicitação de pull para um repositório público pela primeira vez, um mantenedor com acesso de gravação pode precisar aprovar a execução de fluxos de trabalho na solicitação de pull. Para obter mais informações, confira "[Como aprovar execuções de fluxo de trabalho de forks públicos](/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks)".
{% endif %}

{% note %}

**Observação:** os fluxos de trabalho não são executados em repositórios base privados quando você abre uma solicitação de pull por meio de um repositório com fork.

{% endnote %}

{% note %}

**Observação:** os fluxos de trabalho disparados pelas solicitações de pull do {% data variables.product.prodname_dependabot %} são tratados como se fossem de um repositório com fork, também estando sujeitos a essas restrições.

{% endnote %}
