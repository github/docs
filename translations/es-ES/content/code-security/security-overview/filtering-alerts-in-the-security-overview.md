---
title: Filtering alerts in the security overview
intro: Use filters to view specific categories of alerts
permissions: Organization owners and security managers can access the security overview for organizations. Members of a team can see the security overview for repositories that the team has admin privileges for.
product: '{% data reusables.gated-features.security-center %}'
versions:
  fpt: '*'
  ghes: '>3.1'
  ghec: '*'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Organizations
  - Teams
shortTitle: Filtering alerts
---

{% data reusables.security-center.beta %}

## About filtering the security overview

You can use filters in the security overview to narrow your focus based on a range of factors, like alert risk level, alert type and feature enablement. Different filters are available depending on the specific view and whether you analysing at the organization, team or repository level.

## Filtrar por repositorio

Available in all organization-level and team-level views.

| Qualifier              | Descripción                                   |
| ---------------------- | --------------------------------------------- |
| `repo:REPOSITORY-NAME` | Displays alerts for the specified repository. |

## Filtrar por el criterio de tener habilitadas las características de seguridad

Available in the organization-level and team-level overview.

| Qualifier                     | Descripción                                                                                                       |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `code-scanning:enabled`       | Muestra los repositorios que tienen habilitado el {% data variables.product.prodname_code_scanning %}.          |
| `code-scanning:not-enabled`   | Muestra los repositorios que no tienen habilitado el {% data variables.product.prodname_code_scanning %}.       |
| `secret-scanning:enabled`     | Muestra los repositorios que tienen habilitado el {% data variables.product.prodname_secret_scanning %}.        |
| `secret-scanning:not-enabled` | Muestra los repositorios que tienen habilitado el {% data variables.product.prodname_secret_scanning %}.        |
| `dependabot:enabled`          | Muestra los repositorios que tienen habilitadas las {% data variables.product.prodname_dependabot_alerts %}.    |
| `dependabot:not-enabled`      | Muestra los repositorios que no tienen habilitadas las {% data variables.product.prodname_dependabot_alerts %}. |
| `not-enabled:any`             | Display repositories with at least one security feature that is not enabled.                                      |

## Filtrar por tipo de repositorio

Available in the organization-level and team-level overview.

| Qualifier | Descripción |
| --------- | ----------- |
|           |             |
{%- ifversion fpt or ghes or ghec %}
| `is:public` | Muestra los repositorios públicos. |
{%- endif %}
{%- ifversion ghes or ghec or ghae %}
| `is:internal` | Muestra los repositorios internos. |
{%- endif %}
| `is:private` | Muestra repositorios privados. | | `archived:true` | Muestra repositorios archivados. | | `archived:true` | Muestra repositorios archivados. |

## Filtrar por nivel de riesgo para los repositorios

El nivel de riesgo de un repositorio se determina por la cantidad y severidad de las alertas de las características de seguridad. Si no están habilitadas una o más características de seguridad para un repositorio, este tendrá un nivel de riesgo desconocido. Si un repositorio no tiene riesgos que detecten las características de seguridad, este tendrá un nivel de riesgo claro. Available in the organization-level overview.

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
| <code>code-scanning:<em>n</em></code> | Muestra los repositorios que tienen *n* alertas del {% data variables.product.prodname_code_scanning %}. This qualifier can use `=`, `>` and `<` comparison operators.                   |
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

{% ifversion ghec or ghes > 3.4 %}

## Filter by severity

Available in the code scanning alert views. All code scanning alerts have one of the categories shown below. You can click any result to see full details of the relevant rule, and the line of code that triggered the alert.

| Qualifier           | Descripción                                                                                    |
| ------------------- | ---------------------------------------------------------------------------------------------- |
| `severity:critical` | Displays {% data variables.product.prodname_code_scanning %} alerts categorized as critical. |
| `severity:high`     | Displays {% data variables.product.prodname_code_scanning %} alerts categorized as high.     |
| `severity:medium`   | Displays {% data variables.product.prodname_code_scanning %} alerts categorized as medium.   |
| `severity:low`      | Displays {% data variables.product.prodname_code_scanning %} alerts categorized as low.      |
| `severity:error`    | Displays {% data variables.product.prodname_code_scanning %} alerts categorized as errors.   |
| `severity:warning`  | Displays {% data variables.product.prodname_code_scanning %} alerts categorized as warnings. |
| `severity:note`     | Displays {% data variables.product.prodname_code_scanning %} alerts categorized as notes.    |

{% endif %}

## Filter by secret types

Available in the secret scanning alert views.

| Qualifier                      | Descripción                                                                                                                                                                                                                                     |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `secret-type:SERVICE_PROVIDER` | Displays alerts for the specified secret and provider. For more information, see "[List of supported secrets for private repositories](/code-security/secret-scanning/about-secret-scanning#list-of-supported-secrets-for-private-repositories) |
| `secret-type:CUSTOM-PATTERN`   | Displays alerts for secrets matching the specified custom pattern. For more information, see "[Defining custom patterns for secret scanning](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)."                     |

## Filter by provider

Disponible en las vistas de alerta del escaneo de secretos.

| Qualifier                | Descripción                                                                                                                                                                                                                                                                                  |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `provider:PROVIDER_NAME` | Displays alerts for all secrets issues by the specified provider. Para obtener más información, consulta la sección "[Lista de secretos compatibles para los repositorios privados](/code-security/secret-scanning/about-secret-scanning#list-of-supported-secrets-for-private-repositories) |
