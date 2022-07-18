---
title: Filtrar alertas en el resumen de seguridad
intro: Utiliza filtros para ver categorías específicas de las alertas
permissions: '{% data reusables.security-center.permissions %}'
product: '{% data reusables.gated-features.security-center %}'
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
shortTitle: Filtrar alertas
---

{% ifversion ghes < 3.5 or ghae %}
{% data reusables.security-center.beta %}
{% endif %}

## Acerca de filtrar el resumen de seguridad

Puedes utilizar filtros en el resumen de seguridad para reducir tu enfoque con base en una serie de factores, como el nivel de riesgo de la alerta, el tipo de esta y la habilitación de características. Hay diferentes filtros disponibles, dependiendo de la vista específica y de si tu análisis está a nivel de organización, equipo o repositorio.

## Filtrar por repositorio

Disponible en todas las vistas a nivel de organización y de equipo.

| Qualifier              | Descripción                                       |
| ---------------------- | ------------------------------------------------- |
| `repo:REPOSITORY-NAME` | Muestra alertas para el repositorio especificado. |

## Filtrar por el criterio de tener habilitadas las características de seguridad

Disponible en el resumen a nivel de organización y de equipo.

| Qualifier                     | Descripción                                                                                                       |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `code-scanning:enabled`       | Muestra los repositorios que tienen habilitado el {% data variables.product.prodname_code_scanning %}.          |
| `code-scanning:not-enabled`   | Muestra los repositorios que no tienen habilitado el {% data variables.product.prodname_code_scanning %}.       |
| `secret-scanning:enabled`     | Muestra los repositorios que tienen habilitado el {% data variables.product.prodname_secret_scanning %}.        |
| `secret-scanning:not-enabled` | Muestra los repositorios que tienen habilitado el {% data variables.product.prodname_secret_scanning %}.        |
| `dependabot:enabled`          | Muestra los repositorios que tienen habilitadas las {% data variables.product.prodname_dependabot_alerts %}.    |
| `dependabot:not-enabled`      | Muestra los repositorios que no tienen habilitadas las {% data variables.product.prodname_dependabot_alerts %}. |
| `not-enabled:any`             | Muestra los repositorios con por lo menos una característica de seguridad que no está habilitada.                 |

## Filtrar por tipo de repositorio

Disponible en el resumen a nivel de organización y de equipo.

| Qualifier | Descripción |
| --------- | ----------- |
|           |             |
{%- ifversion ghes or ghec %}
| `is:public` | Muestra los repositorios públicos. |
{%- endif %}
{%- ifversion ghes or ghec or ghae %}
| `is:internal` | Muestra los repositorios internos. |
{%- endif %}
| `is:private` | Muestra repositorios privados. | | `archived:true` | Muestra repositorios archivados. | | `archived:true` | Muestra repositorios archivados. |

## Filtrar por nivel de riesgo para los repositorios

El nivel de riesgo de un repositorio se determina por la cantidad y severidad de las alertas de las características de seguridad. Si no están habilitadas una o más características de seguridad para un repositorio, este tendrá un nivel de riesgo desconocido. Si un repositorio no tiene riesgos que detecten las características de seguridad, este tendrá un nivel de riesgo claro. Disponible en el resumen a nivel organizacional.

| Qualifier      | Descripción                                                          |
| -------------- | -------------------------------------------------------------------- |
| `risk:high`    | Muestra los repositorios que tienen un riesgo alto.                  |
| `risk:medium`  | Muestra los repositorios que tienen un riesgo medio.                 |
| `risk:low`     | Muestra los repositorios que tienen un nivel de riesgo bajo.         |
| `risk:unknown` | Muestra los repositorios que tienen un nivel de riesgo desconocido.  |
| `risk:clear`   | Muestra los repositorios que no tienen un nivel de riesgo detectado. |

## Filtra por cantidad de alertas

Disponible en el resumen a nivel organizacional.

| Qualifier                 | Descripción                                                                                                                                                                                      |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>code-scanning:<em>n</em></code> | Muestra los repositorios que tienen *n* alertas del {% data variables.product.prodname_code_scanning %}. Este calificador puede utilizar los operadores de comparación `=`, `>` y `<`.   |
| <code>secret-scanning:<em>n</em></code> | Muestra los repositorios que tienen *n* alertas del {% data variables.product.prodname_secret_scanning %}. Este calificador puede utilizar los operadores de comparación `=`, `>` y `<`. |
| <code>dependabot:<em>n</em></code> | Muestra los repositorios que tienen *n* {% data variables.product.prodname_dependabot_alerts %}. Este calificador puede utilizar los operadores de comparación `=`, `>` y `<`.           |


