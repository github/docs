Quando você escolher **Permitir selecionar ações**, ações locais são permitidas, e há opções adicionais para permitir outras ações específicas:

- **Permitir ações criadas por {% data variables.product.prodname_dotcom %}:** Você pode permitir que todas as ações criadas por {% data variables.product.prodname_dotcom %} sejam usadas por fluxos de trabalho. As ações criadas por {% data variables.product.prodname_dotcom %} estão localizadas nas `ações` e nas organizações do `github`. For more information, see the [`actions`](https://github.com/actions) and [`github`](https://github.com/github) organizations.{% ifversion fpt or ghes > 3.0 %}
- **Allow Marketplace actions by verified creators:** {% ifversion ghes > 3.0 %}This option is available if you have {% data variables.product.prodname_github_connect %} enabled and configured with {% data variables.product.prodname_actions %}. For more information, see "[Enabling automatic access to GitHub.com actions using GitHub Connect](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)."{% endif %} You can allow all {% data variables.product.prodname_marketplace %} actions created by verified creators to be used by workflows. When GitHub has verified the creator of the action as a partner organization, the {% octicon "verified" aria-label="The verified badge" %} badge is displayed next to the action in {% data variables.product.prodname_marketplace %}.{% endif %}
- **Permitir ações específicas:** Você pode restringir fluxos de trabalho para usar ações em organizações específicas e em repositórios.

  Para restringir o acesso a tags específicas ou commit SHAs de uma ação, use a mesma sintaxe `<OWNER>/<REPO>@<TAG OR SHA>` usada no fluxo de trabalho para selecionar a ação. Por exemplo, `actions/javascript-action@v1.0.1` para selecionar uma tag ou `actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89` para selecionar um SHA. Para obter mais informações, consulte "[Localizar e personalizar ações](/actions/learn-github-actions/finding-and-customizing-actions#using-release-management-for-your-custom-actions)".

  Você pode usar o caractere `*` curinga para corresponder aos padrões. Por exemplo, para permitir todas as ações em organizações que começam com o `space-org`, você pode especificar `space-org*/*`. Para adicionar todas as ações aos repositórios que iniciam com octocat, você pode usar `*/octocat*@*`. Para obter mais informações sobre o uso do curinga `*`, consulte "[sintaxe de fluxo de trabalho para o GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet).

  {% ifversion fpt %}
  {% note %}

  **Observação:** A opção **Permitir ações específicas** só está disponível em repositórios públicos com o {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_free_team %} para organizações ou plano de {% data variables.product.prodname_team %}.

  {% endnote %}
  {% endif %}

Este procedimento demonstra como adicionar ações específicas à lista de autorizações.
