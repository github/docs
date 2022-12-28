---
title: Filtrando alertas na visão geral de segurança
intro: Use filtros para exibir categorias específicas de alertas
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
ms.contentlocale: pt-BR
ms.lasthandoff: 11/12/2022
ms.locfileid: '148163192'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

## Sobre a filtragem da visão geral de segurança

Você pode usar filtros em uma visão geral de segurança para restringir seu foco baseado em uma série de fatores como, por exemplo, o nível de risco de alerta, tipo de alerta e habilitação do recurso. Há diferentes filtros disponíveis, dependendo da exibição específica{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %} e se você está exibindo dados no nível de empresa ou organização{% endif %}.

{% ifversion security-overview-displayed-alerts %} {% note %} {% data reusables.security-overview.information-varies-GHAS %} {% endnote %} {% endif %}

## Filtragem por repositório

| Qualificador | Descrição |
| -------- | -------- |
| `repo:REPOSITORY-NAME` | Exibe dados do repositório especificado. |

## Filtrar se as funcionalidades de segurança estão habilitadas

Nos exemplos abaixo, substitua `:enabled` por `:not-enabled` para ver repositórios em que os recursos de segurança não estão habilitados. Esses qualificadores estão disponíveis nas principais exibições resumidas.

| Qualificador | Descrição |
| -------- | -------- |
| `code-scanning:enabled` | Exibir repositórios com {% data variables.product.prodname_code_scanning %} configurado. | 
| `dependabot:enabled` | Exibe os repositórios com {% data variables.product.prodname_dependabot_alerts %} habilitado. |
| `secret-scanning:enabled` | Exibe os repositórios que habilitaram alertas da {% data variables.product.prodname_secret_scanning %}. {% ifversion security-overview-org-risk-coverage %} |
| `any-feature:enabled` | Exibe repositórios em que pelo menos um recurso de segurança está habilitado. |{% else %}
| `not-enabled:any` | Exibe repositórios com pelo menos um recurso de segurança que não está habilitado. |{% endif %}

{% ifversion security-overview-org-risk-coverage %} A exibição Cobertura de Segurança no nível da organização inclui filtros extras.

{% data reusables.security-overview.beta-org-risk-coverage %}

| Qualificador | Descrição |
| -------- | -------- |
| `code-scanning-pull-request-alerts:enabled`| Exibir repositórios que configuraram {% data variables.product.prodname_code_scanning %} para execução em solicitações de pull. |
| `dependabot-security-updates:enabled` | Exibir os repositórios com atualizações de segurança do {% data variables.product.prodname_dependabot %} habilitadas.  |
| `secret-scanning-push-protection:enabled` | Exibir repositórios que configuraram a proteção de push na {% data variables.product.prodname_secret_scanning %}. |
{% endif %}

## Filtrar por tipo de repositório

Esses qualificadores estão disponíveis nas principais exibições resumidas.

| Qualificador | Descrição |
| -------- | -------- |
{%- ifversion ghes or ghec %} | `is:public` | Exibe os repositórios públicos. | {%- endif %} | `is:internal` | Exibir repositórios internos. | | `is:private` | Exibir repositórios privados. | | `archived:true` | Exibe os repositórios arquivados. | | `archived:false` | Omitir repositórios arquivados. |

{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}
## Filtrar por nível de risco para repositórios

O nível de risco para um repositório é determinado pelo número e gravidade dos alertas de funcionalidades de segurança. Se uma ou mais funcionalidades de segurança não estiverem habilitadas para um repositório, o repositório terá um nível de risco desconhecido. Se um repositório não tiver riscos detectados por funcionalidades de segurança, o repositório terá um nível claro de risco. 

{% ifversion security-overview-org-risk-coverage %} Esses qualificadores estão disponíveis na exibição de nível empresarial.
{% endif %}

| Qualificador | Descrição |
| -------- | -------- |
| `risk:high` | Exibe repositórios que estão em alto risco. |
| `risk:medium` | Exibe repositórios que estão em risco médio. |
| `risk:low` | Exibe repositórios que estão em risco baixo. |
| `risk:unknown` | Exibir repositórios que estão com um nível de risco desconhecido. |
| `risk:clear` | Exibe repositórios que não tem um nível de risco identificado. |
{% endif %}

## Filtrar por número de alertas

