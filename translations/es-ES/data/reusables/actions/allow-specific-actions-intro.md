<a name="allowing-select-actions-to-run"></a>
<a name="allowing-specific-actions-to-run"></a>

### Permitir que se ejecuten las acciones selectas{% if actions-workflow-policy %} y los flujos de trabajo reutilizables{% endif %}

Cuando eliges {% data reusables.actions.policy-label-for-select-actions-workflows %}, se permiten las acciones locales{% if actions-workflow-policy %} y los flujos de trabajo reutilizables{% endif %} y hay opciones adicionales para permitir otras acciones específicas {% if actions-workflow-policy %} y flujos de trabajo reutilizables{% endif %}:

- **Permitir acciones que crea {% data variables.product.prodname_dotcom %}:** Puedes permitir que los flujos de trabajo utilicen todas las acciones que haya creado {% data variables.product.prodname_dotcom %}. Las acciones que crea {% data variables.product.prodname_dotcom %} se ubican en las organizaciones `actions` y `github`. Para obtener más información, consulta las organizaciones de [`actions`](https://github.com/actions) y [`github`](https://github.com/github).{% ifversion fpt or ghes or ghae-issue-5094 or ghec %}
- **Permite las acciones de Marketplace de creadores verificados:** {% ifversion ghes or ghae-issue-5094 %}Esta opción está disponible si tienes habilitado {% data variables.product.prodname_github_connect %} y si lo configuraste con {% data variables.product.prodname_actions %}. Para obtener más información, consulta la sección "[Habilitar el acceso automático a las acciones de GitHub.com utilizando GitHub Connect](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)."{% endif %} Puedes permitir que los flujos de trabajo utilicen todas las acciones de {% data variables.product.prodname_marketplace %} que hayan hecho los creadores verificados. Cuando GitHub haya verificado al creador de la acción como una organización asociada, se mostrará la insignia de {% octicon "verified" aria-label="The verified badge" %} junto a la acción en {% data variables.product.prodname_marketplace %}.{% endif %}
- **Permitir acciones específicas{% if actions-workflow-policy %} y flujos de trabajo reutilizables{% endif %}:** Puedes restringir a los flujos de trabajo para que utilicen acciones{% if actions-workflow-policy %} y flujos de trabajo reutilizables{% endif %} en repositorios y organizaciones específicos.

  Para restringir el acceso a las etiquetas o SHA de confirmación específicos de una acción{% if actions-workflow-policy %} o flujo de trabajo reutilizable{% endif %}, utiliza la misma sintaxis que se utiliza en el flujo de trabajo para seleccionar la acción{% if actions-workflow-policy %} o flujo de trabajo reutilizable{% endif %}.

  - Para una acción, la sintaxzis es `<OWNER>/<REPO>@<TAG OR SHA>`. Por ejemplo, utiliza `actions/javascript-action@v1.0.1` para seleccionar una etiqueta o `actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89` para seleccionar un SHA. Para obtener más información, consulta la sección "[Encontrar y personalizar las acciones](/actions/learn-github-actions/finding-and-customizing-actions#using-release-management-for-your-custom-actions)".
  {%- if actions-workflow-policy %}
  - Para un flujo de trabajo reutilizable, la sintaxis es `<OWNER>/<REPO>/<PATH>/<FILENAME>@<TAG OR SHA>`. Por ejemplo, `octo-org/another-repo/.github/workflows/workflow.yml@v1`. Para obtener más información, consulta la sección "[Reutilizar flujos de trabajo](/actions/using-workflows/reusing-workflows#calling-a-reusable-workflow)".
  {%- endif %}

  Puedes utilizar el caracter de comodín `*` para empatar los patrones. Por ejemplo, para permitir todas las acciones{% if actions-workflow-policy %} y flujos de trabajo reutilizables{% endif %} en las organizaciones que comiencen con `space-org`, puedes especificar `space-org*/*`. Para permitir todas las acciones{% if actions-workflow-policy %} y flujos de trabajo reutilizables{% endif %} en lso repositorios que comiencen con octocat, puedes utilizar `*/octocat**@*`. Para obtener más información sobre cómo utilizar el comodín `*`, consulta la sección "[Sintaxis de flujo de trabajo para las GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)".

  {% ifversion fpt or ghec %}
  {% note %}

  **Nota:** La **opción para permitir acciones específicas{% if actions-workflow-policy %} y flujos de trabajo reutilizables{% endif %}** solo está disponible en los repositorios públicos con los planes {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_free_team %} para organizaciones, o {% data variables.product.prodname_team %}.

  {% endnote %}
  {% endif %}

Este procedimiento demuestra cómo agregar acciones específicas{% if actions-workflow-policy %} y flujos de trabajo reutilizables{% endif %} a la lista de elementos permitidos.
