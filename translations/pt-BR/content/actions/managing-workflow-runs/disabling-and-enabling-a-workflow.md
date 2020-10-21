---
title: Desabilitar e habilitar um fluxo de trabalho
intro: Você pode desabilitar e reabilitar um fluxo de trabalho usando {% data variables.product.prodname_dotcom %} ou a API REST.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.23'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Desabilitar um fluxo de trabalho permite que você impeça que um fluxo de trabalho seja acionado sem ter de excluir o arquivo do repositório. Você pode facilmente reabilitar o fluxo de trabalho novamente em {% data variables.product.prodname_dotcom %}. Também é possível desabilitar e habilitar um fluxo de trabalho usando a API REST. Para obter mais informações, consulte a "[Ações da REST API](/rest/reference/actions#workflows)".

Desabilitar temporariamente um fluxo de trabalho pode ser útil em vários cenários. Estes são alguns exemplos em que desabilitar um fluxo de trabalho pode ser útil:

- Um erro de fluxo de trabalho que produz muitas solicitações ou solicitações erradas, afetando negativamente os serviços externos.
- Um fluxo de trabalho que não é crítico e está consumindo muitos minutos na sua conta.
- Um fluxo de trabalho que envia solicitações para um serviço que não está ativo.
- Fluxos de trabalho em um repositório bifurcado desnecessários (por exemplo, fluxos de trabalho agendados).

{% warning %}

**Aviso:** {% data reusables.actions.scheduled-workflows-disabled %}

{% endwarning %}

### Desabilitar um fluxo de trabalho

Você pode desabilitar manualmente um fluxo de trabalho para que não realize qualquer execução de fluxo de trabalho. Um fluxo de trabalho desabilitado não é excluído e pode ser reabilitado.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. Na barra lateral esquerda, clique no fluxo de trabalho que deseja desabilitar. ![ações selecionam fluxo de trabalho](/assets/images/actions-select-workflow.png)
1. Clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}. ![menu de ações kebab](/assets/images/help/repository/actions-workflow-menu-kebab.png)
1. Clique **Desabilitar fluxo de trabalho**. ![actions disable workflow](/assets/images/help/repository/actions-disable-workflow.png) O fluxo de trabalho desabilitado está marcado {% octicon "stop" aria-label="The stop icon" %} para indicar seu status. ![lista de ações desabilitada no fluxo de trabalho](/assets/images/help/repository/actions-find-disabled-workflow.png)

### Habilitar um fluxo de trabalho

Você pode habilitar novamente um fluxo de trabalho que foi desabilitado anteriormente.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. Na barra lateral esquerda, clique no fluxo de trabalho que deseja habilitar. ![ações selecionam um fluxo de trabalho desativado](/assets/images/help/repository/actions-select-disabled-workflow.png)
1. Clique em **Habilitar o fluxo de trabalho**. ![ações habilitam fluxo de trabalho](/assets/images/help/repository/actions-enable-workflow.png)
