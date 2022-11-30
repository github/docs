---
title: Usando ambientes para implantação
shortTitle: Use environments for deployment
intro: Você pode configurar ambientes com regras de proteção e segredos. Um trabalho de fluxo de trabalho que faz referência a um ambiente deve seguir quaisquer regras de proteção para o ambiente antes de executar ou acessar os segredos do ambiente.
product: '{% data reusables.gated-features.environments %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /actions/reference/environments
  - /actions/deployment/environments
  - /actions/deployment/using-environments-for-deployment
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 21163a759cfd7eab3b197aeb4bb9283e1ccb90a2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147572300'
---
## Sobre ambientes

Os ambientes são usados para descrever um destino de implantação geral, como `production`, `staging` ou `development`. Quando um fluxo de trabalho de {% data variables.product.prodname_actions %} é implantado em um ambiente, o ambiente é exibido na página principal do repositório. Para obter mais informações sobre como ver implantações em ambientes, confira "[Como ver o histórico de implantações](/developers/overview/viewing-deployment-history)".

Você pode configurar ambientes com regras de proteção e segredos. Quando um trabalho de fluxo de trabalho faz referência a um ambiente, o trabalho não será iniciado até que todas as regras de proteção do ambiente sejam aprovadas. Um trabalho também não pode acessar segredos definidos em ambiente até que todas as regras de proteção do ambiente sejam aprovadas.

{% ifversion fpt %} {% note %}

**Observação:** você só pode configurar ambientes para repositórios públicos. Se você converter um repositório de público em privado, todas as regras de proteção ou segredos de ambiente configurados serão ignorados, e você não conseguirá configurar nenhum ambiente. Se você converter seu repositório de volta para público, você terá acesso a todas as regras de proteção e segredos de ambiente previamente configurados.

Organizações com {% data variables.product.prodname_team %} e usuários com {% data variables.product.prodname_pro %} podem configurar ambientes para repositórios privados. Para obter mais informações, confira "[Produtos do {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/githubs-products)".

{% endnote %} {% endif %}

## Regras de proteção do ambiente

As normas de proteção do ambiente exigem a aprovação de condições específicas antes que um trabalho que faz referência ao ambiente possa prosseguir. Você pode usar regras de proteção ambiental para exigir uma aprovação manual, atrasar um trabalho ou restringir o ambiente a certos branches.

### Revisores necessários

Use os revisores necessários para exigir que uma pessoa ou equipe específica aprove os trabalhos do fluxo de trabalho que fazem referência ao ambiente. Você pode listar até seis usuários ou equipes como revisores. Os revisores devem ter, pelo menos, acesso de leitura ao repositório. Apenas um dos revisores precisam aprovar o trabalho para que prossiga.

Para obter mais informações sobre como revisar trabalhos que referenciam um ambiente com revisores obrigatórios, confira "[Como revisar implantações](/actions/managing-workflow-runs/reviewing-deployments)".

### Temporizador de espera

Use o temporizador de espera para atrasar o trabalho por um período específico de tempo depois que o trabalho for inicialmente acionado. O tempo (em minutos) deve ser um número inteiro entre 0 e 43.200 (30 dias).

### Implementar branches

Use os branches de implantação para restringir quais branches podem ser implementados no ambiente. Abaixo, estão as opções para branches de implantação para um ambiente:

* **Todos os branches**: todos os branches do repositório podem ser implantados no ambiente.
* **Branches protegidos**: somente os branches com regras de proteção de branch habilitadas podem ser implantados no ambiente. Se nenhuma regra de proteção de branch for definida para qualquer branch no repositório, todos os branches poderão implantar. Para obter mais informações sobre as regras de proteção de branch, confira "[Sobre os branches protegidos](/github/administering-a-repository/about-protected-branches)".
* **Branches selecionados**: somente os branches que correspondem aos seus padrões de nome especificados podem ser implantados no ambiente.

  Por exemplo, se você especificar `releases/*` como uma regra de branch de implantação, somente os branches cujos nomes começam com `releases/` podem ser implantados no ambiente. (Os caracteres curinga não corresponderão a `/`. Para fazer a correspondência dos branches que começam com `release/` e contêm uma barra única adicional, use `release/*/*`). Se você adicionar `main` como uma regra de branch de implantação, um branch chamado `main` também poderá ser implantado no ambiente. Para obter mais informações sobre as opções de sintaxe para branches de implantação, confira a [documentação de File.fnmatch do Ruby](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).
## Segredos do ambiente

Os segredos armazenados em um ambiente só estão disponíveis para trabalhos de fluxo de trabalho que fazem referência ao ambiente. Se o ambiente exigir aprovação, um trabalho não poderá acessar segredos de ambiente até que um dos revisores necessários o aprove. Para obter mais informações sobre segredos, confira "[Segredos criptografados](/actions/reference/encrypted-secrets)".

{% note %}

