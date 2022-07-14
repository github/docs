---
title: Agendar a criação de problemas
intro: 'Você pode usar {% data variables.product.prodname_actions %} para criar um problema regularmente para coisas como reuniões diárias ou revisões trimestrais.'
redirect_from:
  - /actions/guides/scheduling-issue-creation
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

Este tutorial demonstra como usar a ação [`imjohnbo/issue-bot`](https://github.com/marketplace/actions/issue-bot-action) para criar um problema regularmente. Por exemplo, você pode criar um problema toda semana para usar como agenda para uma reunião de equipe.

No tutorial, primeiro você vai criar um arquivo de fluxo de trabalho que usa a ação [`imjohnbo/issue-bot`](https://github.com/marketplace/actions/issue-bot-action). Então, você personalizará o fluxo de trabalho para atender às suas necessidades.

## Criar o fluxo de trabalho

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Copie o seguinte conteúdo YAML para o arquivo do fluxo de trabalho.

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

    name: Weekly Team Sync
    on:
      schedule:
        - cron: 20 07 * * 1

    jobs:
      create_issue:
        name: Create team sync issue
        runs-on: ubuntu-latest
        permissions:
          issues: write
        steps:
          - name: Create team sync issue
            uses: imjohnbo/issue-bot@3daae12aa54d38685d7ff8459fc8a2aee8cea98b
            with:
              assignees: "monalisa, doctocat, hubot"
              labels: "weekly sync, docs-team"
              title: "Team sync"
              body: |
                ### Agenda

                - [ ] Start the recording
                - [ ] Check-ins
                - [ ] Discussion points
                - [ ] Post the recording

                ### Discussion Points
                Add things to discuss below

                - [Work this week](https://github.com/orgs/github/projects/3)
              pinned: false
              close-previous: false
            env:
              GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

4. Personalize os parâmetros no seu arquivo do fluxo de trabalho:
   - Altere o valor de `on.schagen` para ditar quando você deseja que este fluxo de trabalho seja executado. No exemplo acima, o fluxo de trabalho será executado todas as segundas às 7h20 UTC. Para obter mais informações sobre fluxos de trabalho agendados, consulte "[Eventos agendados](/actions/reference/events-that-trigger-workflows#scheduled-events)".
   - Altere o valor de `responsáveis` para a lista de nomes de usuário de {% data variables.product.prodname_dotcom %} que você deseja atribuir ao problema.
   - Altere o valor das etiquetas de `` para a lista de etiquetas que você deseja aplicar ao problema.
   - Altere o valor do `título` para o título que você deseja que o problema tenha.
   - Altere o valor do `texto` para o texto que você quer no texto do problema. O caractere `|` permite que você use um valor de linhas múltiplas para este parâmetro.
   - Se quiser fixar este problema no seu repositório, defina `fixado` como `verdadeiro`. Para obter mais informações sobre problemas fixos, consulte "[Fixar um problema no seu repositório](/articles/pinning-an-issue-to-your-repository)".
   - Se você deseja fechar o problema anterior gerado por este fluxo de trabalho, cada vez que um novo problema for criado, defina `close-previous` como `verdadeiro`. O fluxo de trabalho fechará o problema mais recente que tem as etiquetas definidas no campo de `etiquetas`. Para evitar o fechamento do problema errado, use uma etiqueta exclusiva ou uma combinação de etiquetas.
5. {% data reusables.actions.commit-workflow %}

## Resultados esperados

Baseado no parâmetro `agendar` (por exemplo, toda segunda-feira às 7h20 UTC), seu fluxo de trabalho criará um novo problema com os responsáveis, etiquetas, título e texto que você especificou. Se você definir `fixado` como `verdadeiro`, o fluxo de trabalho irá fixar o problema no repositório. Se você definir `close-previous` como verdadeiro, o fluxo de trabalho fechará o problema mais recente com etiquetas correspondentes.

{% data reusables.actions.schedule-delay %}

Você pode visualizar o histórico de execução do fluxo de trabalho para ver a execução deste fluxo de trabalho periodicamente. Para obter mais informações, consulte "[Visualizar histórico de execução de fluxo de trabalho](/actions/managing-workflow-runs/viewing-workflow-run-history)".

## Próximas etapas

- Para saber mais sobre coisas adicionais que você pode fazer com a ação `imjohnbo/issue-bot`, como girar responsáveis ou usar um modelo de problema, consulte a</code> documentação da ação imjohnbo/issue-bot</a>.</li>
<li><a href="https://github.com/search?q=%22uses%3A+imjohnbo%2Fissue-bot%22&type=code">Pesquise no GitHub</a> exemplos de fluxos de trabalho que usam esta ação.</li>
</ul>
