---
title: Filtrando alertas na visão geral de segurança
intro: Use filtros para exibir categorias específicas de alertas
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
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880763'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

## Sobre a filtragem da visão geral de segurança

Você pode usar filtros na visão geral de segurança para restringir seu foco baseado em uma série de fatores como, por exemplo, o nível de risco de alerta, tipo de alerta e habilitação do recurso. Há diferentes filtros disponíveis, dependendo da exibição específica e do nível em que a análise está, seja no nível da organização, da equipe ou do repositório.

{% note %} {% data reusables.security-overview.information-varies-GHAS %} {% endnote %}

## Filtragem por repositório

Disponível em todos os níveis da organização e no nível da equipe.

| Qualificador | Descrição |
| -------- | -------- |
| `repo:REPOSITORY-NAME` | Exibe alertas para o repositório especificado. |

## Filtrar se as funcionalidades de segurança estão habilitadas

Disponível no nível da organização e na visão geral do nível da equipe.

| Qualificador | Descrição |
| -------- | -------- |
| `code-scanning:enabled` | Exibe repositórios com {% data variables.product.prodname_code_scanning %} habilitado. |
| `code-scanning:not-enabled` | Exibe repositórios que não têm {% data variables.product.prodname_code_scanning %} habilitado. |
| `secret-scanning:enabled` | Exibe os repositórios que têm a {% data variables.product.prodname_secret_scanning %} habilitada. |
| `secret-scanning:not-enabled` | Exibe os repositórios que têm a {% data variables.product.prodname_secret_scanning %} habilitada. |
| `dependabot:enabled` | Exibe os repositórios com os {% data variables.product.prodname_dependabot_alerts %} habilitados. |
| `dependabot:not-enabled` | Exibe os repositórios que não têm {% data variables.product.prodname_dependabot_alerts %} habilitados. |
| `not-enabled:any` | Exibe repositórios com pelo menos um recurso de segurança que não está habilitado. |

## Filtrar por tipo de repositório

Disponível no nível da organização e na visão geral do nível da equipe.

| Qualificador | Descrição |
| -------- | -------- |
{%- ifversion ghes or ghec %} | `is:public` | Exibe os repositórios públicos. | {%- endif %} {%- ifversion ghes or ghec or ghae %} | `is:internal` | Exibe os repositórios internos. | {%- endif %} | `is:private` | Exibe os repositórios privados. | | `archived:true` | Exibe os repositórios arquivados. | | `archived:true` | Exibe os repositórios arquivados. |

## Filtrar por nível de risco para repositórios

O nível de risco para um repositório é determinado pelo número e gravidade dos alertas de funcionalidades de segurança. Se uma ou mais funcionalidades de segurança não estiverem habilitadas para um repositório, o repositório terá um nível de risco desconhecido. Se um repositório não tiver riscos detectados por funcionalidades de segurança, o repositório terá um nível claro de risco. Disponível na visão geral no nível da organização.

| Qualificador | Descrição |
| -------- | -------- |
| `risk:high` | Exibe repositórios que estão em alto risco. |
| `risk:medium` | Exibe repositórios que estão em risco médio. |
| `risk:low` | Exibe repositórios que estão em risco baixo. |
| `risk:unknown` | Exibir repositórios que estão com um nível de risco desconhecido. |
| `risk:clear` | Exibe repositórios que não tem um nível de risco identificado. |

## Filtrar por número de alertas

Disponível na visão geral no nível da organização.

| Qualificador | Descrição |
| -------- | -------- |
| <code>code-scanning:<em>n</em></code> | Exibe os repositórios que têm *n* alertas da {% data variables.product.prodname_code_scanning %}. Esse qualificador pode usar os operadores de comparação `=`, `>` e `<`. |
| <code>secret-scanning:<em>n</em></code> | Exibe os repositórios que têm *n* alertas da {% data variables.product.prodname_secret_scanning %}. Esse qualificador pode usar os operadores de comparação `=`, `>` e `<`. |
| <code>dependabot:<em>n</em></code> | Exibe os repositórios que têm *n* {% data variables.product.prodname_dependabot_alerts %}. Esse qualificador pode usar os operadores de comparação `=`, `>` e `<`. |


## Filtrar por equipe

Disponível na visão geral no nível da organização.

| Qualificador | Descrição |
| -------- | -------- |
| <code>team:<em>TEAM-NAME</em></code> | Exibe os repositórios nos quais *TEAM-NAME* tem privilégios de administrador. |

## Filtrar por tópico

Disponível na visão geral no nível da organização.

| Qualificador | Descrição |
| -------- | -------- |
| <code>topic:<em>TOPIC-NAME</em></code> | Exibe os repositórios classificados com *TOPIC-NAME*. |

{% ifversion security-overview-views %}

## Filtrar por gravidade

Disponível na visualização de alerta de digitalização de código. Todos os alertas de digitalização de códigos têm uma das categorias exibidas abaixo. Você pode clicar em qualquer resultado para ver todos os detalhes da regra relevante e a linha de código que acionou o alerta.

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
## Filtrar por um tipo de alerta do {% data variables.product.prodname_dependabot %}

Disponível nas exibições de alerta do {% data variables.product.prodname_dependabot %}. Você pode filtrar a exibição para mostrar {% data variables.product.prodname_dependabot_alerts %} que estão prontos para correção ou naqueles em que há informações adicionais sobre exposição disponíveis. Você pode clicar em qualquer resultado para ver os detalhes completos do alerta.

| Qualificador | Descrição |
| -------- | -------- |
|`has:patch`|Exibe alertas do {% data variables.product.prodname_dependabot %} para vulnerabilidades em que uma versão segura já está disponível.|
|`has:vulnerable-calls`|Exibe alertas do {% data variables.product.prodname_dependabot %} em que pelo menos uma chamada do repositório a uma função vulnerável tenha sido detectada. Para obter mais informações, confira "[Exibir e atualizar alertas do Dependabot](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#about-the-detection-of-calls-to-vulnerable-functions)".|
{% endif %}

{% endif %}

## Filtrar por tipos de segredo

Disponível nas visualizações de alerta de segredos.

| Qualificador | Descrição |
| -------- | -------- |
| `secret-type:SERVICE_PROVIDER` | Exibe alertas para o segredo e provedor especificados. Para obter mais informações, confira "[Padrões da {% data variables.product.prodname_secret_scanning_caps %}](/code-security/secret-scanning/secret-scanning-patterns)". |
| `secret-type:CUSTOM-PATTERN` | Exibe alertas de segredos que correspondem ao padrão personalizado especificado. Para obter mais informações, confira "[Como definir padrões personalizados para a verificação de segredos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)". |

## Filtrar por provedor

Disponível nas visualizações de alerta de segredos.

| Qualificador | Descrição |
| -------- | -------- |
|`provider:PROVIDER_NAME` | Exibe alertas para todos os problemas de segredos por provedor especificado. Para obter mais informações, confira "[Padrões da {% data variables.product.prodname_secret_scanning_caps %}](/code-security/secret-scanning/secret-scanning-patterns)". |