**Observação:** os fluxos de trabalho executados em executores auto-hospedados não são executados em um contêiner isolado, mesmo que usem ambientes. Os segredos de ambiente devem ser tratados com o mesmo nível de segurança que os segredos do repositório e da organização. Para obter mais informações, confira "[Proteção de segurança do GitHub Actions](/actions/learn-github-actions/security-hardening-for-github-actions#hardening-for-self-hosted-runners)".

{% endnote %}

## Criando um ambiente

{% data reusables.actions.permissions-statement-environment %}

{% ifversion fpt or ghec %} {% note %}

**Observação:** a criação de um ambiente em um repositório privado está disponível para organizações com {% data variables.product.prodname_team %} e usuários com {% data variables.product.prodname_pro %}.

{% endnote %} {% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.actions.sidebar-environment %} {% data reusables.actions.new-environment %} {% data reusables.actions.name-environment %}
1. Opcionalmente, especifique as pessoas ou equipes que devem aprovar os trabalhos do fluxo de trabalho que usam esse ambiente.
   1. Selecione **Revisores necessários**.
   1. Insira até até 6 pessoas ou equipes. Apenas um dos revisores precisam aprovar o trabalho para que prossiga.
   1. Clique em **Salvar regras de proteção**.
2. Opcionalmente, especifique o tempo a esperar antes de permitir que os trabalhos do fluxo de trabalho que usam esse ambiente prossigam.
   1. Selecione **Temporizador de espera**.
   1. Insira o número de minutos para esperar.
   1. Clique em **Salvar regras de proteção**.
3. Opcionalmente, especifique quais branches podem implantar neste ambiente. Para obter mais informações sobre os valores possíveis, confira "[Branches de implantação](#deployment-branches)".
   1. Selecione a opção desejada no menu suspenso **Branches de implantação**.
   1. Se você escolheu **Branches selecionados**, insira os padrões de nomes de branches que deseja permitir.
4. Opcionalmente, adicione segredos de ambiente. Esses segredos só estão disponíveis para trabalhos de fluxo de trabalho que usam o ambiente. Além disso, os trabalhos do fluxo de trabalho que usam este ambiente só podem acessar esses segredos após todas as regras configuradas (por exemplo, revisores obrigatórios). Para obter mais informações sobre segredos, confira "[Segredos criptografados](/actions/reference/encrypted-secrets)".
   1. Em **Segredos do ambiente**, clique em **Adicionar Segredo**.
   1. Insira o nome do segredo.
   1. Insira o valor do segredo.
   1. Clique em **Adicionar segredo**.

Também é possível criar e configurar ambientes por meio da API REST. Para obter mais informações, confira "[Ambientes de implantação](/rest/deployments/environments)", "[Segredos do GitHub Actions](/rest/actions/secrets)" e "[Políticas de branch de implantação](/rest/deployments/branch-policies)".

Executar um fluxo de trabalho que faz referência a um ambiente que não existe criará um ambiente com o nome referenciado. O novo ambiente não terá nenhuma regra de proteção ou segredos configurados. Qualquer pessoa que possa editar fluxos de trabalho no repositório pode criar ambientes por meio de um arquivo de fluxo de trabalho, mas apenas os administradores do repositório podem configurar o ambiente.

## Usando um ambiente

Cada trabalho em um fluxo de trabalho pode fazer referência a um único ambiente. Todas as regras de proteção configuradas para o ambiente têm de ser aprovadas antes que um trabalho de referência ao ambiente seja enviado a um executor. O trabalho só pode acessar os segredos do ambiente depois que for enviado para um executor.

Quando um fluxo de trabalho faz referência a um ambiente, o ambiente aparecerá nas implantações do repositório. Para obter mais informações sobre como ver as implantações atuais e anteriores, confira "[Como ver o histórico de implantações](/developers/overview/viewing-deployment-history)".

{% data reusables.actions.environment-example %}

## Excluir um ambiente

{% data reusables.actions.permissions-statement-environment %}

A exclusão de um ambiente apagará todos os segredos e regras de proteção associados ao ambiente. Todos os trabalhos que estejam atualmente em espera devido às regras de proteção do ambiente eliminado falharão automaticamente.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.actions.sidebar-environment %}
1. Ao lado do ambiente que você deseja excluir, clique em {% octicon "trash" aria-label="The trash icon" %}.
2. Clique em **Entendi. Excluir este ambiente**.

Também é possível excluir ambientes por meio da API REST. Para saber mais, confira "[Ambientes](/rest/reference/repos#environments)".

## Como os ambientes relacionam-se com as implantações

{% data reusables.actions.environment-deployment-event %}

Você pode acessar esses objetos por meio da API REST ou API do GraphQL. Você também pode assinar esses eventos de webhook. Para obter mais informações, confira "[Repositórios](/rest/reference/repos#deployments)" (API REST), "[Objetos](/graphql/reference/objects#deployment)" (API do GraphQL) ou "[Eventos e cargas de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment)".

## Próximas etapas

{% data variables.product.prodname_actions %} fornece várias funcionalidades para gerenciar suas implantações. Para obter mais informações, confira "[Implantação com o GitHub Actions](/actions/deployment/deploying-with-github-actions)".
