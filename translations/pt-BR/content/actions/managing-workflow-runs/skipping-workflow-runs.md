---
title: Ignorar execuções de fluxo de trabalho
intro: Você pode ignorar as execuções de fluxo de trabalho acionadas pelos eventos `push` e `pull_request` incluindo um comando na sua mensagem de commit.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Ignorar execução de fluxo de trabalho
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Os fluxos de trabalho que seriam acionados usando `on: push` ou `on: pull_request` não serão acionado se você adicionar qualquer uma das strings a seguir para a mensagem de commit em um push ou o commit HEAD de um pull request:

* `[skip ci]`
* `[ci skip]`
* `[no ci]`
* `[skip actions]`
* `[actions skip]`

Como alternativa, você pode terminar a mensagem de commit com duas linhas vazias seguidas de `skip-checks: true` ou `skip-checks:true`.

Você não conseguirá fazer o merge do pull request se o repositório estiver configurado para exigir verificações específicas para passar primeiro. Para permitir que o merge do pull request, você pode fazer o push de um novo commit no pull request sem que a instrução seja ignorada na mensagem do commit.

{% note %}

**Observação:** Ignorar instruções só se aplica aos eventos `push` e `pull_request`. Por exemplo, adicionar `[skip ci]` a uma mensagem de commit não impedirá que um fluxo de trabalho que acionou `on : pull_request_target` seja executado.

{% endnote %}

Ignorar as instruções só se aplica às execuções do(s) fluxo(s) de trabalho que serão acionadas pelo commit que contém as instruções de para ignorar. Você também pode desabilitar um fluxo de trabalho da execução. Para obter mais informações, consulte "[Desabilitar e habilitar um fluxo de trabalho](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)".
