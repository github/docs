---
title: Filtrar alertas en el resumen de seguridad
intro: Uso de filtros para ver categorías específicas de alertas
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
allowTitleToDifferFromFilename: true
versions:
  ghae: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Organizations
  - Teams
shortTitle: Filtering the security overview
ms.openlocfilehash: 60ff823ab0303dfb8fce788e708cb1cd61a9f8e2
ms.sourcegitcommit: 094dff459fcbf7d0634930e02405606dfffd7f0a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/12/2022
ms.locfileid: '148163199'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

## Acerca de filtrar el resumen de seguridad

Puedes utilizar filtros de la información general de seguridad para reducir tu enfoque con base en una serie de factores, como el nivel de riesgo de la alerta, su tipo y la habilitación de características. Hay diferentes filtros disponibles en función de la vista específica{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %} y si estás viendo datos en el nivel de empresa u organización{% endif %}.

{% ifversion security-overview-displayed-alerts %} {% note %} {% data reusables.security-overview.information-varies-GHAS %} {% endnote %} {% endif %}

## Filtro por repositorio

| Calificador: | Descripción |
| -------- | -------- |
| `repo:REPOSITORY-NAME` | Muestra datos para el repositorio especificado. |

## Filtrar por el criterio de tener habilitadas las características de seguridad

En los ejemplos siguientes, reemplaza `:enabled` por `:not-enabled` para ver los repositorios en los que no están habilitadas las características de seguridad. Estos calificadores están disponibles en las vistas de resumen principales.

| Calificador: | Descripción |
| -------- | -------- |
| `code-scanning:enabled` | Muestra los repositorios que tienen configurado {% data variables.product.prodname_code_scanning %}. | 
| `dependabot:enabled` | Muestra los repositorios que tienen habilitado {% data variables.product.prodname_dependabot_alerts %}. |
| `secret-scanning:enabled` | Muestra los repositorios que tienen habilitadas las alertas {% data variables.product.prodname_secret_scanning %}. {% ifversion security-overview-org-risk-coverage %} |
| `any-feature:enabled` | Muestra los repositorios en los que está habilitada al menos una característica de seguridad. |{% else %}
| `not-enabled:any` | Muestra los repositorios con por lo menos una característica de seguridad que no está habilitada. |{% endif %}

{% ifversion security-overview-org-risk-coverage %} La vista Cobertura de seguridad de nivel de organización incluye filtros adicionales.

{% data reusables.security-overview.beta-org-risk-coverage %}

| Calificador: | Descripción |
| -------- | -------- |
| `code-scanning-pull-request-alerts:enabled`| Muestra los repositorios que tienen configurado {% data variables.product.prodname_code_scanning %} para ejecutarse en las solicitudes de incorporación de cambios. |
| `dependabot-security-updates:enabled` | Muestra los repositorios que tienen habilitadas las actualizaciones de seguridad {% data variables.product.prodname_dependabot %}.  |
| `secret-scanning-push-protection:enabled` | Muestra los repositorios que tienen habilitada la protección contra el envío de cambios para {% data variables.product.prodname_secret_scanning %}. |
{% endif %}

## Filtrar por tipo de repositorio

Estos calificadores están disponibles en las vistas de resumen principales.

| Calificador: | Descripción |
| -------- | -------- |
{%- ifversion ghes or ghec %} | `is:public` | Mostrar repositorios públicos. | {%- endif %} | `is:internal` | Mostrar los repositorios internos. | | `is:private` | Mostrar los repositorios privados. | | `archived:true` | Mostrar repositorios archivados. | | `archived:false` | Mostrar los repositorios archivados. |

{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}
## Filtrar por nivel de riesgo para los repositorios

El nivel de riesgo de un repositorio se determina por la cantidad y severidad de las alertas de las características de seguridad. Si no están habilitadas una o más características de seguridad para un repositorio, este tendrá un nivel de riesgo desconocido. Si un repositorio no tiene riesgos que detecten las características de seguridad, este tendrá un nivel de riesgo claro. 

{% ifversion security-overview-org-risk-coverage %} Estos calificadores están disponibles en la vista de nivel empresarial.
{% endif %}

| Calificador: | Descripción |
| -------- | -------- |
| `risk:high` | Muestra los repositorios que tienen un riesgo alto. |
| `risk:medium` | Muestra los repositorios que tienen un riesgo medio. |
| `risk:low` | Muestra los repositorios que tienen un nivel de riesgo bajo. |
| `risk:unknown` | Muestra los repositorios que tienen un nivel de riesgo desconocido. |
| `risk:clear` | Muestra los repositorios que no tienen un nivel de riesgo detectado. |
{% endif %}

