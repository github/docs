---
title: Usar acciones de GitHub Marketplace
intro: 'Puedes explorar y buscar acciones en {% data variables.product.prodname_marketplace %} para usar en tus flujos de trabajo.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-github-marketplace-actions
  - /actions/automating-your-workflow-with-github-actions/using-actions-from-github-marketplace-in-your-workflow
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Acerca de las acciones en {% data variables.product.prodname_marketplace %}

{% data variables.product.prodname_marketplace %} es una ubicación central para que encuentres las acciones que crea la comunidad de {% data variables.product.prodname_dotcom %}.  Las acciones con una insignia indican que {% data variables.product.prodname_dotcom %} ha verificado al creador de la misma como una organización asociada.

{% data reusables.actions.enterprise-marketplace-actions %}

Puedes descubrir nuevas acciones desde el editor de flujo de trabajo en {% data variables.product.prodname_dotcom %}, y desde la [ página de {% data variables.product.prodname_marketplace %}](https://github.com/marketplace/actions/).

El ver las acciones directamente en el editor de flujo de datos proporciona un acceso rápido a todas las acciones en {% data variables.product.prodname_marketplace %}. La página de acciones de {% data variables.product.prodname_marketplace %} ofrece más flexibilidad para filtrar acciones por categoría.

### Acciones de navegación en el editor de flujo de trabajo

Puedes buscar y explorar acciones directamente en el editor de flujo de trabajo de tu repositorio. Desde la barra lateral, puedes buscar una acción específica, ver acciones destacadas y explorar las categorías destacadas. También puedes ver la cantidad de estrellas que una acción ha recibido desde la comunidad {% data variables.product.prodname_dotcom %}.

1. En tu repositorio, navega hasta el archivo de flujo de trabajo que deseas editar.
1. En el ángulo superior derecho de la vista del archivo, para abrir el editor de flujo de trabajo, haz clic en {% octicon "pencil" aria-label="The edit icon" %}.![Botón para editar un archivo de flujo de trabajo](/assets/images/help/repository/actions-edit-workflow-file.png)
1. A la derecha del editor, usa la barra lateral de {% data variables.product.prodname_marketplace %} para explorar acciones.![Barra lateral del flujo de trabajo de Marketplace](/assets/images/help/repository/actions-marketplace-sidebar.png)

### Acciones de navegación en {% data variables.product.prodname_marketplace %}

Puedes encontrar las mismas acciones en [la página de acciones de {% data variables.product.prodname_marketplace %}](https://github.com/marketplace/actions/). En la página de {% data variables.product.prodname_marketplace %}, tienes más flexibilidad para filtrar acciones por categoría y verificación.

### Agregar una acción a tu flujo de trabajo desde el editor de flujo de trabajo

La página de descripción de una acción incluye la versión de la acción y la sintaxis de flujo de trabajo que se necesita para usar la acción.

1. Navega hasta la acción que deseas usar en tu flujo de trabajo.
1. En "Installation" (Instalación), haz clic en {% octicon "clippy" aria-label="The edit icon" %} para copiar la sintaxis del flujo de trabajo. ![Ver descripción de la acción](/assets/images/help/repository/actions-sidebar-detailed-view.png)
1. Pega la sintaxis como un nuevo paso en tu flujo de trabajo. Para obtener más información, consulta "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)."
1. Si la acción requiere que proporciones variables, establécelas en tu flujo de trabajo. Para obtener más información sobre las variables que puede requerir una acción, consulta la descripción completa de la acción en {% data variables.product.prodname_marketplace %}.

{% if currentVersion == "free-pro-team@latest" %}

{% data reusables.dependabot.version-updates-for-actions %}

{% endif %}
