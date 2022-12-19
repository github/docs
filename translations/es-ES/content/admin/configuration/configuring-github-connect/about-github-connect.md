---
title: Acerca de GitHub Connect
intro: '{% data variables.product.prodname_github_connect %} amplía a {% data variables.product.product_name %} otorgándote acceso a características y flujos de trabajo adicionales que dependen del poder de {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - GitHub Connect
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: ac4ec1d8b619e56c38013f5ae38d5782b6faec88
ms.sourcegitcommit: 2e1852bcdd690cb66b9b5d69cb056a2bb2b9a6b4
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160820'
---
## Acerca de {% data variables.product.prodname_github_connect %}

{% data variables.product.prodname_github_connect %} amplía a {% data variables.product.product_name %} permitiendo a {% data variables.location.product_location %} beneficiarse del poder de {% data variables.product.prodname_dotcom_the_website %} de forma limitada. Después de que habilites {% data variables.product.prodname_github_connect %}, podrás habilitar características y flujos de trabajo adicionales que dependen de {% data variables.product.prodname_dotcom_the_website %}, tales como {% data variables.product.prodname_dependabot_alerts %} para las vulnerabilidades de seguridad de las que se hace un seguimiento en {% data variables.product.prodname_advisory_database %}.

{% data variables.product.prodname_github_connect %} no abre {% data variables.location.product_location %} al internet público. Ninguno de los datos privados de tu empresa se exponen a los usuarios de {% data variables.product.prodname_dotcom_the_website %}. En vez de esto, {% data variables.product.prodname_github_connect %} transmite solo los datos limitados que se necesitan para las características individuales que eliges habilitar. A menos de que habilites la sincronización de licencias, {% data variables.product.prodname_github_connect %} no transmite ninguno de los datos personales. Para obtener más información sobre los datos transmitidos por {% data variables.product.prodname_github_connect %}, consulte "[Transmisión de datos de {% data variables.product.prodname_github_connect %}](#data-transmission-for-github-connect)".

El habilitar {% data variables.product.prodname_github_connect %} no permitirá que los usuarios de {% data variables.product.prodname_dotcom_the_website %} hagan cambios en {% data variables.product.product_name %}.

Para habilitar {% data variables.product.prodname_github_connect %}, configuras una conexión entre {% data variables.location.product_location %} y la cuenta de organización o empresa de {% data variables.product.prodname_dotcom_the_website %} que utilice {% data variables.product.prodname_ghe_cloud %}. {% data reusables.github-connect.connection-port-protocol %} Para más información, vea "[Administración de {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect)".

Después de habilitar {% data variables.product.prodname_github_connect %}, podrás habilitar características tales como {% ifversion ghes %}la sincronización de licencias de usuario y las {% endif %}{% data variables.product.prodname_dependabot_alerts %}. Para obtener más información sobre todas las características disponibles, consulte "Características de [{% data variables.product.prodname_github_connect %}](#github-connect-features)".

## Características de {% data variables.product.prodname_github_connect %}

Después de que configuras la conexión entre {% data variables.location.product_location %} y {% data variables.product.prodname_ghe_cloud %}, puedes habilitar las características individuales de {% data variables.product.prodname_github_connect %} para tu empresa.

Característica | Descripción | Más información | ------- | ----------- | ---------------- | {% ifversion ghes %} Sincronización automática de licencias de usuario | Administre el uso de licencias en las implementaciones de {% data variables.product.prodname_enterprise %} mediante la sincronización automática de licencias de usuario de {% data variables.location.product_location %} en {% data variables.product.prodname_ghe_cloud %}. | "[Habilitación de la sincronización automática de licencias de usuario para la empresa](/admin/configuration/configuring-github-connect/enabling-automatic-user-license-sync-for-your-enterprise)"{% endif %}{% ifversion ghes or ghae %} {% data variables.product.prodname_dependabot %} | Permitir a los usuarios buscar y corregir vulnerabilidades en las dependencias de código. | "[Habilitar {% data variables.product.prodname_dependabot %} para su empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)"{% endif %} Acciones de {% data variables.product.prodname_dotcom_the_website %} | Permitir que los usuarios usen acciones de {% data variables.product.prodname_dotcom_the_website %} en archivos de flujo de trabajo. | "[Habilitación del acceso automático a las acciones de {% data variables.product.prodname_dotcom_the_website %} mediante {% data variables.product.prodname_github_connect %}](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)"{% ifversion server-statistics %} {% data variables.product.prodname_server_statistics %} | Analiza tus propios datos agregados de GitHub Enterprise Server y ayúdanos a mejorar los productos de GitHub. | "[Habilitación de {% data variables.product.prodname_server_statistics %} para tu empresa](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)"{% endif %} Búsqueda unificada | Permitir a los usuarios incluir los repositorios en {% data variables.product.prodname_dotcom_the_website %} en los resultados de la búsqueda cuando se busca desde {% data variables.location.product_location %}. | "[Habilitación de {% data variables.enterprise.prodname_unified_search %} para su empresa](/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise)" Contribuciones unificadas | Permitir a los usuarios incluir recuentos de contribución anónimos para su trabajo de {% data variables.location.product_location %} en los gráficos de contribución de {% data variables.product.prodname_dotcom_the_website %}. | "[Habilitación de {% data variables.enterprise.prodname_unified_contributions %} para su empresa](/admin/configuration/configuring-github-connect/enabling-unified-contributions-for-your-enterprise)"

## Transmisión de datos para {% data variables.product.prodname_github_connect %} 

