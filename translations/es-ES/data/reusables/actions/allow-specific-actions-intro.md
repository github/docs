Cuando eliges el **Permitir las acciones seleccionadas**, las acciones locales se permitirán y habrá opciones adicionales para permitir otras acciones específicas:

- **Permitir acciones que crea {% data variables.product.prodname_dotcom %}:** Puedes permitir que los flujos de trabajo utilicen todas las acciones que haya creado {% data variables.product.prodname_dotcom %}. Las acciones que crea {% data variables.product.prodname_dotcom %} se ubican en las organizaciones de `actions` y de `github`. For more information, see the [`actions`](https://github.com/actions) and [`github`](https://github.com/github) organizations.{% ifversion fpt or ghes > 3.0 %}
- **Allow Marketplace actions by verified creators:** {% ifversion ghes > 3.0 %}This option is available if you have {% data variables.product.prodname_github_connect %} enabled and configured with {% data variables.product.prodname_actions %}. For more information, see "[Enabling automatic access to GitHub.com actions using GitHub Connect](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)."{% endif %} You can allow all {% data variables.product.prodname_marketplace %} actions created by verified creators to be used by workflows. When GitHub has verified the creator of the action as a partner organization, the {% octicon "verified" aria-label="The verified badge" %} badge is displayed next to the action in {% data variables.product.prodname_marketplace %}.{% endif %}
- **Permitir acciones especificadas:** Puedes restringir los flujos de trabajo para que utilicen las acciones que se encuentren en organizciones y repositorios específicos.

  Para restringir el acceso a las etiquetas específicas o a los SHA de confirmación de una acción, puedes utilizar la misma sintaxis de `<OWNER>/<REPO>@<TAG OR SHA>` en el flujo de trabajo para seleccionar la acción. Por ejemplo, `actions/javascript-action@v1.0.1` para seleccionar una etiqueta o `actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89` para seleccionar un SHA. Para obtener más información, consulta la sección "[Encontrar y personalizar las acciones](/actions/learn-github-actions/finding-and-customizing-actions#using-release-management-for-your-custom-actions)".

  Puedes utilizar el caracter de comodín `*` para empatar los patrones. Por ejemplo, para permitir todas las acciones en organizaciones que comiencen con `space-org`, puedes especificar `space-org*/*`. Para agregar todas las acciones en los repositorios que comiencen con octocat, puedes utilizar `*/octocat*@*`. Para obtener más información sobre cómo utilizar el comodín `*`, consulta la sección "[Sintaxis de flujo de trabajo para las GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)".

  {% ifversion fpt %}
  {% note %}

  **Nota:** La opción **Permitir las acciones especificadas** solo se encuentra disponible para los repositorios públicos con los planes de {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_free_team %} para organizaciones, o {% data variables.product.prodname_team %}.

  {% endnote %}
  {% endif %}

Este procedimiento ilustra cómo agregar acciones específicas a la lista de acciones permitidas.