## Filtra por cantidad de alertas

{% ifversion security-overview-org-risk-coverage %}Estos calificadores están disponibles en la Información general de nivel empresarial y en la vista Riesgo de seguridad de nivel de organización. {% else %} Estos calificadores están disponibles en las vistas de resumen principales.{% endif %}

| Calificador: | Descripción |
| -------- | -------- |
| <code>code-scanning:<em>n</em></code> | Muestra los repositorios que tienen *n* alertas de {% data variables.product.prodname_code_scanning %}. Este calificador puede usar los operadores de comparación `=`, `>`y `<`. |
| <code>secret-scanning:<em>n</em></code> | Muestra los repositorios que tienen *n* alertas de {% data variables.product.prodname_secret_scanning %}. Este calificador puede usar los operadores de comparación `=`, `>`y `<`. |
| <code>dependabot:<em>n</em></code> | Muestra los repositorios que tienen *n* {% data variables.product.prodname_dependabot_alerts %}. Este calificador puede usar los operadores de comparación `=`, `>`y `<`. |


## Filtrar por equipo

Estos calificadores están disponibles en las vistas de resumen principales.

| Calificador: | Descripción |
| -------- | -------- |
| <code>team:<em>TEAM-NAME</em></code> | Muestra los repositorios para los que *NOMBRE_DE_EQUIPO* tiene privilegios de administrador. |

## Filtrar por tema

Estos calificadores están disponibles en las vistas de resumen principales.

| Calificador: | Descripción |
| -------- | -------- |
| <code>topic:<em>TOPIC-NAME</em></code> | Muestra repositorios clasificados con *NOMBRE_DE_TEMA*. |

{% ifversion security-overview-alert-views %}

## Filtros adicionales para las vistas de alerta de {% data variables.product.prodname_code_scanning %}

Todas las alertas del escaneo de código tienen una de las categorías que se muestran debajo. Puedes hacer clic en cualquier resultado para ver todos los detalles de la consulta pertinente y la línea de código que activó la alerta.

| Calificador: | Descripción |
| -------- | -------- |
|`severity:critical`|Muestra alertas del {% data variables.product.prodname_code_scanning %} categorizadas como críticas.|
|`severity:high`|Muestra alertas del {% data variables.product.prodname_code_scanning %} categorizadas como altas.|
|`severity:medium`|Muestra alertas del {% data variables.product.prodname_code_scanning %} categorizadas como medias.|
|`severity:low`|Muestra alertas del {% data variables.product.prodname_code_scanning %} categorizadas como bajas.|
|`severity:error`|Muestra alertas del {% data variables.product.prodname_code_scanning %} categorizadas como errores.|
|`severity:warning`|Muestra alertas del {% data variables.product.prodname_code_scanning %} categorizadas como advertencias.|
|`severity:note`|Muestra alertas del {% data variables.product.prodname_code_scanning %} categorizadas como notas.|

{% ifversion dependabot-alerts-vulnerable-calls %}
## Filtros adicionales para las vistas de alertas {% data variables.product.prodname_dependabot %}

Puedes filtrar la vista para mostrar {% data variables.product.prodname_dependabot_alerts %} que están listas para su corrección o en las que hay información sobre la exposición disponible. Puedes hacer clic en cualquier resultado para ver los detalles completos de la alerta.

| Calificador: | Descripción |
| -------- | -------- |
|`has:patch`|Muestra las alertas de {% data variables.product.prodname_dependabot %} de vulnerabilidades en las que ya hay una versión segura disponible.|
|`has:vulnerable-calls`|Muestra las alertas de {% data variables.product.prodname_dependabot %} en las que se detecta al menos una llamada desde el repositorio a una función vulnerable. Para obtener más información, consulta "[Visualización y actualización de alertas del Dependabot](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#about-the-detection-of-calls-to-vulnerable-functions)".|
{% endif %}

{% endif %}

## Filtros adicionales para las vistas de alertas {% data variables.product.prodname_secret_scanning %}

| Calificador: | Descripción |
| -------- | -------- |
|`provider:PROVIDER_NAME` | Muestra las alertas para todos los secretos en propuestas por proveedor especificado.  |
| `secret-type:SERVICE_PROVIDER` | Muestra alertas para el secreto y proveedor especificados. |
| `secret-type:CUSTOM-PATTERN` | Muestra alertas para los secretos que coinciden con el patrón personalizado específico.  |

Para más información, vea "[Patrones de {% data variables.product.prodname_secret_scanning_caps %}](/code-security/secret-scanning/secret-scanning-patterns)".

