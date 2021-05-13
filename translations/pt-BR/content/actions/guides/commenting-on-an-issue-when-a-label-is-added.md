---
title: Comentar em um problema quando uma etiqueta é adicionada
intro: 'Você pode usar {% data variables.product.prodname_actions %} para comentar automaticamente nos problema quando uma etiqueta específica é aplicada.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - Workflows
  - Project management
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}
{% data reusables.actions.ae-self-hosted-runners-notice %}

### Introdução

Este tutorial demonstra como usar a ação [`peter-evans/create-or-update-comment`](https://github.com/marketplace/actions/create-or-update-comment) para comentar em um problema quando uma etiqueta específica é aplicada. Por exemplo, quando a etiqueta `help-wanted` é adicionada a um problema, você pode adicionar um comentário para incentivar os contribuidores a trabalhar no problema.

No tutorial, primeiro você vai criar um arquivo de fluxo de trabalho que usa a ação [`peter-evans/create-or-update-comment`](https://github.com/marketplace/actions/create-or-update-comment). Então, você personalizará o fluxo de trabalho para atender às suas necessidades.

### Criar o fluxo de trabalho

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Copie o seguinte conteúdo YAML para o arquivo do fluxo de trabalho.

    {% raw %}
    ```yaml{:copy}
    name: Add comment
    on:
      issues:
        types:
          - labeled
    jobs:
      add-comment:
        if: github.event.label.name == 'help-wanted'
        runs-on: ubuntu-latest
        steps:
          - name: Add comment
            uses: peter-evans/create-or-update-comment@v1
            with:
              issue-number: ${{ github.event.issue.number }}
              body: |
                This issue is available for anyone to work on. **Certifique-se de fazer referência a esse problema no seu pull request.** :sparkles: Obrigado pela sua contribuição! :sparkles:
    ```
    {% endraw %}
4. Personalize os parâmetros no seu arquivo do fluxo de trabalho:
   - Substitua `help-wanted` em `if: github.event.label.name == 'help-wanted'` pela etiqueta na qual você deseja agir. Se você desejar atuar em mais de uma etiqueta, separe as condições com `||`. Por exemplo, `if: github.event.label.name == 'bug' ➜ github.event.label. ame == 'corrija-me'` irá comentar sempre que as etiquetas `bug` ou `fix me` forem adicionadas a um problema.
   - Altere o valor de `texto` para o comentário que você deseja adicionar. Markdown em estilo GitHub é compatível. Para obter mais informações sobre markdown, consulte "[Sintaxe básica de escrita e formatação](/github/writing-on-github/basic-writing-and-formatting-syntax)".
5. {% data reusables.actions.commit-workflow %}

### Testar o fluxo de trabalho

Toda vez que um problema no repositório for identificado, esse fluxo de trabalho será executado. Se a etiqueta que foi adicionada for uma das etiquetas que você especificou no seu arquivo de fluxo de trabalho, a ação `peter-evans/create-or-update-comment` irá adicionar o comentário que você especificou para o problema.

Teste seu fluxo de trabalho aplicando a sua etiqueta especificada a um problema.

1. Abra um problema no seu repositório. Para obter mais informações, consulte "[Criar um problema](/github/managing-your-work-on-github/creating-an-issue)".
2. Etiquete o problema com a etiqueta especificada no seu arquivo de fluxo de trabalho. Para obter mais informações, consulte "[Gerenciar etiquetas](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)".
3. Para ver a execução do fluxo de trabalho acionada etiquetando o problema, veja o histórico de execuções do seu fluxo de trabalho. Para obter mais informações, consulte "[Visualizar histórico de execução de fluxo de trabalho](/actions/managing-workflow-runs/viewing-workflow-run-history)".
4. Quando o fluxo de trabalho é concluído, o problema que você etiquetou deve ter um comentário adicionado.

### Próximas etapas

- Para saber outras coisas, você pode fazer com a ação `peter-evans/create-or-update-comment`, como adicionar reações, acesse a documentação de ação [`peter-evans/create-or-update-comment`](https://github.com/marketplace/actions/create-or-update-comment).
