---
title: Acerca de las solicitudes de incorporación de cambios
intro: 'Las solicitudes de incorporación de cambios te permiten comentarle a otros acerca de los cambios que has insertado en una rama de un repositorio en {% data variables.product.product_name %}. Una vez que se abre una solicitud de incorporación de cambios, puedes debatir y revisar los posibles cambios con los colaboradores y agregar confirmaciones de seguimiento antes de que los cambios se fusionen en la rama base.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
  - /articles/using-pull-requests
  - /articles/about-pull-requests
  - /github/collaborating-with-issues-and-pull-requests/about-pull-requests
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 6912f0ca38cc522d5698a9e8b1a1042f445b999e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147111117'
---
## Acerca de las solicitudes de incorporación de cambios

{% note %}

**Nota:** Cuando trabaje con solicitudes de incorporación de cambios, tenga en cuenta lo siguiente:
* Si trabaja en el [modelo de repositorio compartido](/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models), se recomienda usar una rama de tema para la solicitud de incorporación de cambios. Si bien puedes enviar solicitudes de extracción desde cualquier rama o confirmación, con una rama de tema puedes subir confirmaciones de seguimiento para actualizar tus cambios propuestos.
* Ten cuidado cuando subas confirmaciones forzadamente a una solicitud de cambios. El subir información forzadamente cambia el historial del repositorio y puede corromper tu solicitud de cambios. Si otros colaboradores ramifican el proyecto antes de una subida forzada, dicha subida forzada podría sobrescribir las confirmaciones en las cuales estos colaboradores basaron su trabajo.

{% endnote %}

Puedes crear solicitudes de incorporación de cambios en {% data variables.product.prodname_dotcom_the_website %}, con {% data variables.product.prodname_desktop %}, en {% data variables.product.prodname_github_codespaces %}, en {% data variables.product.prodname_mobile %} y cuando se usa la CLI de GitHub.

Después de inicializar una solicitud de extracción, verás una página de revisión que muestra una descripción general de alto nivel de los cambios entre tu rama (la rama de comparación) y la rama base del repositorio. Puede agregar un resumen de los cambios propuestos, revisar los cambios realizados por las confirmaciones, agregar etiquetas, hitos y usuarios asignados, y @mention a equipos o colaboradores individuales. Para más información, vea "[Creación de una solicitud de incorporación de cambios](/articles/creating-a-pull-request)".

Una vez que has creado una solicitud de extracción, puedes subir confirmaciones desde tu rama de tema para agregarlas a tu solicitud de extracción existente. Estas confirmaciones aparecerán en orden cronológico dentro de tu solicitud de extracción y los cambios serán visibles en la pestaña "Archivos modificados".

Otros colaboradores pueden revisar tus cambios propuestos, agregar comentarios de revisión, contribuir con el debate sobre la solicitud de extracción e incluso agregar confirmaciones a la solicitud de extracción. {% ifversion pull-request-approval-limit %}{% data reusables.pull_requests.code-review-limits %}{% endif %}

{% ifversion fpt or ghec %} Puede ver información sobre el estado de implementación actual de la rama y la actividad de implementación anterior en la pestaña "Conversation" (Conversación). Para más información, vea "[Visualización de la actividad de implementación de un repositorio](/repositories/viewing-activity-and-data-for-your-repository/viewing-deployment-activity-for-your-repository)".
{% endif %}

Una vez que estás conforme con los cambios propuestos, puedes fusionar la solicitud de extracción. Si estás trabajando en un modelo de repositorio compartido, creas una solicitud de extracción y tú o alguien más fusionará tus cambios desde tu rama de característica en la rama base que especificaste en tu solicitud de extracción. Para más información, vea "[Combinación de una solicitud de incorporación de cambios](/articles/merging-a-pull-request)".

{% data reusables.pull_requests.required-checks-must-pass-to-merge %}

{% data reusables.pull_requests.close-issues-using-keywords %}

{% tip %}

**Sugerencias:**
- Para alternar entre contraer y expandir todos los comentarios de revisión obsoletos en una solicitud de incorporación de cambios, mantenga presionada la tecla <span class="platform-mac"><kbd>Opción</kbd></span><span class="platform-linux"><kbd>Alt</kbd></span><span class="platform-windows"><kbd>Alt</kbd></span> y haga clic en **Show outdated** (Mostrar obsoleto) o **Hide outdated** (Ocultar obsoleto). Para obtener más métodos abreviado de teclado, vea "[Métodos abreviados de teclado](/articles/keyboard-shortcuts)".
- Puedes combinar confirmaciones cuando fusionas una solicitud de extracción para obtener una visión optimizada de los cambios. Para más información, vea "[Acerca de las combinaciones de solicitudes de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)".

{% endtip %}

Puedes visitar tu tablero para encontrar de forma rápida los enlaces a las solicitudes de extracción recientemente actualizadas en las que estás trabajando o estás suscripto. Para más información, vea "[Acerca del panel personal](/articles/about-your-personal-dashboard)".

## Borrador de solicitudes de incorporación de cambios

{% data reusables.gated-features.draft-prs %}

Cuando creas una solicitud de extracción, puedes elegir crear una solicitud de extracción que está lista para revisión o una solicitud de extracción en borrador. Las solicitudes de extracción en borrador no se pueden fusionar y no se les solicita automáticamentes a los propietarios del código que revisen las solicitudes de extracción en borrador. Para más información sobre cómo crear una solicitud de incorporación de cambios de borrador, vea "[Creación de una solicitud de incorporación de cambios](/articles/creating-a-pull-request)" y "[Creación de una solicitud de incorporación de cambios desde una bifurcación](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)".

{% data reusables.pull_requests.mark-ready-review %} Puedes convertir una solicitud de extracción en borrador cuando lo desees. Para más información, vea "[Cambio de la fase de una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)".

## Diferencias entre confirmaciones en las páginas de comparación y de solicitudes de cambios

Las páginas de comparación y de solicitudes de cambios utilizan métodos diferentes para calcular el diff de los archivos que cambiaron:

- Las páginas de comparación muestran el diff entre la punta de la ref de encabezado y el actual ancestro en común (es decir, la base de fusión) del encabezado y de la ref base.
- Las páginas de solicitud de cambios muestran el diff entre la punta de la ref de encabezado y el ancestro común del encabezado y la ref base en el momento en el que la solicitud de cambios se crea. Por consecuencia, la base de fusión que se utilizó para la comparación puede ser diferente.

## Información adicional

- "[Solicitud de incorporación de cambios](/articles/github-glossary/#pull-request)" en el glosario de {% data variables.product.prodname_dotcom %}
- "[Acerca de las ramas](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)"
- "[Comentario de una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)"
- "[Cierre de una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request)"
