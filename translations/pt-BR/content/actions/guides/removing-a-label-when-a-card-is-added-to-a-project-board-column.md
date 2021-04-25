---
title: Remover uma etiqueta quando um cartão é adicionado à coluna de um quadro de projeto
intro: Você pode usar {% data variables.product.prodname_actions %} para remover automaticamente uma etiqueta quando um problema ou pull request for adicionado a uma coluna específica no quadro de um projeto.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: 'tutorial'
topics:
  - 'Fluxos de trabalho'
  - 'Gerenciamento de projeto'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}
{% data reusables.actions.ae-self-hosted-runners-notice %}

### Introdução

Este tutorial demonstra como usar a ação [`andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler) junto com uma condicional para remover uma etiqueta dos problemas e pull requests que são adicionados a uma coluna específica em um quadro de um projeto. Por exemplo, você pode remover a etiqueta `precisa de revisão` quando os cartões do projeto forem transferidos para a coluna `Concluído`.

No tutorial, primeiro você criará um arquivo de fluxo de trabalho que usa a ação [`andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler). Então, você personalizará o fluxo de trabalho para atender às suas necessidades.

### Criar o fluxo de trabalho

1. {% data reusables.actions.choose-repo %}
2. Escolha um projeto que pertence ao repositório. Este fluxo de trabalho não pode ser usado com projetos que pertencem a usuários ou organizações. Você pode usar um projeto existente ou criar um novo projeto. Para obter mais informações sobre como criar um projeto, consulte "[Criar um quadro de projeto](/github/managing-your-work-on-github/creating-a-project-board)".
3. {% data reusables.actions.make-workflow-file %}
4. Copie o seguinte conteúdo YAML para o arquivo do fluxo de trabalho.

    {% raw %}
    ```yaml{:copy}
    name: Remove labels
    on:
      project_card:
        types:
          - moved
    jobs:
      remove_labels:
        if: github.event.project_card.column_id == '12345678'
        runs-on: ubuntu-latest
        steps:
          - name: remove labels
            uses: andymckay/labeler@master
            with:
              remove-labels: "needs review"
    ```
    {% endraw %}
5. Personalize os parâmetros no seu arquivo do fluxo de trabalho:
   - Em `github.event.project_card. olumn_id == '12345678'`, substitua `12345678` pelo ID da coluna em que você deseja desetiquetar os problemas e os pull requests que são transferidos para lá.

    Para encontrar o ID da coluna, acesse o seu quadro de projetos. Ao lado do título da coluna, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e, em seguida, clique em **Copiar link da coluna**. O ID da coluna é o número no final do link copiado. Por exemplo, `24687531` é o ID da coluna para `https://github.com/octocat/octo-repo/projects/1#column-24687531`.

     Se você desejar atuar em mais de uma coluna, separe as condições com `||`. Por exemplo, `if github.event.project_card.column_id == '12345678' || github.event.project_card.column_id == '87654321'` irá agir sempre que um cartão de projeto for adicionado à coluna `12345678` ou à coluna `87654321`. As colunas podem estar em diferentes quadros de projetos.
   - Altere o valor para `remove-labels` para a lista de etiquetas que deseja remover dos problemas ou pull requests que são transferidos para a(s) coluna(s) especificada(s). Separe etiquetas múltiplas com vírgulas. Por exemplo, `"help wanted, good first issue"`. Para obter mais informações sobre etiquetas, consulte "[Gerenciar etiquetas](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)".
6. {% data reusables.actions.commit-workflow %}

### Testar o fluxo de trabalho

Cada vez que um cartão de projeto em um projeto no seu repositório for transferido, este fluxo de trabalho será executado. Se o cartão for um problema ou uma pull request e for movido para a coluna especificada, o fluxo de trabalho removerá os rótulos especificados do problema ou de um pull request. Os cartões que são observações que não serão afetadas.

Teste o seu fluxo de trabalho transferindo um problema no seu projeto para a coluna de destino.

1. Abra um problema no seu repositório. Para obter mais informações, consulte "[Criar um problema](/github/managing-your-work-on-github/creating-an-issue)".
2. Etiquete o problema com as etiquetas que deseja que o fluxo de trabalho remova. Para obter mais informações, consulte "[Gerenciar etiquetas](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)".
3. Adicione um problema na coluna do projeto que você especificou no arquivo do fluxo de trabalho. Para obter mais informações, consulte "[Adicionar problemas e pull requests a um quadro de projeto](/github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board)".
4. Para ver a execução do fluxo de trabalho que foi acionada adicionando o problema ao projeto, visualize o histórico da execução do seu fluxo de trabalho. Para obter mais informações, consulte "[Visualizar histórico de execução de fluxo de trabalho](/actions/managing-workflow-runs/viewing-workflow-run-history)".
5. Quando o fluxo de trabalho é concluído, o problema que você adicionou na coluna do projeto deve ter as etiquetas especificadas removidos.

### Próximas etapas

- Para saber mais sobre coisas adicionais que você pode fazer com a ação `andymckay/labeler`, como adicionar etiquetas ou ignorar esta ação se o problema for atribuído ou tiver uma etiqueta específica, acesse o a documentação da ação [`andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler).
- [Pesquise no GitHub](https://github.com/search?q=%22uses:+andymckay/labeler%22&type=code) exemplos de fluxos de trabalho que usam esta ação.
