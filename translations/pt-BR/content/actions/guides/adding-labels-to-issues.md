---
title: Adicionando etiquetas a problemas
intro: 'Você pode usar {% data variables.product.prodname_actions %} para etiquetar problemas automaticamente.'
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

Este tutorial demonstra como usar a ação [`andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler) em um fluxo de trabalho para etiquetar problemas recém-abertos ou reabertos. Por exemplo, você pode adicionar a etiqueta `triagem` toda vez que um problema for aberto ou reaberto. Em seguida, você poderá ver todos os problemas que devem ser triados, filtrando por problemas com a etiqueta `triagem`.

No tutorial, primeiro você criará um arquivo de fluxo de trabalho que usa a ação [`andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler). Então, você personalizará o fluxo de trabalho para atender às suas necessidades.

### Criar o fluxo de trabalho

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Copie o seguinte conteúdo YAML para o arquivo do fluxo de trabalho.

    ```yaml{:copy}
    name: Label issues
    on:
      issues:
        types:
          - reopened
          - opened
    jobs:
      label_issues:
        runs-on: ubuntu-latest{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
        permissions:
          issues: write{% endif %}
        steps:
          - name: Label issues
            uses: andymckay/labeler@1.0.2
            with:
              add-labels: "triage"
              repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

4. Personalize os parâmetros no seu arquivo do fluxo de trabalho:
   - Altere o valor de `add-labels` para a lista de etiquetas que você deseja adicionar ao problema. Separe etiquetas múltiplas com vírgulas. Por exemplo, `"help wanted, good first issue"`. Para obter mais informações sobre etiquetas, consulte "[Gerenciar etiquetas](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)".
5. {% data reusables.actions.commit-workflow %}

### Testar o fluxo de trabalho

Toda vez que um problema no seu repositório for aberto ou reaberto, esse fluxo de trabalho adicionará as etiquetas que você especificou ao problema.

Teste o seu fluxo de trabalho criando um problema no seu repositório.

1. Crie um problema no seu repositório. Para obter mais informações, consulte "[Criar um problema](/github/managing-your-work-on-github/creating-an-issue)".
2. Para ver a execução do fluxo de trabalho que foi acionada criando o problema, veja o histórico de execuções do seu fluxo de trabalho. Para obter mais informações, consulte "[Visualizar histórico de execução de fluxo de trabalho](/actions/managing-workflow-runs/viewing-workflow-run-history)".
3. Quando o fluxo de trabalho é concluído, o problema que você criou deve ter as etiquetas especificadas adicionadas.

### Próximas etapas

- Para saber mais sobre coisas adicionais você pode fazer com a ação `andymckay/labeler`, como remover etiquetas ou ignorar esta ação se o problema for atribuído ou tiver uma etiqueta específica, veja a documentação da ação [`andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler).
- Para saber mais sobre diferentes eventos que podem acionar o seu fluxo de trabalho, consulte "[Eventos que desencadeiam fluxos de trabalho](/actions/reference/events-that-trigger-workflows#issues)". A ação `andymckay/labeler` só funciona em eventos `issues`, `pull_request` ou `project_card`.
- [Pesquise no GitHub](https://github.com/search?q=%22uses:+andymckay/labeler%22&type=code) exemplos de fluxos de trabalho que usam esta ação.
