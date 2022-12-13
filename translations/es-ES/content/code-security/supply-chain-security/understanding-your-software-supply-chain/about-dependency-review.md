---
title: Acerca de la revisión de dependencias
intro: 'La revisión de dependencias te permite detectar las dependencias no seguras antes de que las introduzcas en tu entorno y te proporciona información sobre la licencia, los elementos dependientes y la antigüedad de las dependencias.'
product: '{% data reusables.gated-features.dependency-review %}'
shortTitle: Dependency review
versions:
  fpt: '*'
  ghes: '>= 3.2'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Dependency review
  - Vulnerabilities
  - Dependencies
  - Pull requests
redirect_from:
  - /code-security/supply-chain-security/about-dependency-review
ms.openlocfilehash: 36a80324e75f6ffbe96a2b46016d56561da931f0
ms.sourcegitcommit: 73b91dd4cdf592eadec4252319379d6fbe92858e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164118'
---
## Acerca de la revisión de dependencias

{% data reusables.dependency-review.feature-overview %}  

Si una solicitud de cambios apunta a la rama predeterminada de tu repositorio y contiene cambios a los archivos de bloqueo o de manifiesto empaquetados, puedes mostrar una revisión de dependencias para ver qué ha cambiado. La revisión de dependencias incluye detalles de los cambios a las dependencias indirectas en los archivos de bloqueo, y te dice si cualquiera de las dependencias que se agregaron o actualizaron contienen vulnerabilidades conocidas.

Algunas veces puede que solo quieras actualizar la versión de una dependencia en un manifiesto y generar una solicitud de cambios. Sin embargo, si la versión actualizada de esta dependencia directa también tiene dependencias actualizadas, tu solicitud de cambios podría tener más cambios de lo que esperas. La revisión de dependencias para cada archivo de bloqueo y de manifiesto proporciona un aforma sencilla para ver lo que ha cambiado y te deja saber si cualquiera de las versiones nuevas de las dependencias contienen vulnerabilidades conocidas.

Cuando verificas las revisiones de dependencias en una solicitud de cambios y cambias cualquier dependencia que se marque como vulnerable, puedes evitar que las vulnerabilidades se agreguen a tu proyecto. Para obtener más información sobre cómo funciona la revisión de dependencias, consulte "[Revisión de los cambios de dependencia en una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)".

Para obtener más información sobre cómo configurar la revisión de dependencias, consulta "[Configuración de la revisión de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review)".

Las {% data variables.product.prodname_dependabot_alerts %} encontrarán vulnerabilidades que ya se encuentran en tus dependencias, pero es mucho mejor evitar introducir problemas potenciales que arreglarlos posteriormente. Para obtener más información sobre about {% data variables.product.prodname_dependabot_alerts %}, consulte "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)".

La revisión de dependencias es compatible con los mismos lenguajes de programación y ecosistemas de administración de paquetes que la gráfica de dependencias. Para más información, vea "[Acerca del gráfico de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)".

Para obtener más información sobre las características de la cadena de suministro disponibles en {% data variables.product.product_name %}, consulta "[Acerca de la seguridad de la cadena de suministro](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)".

{% ifversion ghec or ghes %}
## Habilitar la revisión de dependencias

La característica de revisión de dependencias se encuentra disponible cuando habilitas la gráfica de dependencias. Para obtener más información, consulte "{% ifversion ghec %}[Habilitación del gráfico de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph){% elsif ghes %}[Habilitación del gráfico de dependencias para la empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise){% endif %}".
{% endif %}

{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
## Aplicación de la revisión de dependencias

La acción está disponible para todos los repositorios {% ifversion fpt or ghec %}públicos, así como los privados {% endif %}que tienen habilitado {% data variables.product.prodname_GH_advanced_security %}.

{% data reusables.dependency-review.action-enterprise %}

Puedes usar {% data variables.product.prodname_dependency_review_action %} en el repositorio para aplicar revisiones de dependencias en las solicitudes de incorporación de cambios. La acción analiza las versiones vulnerables de las dependencias introducidas por los cambios de versión del paquete en las solicitudes de incorporación de cambios y le advierte sobre las vulnerabilidades de seguridad asociadas. Esto proporciona una mejor visibilidad de los cambios en una solicitud de incorporación de cambios y ayuda a evitar que se agreguen vulnerabilidades al repositorio. Para más información, vea [`dependency-review-action`](https://github.com/actions/dependency-review-action).

![Ejemplo de acción de revisión de dependencias](/assets/images/help/graphs/dependency-review-action.png)

De forma predeterminada, se producirá un error en la comprobación de {% data variables.product.prodname_dependency_review_action %} si detecta paquetes vulnerables. Una comprobación con errores impide combinar una solicitud de incorporación de cambios si el propietario del repositorio requiere que se supere la comprobación de revisión de dependencias. Para más información, vea "[Acerca de las ramas protegidas](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging)".

La acción usa la API de REST Dependency Review para obtener la diferencia de los cambios de dependencia entre la confirmación base y la confirmación principal. Puede usar la API Dependency Review para obtener la diferencia de los cambios de dependencia, incluidos los datos de vulnerabilidad, entre dos confirmaciones de un repositorio. Para obtener más información, consulte "[Revisión de dependencias](/rest/reference/dependency-graph#dependency-review)".

{% ifversion dependency-review-action-configuration %} Puedes configurar la {% data variables.product.prodname_dependency_review_action %} para que se adapte mejor a tus necesidades. Por ejemplo, puedes especificar el nivel de gravedad que hará que se produzca un error en la acción{% ifversion dependency-review-action-licenses %}, o bien establecer una lista de permitidos o denegados para el examen de las licencias{% endif %}. Para obtener más información, consulta "[Configuración de la revisión de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review#configuring-the-dependency-review-github-action)". {% endif %}

{% endif %}