Cuando se habilita {% data variables.product.prodname_github_connect %}, un registro en {% data variables.product.prodname_ghe_cloud %} almacena información acerca de la conexión. Los datos adicionales se transmiten si habilitas las características individuales de {% data variables.product.prodname_github_connect %}.

{% note %}

**Nota:** Jamás se transmitirán repositorios, incidencias ni solicitudes de incorporación de cambios desde {% data variables.product.product_name %} hacia {% data variables.product.prodname_dotcom_the_website %} mediante {% data variables.product.prodname_github_connect %}.

{% endnote %}

### Datos transmitidos cuando se habilita {% data variables.product.prodname_github_connect %}.

Cuando habilitas {% data variables.product.prodname_github_connect %} o características específicas de {% data variables.product.prodname_github_connect %}, un registro en las tiendas de {% data variables.product.prodname_ghe_cloud %} almacena la siguiente información sobre la conexión.
{% ifversion ghes %}
- La parte pública de la clave de tu licencia {% data variables.product.prodname_ghe_server %}
- Un hash de tu licencia {% data variables.product.prodname_ghe_server %}
- El nombre personalizado de tu licencia {% data variables.product.prodname_ghe_server %}
- La versión de {% data variables.location.product_location_enterprise %}{% endif %}
- El nombre de host de {% data variables.location.product_location %}
- La cuenta de empresa u organización en {% data variables.product.prodname_ghe_cloud %} que está conectada a {% data variables.location.product_location %}
- El token de autenticación que utiliza {% data variables.location.product_location %} para hacerle solicitudes a {% data variables.product.prodname_ghe_cloud %}
- Si se habilitó la Seguridad de Capa de Transporte (TLS) y se configuró en {% data variables.location.product_location %}{% ifversion ghes %}
- Las características de {% data variables.product.prodname_github_connect %} que se habilitan en {% data variables.location.product_location %} y la fecha y hora de su habilitación.{% endif %}
- El umbral de inactividad de tu empresa
- La cantidad de usuarios inactivos de tu empresa
- Un conteo de plazas que consumen licencias, el cual no incluye a los usuarios suspendidos

{% data variables.product.prodname_github_connect %} sincroniza los datos de conexión anteriores entre {% data variables.location.product_location %}y {% data variables.product.prodname_ghe_cloud %} semanalmente, desde el día y hora aproximada en que se habilitó {% data variables.product.prodname_github_connect %}.

### Datos que transmiten las características individuales de {% data variables.product.prodname_github_connect %}.

Los datos adicionales se transmiten si habilitas las características individuales de {% data variables.product.prodname_github_connect %}.

Característica | Datos | ¿De qué manera fluyen los datos? | ¿Dónde se utilizan los datos? | ------- | ---- | --------- | ------ |{% ifversion ghes %} Sincronización automática de licencias de usuario | Id. de usuario y direcciones de correo electrónico de cada usuario de {% data variables.product.product_name %} | De {% data variables.product.product_name %} a {% data variables.product.prodname_ghe_cloud %} | {% data variables.product.prodname_ghe_cloud %} |{% endif %}{% ifversion ghes or ghae %} {% data variables.product.prodname_dependabot_alerts %} | Alertas de vulnerabilidades | De {% data variables.product.prodname_dotcom_the_website %} a {% data variables.product.product_name %} | {% data variables.product.product_name %} |{% endif %}{% ifversion dependabot-updates-github-connect %} {% data variables.product.prodname_dependabot_updates %} | Dependencias y metadatos del repositorio de cada dependencia<br><br>Si se almacena una dependencia en un repositorio privado en {% data variables.product.prodname_dotcom_the_website %}, los datos solo se transmitirán si {% data variables.product.prodname_dependabot %} está configurado y autorizado para acceder a ese repositorio. | De {% data variables.product.prodname_dotcom_the_website %} a {% data variables.product.product_name %} | Acciones de {% data variables.product.product_name %} {% endif %} {% data variables.product.prodname_dotcom_the_website %} | Nombre de la acción, acción (archivo de YAML de {% data variables.product.prodname_marketplace %}) | De {% data variables.product.prodname_dotcom_the_website %} a {% data variables.product.product_name %}<br><br>De {% data variables.product.product_name %} a {% data variables.product.prodname_dotcom_the_website %} | {% data variables.product.product_name %}{% ifversion server-statistics %} {% data variables.product.prodname_server_statistics %} | Métricas de uso acerca del uso de {% data variables.product.prodname_ghe_server %}. Para obtener la lista completa de métricas, consulta "[Acerca de {% data variables.product.prodname_server_statistics %}](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics#server-statistics-data-collected)". | De {% data variables.product.product_name %} a {% data variables.product.prodname_ghe_cloud %} | {% data variables.product.prodname_ghe_cloud %}{% endif %} Búsqueda unificada | Términos de búsqueda, resultados de la búsqueda | De {% data variables.product.prodname_dotcom_the_website %} a {% data variables.product.product_name %}<br><br>De {% data variables.product.product_name %} a {% data variables.product.prodname_dotcom_the_website %} | {% data variables.product.product_name %} | Contribuciones unificadas | Recuentos de contribuciones | De {% data variables.product.product_name %} a {% data variables.product.prodname_dotcom_the_website %} | {% data variables.product.prodname_dotcom_the_website %} |

## Información adicional

- "[Cuentas de empresa](/graphql/guides/managing-enterprise-accounts)" en la documentación de GraphQL API
