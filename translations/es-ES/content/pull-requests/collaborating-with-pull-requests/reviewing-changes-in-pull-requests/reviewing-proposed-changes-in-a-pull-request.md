---
title: Revisar los cambios propuestos en una solicitud de extracción
intro: 'En una solicitud de incorporación de cambios, puedes revisar y opinar sobre las confirmaciones, los archivos cambiados y las diferencias (o "diff") entre los archivos de las ramas base y comparada.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request
  - /articles/reviewing-proposed-changes-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/reviewing-proposed-changes-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Review proposed changes
ms.openlocfilehash: 8ea199ad1dc2f574f8820bde3e0529112645bc23
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158593'
---
## Acerca de revisar solicitudes de extracción

Puedes revisar los cambios de una solicitud de extracción en un archivo por vez. Mientras revisas los archivos en una solicitud de extracción, puedes dejar comentarios individuales en cambios específicos. Después de que terminas de revisar cada archivo, puedes marcarlo como visto. Esto colapsa el archivo, lo cual te ayuda a identificar los archivos que aún debes revisar. Una barra de progreso en el encabezado de la solicitud de cambios muestra la cantidad de archivos que has visto. Después de revisar tantos archivos como quieras, puedes aprobar la solicitud de cambios o solicitar cambios adicionales si emites tu revisión con un comentario de resumen.

{% data reusables.search.requested_reviews_search_tip %}

## Comenzar una revisión

{% webui %}

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %} {% ifversion fpt or ghec or ghes > 3.3 or ghae %}

   Puedes cambiar el formato de la vista de diff en esta pestaña si haces clic en {% octicon "gear" aria-label="The Settings gear" %} y eliges la vista dividida o unificada. La elección que hagas aplicará cuando veas el diff para otras solicitudes de cambio.

   ![Ajustes de vista de Diff](/assets/images/help/pull_requests/diff-view-settings.png)

   También puedes elegir esconder las diferencias de espacios en blanco. La elección que hagas solo aplicará a esta solicitud de cambios y se recordará la siguiente ocasión que visites la página.
{% endif %}
1. Opcionalmente, filtra los archivos para mostrar solo aquellos que quieras revisar{% ifversion pr-tree-view %} o utiliza el árbol de archivos para ir a uno en concreto{% endif %}. Para más información, vea "[Filtrado de archivos en una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request)".
{% data reusables.repositories.start-line-comment %} {% data reusables.repositories.type-line-comment %} {% data reusables.repositories.suggest-changes %}
1. Cuando haya terminado, haga clic en **Iniciar una revisión**. Si ya ha iniciado una revisión, puede hacer clic en **Agregar comentario de revisión**.

   ![Botón Start a review (Comenzar una revisión)](/assets/images/help/pull_requests/start-a-review-button.png)

Antes de enviar la revisión, los comentarios de líneas están _pendientes_ y solo los puede ver usted. Puedes editar los comentarios pendientes en cualquier momento antes de enviar tu revisión. Para cancelar una revisión pendiente, incluidos todos sus comentarios pendientes, desplácese hasta el final de la escala de tiempo en la pestaña Conversación y haga clic en **Cancelar revisión**.

![Botón Cancelar revisión](/assets/images/help/pull_requests/cancel-review-button.png) {% endwebui %}

{% ifversion fpt or ghec %}

{% codespaces %}

Puedes usar [{% data variables.product.prodname_github_codespaces %}](/codespaces/overview) para probar, ejecutar y revisar las solicitudes de incorporación de cambios.

1. Abra la solicitud de incorporación de cambios en un codespace, como se describe en "[Apertura de una solicitud de incorporación de cambios](/codespaces/developing-in-codespaces/using-codespaces-for-pull-requests#opening-a-pull-request-in-codespaces)".
1. En la barra de actividad, haga clic en la vista **GitHub Pull Request**. Esta vista solo se muestra cuando abres una solicitud de cambios en un codespace.

   ![Opción para abrir una solicitud de incorporación de cambios en un codespace](/assets/images/help/codespaces/github-pr-view.png)