{% ifversion security-overview-org-risk-coverage %}Esses qualificadores estão disponíveis na Visão geral de nível empresarial e na exibição Risco de Segurança no nível da organização.{% else %}Esses qualificadores estão disponíveis nas principais exibições de resumo.{% endif %}

| Qualificador | Descrição |
| -------- | -------- |
| <code>code-scanning:<em>n</em></code> | Exibe os repositórios que têm *n* alertas da {% data variables.product.prodname_code_scanning %}. Esse qualificador pode usar os operadores de comparação `=`, `>` e `<`. |
| <code>secret-scanning:<em>n</em></code> | Exibe os repositórios que têm *n* alertas da {% data variables.product.prodname_secret_scanning %}. Esse qualificador pode usar os operadores de comparação `=`, `>` e `<`. |
| <code>dependabot:<em>n</em></code> | Exibe os repositórios que têm *n* {% data variables.product.prodname_dependabot_alerts %}. Esse qualificador pode usar os operadores de comparação `=`, `>` e `<`. |


## Filtrar por equipe

Esses qualificadores estão disponíveis nas principais exibições resumidas.

| Qualificador | Descrição |
| -------- | -------- |
| <code>team:<em>TEAM-NAME</em></code> | Exibe os repositórios nos quais *TEAM-NAME* tem privilégios de administrador. |

## Filtrar por tópico

Esses qualificadores estão disponíveis nas principais exibições resumidas.

| Qualificador | Descrição |
| -------- | -------- |
| <code>topic:<em>TOPIC-NAME</em></code> | Exibe os repositórios classificados com *TOPIC-NAME*. |

{% ifversion security-overview-alert-views %}

## Filtros adicionais para exibições de alerta do {% data variables.product.prodname_code_scanning %}

Todos os alertas de digitalização de códigos têm uma das categorias exibidas abaixo. Você pode clicar em qualquer resultado para ver todos os detalhes da consulta pertinente e a linha de código que acionou o alerta.

| Qualificador | Descrição |
| -------- | -------- |
|`severity:critical`|Exibe alertas de {% data variables.product.prodname_code_scanning %} categorizados como críticos.|
|`severity:high`|Exibe alertas de {% data variables.product.prodname_code_scanning %} categorizados como altos.|
|`severity:medium`|Exibe alertas de {% data variables.product.prodname_code_scanning %} categorizados como médios.|
|`severity:low`|Exibe alertas de {% data variables.product.prodname_code_scanning %} categorizados como baixos.|
|`severity:error`|Exibe alertas de {% data variables.product.prodname_code_scanning %} categorizados como erros.|
|`severity:warning`|Exibe alertas de {% data variables.product.prodname_code_scanning %} categorizados como avisos.|
|`severity:note`|Exibe alertas de {% data variables.product.prodname_code_scanning %} categorizados como observações.|

{% ifversion dependabot-alerts-vulnerable-calls %}
## Filtros adicionais para exibições de alerta do {% data variables.product.prodname_dependabot %}

Você pode filtrar a exibição para mostrar {% data variables.product.prodname_dependabot_alerts %} que estão prontos para correção ou naqueles em que há informações adicionais sobre exposição disponíveis. Você pode clicar em qualquer resultado para ver os detalhes completos do alerta.

| Qualificador | Descrição |
| -------- | -------- |
|`has:patch`|Exibe alertas do {% data variables.product.prodname_dependabot %} para vulnerabilidades em que uma versão segura já está disponível.|
|`has:vulnerable-calls`|Exibe alertas do {% data variables.product.prodname_dependabot %} em que pelo menos uma chamada do repositório a uma função vulnerável tenha sido detectada. Para obter mais informações, confira "[Exibir e atualizar alertas do Dependabot](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#about-the-detection-of-calls-to-vulnerable-functions)".|
{% endif %}

{% endif %}

## Filtros adicionais para exibições de alerta do {% data variables.product.prodname_secret_scanning %}

| Qualificador | Descrição |
| -------- | -------- |
|`provider:PROVIDER_NAME` | Exibe alertas para todos os problemas de segredos por provedor especificado.  |
| `secret-type:SERVICE_PROVIDER` | Exibe alertas para o segredo e provedor especificados. |
| `secret-type:CUSTOM-PATTERN` | Exibe alertas de segredos que correspondem ao padrão personalizado especificado.  |

Para obter mais informações, confira "[Padrões da {% data variables.product.prodname_secret_scanning_caps %}](/code-security/secret-scanning/secret-scanning-patterns)".

