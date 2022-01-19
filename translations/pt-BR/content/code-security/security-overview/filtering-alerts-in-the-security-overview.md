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

## Filtrar por repositório

Available in all organization-level and team-level views.

| Qualifier              | Descrição                                     |
| ---------------------- | --------------------------------------------- |
| `repo:REPOSITORY-NAME` | Displays alerts for the specified repository. |

## Filtrar se as funcionalidades de segurança estão habilitadas

Available in the organization-level and team-level overview.

| Qualifier                     | Descrição                                                                                            |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| `code-scanning:enabled`       | Exibe repositórios com {% data variables.product.prodname_code_scanning %} habilitado.             |
| `code-scanning:not-enabled`   | Exibe repositórios que não têm {% data variables.product.prodname_code_scanning %} habilitado.     |
| `secret-scanning:enabled`     | Exibe repositórios com {% data variables.product.prodname_secret_scanning %} habilitado.           |
| `secret-scanning:not-enabled` | Exibe repositórios com {% data variables.product.prodname_secret_scanning %} habilitado.           |
| `dependabot:enabled`          | Exibe repositórios com {% data variables.product.prodname_dependabot_alerts %} habilitado.         |
| `dependabot:not-enabled`      | Exibe repositórios que não têm {% data variables.product.prodname_dependabot_alerts %} habilitado. |
| `not-enabled:any`             | Display repositories with at least one security feature that is not enabled.                         |

## Filtrar por tipo de repositório

Available in the organization-level and team-level overview.

| Qualifier | Descrição |
| --------- | --------- |
|           |           |
{%- ifversion fpt or ghes or ghec %}
| `is:public` | Exibe repositórios públicos. |
{%- endif %}
{%- ifversion ghes or ghec or ghae %}
| `is:internal` | Exibe repositórios internos. |
{%- endif %}
| `is:private` | Exibe repositórios privados. | | `archived:true` | Exibe repositórios arquivados. | | `archived:true` | Exibe repositórios arquivados. |

## Filtrar por nível de risco para repositórios

O nível de risco para um repositório é determinado pelo número e gravidade dos alertas de funcionalidades de segurança. Se uma ou mais funcionalidades de segurança não estiverem habilitadas para um repositório, o repositório terá um nível de risco desconhecido. Se um repositório não tiver riscos detectados por funcionalidades de segurança, o repositório terá um nível claro de risco. Available in the organization-level overview.

| Qualifier      | Descrição                                                         |
| -------------- | ----------------------------------------------------------------- |
| `risk:high`    | Exibe repositórios que estão em alto risco.                       |
| `risk:medium`  | Exibe repositórios que estão em risco médio.                      |
| `risk:low`     | Exibe repositórios que estão em risco baixo.                      |
| `risk:unknown` | Exibir repositórios que estão com um nível de risco desconhecido. |
| `risk:clear`   | Exibe repositórios que não tem um nível de risco identificado.    |

## Filtrar por número de alertas

Available in the organization-level overview.

| Qualifier                 | Descrição                                                                                                                                                              |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>code-scanning:<em>n</em></code> | Exibe repositórios que têm *n* alertas de {% data variables.product.prodname_code_scanning %}. This qualifier can use `=`, `>` and `<` comparison operators.   |
| <code>secret-scanning:<em>n</em></code> | Exibe repositórios que têm *n* alertas de {% data variables.product.prodname_secret_scanning %}. This qualifier can use `=`, `>` and `<` comparison operators. |
| <code>dependabot:<em>n</em></code> | Exibir repositórios que têm *n* {% data variables.product.prodname_dependabot_alerts %}. This qualifier can use `=`, `>` and `<` comparison operators.         |


## Filtrar por equipe

Available in the organization-level overview.

| Qualifier                 | Descrição                                                                         |
| ------------------------- | --------------------------------------------------------------------------------- |
| <code>team:<em>TEAM-NAME</em></code> | Exibe os repositórios para os quais *TEAM-NAME* tem privilégios de administrador. |

## Filtrar por tópico

Available in the organization-level overview.

| Qualifier                 | Descrição                                                    |
| ------------------------- | ------------------------------------------------------------ |
| <code>topic:<em>TOPIC-NAME</em></code> | Exibe repositórios que são classificados com o *TOPIC-NAME*. |

{% ifversion ghec or ghes > 3.4 %}

## Filter by severity

Available in the code scanning alert views. All code scanning alerts have one of the categories shown below. You can click any result to see full details of the relevant rule, and the line of code that triggered the alert.

| Qualifier           | Descrição                                                                                      |
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

| Qualifier                      | Descrição                                                                                                                                                                                                                                       |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `secret-type:SERVICE_PROVIDER` | Displays alerts for the specified secret and provider. For more information, see "[List of supported secrets for private repositories](/code-security/secret-scanning/about-secret-scanning#list-of-supported-secrets-for-private-repositories) |
| `secret-type:CUSTOM-PATTERN`   | Displays alerts for secrets matching the specified custom pattern. For more information, see "[Defining custom patterns for secret scanning](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)."                     |

## Filter by provider

Available in the secret scanning alert views.

| Qualifier                | Descrição                                                                                                                                                                                                                                                  |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `provider:PROVIDER_NAME` | Displays alerts for all secrets issues by the specified provider. For more information, see "[List of supported secrets for private repositories](/code-security/secret-scanning/about-secret-scanning#list-of-supported-secrets-for-private-repositories) |
