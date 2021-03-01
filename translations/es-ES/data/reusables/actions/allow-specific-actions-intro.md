Cuando eliges el **Permitir las acciones seleccionadas**, las acciones locales se permitirán y habrá opciones adicionales para permitir otras acciones específicas:

- **Permitir acciones que crea {% data variables.product.prodname_dotcom %}:** Puedes permitir que los flujos de trabajo utilicen todas las acciones que haya creado {% data variables.product.prodname_dotcom %}. Las acciones que crea {% data variables.product.prodname_dotcom %} se ubican en las organizaciones de `actions` y de `github`. Para obtener más información, consulta las organizaciones [`actions`](https://github.com/actions) y [`github`](https://github.com/github).
- **Permitir las acciones de Marketplace que tengan creadores verificados:** Puedes permitir que los flujos de trabajo utilicen todas las acciones de {% data variables.product.prodname_marketplace %} que tengan creadores verificados. Cuando GitHub haya verificado al creador de la acción como una organización asociada, se mostrará la insignia de {% octicon "verified" aria-label="The verified badge" %} junto a la acción en {% data variables.product.prodname_marketplace %}.
- **Permitir acciones especificadas:** Puedes restringir los flujos de trabajo para que utilicen las acciones que se encuentren en organizciones y repositorios específicos.

  Para restringir el acceso a las etiquetas específicas o a los SHA de confirmación de una acción, puedes utilizar la misma sintaxis de `<OWNER>/<REPO>@<TAG OR SHA>` en el flujo de trabajo para seleccionar la acción. Por ejemplo, `actions/javascript-action@v1.0.1` para seleccionar una etiqueta o `actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89` para seleccionar un SHA. Para obtener más información, consulta la sección "[Encontrar y personalizar las acciones](/actions/learn-github-actions/finding-and-customizing-actions#using-release-management-for-your-custom-actions)".

  Puedes utilizar el caracter de comodín `*` para empatar los patrones. Por ejemplo, para permitir todas las acciones en organizaciones que comiencen con `space-org`, puedes especificar `space-org*/*`. Para agregar todas las acciones en los repositorios que comiencen con octocat, puedes utilizar `*/octocat*@*`. Para obtener más información sobre cómo utilizar el comodín `*`, consulta la sección "[Sintaxis de flujo de trabajo para las GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)".

  {% if currentVersion == "free-pro-team@latest" %}
  {% note %}

  **Nota:** La opción **Permitir las acciones especificadas** solo se encuentra disponible para los repositorios públicos con los planes de {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_free_team %} para organizaciones, o {% data variables.product.prodname_team %}.

  {% endnote %}
  {% endif %}

Este procedimiento ilustra cómo agregar acciones específicas a la lista de acciones permitidas.
