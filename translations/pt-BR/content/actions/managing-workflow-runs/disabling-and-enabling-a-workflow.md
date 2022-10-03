---
title: Desabilitar e habilitar um fluxo de trabalho
intro: 'Você pode desabilitar e habilitar novamente um fluxo de trabalho usando a interface do usuário de {% data variables.product.prodname_dotcom %}, a API REST, ou {% data variables.product.prodname_cli %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Disable & enable a workflow
ms.openlocfilehash: 1c0ebc0f56ba8c337648670e0f07d8a56e2fc326
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145101379'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Desabilitar um fluxo de trabalho permite que você impeça que um fluxo de trabalho seja acionado sem ter de excluir o arquivo do repositório. Você pode facilmente reabilitar o fluxo de trabalho novamente em {% data variables.product.prodname_dotcom %}.

Desabilitar temporariamente um fluxo de trabalho pode ser útil em vários cenários. Estes são alguns exemplos em que desabilitar um fluxo de trabalho pode ser útil:

- Um erro de fluxo de trabalho que produz muitas solicitações ou solicitações erradas, afetando negativamente os serviços externos.
- Um fluxo de trabalho que não é crítico e está consumindo muitos minutos na sua conta.
- Um fluxo de trabalho que envia solicitações para um serviço que não está ativo.
- Fluxos de trabalho em um repositório bifurcado desnecessários (por exemplo, fluxos de trabalho agendados).

{% warning %}

**Aviso:** {% data reusables.actions.scheduled-workflows-disabled %}

{% endwarning %}

Também é possível desabilitar e habilitar um fluxo de trabalho usando a API REST. Para obter mais informações, confira a "[API REST do Actions](/rest/reference/actions#workflows)".

## Desabilitar um fluxo de trabalho

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. Na barra lateral esquerda, clique no fluxo de trabalho que deseja desabilitar.
![selecionar fluxo de trabalho nas ações](/assets/images/actions-select-workflow.png)
1. Clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
![menu de kebab das ações](/assets/images/help/repository/actions-workflow-menu-kebab.png)
1. Clique em **Desabilitar fluxo de trabalho**.
![desabilitar fluxo de trabalho nas ações](/assets/images/help/repository/actions-disable-workflow.png) O fluxo de trabalho desabilitado é marcado como {% octicon "stop" aria-label="The stop icon" %} para indicar o status dele.
![fluxo de trabalho desabilitado na lista de ações](/assets/images/help/repository/actions-find-disabled-workflow.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para desabilitar um fluxo de trabalho, use o subcomando `workflow disable`. Substitua `workflow` pelo nome, pela ID ou pelo nome do arquivo de fluxo de trabalho que deseja desabilitar. Por exemplo, `"Link Checker"`, `1234567` ou `"link-check-test.yml"`. Se você não especificar um fluxo de trabalho, {% data variables.product.prodname_cli %} irá retornar um menu interativo para você escolher um fluxo de trabalho.

```shell
gh workflow disable <em>workflow</em>
```

{% endcli %}

## Habilitar um fluxo de trabalho

{% webui %}

Você pode habilitar novamente um fluxo de trabalho que foi desabilitado anteriormente.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. Na barra lateral esquerda, clique no fluxo de trabalho que deseja habilitar.
![selecionar fluxo de trabalho desabilitado nas ações](/assets/images/help/repository/actions-select-disabled-workflow.png)
1. Clique em **Habilitar fluxo de trabalho**.
![habilitar fluxo de trabalho nas ações](/assets/images/help/repository/actions-enable-workflow.png)

{% endwebui %}

{% cli %}

Para habilitar um fluxo de trabalho, use o subcomando `workflow enable`. Substitua `workflow` pelo nome, pela ID ou pelo nome do arquivo de fluxo de trabalho que deseja habilitar. Por exemplo, `"Link Checker"`, `1234567` ou `"link-check-test.yml"`. Se você não especificar um fluxo de trabalho, {% data variables.product.prodname_cli %} irá retornar um menu interativo para você escolher um fluxo de trabalho.

```shell
gh workflow enable <em>workflow</em>
```

{% endcli %}