## Filtrar por equipo

Disponible en el resumen a nivel organizacional.

| Qualifier                 | Descripción                                                                        |
| ------------------------- | ---------------------------------------------------------------------------------- |
| <code>team:<em>TEAM-NAME</em></code> | Muestra los repositorios en los que *TEAM-NAME* tiene privilegios administrativos. |

## Filtrar por tema

Disponible en el resumen a nivel organizacional.

| Qualifier                 | Descripción                                                  |
| ------------------------- | ------------------------------------------------------------ |
| <code>topic:<em>TOPIC-NAME</em></code> | Muestra los repositorios que se clasifican con *TOPIC-NAME*. |

{% ifversion security-overview-views %}

## Filtrar por gravedad

Disponible en las vistas de alertas del escaneo de código. Todas las alertas del escaneo de código tienen una de las categorías que se muestran debajo. Puedes hacer clic en cualquier resultado para ver todos los detalles de la regla relevante y la línea de código que activó la alerta.

| Qualifier           | Descripción                                                                                                |
| ------------------- | ---------------------------------------------------------------------------------------------------------- |
| `severity:critical` | Muestra alertas del {% data variables.product.prodname_code_scanning %} categorizadas como críticas.     |
| `severity:high`     | Muestra alertas del {% data variables.product.prodname_code_scanning %} categorizadas como altas.        |
| `severity:medium`   | Muestra alertas del {% data variables.product.prodname_code_scanning %} categorizadas como medias.       |
| `severity:low`      | Muestra alertas del {% data variables.product.prodname_code_scanning %} categorizadas como bajas.        |
| `severity:error`    | Muestra alertas del {% data variables.product.prodname_code_scanning %} categorizadas como errores.      |
| `severity:warning`  | Muestra alertas del {% data variables.product.prodname_code_scanning %} categorizadas como advertencias. |
| `severity:note`     | Muestra alertas del {% data variables.product.prodname_code_scanning %} categorizadas como notas.        |

{% ifversion dependabot-alerts-vulnerable-calls %}
## Filtrar por tipo de alerta del {% data variables.product.prodname_dependabot %}

Disponible en las vistas de alerta del {% data variables.product.prodname_dependabot %}. Puedes filtrar la vista para mostrar las {% data variables.product.prodname_dependabot_alerts %} que están listas para arreglarse o donde la información adicional sobre la exposición se encuentre disponible. Puedes hacer clic en cualquier resultado para ver todos los detalles de esa alerta.

| Qualifier              | Descripción                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `has:patch`            | Muestra alertas del {% data variables.product.prodname_dependabot %} para vulnerabilidades en donde una versión segura ya esté disponible.                                                                                                                                                                                                                                                              |
| `has:vulnerable-calls` | Muestra alertas del {% data variables.product.prodname_dependabot %} en donde se detecta por lo menos una llamada del repositorio a una función vulnerable. Para obtener más información, consulta la sección "[Ver y actualizar las alertas del Dependabot](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#about-the-detection-of-calls-to-vulnerable-functions)". |
{% endif %}

{% endif %}

## Filtrar por tipos de secreto

Disponible en las vistas de alerta del escaneo de secretos.

| Qualifier                      | Descripción                                                                                                                                                                                                                                                                                 |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `secret-type:SERVICE_PROVIDER` | Muestra alertas para el secreto y proveedor especificados. Para obtener más información, consulta la sección "[patrones de {% data variables.product.prodname_secret_scanning_caps %}](/code-security/secret-scanning/secret-scanning-patterns)".                                         |
| `secret-type:CUSTOM-PATTERN`   | Muestra alertas para los secretos que coinciden con el patrón personalizado específico. Para obtener más información, consulta la sección "[Definir los patrones personalizados para el escaneo de secretos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)". |

## Filtrar por proveedor

Disponible en las vistas de alerta del escaneo de secretos.

| Qualifier                | Descripción                                                                                                                                                                                                                                                                    |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `provider:PROVIDER_NAME` | Muestra las alertas para todos los secretos en propuestas por proveedor especificado. Para obtener más información, consulta la sección "[patrones de {% data variables.product.prodname_secret_scanning_caps %}](/code-security/secret-scanning/secret-scanning-patterns)". |
