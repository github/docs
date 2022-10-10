---
ms.openlocfilehash: 1c0fc320bbd41add7105a53f1ed85a10c39fb021
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "147883501"
---
<a name="allowing-select-actions-to-run"></a>
<a name="allowing-specific-actions-to-run"></a>
### Habilitación de la ejecución de acciones seleccionadas{% ifversion actions-workflow-policy %} y flujos de trabajo reutilizables{% endif %}

Al elegir {% data reusables.actions.policy-label-for-select-actions-workflows %}, se permiten acciones locales{% ifversion actions-workflow-policy %} y flujos de trabajo reutilizables{% endif %} y hay opciones adicionales para permitir otras acciones específicas{% ifversion actions-workflow-policy %} y flujos de trabajo reutilizables{% endif %}:

- **Permitir las acciones que crea {% data variables.product.prodname_dotcom %}:** Puedes permitir que los flujos de trabajo utilicen todas las acciones que haya creado {% data variables.product.prodname_dotcom %}. Las acciones que crea {% data variables.product.prodname_dotcom %} se encuentran en las organizaciones `actions` y `github`. Para más información, consulta las organizaciones [`actions`](https://github.com/actions) y [`github`](https://github.com/github).
- **Permitir las acciones de Marketplace de creadores verificados**: {% ifversion ghes or ghae %} Esta opción está disponible si tienes habilitado {% data variables.product.prodname_github_connect %} y si lo configuraste con {% data variables.product.prodname_actions %}. Para obtener más información, consulta "[Habilitación del acceso automático a las acciones de GitHub.com mediante GitHub Connect](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)".{% endif %} Puedes permitir que los flujos de trabajo usen todas las acciones de {% data variables.product.prodname_marketplace %} creadas por creadores verificados. Cuando GitHub haya verificado al creador de la acción como una organización asociada, se mostrará la insignia de {% octicon "verified" aria-label="The verified badge" %} junto a la acción en {% data variables.product.prodname_marketplace %}.
- **Permitir las acciones especificadas{% ifversion actions-workflow-policy %} y los flujos de trabajo reutilizables{% endif %}:** Puedes restringir los flujos de trabajo para que utilicen acciones{% ifversion actions-workflow-policy %} y flujos de trabajo reutilizables{% endif %} en organizaciones y repositorios concretos.

  Para restringir el acceso a etiquetas específicas o confirmar los SHA de una acción{% ifversion actions-workflow-policy %} o un flujo de trabajo reutilizable{% endif %}, usa la misma sintaxis que se usa en el flujo de trabajo para seleccionar la acción{% ifversion actions-workflow-policy %} o el flujo de trabajo reutilizable{% endif %}.
  
  - Para una acción, la sintaxis es `<OWNER>/<REPO>@<TAG OR SHA>`. Por ejemplo, usa `actions/javascript-action@v1.0.1` para seleccionar una etiqueta o `actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89` para seleccionar un SHA. Para obtener más información, consulta "[Búsqueda y personalización de acciones](/actions/learn-github-actions/finding-and-customizing-actions#using-release-management-for-your-custom-actions)".
  {%- ifversion actions-workflow-policy %}
  - Para un flujo de trabajo reutilizable, la sintaxis es `<OWNER>/<REPO>/<PATH>/<FILENAME>@<TAG OR SHA>`. Por ejemplo, `octo-org/another-repo/.github/workflows/workflow.yml@v1`. Para obtener más información, consulta "[Reutilización de flujos de trabajo](/actions/using-workflows/reusing-workflows#calling-a-reusable-workflow)".
  {%- endif %}

  Puedes usar el carácter comodín `*` para buscar coincidencias con patrones. Por ejemplo, para permitir todas las acciones{% ifversion actions-workflow-policy %} y los flujos de trabajo reutilizables{% endif %} en las organizaciones que comienzan con `space-org`, puedes especificar `space-org*/*`. Para permitir todas las acciones{% ifversion actions-workflow-policy %} y los flujos de trabajo reutilizables{% endif %} en los repositorios que empiezan con octocat, puedes usar `*/octocat**@*`. Para obtener más información sobre el uso del carácter comodín `*`, consulta "[Sintaxis de flujo de trabajo para Acciones de GitHub](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)".

  {% ifversion fpt or ghec %} {% note %}

  **Nota:** La opción **Permitir las acciones especificadas{% ifversion actions-workflow-policy %} y los flujos de trabajo reutilizables{% endif %}** solo está disponible en los repositorios públicos con el plan {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_free_team %} para organizaciones o {% data variables.product.prodname_team %}.

  {% endnote %} {% endif %}

Este procedimiento muestra cómo agregar acciones específicas{% ifversion actions-workflow-policy %} y flujos de trabajo reutilizables{% endif %} a la lista de permitidos.
