---
title: Primeiros passos com a API de verificações
intro: 'A API de Execução de Verificações permite que você crie aplicativos GitHub que executam verificações poderosas contra alterações de código em um repositório. Você pode criar os aplicativos que realizam integração contínua, linting ou serviços de varredura de código e fornecem feedback detalhado sobre commits.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

### Visão Geral

Em vez de proporcionar status de criação de aprovação/falha, os aplicativos GitHub podem relatar status enriquecidos, anotar linhas de código com informações detalhadas e executar testes novamente. A funcionalidade API de Verificação está disponível exclusivamente para os seus aplicativos GitHub.

Para obter um exemplo de como usar a API de verificação com um {% data variables.product.prodname_github_app %}, consulte "[Criar testes de CI com a API de verificações](/apps/quickstart-guides/creating-ci-tests-with-the-checks-api/)".

### Sobre os conjuntos de verificações

Quando alguém faz push de código em um repositório, o GitHub cria um conjunto de verificações para o último commit. Um conjunto de verificações é uma coleção de [execuções de verificação](/rest/reference/checks#check-runs) criadas por um único aplicativo GitHub para um commit específico. Os conjuntos de verificações resumem o estado e conclusão das execuções de verificação que um conjunto inclui.

![Fluxo de trabalho dos conjuntos de verificações](/assets/images/check_suites.png)

O conjunto de verificações reporta `conclusão` da execução da verificação com a prioridade mais alta na `conclusão` do conjunto de verificações. Por exemplo, se três execuções de verificações tiverem conclusões `timed_out`, `success` e `neutral` a conclusão do conjunto de verificações será `timed_out`.

Por padrão, o GitHub cria um conjunto de verificações automaticamente quando o código é carregado no repositório. Este fluxo padrão envia o evento `check_suite` (com a ação `requested`) para todos os aplicativos GitHub com a permissão `checks:write`. Quando o seu aplicativo do GitHub receber o evento `check_suite`, ele poderá criar uma nova verificação executa o último commit. O GitHub adiciona automaticamente novas execuções de verificação ao [conjunto de verificações](/rest/reference/checks#check-suites) com base no repositório e no SHA da execução de verificação.

Se você não desejar usar o fluxo automático padrão, você poderá controlar quando criar conjuntos de verificação. Para alterar as configurações padrão para a criação de conjuntos de verificação, use o ponto de extremidade [Atualizar as preferências do repositório para conjuntos de verificação](/rest/reference/checks#update-repository-preferences-for-check-suites). Todas as alterações nas configurações de fluxo automático são registradas no log de auditoria do repositório. Se você tiver desabilitado o fluxo automático, você poderá criar um suíte de verificação usando o ponto de extremidade [Criar uma conjunto de verificações](/rest/reference/checks#create-a-check-suite). Você deve continuar usando o ponto de extremidade [Criar uma execução de verificação](/rest/reference/checks#create-a-check-run) para fornecer feedback sobre um commit.

{% data reusables.apps.checks-availability %}

Para usar a API de conjuntos de verificações, o aplicativo GitHub deve ter a permissão de `checks:write` e também poderá assinar o webhook de [check_suite](/webhooks/event-payloads/#check_suite).

{% data reusables.shortdesc.authenticating_github_app %}

### Sobre as execuções de verificação

Uma execução de verificação é um teste individual que faz parte de um conjunto de verificações. Cada execução inclui um status e uma conclusão.

![Fluxo de trabalho das execuções de verificação](/assets/images/check_runs.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
Se uma execução de verificação estiver em um estado incompleto por mais de 14 dias, a execução de verificação `conclusão` torna-se `obsoleta` e aparece em
{% data variables.product.prodname_dotcom %} como obsoleto com {% octicon "issue-reopened" aria-label="The issue-reopened icon" %}. Somente {% data variables.product.prodname_dotcom %} pode marcar a execuções de verificação como `obsoleto`. Para obter mais informações sobre possíveis conclusões de uma execução de verificação, consulte o parâmetro [`conclusão`](/rest/reference/checks#create-a-check-run--parameters).
{% endif %}

Assim que você receber o webhook de [`check_suite`](/webhooks/event-payloads/#check_suite), você poderá criar a execução de verificação, mesmo que a verificação não esteja completa. Você pode atualizar o `status` da execução de verificação, pois ele é completado com os valores de `queued`, `in_progress` ou `completed`, e você poderá atualizar a saída de `` conforme mais informações forem disponibilizadas. Uma verificação de execução pode conter registros de hora, um link para obter mais informações sobre o seu site externo, anotações detalhadas para linhas específicas de código, e informações sobre a análise realizada.

![Anotação da execução de verificação](/assets/images/check_run_annotations.png)

Uma verificação também pode ser reexecutada manualmente na interface do usuário do GitHub. Consulte "[Sobre verificações de status](/articles/about-status-checks#checks)para obter mais informações. Quando isso ocorre, o aplicativo GitHub que criou a execução de verificação receberá o webhook [`check_run`](/webhooks/event-payloads/#check_run), solicitando uma nova verificação de execução. Se você criar uma execução de verificação sem criar um conjunto de verificações, o GitHub criará automaticamente o conjunto de verificações para você.

{% data reusables.apps.checks-availability %}

Para usar a API de execução de verificações, o aplicativo GitHub deve ter a permissão `checks:write` e também deve poder assinar o webhook de [check_run](/webhooks/event-payloads#check_run).

### Execuções de verificação e ações solicitadas

Ao configurar uma verificação de execução com as ações solicitadas (não confundir com {% data variables.product.prodname_actions %}), você pode exibir um botão na exibição de pull request no {% data variables.product.prodname_dotcom %} que permite que pessoas solicitem o seu {% data variables.product.prodname_github_app %} para executar tarefas adicionais.

Por exemplo, um aplicativo de linting de código poderia usar ações solicitadas para exibir um botão em um pull request para corrigir automaticamente erros de sintaxe detectados.

Para criar um botão que possa solicitar ações adicionais do seu aplicativo, use as [`ações` objeto](/rest/reference/checks#create-a-check-run--parameters) ao [criar uma execução de verificação](/rest/reference/checks/#create-a-check-run). Por exemplo, o objeto de `ações` abaixo exibe um botão em um pull request com a etiqueta "Corrija isso". O botão é exibido após a conclusão da execução da verificação.

   ```json
  "actions": [{
      "label": "Fix this",
      "description": "Let us fix that for you",
      "identifier": "fix_errors"
    }]
  ```

  ![Botão de ação solicitada de execução de verificação](/assets/images/github-apps/github_apps_checks_fix_this_button.png)

Quando um usuário clica no botão, {% data variables.product.prodname_dotcom %} envia o webhook [`check_run.requested_action`](/webhooks/event-payloads/#check_run) para seu aplicativo. Quando o seu aplicativo recebe um evento de webhook de `check_run.requested_action`, ele pode procurar a chave `requested_action.identifier` na carga do webhook para determinar qual botão se clicou para executar a tarefa solicitada.

Para obter um exemplo detalhado de como configurar as ações solicitadas com a API de verificações, consulte "[Criar testes de CI com a API de verificações](/apps/quickstart-guides/creating-ci-tests-with-the-checks-api/#part-2-creating-the-octo-rubocop-ci-test)."
