When you choose **Allow select actions**, local actions are allowed, and there are additional options for allowing other specific actions:

- **Permitir ações criadas por {% data variables.product.prodname_dotcom %}:** Você pode permitir que todas as ações criadas por {% data variables.product.prodname_dotcom %} sejam usadas por fluxos de trabalho. As ações criadas por {% data variables.product.prodname_dotcom %} estão localizadas nas `ações` e nas organizações do `github`. Para obter mais informações, consulte as [`ações`](https://github.com/actions) e as organizações do [`github`](https://github.com/github).
- **Permitir ações do Marketplace por criadores verificados:** Você pode permitir que todas as ações de {% data variables.product.prodname_marketplace %} criadas por criadores verificados sejam usadas por fluxos de trabalho. Quando o GitHub verificou o criador da ação como uma organização parceira, o selo de {% octicon "verified" aria-label="The verified badge" %} é exibido ao lado da ação em {% data variables.product.prodname_marketplace %}.
- **Permitir ações específicas:** Você pode restringir fluxos de trabalho para usar ações em organizações específicas e em repositórios.

  Para restringir o acesso a tags específicas ou commit SHAs de uma ação, use a mesma sintaxe `<OWNER>/<REPO>@<TAG OR SHA>` usada no fluxo de trabalho para selecionar a ação. Por exemplo, `actions/javascript-action@v1.0.1` para selecionar uma tag ou `actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89` para selecionar um SHA. Para obter mais informações, consulte "[Localizar e personalizar ações](/actions/learn-github-actions/finding-and-customizing-actions#using-release-management-for-your-custom-actions)".

  Você pode usar o caractere `*` curinga para corresponder aos padrões. Por exemplo, para permitir todas as ações em organizações que começam com o `space-org`, você pode especificar `space-org*/*`. Para adicionar todas as ações aos repositórios que iniciam com octocat, você pode usar `*/octocat*@*`. Para obter mais informações sobre o uso do curinga `*`, consulte "[sintaxe de fluxo de trabalho para o GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet).

  {% if currentVersion == "free-pro-team@latest" %}
  {% note %}

  **Observação:** A opção **Permitir ações específicas** só está disponível em repositórios públicos com o {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_free_team %} para organizações ou plano de {% data variables.product.prodname_team %}.

  {% endnote %}
  {% endif %}

Este procedimento demonstra como adicionar ações específicas à lista de autorizações.