1. Para revisar un archivo específico, haga clic en el icono **Open File** en la barra lateral.

   ![Opción para abrir una solicitud de incorporación de cambios en un codespace](/assets/images/help/codespaces/changes-in-files.png)

1. Para agregar comentarios de revisión, haga clic en el icono **+** situado junto al número de línea. Escriba el comentario de revisión y, después, haga clic en **Start Review**.

   ![Opción para abrir una solicitud de incorporación de cambios en un codespace](/assets/images/help/codespaces/start-review.png)

1. Cuando termines de revisar los comentarios, desde la barra lateral, puedes elegir ya sea emitirlos, aprobar los cambios, o solicitar cambios.

   ![Opción para abrir una solicitud de incorporación de cambios en un codespace](/assets/images/help/codespaces/submit-review.png)

Para obtener más información sobre cómo revisar solicitudes de incorporación de cambios en {% data variables.product.prodname_github_codespaces %}, consulta "[Uso de {% data variables.product.prodname_github_codespaces %} para solicitudes de incorporación de cambios](/codespaces/developing-in-codespaces/using-github-codespaces-for-pull-requests)".

{% endcodespaces %} {% endif %}

{% ifversion fpt or ghes or ghec %}
## Revisar los cambios de las dependencias

Si la solicitud de cambios contiene cambios para las dependencias, puedes utilizar la revisión de dependencias para un archivo de bloqueo o de manifiesto para ver qué ha cambiado y verificar si los cambios introducen vulnerabilidades de seguridad. Para más información, vea "[Revisión de los cambios de dependencias en una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)".

{% data reusables.repositories.changed-files %}

1. A la derecha del encabezado de un archivo de bloqueo o de manifiesto, haga clic en el botón de diferencias enriquecidas **{% octicon "file" aria-label="The rich diff icon" %}** para mostrar la revisión de dependencias.

   ![El botón de diff rica](/assets/images/help/pull_requests/dependency-review-rich-diff.png)

{% data reusables.repositories.return-to-source-diff %} {% endif %}

## Marcar un archivo como visto

Después de que hayas terminado de revisar un archivo, puedes marcar el archivo como visto, y el archivo se colapsará. Si el archivo se modifica después de que lo hayas visto, dejará de estar marcado como visto.

{% data reusables.repositories.changed-files %}
2. A la derecha del encabezado del archivo que ha terminado de revisar, seleccione **Visto**.

   ![Casilla Viewed (Visto)](/assets/images/help/pull_requests/viewed-checkbox.png)

## Enviar tu revisión

Después de que hayas terminado de revisar todos los archivos que quieras de la solicitud de extracción, envía tu revisión.

{% data reusables.repositories.changed-files %} {% data reusables.repositories.review-changes %} {% data reusables.repositories.review-summary-comment %}
4. Selecciona el tipo de revisión que te gustaría proporcionar:

   ![Botones Radio con opciones de revisión](/assets/images/help/pull_requests/pull-request-review-statuses.png)

    - Seleccione **Comentario** para dejar un comentario general sin aprobar de manera explícita los cambios ni solicitar cambios adicionales.
    - Seleccione **Aprobar** para enviar los comentarios y aprobar la combinación de los cambios propuestos en la solicitud de incorporación de cambios.
    - Seleccione **Solicitar cambios** para enviar comentarios que se deben abordar antes de que se pueda combinar la solicitud de incorporación de cambios.
{% data reusables.repositories.submit-review %}

{% data reusables.repositories.request-changes-tips %}

## Información adicional

- "[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)"
- "[Filtrado de solicitudes de incorporación de cambios por estado de revisión](/github/managing-your-work-on-github/filtering-pull-requests-by-review-status)"
