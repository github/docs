---
title: Filtrando alertas na visão geral de segurança
intro: Use os filtros para ver categorias específicas de alertas
permissions: Organization owners and security managers can access the security overview for organizations. Members of a team can see the security overview for repositories that the team has admin privileges for.
product: '{% data reusables.gated-features.security-center %}'
versions:
  ghae: issue-4554
  ghes: '>3.1'
  ghec: '*'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Organizations
  - Teams
shortTitle: Filtrando alertas
---

{% ifversion ghes < 3.5 or ghae-issue-4554 %}
{% data reusables.security-center.beta %}
{% endif %}

## Sobre a filtragem da visão geral de segurança

Você pode usar filtros na visão geral de segurança para restringir seu foco baseado em uma série de fatores como, por exemplo, o nível de risco de alerta, tipo de alerta e habilitação do recurso. Existem filtros diferentes disponíveis, dependendo da visualização específica e da análise no nível da organização, da equipe ou do repositório.

## Filtrar por repositório

Disponível em todos os níveis da organização e no nível da equipe.

| Qualifier              | Descrição                                      |
| ---------------------- | ---------------------------------------------- |
| `repo:REPOSITORY-NAME` | Exibe alertas para o repositório especificado. |

## Filtrar se as funcionalidades de segurança estão habilitadas

Disponível no nível da organização e na visão geral do nível da equipe.

| Qualifier                     | Descrição                                                                                            |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| `code-scanning:enabled`       | Exibe repositórios com {% data variables.product.prodname_code_scanning %} habilitado.             |
| `code-scanning:not-enabled`   | Exibe repositórios que não têm {% data variables.product.prodname_code_scanning %} habilitado.     |
| `secret-scanning:enabled`     | Exibe repositórios com {% data variables.product.prodname_secret_scanning %} habilitado.           |
| `secret-scanning:not-enabled` | Exibe repositórios com {% data variables.product.prodname_secret_scanning %} habilitado.           |
| `dependabot:enabled`          | Exibe repositórios com {% data variables.product.prodname_dependabot_alerts %} habilitado.         |
| `dependabot:not-enabled`      | Exibe repositórios que não têm {% data variables.product.prodname_dependabot_alerts %} habilitado. |
| `not-enabled:any`             | Exibe repositórios com pelo menos um recurso de segurança que não está habilitado.                   |

## Filtrar por tipo de repositório

Disponível no nível da organização e na visão geral do nível da equipe.

| Qualifier | Descrição |
| --------- | --------- |
|           |           |
{%- ifversion ghes or ghec %}
| `is:public` | Exibe repositórios públicos. |
{%- endif %}
{%- ifversion ghes or ghec or ghae %}
| `is:internal` | Exibe repositórios internos. |
{%- endif %}
| `is:private` | Exibe repositórios privados. | | `archived:true` | Exibe repositórios arquivados. | | `archived:true` | Exibe repositórios arquivados. |

## Filtrar por nível de risco para repositórios

O nível de risco para um repositório é determinado pelo número e gravidade dos alertas de funcionalidades de segurança. Se uma ou mais funcionalidades de segurança não estiverem habilitadas para um repositório, o repositório terá um nível de risco desconhecido. Se um repositório não tiver riscos detectados por funcionalidades de segurança, o repositório terá um nível claro de risco. Disponível na visão geral no nível da organização.

| Qualifier      | Descrição                                                         |
| -------------- | ----------------------------------------------------------------- |
| `risk:high`    | Exibe repositórios que estão em alto risco.                       |
| `risk:medium`  | Exibe repositórios que estão em risco médio.                      |
| `risk:low`     | Exibe repositórios que estão em risco baixo.                      |
| `risk:unknown` | Exibir repositórios que estão com um nível de risco desconhecido. |
| `risk:clear`   | Exibe repositórios que não tem um nível de risco identificado.    |

## Filtrar por número de alertas

Disponível na visão geral no nível da organização.

| Qualifier                 | Descrição                                                                                                                                                                        |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>code-scanning:<em>n</em></code> | Exibe repositórios que têm *n* alertas de {% data variables.product.prodname_code_scanning %}. Este qualificador pode usar os operadores de comperação `=`, `>` e `<`.   |
| <code>secret-scanning:<em>n</em></code> | Exibe repositórios que têm *n* alertas de {% data variables.product.prodname_secret_scanning %}. Este qualificador pode usar os operadores de comperação `=`, `>` e `<`. |
| <code>dependabot:<em>n</em></code> | Exibir repositórios que têm *n* {% data variables.product.prodname_dependabot_alerts %}. Este qualificador pode usar os operadores de comperação `=`, `>` e `<`.         |


