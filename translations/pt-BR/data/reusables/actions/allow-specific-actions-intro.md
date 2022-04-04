<a name="allowing-select-actions-to-run"></a>
<a name="allowing-specific-actions-to-run"></a>

### Allowing select actions{% if actions-workflow-policy %} and reusable workflows{% endif %} to run

When you choose {% data reusables.actions.policy-label-for-select-actions-workflows %}, local actions{% if actions-workflow-policy %} and reusable workflows{% endif %} are allowed, and there are additional options for allowing other specific actions{% if actions-workflow-policy %} and reusable workflows{% endif %}:

- **Permitir ações criadas por {% data variables.product.prodname_dotcom %}:** Você pode permitir que todas as ações criadas por {% data variables.product.prodname_dotcom %} sejam usadas por fluxos de trabalho. Ações criadas por {% data variables.product.prodname_dotcom %} estão localizadas em `ações` e nas organizações do `github`. Para obter mais informações, consulte as [`ações`](https://github.com/actions) e organizações do [`github`](https://github.com/github).{% ifversion fpt or ghes or ghae-issue-5094 or ghec %}
- **Permitir ações do Marketplace por criadores verificados:** {% ifversion ghes or ghae-issue-5094 %}Esta opção está disponível se você tiver {% data variables.product.prodname_github_connect %} habilitado e configurado com {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Habilitando o acesso automático às ações do GitHub.com usando o GitHub Connect](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect).{% endif %} Você pode permitir que todas as ações de {% data variables.product.prodname_marketplace %} criadas por criadores verificados sejam usadas por fluxos de trabalho. Quando o GitHub tiver verificado o criador da ação como uma organização parceira, o selo {% octicon "verified" aria-label="The verified badge" %} será exibido ao lado da ação em {% data variables.product.prodname_marketplace %}.{% endif %}
- **Allow specified actions{% if actions-workflow-policy %} and reusable workflows{% endif %}:** You can restrict workflows to use actions{% if actions-workflow-policy %} and reusable workflows{% endif %} in specific organizations and repositories.

  To restrict access to specific tags or commit SHAs of an action{% if actions-workflow-policy %} or reusable workflow{% endif %}, use the same syntax used in the workflow to select the action{% if actions-workflow-policy %} or reusable workflow{% endif %}.

  - For an action, the syntax is `<OWNER>/<REPO>@<TAG OR SHA>`. For example, use `actions/javascript-action@v1.0.1` to select a tag or `actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89` to select a SHA. Para obter mais informações, consulte "[Localizar e personalizar ações](/actions/learn-github-actions/finding-and-customizing-actions#using-release-management-for-your-custom-actions)".
  {%- if actions-workflow-policy %}
  - For a reusable workflow, the syntax is `<OWNER>/<REPO>/<PATH>/<FILENAME>@<TAG OR SHA>`. For example, `octo-org/another-repo/.github/workflows/workflow.yml@v1`. Para obter mais informações, consulte "[Reutilizando fluxos de trabalho](/actions/using-workflows/reusing-workflows#calling-a-reusable-workflow)".
  {%- endif %}

  Você pode usar o caractere `*` curinga para corresponder aos padrões. For example, to allow all actions{% if actions-workflow-policy %} and reusable workflows{% endif %} in organizations that start with `space-org`, you can specify `space-org*/*`. To allow all actions{% if actions-workflow-policy %} and reusable workflows{% endif %} in repositories that start with octocat, you can use `*/octocat**@*`. Para obter mais informações sobre o uso do curinga `*`, consulte "[sintaxe de fluxo de trabalho para o GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet).

  {% ifversion fpt or ghec %}
  {% note %}

  **Note:** The **Allow specified actions{% if actions-workflow-policy %} and reusable workflows{% endif %}** option is only available in public repositories with the {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_free_team %} for organizations, or {% data variables.product.prodname_team %} plan.

  {% endnote %}
  {% endif %}

This procedure demonstrates how to add specific actions{% if actions-workflow-policy %} and reusable workflows{% endif %} to the allow list.
