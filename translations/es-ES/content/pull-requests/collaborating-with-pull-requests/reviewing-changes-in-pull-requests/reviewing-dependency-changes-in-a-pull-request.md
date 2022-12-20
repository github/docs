---
title: Revisar los cambios de las dependencias en una solicitud de cambios
intro: 'Si una solicitud de cambios contiene cambios a las dependencias, puedes ver un resumen de lo que ha cambiado y si es que existen vulnerabilidades conocidas en cualquiera de estas dependencias.'
product: '{% data reusables.gated-features.dependency-review %}'
versions:
  fpt: '*'
  ghes: '>= 3.2'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Pull requests
  - Dependency review
  - Advanced Security
  - Vulnerabilities
  - Dependencies
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request
shortTitle: Review dependency changes
ms.openlocfilehash: 34cefbae8b7ccfd32773a47de2509a6eccc7a799
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106609'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Sign up for the dependency review beta" and "Reviewing dependency changes in a pull request".-->

## Acerca de la revisión de dependencias

{% data reusables.dependency-review.feature-overview %}

{% ifversion ghec %}Antes de que puedas utilizar la revisión de dependencias en un repositorio privado, debes habilitar la gráfica de dependencias. Para más información, vea "[Exploración de las dependencias de un repositorio](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)".{% endif %}

{% ifversion ghes %} Antes de poder usar la revisión de dependencias, debes habilitar el gráfico de dependencias y conectar {% data variables.location.product_location %} a {% data variables.product.prodname_dotcom_the_website %}. Para más información, vea "[Habilitación de alertas para dependencias vulnerables en {% data variables.product.prodname_ghe_server %}](/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)".{% endif %}

La revisión de dependencias te permite "desplazarte a la izquierda". Puedes utilizar la información predictiva que se te proporciona para detectar dependencias vulnerables antes de que lleguen a tu ambiente productivo. Para más información, vea "[Acerca de la revisión de dependencias](/code-security/supply-chain-security/about-dependency-review)".

{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}

Puedes usar {% data variables.product.prodname_dependency_review_action %} para ayudar a aplicar revisiones de dependencia en las solicitudes de incorporación de cambios en el repositorio. {% data reusables.dependency-review.dependency-review-action-overview %}

{% ifversion dependency-review-action-configuration %} Puedes configurar {% data variables.product.prodname_dependency_review_action %} para adaptarse mejor a tus necesidades especificando el tipo de vulnerabilidad de dependencias que quieres detectar. Para obtener más información, consulta "[Configuración de la revisión de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review#configuring-the-dependency-review-github-action)". {% endif %}

{% endif %}
## Revisar las dependencias en una solicitud de cambios

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %}

1. Si la solicitud de incorporación de cambios contiene muchos archivos, use el menú desplegable **Filtro de archivos** para contraer todos los archivos que no registren dependencias. Esto facilitará que te enfoques en tu revisión de cambios a las dependencias.

   ![Menú Filtro de archivos](/assets/images/help/pull_requests/file-filter-menu-json.png) La revisión de dependencias proporciona una vista más clara de lo que ha cambiado en los archivos de bloqueo grandes, donde la diferencia de origen no se representa de manera predeterminada.

  {% note %}

   **Nota:** Las diferencias enriquecidas de revisión de dependencias no están disponibles para los archivos estáticos de JavaScript confirmados, como `jquery.js`.

   {% endnote %}

1. A la derecha del encabezado de un archivo de bloqueo o de manifiesto, haga clic en el **{% octicon "file" aria-label="The rich diff icon" %}** botón de diferencias enriquecidas para mostrar la revisión de dependencias.

   ![El botón de diff rica](/assets/images/help/pull_requests/dependency-review-rich-diff.png)

2. Verifica las dependencias que se listan en la revisión de dependencias.

   ![Alertas de vulnerabilidades en una revisión de dependencias](/assets/images/help/pull_requests/dependency-review-vulnerability.png)

   Cualquier dependencia que se cambie o agregue y que tenga vulnerabilidades se listará primero, se organizará por severidad y luego por nombre de dependencia. Esto significa que la severidad de dependencias más alta siempre se encontrará en la parte superior de la revisión de dependencias. El resto de las dependencias se lista por orden alfabético de acuerdo con el nombre de la dependencia.

   El icono junto a cada dependencia indica si se ha agregado (<span style="color:#22863a">{% octicon "diff-added" aria-label="Dependency added icon" %}</span>), actualizado (<span style="color:#b08800">{% octicon "diff-modified" aria-label="Dependency modified icon" %}</span>) o eliminado (<span style="color:#cb2431">{% octicon "diff-removed" aria-label="Dependency removed icon" %}</span>) en esta solicitud de incorporación de cambios.

   El resto de la información incluye:

   * La versión o rango de versiones de la dependencia nueva, actualizada o borrada.
   * Para el caso de las versiones específicas de una dependencia:
      * La antigüedad del lanzamiento de la dependencia.
      * La cantidad de proyectos que dependen de este software. Esta información se toma de la gráfica de dependencias. Verificar la cantidad de dependientes que pueden ayudarte a evitar el agregar accidentalmente la dependencia incorrecta.
      * La licencia que utiliza esta dependencia si es que esta información se encuentra disponible. Esto es útil si quieres evitar el código que utilice licencias específicas, el cual utilizas en tu proyecto.

   Cuando una dependencia tiene una vulnerabilidad conocida, el mensaje de advertencia incluye:

   * Una descripción breve de la vulnerabilidad.
   * Un archivo de Vulnerabilidades y Exposiciones Comunes (CVE) o un número de identificación (GHSA) de {% data variables.product.prodname_security_advisories %}. Puedes dar clic en esta ID para conocer más sobre la vulnerabilidad.
   * La severidad de la vulnerabilidad.
   * La versión de la dependencia en la cual se arregló la vulnerabilidad. Si estás revisando una solicitud de cambios para alguien, puedes pedir al contribuyente que actualice la dependencia a la versión parchada o a un lanzamiento más reciente.

{% data reusables.repositories.return-to-source-diff %}