## Filtrar por equipe

Disponível na visão geral no nível da organização.

| Qualifier                 | Descrição                                                                         |
| ------------------------- | --------------------------------------------------------------------------------- |
| <code>team:<em>TEAM-NAME</em></code> | Exibe os repositórios para os quais *TEAM-NAME* tem privilégios de administrador. |

## Filtrar por tópico

Disponível na visão geral no nível da organização.

| Qualifier                 | Descrição                                                    |
| ------------------------- | ------------------------------------------------------------ |
| <code>topic:<em>TOPIC-NAME</em></code> | Exibe repositórios que são classificados com o *TOPIC-NAME*. |

{% if security-overview-views %}

## Filtrar por gravidade

Disponível na visualização de alerta de digitalização de código. Todos os alertas de digitalização de códigos têm uma das categorias exibidas abaixo. Você pode clicar em qualquer resultado para ver todos os detalhes da regra relevante e a linha de código que acionou o alerta.

| Qualifier           | Descrição                                                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------ |
| `severity:critical` | Exibe alertas de {% data variables.product.prodname_code_scanning %} categorizados como críticos.    |
| `severity:high`     | Exibe alertas de {% data variables.product.prodname_code_scanning %} categorizados como altos.       |
| `severity:medium`   | Exibe alertas de {% data variables.product.prodname_code_scanning %} categorizados como médios.      |
| `severity:low`      | Exibe alertas de {% data variables.product.prodname_code_scanning %} categorizados como baixos.      |
| `severity:error`    | Exibe alertas de {% data variables.product.prodname_code_scanning %} categorizados como erros.       |
| `severity:warning`  | Exibe alertas de {% data variables.product.prodname_code_scanning %} categorizados como avisos.      |
| `severity:note`     | Exibe alertas de {% data variables.product.prodname_code_scanning %} categorizados como observações. |

{% if dependabot-alerts-vulnerable-calls %}
## Filtrar por tipo de alerta de {% data variables.product.prodname_dependabot %}

Disponível nas visualizações de alerta de {% data variables.product.prodname_dependabot %}. Você pode filtrar a visualização para mostrar {% data variables.product.prodname_dependabot_alerts %} que estão prontos para corrigir ou onde estão disponíveis informações adicionais sobre exposição. Você pode clicar em qualquer resultado para ver detalhes completos do alerta.

| Qualifier              | Descrição                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `has:patch`            | Exibe alertas do {% data variables.product.prodname_dependabot %} para vulnerabilidades em que uma versão segura já está disponível.                                                                                                                                                                                                                                                         |
| `has:vulnerable-calls` | Exibe alertas de {% data variables.product.prodname_dependabot %}, em que pelo menos uma chamada do repositório para uma função vulnerável é detectada. Para obter mais informações, consulte "[Visualizando e atualizando alertas do Dependabot](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#about-the-detection-of-calls-to-vulnerable-functions)". |
{% endif %}

{% endif %}

## Filtrar por tipos de segredo

Disponível nas visualizações de alerta de segredos.

| Qualifier                      | Descrição                                                                                                                                                                                                                                                                |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `secret-type:SERVICE_PROVIDER` | Exibe alertas para o segredo e provedor especificados. Para obter mais informações, consulte "[Padrões de {% data variables.product.prodname_secret_scanning_caps %}](/code-security/secret-scanning/secret-scanning-patterns)."                                       |
| `secret-type:CUSTOM-PATTERN`   | Exibe alertas de segredos que correspondem ao padrão personalizado especificado. Para obter mais informações, consulte "[Definindo padrões personalizados para digitalização de segredo](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning). " |

## Filtrar por provedor

Disponível nas visualizações de alerta de segredos.

| Qualifier                | Descrição                                                                                                                                                                                                                                                |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `provider:PROVIDER_NAME` | Exibe alertas para todos os problemas de segredos por provedor especificado. Para obter mais informações, consulte "[Padrões de {% data variables.product.prodname_secret_scanning_caps %}](/code-security/secret-scanning/secret-scanning-patterns)." |
