---
title: Primeiros passos com a API de verificações
intro: 'A API de Execução de Verificações permite que você crie aplicativos GitHub que executam verificações poderosas contra alterações de código em um repositório. Você pode criar os aplicativos que realizam integração contínua, linting ou serviços de varredura de código e fornecem feedback detalhado sobre commits.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Get started - Checks API
ms.openlocfilehash: b08d5a0a3c95f052c08a38b1aa46dbc0dc83da0e
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: '147062223'
---
## <a name="overview"></a>Visão geral

Em vez de proporcionar status de criação de aprovação/falha, os aplicativos GitHub podem relatar status enriquecidos, anotar linhas de código com informações detalhadas e executar testes novamente. A funcionalidade API de Verificação está disponível exclusivamente para os seus aplicativos GitHub.

Para ver um exemplo de como usar a API de Verificações com um {% data variables.product.prodname_github_app %}, confira "[Como criar testes de CI com a API de Verificações](/apps/quickstart-guides/creating-ci-tests-with-the-checks-api/)".

## <a name="about-check-suites"></a>Sobre os conjuntos de verificações

Quando alguém faz push de código em um repositório, o GitHub cria um conjunto de verificações para o último commit. Um conjunto de verificações é uma coleção das [execuções de verificação](/rest/reference/checks#check-runs) criadas por um Aplicativo do GitHub individual para um commit específico. Os conjuntos de verificações resumem o estado e conclusão das execuções de verificação que um conjunto inclui.

![Fluxo de trabalho dos conjuntos de verificações](/assets/images/check_suites.png)

O conjunto de verificações relata a `conclusion` da execução de verificação com a prioridade mais alta na `conclusion` do conjunto de verificações. Por exemplo, se três execuções de verificação tiverem as conclusões `timed_out`, `success` e `neutral`, a conclusão do conjunto de verificações será `timed_out`.

Por padrão, o GitHub cria um conjunto de verificações automaticamente quando o código é carregado no repositório. Esse fluxo padrão envia o evento `check_suite` (com a ação `requested`) para todos os Aplicativos do GitHub que têm a permissão `checks:write`. Quando o Aplicativo do GitHub recebe o evento `check_suite`, ele pode criar execuções de verificação para o commit mais recente. O GitHub adiciona automaticamente novas execuções de verificação ao [conjunto de verificações](/rest/reference/checks#check-suites) correto com base no repositório e no SHA da execução de verificação.

Se você não desejar usar o fluxo automático padrão, você poderá controlar quando criar conjuntos de verificação. Para alterar as configurações padrão para a criação de conjuntos de verificações, use o ponto de extremidade [Atualizar preferências do repositório para conjuntos de verificações](/rest/reference/checks#update-repository-preferences-for-check-suites). Todas as alterações nas configurações de fluxo automático são registradas no log de auditoria do repositório. Se você tiver desabilitado o fluxo automático, poderá criar um conjunto de verificações usando o ponto de extremidade [Criar um conjunto de verificações](/rest/reference/checks#create-a-check-suite). Você deve continuar usando o ponto de extremidade [Criar uma execução de verificação](/rest/reference/checks#create-a-check-run) para fornecer comentários sobre um commit.

{% data reusables.apps.checks-availability %}

Para usar a API de conjuntos de verificações, o Aplicativo do GitHub precisa ter a permissão `checks:write` e poder se inscrever no webhook [check_suite](/webhooks/event-payloads/#check_suite).

{% data reusables.shortdesc.authenticating_github_app %}

## <a name="about-check-runs"></a>Sobre as execuções de verificação

Uma execução de verificação é um teste individual que faz parte de um conjunto de verificações. Cada execução inclui um status e uma conclusão.

![Fluxo de trabalho das execuções de verificação](/assets/images/check_runs.png)

Se uma execução de verificação estiver em um estado incompleto por mais de 14 dias, a `conclusion` da execução de verificação passará a ser `stale` e será exibida no {% data variables.product.prodname_dotcom %} como obsoleta com {% octicon "issue-reopened" aria-label="The issue-reopened icon" %}. Somente o {% data variables.product.prodname_dotcom %} pode marcar execuções de verificação como `stale`. Para obter mais informações sobre as possíveis conclusões de uma execução de verificação, confira o [parâmetro `conclusion`](/rest/reference/checks#create-a-check-run--parameters).

Assim que você receber o webhook [`check_suite`](/webhooks/event-payloads/#check_suite), poderá criar a execução de verificação, mesmo que a verificação não esteja concluída. Você poderá atualizar a `status` da execução da verificação conforme ela for concluída com os valores `queued`, `in_progress` ou `completed` e atualizar a `output` à medida que mais detalhes estiverem disponíveis. Uma verificação de execução pode conter registros de hora, um link para obter mais informações sobre o seu site externo, anotações detalhadas para linhas específicas de código, e informações sobre a análise realizada.

![Anotação da execução de verificação](/assets/images/check_run_annotations.png)

Uma verificação também pode ser reexecutada manualmente na interface do usuário do GitHub. Confira "[Sobre as verificações de status](/articles/about-status-checks#checks)" para obter mais detalhes. Quando isso ocorrer, o Aplicativo do GitHub que criou a execução de verificação receberá o webhook [`check_run`](/webhooks/event-payloads/#check_run) solicitando uma nova execução de verificação. Se você criar uma execução de verificação sem criar um conjunto de verificações, o GitHub criará automaticamente o conjunto de verificações para você.

{% data reusables.apps.checks-availability %}

Para usar a API de Execuções de Verificação, o Aplicativo do GitHub precisa ter a permissão `checks:write` e poder se inscrever no webhook [check_run](/webhooks/event-payloads#check_run).

## <a name="check-runs-and-requested-actions"></a>Execuções de verificação e ações solicitadas

Ao configurar uma verificação de execução com as ações solicitadas (não confundir com {% data variables.product.prodname_actions %}), você pode exibir um botão na exibição de pull request no {% data variables.product.prodname_dotcom %} que permite que pessoas solicitem o seu {% data variables.product.prodname_github_app %} para executar tarefas adicionais.

Por exemplo, um aplicativo de linting de código poderia usar ações solicitadas para exibir um botão em um pull request para corrigir automaticamente erros de sintaxe detectados.

Para criar um botão que possa solicitar ações adicionais por meio do seu aplicativo, use o [objeto `actions`](/rest/reference/checks#create-a-check-run--parameters) quando [Criar uma execução de verificação](/rest/reference/checks/#create-a-check-run). Por exemplo, o objeto `actions` abaixo exibe um botão em uma solicitação de pull com o rótulo "Corrigir isso". O botão é exibido após a conclusão da execução da verificação.

   ```json
  "actions": [{
      "label": "Fix this",
      "description": "Let us fix that for you",
      "identifier": "fix_errors"
    }]
  ```

  ![Botão de ação solicitada de execução de verificação](/assets/images/github-apps/github_apps_checks_fix_this_button.png)

Quando um usuário clica no botão, o {% data variables.product.prodname_dotcom %} envia o [webhook `check_run.requested_action`](/webhooks/event-payloads/#check_run) ao seu aplicativo. Quando o aplicativo recebe um evento de webhook `check_run.requested_action`, ele pode procurar a chave `requested_action.identifier` no conteúdo do webhook para determinar qual botão recebeu um clique e executar a tarefa solicitada.

Para ver um exemplo detalhado de como configurar ações solicitadas com a API de Verificações, confira "[Como criar testes de CI com a API de Verificações](/apps/quickstart-guides/creating-ci-tests-with-the-checks-api/#part-2-creating-the-octo-rubocop-ci-test)".

{% ifversion fpt or ghec %}
## <a name="retention-of-checks-data"></a>Retenção de dados de verificação

{% data reusables.pull_requests.retention-checks-data %} {% endif %}
