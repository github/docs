---
title: Acerca de las verificaciones de estado
intro: Las verificaciones de estado te permiten saber si tus confirmaciones cumplen con las condiciones establecidas para el repositorio con el que estás colaborando.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks
  - /articles/about-statuses
  - /articles/about-status-checks
  - /github/collaborating-with-issues-and-pull-requests/about-status-checks
  - /github/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 759889bd4f014e4bc2afff5f182a0b7258c8bb07
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '147065870'
---
Las verificaciones de estado se basan en procesos externos, como compilaciones de integración continua, que se ejecutan para cada subida que haces a un repositorio. Puede ver el estado *pending* (pendiente), *passing* (aprobado) o *failing* (error) de las verificaciones de estado al lado de las confirmaciones individuales en su solicitud de incorporación de cambios.

![Listado de confirmaciones y estados](/assets/images/help/pull_requests/commit-list-statuses.png)

Cualquier persona con permisos de escritura a un repositorio puede determinar el estado de cualquier comprobación de estado en el repositorio.

Puedes ver el estado general de la última confirmación para una rama en la página de ramas de tu repositorio o en la lista de solicitudes de extracción de tu repositorio.

{% data reusables.pull_requests.required-checks-must-pass-to-merge %}

## Tipos de verificaciones de estado en {% data variables.product.product_name %}

Hay dos tipos de verificaciones de estado en {% data variables.product.product_name %}:

- Comprobaciones
- Estados

Las _comprobaciones_ son diferentes a los _estados_, ya que proporcionan anotaciones de líneas, mensajes más detallados y solo están disponibles para usarse con {% data variables.product.prodname_github_apps %}.

Los propietarios de la organización y los usuarios con acceso de escritura a un repositorio pueden crear verificaciones y estados con la API de {% data variables.product.product_name %}. Para obtener más información, vea "[Comprobaciones](/rest/reference/checks)" y "[Estados](/rest/reference/commits#commit-statuses)".

## Comprobaciones

Cuando se configuran _comprobaciones_ en un repositorio, las solicitudes de incorporación de cambios tienen una pestaña **Comprobaciones** donde puede ver los resultados de la compilación detallados desde las comprobaciones de estado y volver a ejecutar las comprobaciones erróneas.

![Verificaciones de estado dentro de una solicitud de extracción](/assets/images/help/pull_requests/checks.png)

{% note %}

**Nota:** La pestaña **Comprobaciones** solo se rellena para las solicitudes de incorporación de cambios si configura _comprobaciones_, y no _estados_, en el repositorio.

{% endnote %}

Cuando una línea específica en una confirmación provoca que una comprobación produzca un error, verá los detalles acerca del error, advertencia o aviso al lado del código relevante en la pestaña **Files** (Archivos) de la solicitud de incorporación de cambios.

![Detalles de una verificación de estado](/assets/images/help/pull_requests/checks-detailed.png)

Puede navegar entre los resúmenes de las comprobaciones para varias confirmaciones en una solicitud de incorporación de cambios mediante el menú desplegable de la confirmación en la pestaña **Conversation** (Conversación).

![Resúmenes de verificación para diferentes confirmaciones en un menú desplegable](/assets/images/help/pull_requests/checks-summary-for-various-commits.png)

### Omitir y solicitar verificaciones para confirmaciones individuales

Cuando un repositorio se configura para que solicite automáticamente las verificaciones para las subidas, puedes elegir omitir las verificaciones para una confirmación indvidual que subes. Cuando un repositorio _no_ se configura a fin de que solicite automáticamente las comprobaciones para las subidas, puede solicitar comprobaciones para una confirmación individual que inserte. Para obtener más información sobre esta configuración, vea "[Conjuntos de comprobaciones](/rest/reference/checks#update-repository-preferences-for-check-suites)".

Para omitir o solicitar verificaciones para tu confirmación, agrega una de las siguientes lineas de introducción al final de tu mensaje de confirmación:

- A fin de _omitir comprobaciones_ para una confirmación, escriba su mensaje de confirmación, y una descripción corta y significativa de sus cambios. Después de la descripción de su confirmación, antes de las comillas de cierre, agregue dos líneas vacías seguidas de `skip-checks: true`:
  ```shell
  $ git commit -m "Update README
  >
  >
  skip-checks: true"
  ```
- A fin de _solicitar_ comprobaciones para una confirmación, escriba su mensaje de confirmación, y una descripción corta y significativa de sus cambios. Después de la descripción de su confirmación, antes de las comillas de cierre, agregue dos líneas vacías seguidas de `request-checks: true`:
  ```shell
  $ git commit -m "Refactor usability tests
  >
  >
  request-checks: true"
  ```

{% ifversion fpt or ghec %}
### Retención de comprobaciones de estado

{% data reusables.pull_requests.retention-checks-data %} {% endif %}
