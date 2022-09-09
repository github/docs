---
title: Filtrar alertas en el resumen de seguridad
intro: Uso de filtros para ver categorías específicas de alertas
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
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
shortTitle: Filtering alerts
ms.openlocfilehash: c2ea05ce5c2e65717088324fe818cb58e7a33093
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147525685'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

## Acerca de filtrar el resumen de seguridad

Puedes utilizar filtros en el resumen de seguridad para reducir tu enfoque con base en una serie de factores, como el nivel de riesgo de la alerta, el tipo de esta y la habilitación de características. Los diversos filtros se encuentran disponibles en función de la vista específica y de si el análisis es a nivel de organización, de equipo o de repositorio.

{% note %} {% data reusables.security-overview.information-varies-GHAS %} {% endnote %}

## Filtro por repositorio

Disponible en todas las vistas a nivel de organización y de equipo.

| Calificador: | Descripción |
| -------- | -------- |
| `repo:REPOSITORY-NAME` | Muestra alertas para el repositorio especificado. |

## Filtrar por el criterio de tener habilitadas las características de seguridad

Disponible en el resumen a nivel de organización y de equipo.

| Calificador: | Descripción |
| -------- | -------- |
| `code-scanning:enabled` | Muestra los repositorios que tienen habilitado el {% data variables.product.prodname_code_scanning %}. |
| `code-scanning:not-enabled` | Muestra los repositorios que no tienen habilitado el {% data variables.product.prodname_code_scanning %}. |
| `secret-scanning:enabled` | Muestra los repositorios que tienen habilitado el {% data variables.product.prodname_secret_scanning %}. |
| `secret-scanning:not-enabled` | Muestra los repositorios que tienen habilitado el {% data variables.product.prodname_secret_scanning %}. |
| `dependabot:enabled` | Muestra los repositorios que tienen habilitadas las {% data variables.product.prodname_dependabot_alerts %}. |
| `dependabot:not-enabled` | Muestra los repositorios que no tienen habilitadas las {% data variables.product.prodname_dependabot_alerts %}. |
| `not-enabled:any` | Muestra los repositorios con por lo menos una característica de seguridad que no está habilitada. |

## Filtrar por tipo de repositorio

Disponible en el resumen a nivel de organización y de equipo.

| Calificador: | Descripción |
| -------- | -------- |
{%- ifversion ghes or ghec %} | `is:public` | Mostrar repositorios públicos. | {%- endif %} {%- ifversion ghes or ghec or ghae %} | `is:internal` | Mostrar repositorios internos. | {%- endif %} | `is:private` | Mostrar repositorios privados. | | `archived:true` | Mostrar repositorios archivados. | | `archived:true` | Mostrar repositorios archivados. |

## Filtrar por nivel de riesgo para los repositorios

El nivel de riesgo de un repositorio se determina por la cantidad y severidad de las alertas de las características de seguridad. Si no están habilitadas una o más características de seguridad para un repositorio, este tendrá un nivel de riesgo desconocido. Si un repositorio no tiene riesgos que detecten las características de seguridad, este tendrá un nivel de riesgo claro. Disponible en el resumen a nivel organizacional.

| Calificador: | Descripción |
| -------- | -------- |
| `risk:high` | Muestra los repositorios que tienen un riesgo alto. |
| `risk:medium` | Muestra los repositorios que tienen un riesgo medio. |
| `risk:low` | Muestra los repositorios que tienen un nivel de riesgo bajo. |
| `risk:unknown` | Muestra los repositorios que tienen un nivel de riesgo desconocido. |
| `risk:clear` | Muestra los repositorios que no tienen un nivel de riesgo detectado. |

## Filtra por cantidad de alertas

Disponible en el resumen a nivel organizacional.

| Calificador: | Descripción |
| -------- | -------- |
| <code>code-scanning:<em>n</em></code> | Muestra los repositorios que tienen *n* alertas de {% data variables.product.prodname_code_scanning %}. Este calificador puede usar los operadores de comparación `=`, `>`y `<`. |
| <code>secret-scanning:<em>n</em></code> | Muestra los repositorios que tienen *n* alertas de {% data variables.product.prodname_secret_scanning %}. Este calificador puede usar los operadores de comparación `=`, `>`y `<`. |
| <code>dependabot:<em>n</em></code> | Muestra los repositorios que tienen *n* {% data variables.product.prodname_dependabot_alerts %}. Este calificador puede usar los operadores de comparación `=`, `>`y `<`. |


## Filtrar por equipo

Disponible en el resumen a nivel organizacional.

| Calificador: | Descripción |
| -------- | -------- |
| <code>team:<em>TEAM-NAME</em></code> | Muestra los repositorios para los que *NOMBRE_DE_EQUIPO* tiene privilegios de administrador. |

## Filtrar por tema

Disponible en el resumen a nivel organizacional.

| Calificador: | Descripción |
| -------- | -------- |
| <code>topic:<em>TOPIC-NAME</em></code> | Muestra repositorios clasificados con *NOMBRE_DE_TEMA*. |

{% ifversion security-overview-views %}

## Filtrar por gravedad

Disponible en las vistas de alertas del escaneo de código. Todas las alertas del escaneo de código tienen una de las categorías que se muestran debajo. Puedes hacer clic en cualquier resultado para ver todos los detalles de la regla relevante y la línea de código que activó la alerta.

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
## Filtrar por tipo de alerta de {% data variables.product.prodname_dependabot %}

Disponible en las vistas de alertas de {% data variables.product.prodname_dependabot %}. Puedes filtrar la vista para mostrar {% data variables.product.prodname_dependabot_alerts %} que están listas para su corrección o en las que hay información sobre la exposición disponible. Puedes hacer clic en cualquier resultado para ver los detalles completos de la alerta.

| Calificador: | Descripción |
| -------- | -------- |
|`has:patch`|Muestra las alertas de {% data variables.product.prodname_dependabot %} de vulnerabilidades en las que ya hay una versión segura disponible.|
|`has:vulnerable-calls`|Muestra las alertas de {% data variables.product.prodname_dependabot %} en las que se detecta al menos una llamada desde el repositorio a una función vulnerable. Para obtener más información, consulta "[Visualización y actualización de alertas del Dependabot](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#about-the-detection-of-calls-to-vulnerable-functions)".|
{% endif %}

{% endif %}

## Filtrar por tipos de secreto

Disponible en las vistas de alerta del escaneo de secretos.

| Calificador: | Descripción |
| -------- | -------- |
| `secret-type:SERVICE_PROVIDER` | Muestra alertas para el secreto y proveedor especificados. Para más información, vea "[Patrones de {% data variables.product.prodname_secret_scanning_caps %}](/code-security/secret-scanning/secret-scanning-patterns)". |
| `secret-type:CUSTOM-PATTERN` | Muestra alertas para los secretos que coinciden con el patrón personalizado específico. Para más información, vea "[Definición de patrones personalizados para el análisis de secretos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)". |

## Filtrar por proveedor

Disponible en las vistas de alerta del escaneo de secretos.

| Calificador: | Descripción |
| -------- | -------- |
|`provider:PROVIDER_NAME` | Muestra las alertas para todos los secretos en propuestas por proveedor especificado. Para más información, vea "[Patrones de {% data variables.product.prodname_secret_scanning_caps %}](/code-security/secret-scanning/secret-scanning-patterns)". |
