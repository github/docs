<a name="allowing-select-actions-to-run"></a>
<a name="allowing-specific-actions-to-run"></a>

### Allowing select actions{% if actions-workflow-policy %} and reusable workflows{% endif %} to run

When you choose {% data reusables.actions.policy-label-for-select-actions-workflows %}, local actions{% if actions-workflow-policy %} and reusable workflows{% endif %} are allowed, and there are additional options for allowing other specific actions{% if actions-workflow-policy %} and reusable workflows{% endif %}:

- **Permitir acciones que crea {% data variables.product.prodname_dotcom %}:** Puedes permitir que los flujos de trabajo utilicen todas las acciones que haya creado {% data variables.product.prodname_dotcom %}. Las acciones que crea {% data variables.product.prodname_dotcom %} se ubican en las organizaciones `actions` y `github`. Para obtener más información, consulta las organizaciones de [`actions`](https://github.com/actions) y [`github`](https://github.com/github).{% ifversion fpt or ghes or ghae-issue-5094 or ghec %}
- **Permite las acciones de Marketplace de creadores verificados:** {% ifversion ghes or ghae-issue-5094 %}Esta opción está disponible si tienes habilitado {% data variables.product.prodname_github_connect %} y si lo configuraste con {% data variables.product.prodname_actions %}. Para obtener más información, consulta la sección "[Habilitar el acceso automático a las acciones de GitHub.com utilizando GitHub Connect](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)."{% endif %} Puedes permitir que los flujos de trabajo utilicen todas las acciones de {% data variables.product.prodname_marketplace %} que hayan hecho los creadores verificados. Cuando GitHub haya verificado al creador de la acción como una organización asociada, se mostrará la insignia de {% octicon "verified" aria-label="The verified badge" %} junto a la acción en {% data variables.product.prodname_marketplace %}.{% endif %}
- **Allow specified actions{% if actions-workflow-policy %} and reusable workflows{% endif %}:** You can restrict workflows to use actions{% if actions-workflow-policy %} and reusable workflows{% endif %} in specific organizations and repositories.

  To restrict access to specific tags or commit SHAs of an action{% if actions-workflow-policy %} or reusable workflow{% endif %}, use the same syntax used in the workflow to select the action{% if actions-workflow-policy %} or reusable workflow{% endif %}.

  - For an action, the syntax is `<OWNER>/<REPO>@<TAG OR SHA>`. For example, use `actions/javascript-action@v1.0.1` to select a tag or `actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89` to select a SHA. Para obtener más información, consulta la sección "[Encontrar y personalizar las acciones](/actions/learn-github-actions/finding-and-customizing-actions#using-release-management-for-your-custom-actions)".
  {%- if actions-workflow-policy %}
  - For a reusable workflow, the syntax is `<OWNER>/<REPO>/<PATH>/<FILENAME>@<TAG OR SHA>`. For example, `octo-org/another-repo/.github/workflows/workflow.yml@v1`. Para obtener más información, consulta la sección "[Reutilizar flujos de trabajo](/actions/using-workflows/reusing-workflows#calling-a-reusable-workflow)".
  {%- endif %}

  Puedes utilizar el caracter de comodín `*` para empatar los patrones. For example, to allow all actions{% if actions-workflow-policy %} and reusable workflows{% endif %} in organizations that start with `space-org`, you can specify `space-org*/*`. To allow all actions{% if actions-workflow-policy %} and reusable workflows{% endif %} in repositories that start with octocat, you can use `*/octocat**@*`. Para obtener más información sobre cómo utilizar el comodín `*`, consulta la sección "[Sintaxis de flujo de trabajo para las GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)".

  {% ifversion fpt or ghec %}
  {% note %}

  **Note:** The **Allow specified actions{% if actions-workflow-policy %} and reusable workflows{% endif %}** option is only available in public repositories with the {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_free_team %} for organizations, or {% data variables.product.prodname_team %} plan.

  {% endnote %}
  {% endif %}

This procedure demonstrates how to add specific actions{% if actions-workflow-policy %} and reusable workflows{% endif %} to the allow list.
