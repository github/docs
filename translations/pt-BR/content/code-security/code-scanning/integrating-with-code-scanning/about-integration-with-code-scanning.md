---
title: Sobre integração com a varredura de código
shortTitle: About integration
intro: 'Você pode executar {% data variables.product.prodname_code_scanning %} externamente e depois exibir os resultados em {% data variables.product.prodname_dotcom %} ou configurar webhooks que escutem a atividade de {% data variables.product.prodname_code_scanning %} no seu repositório.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/about-integration-with-code-scanning
  - /code-security/secure-coding/about-integration-with-code-scanning
  - /code-security/secure-coding/integrating-with-code-scanning/about-integration-with-code-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Code scanning
  - Webhooks
  - Integration
ms.openlocfilehash: b12f5146a90cae0ed1bd38d452e43eb611232e72
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145095005'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

Como alternativa para executar o {% data variables.product.prodname_code_scanning %} dentro do {% data variables.product.prodname_dotcom %}, você pode realizar a análise em outro lugar e, posteriormente, fazer o upload dos resultados. Alertas para {% data variables.product.prodname_code_scanning %} que você executa externamente são exibidos da mesma forma que os alertas para  {% data variables.product.prodname_code_scanning %} que você executa dentro de {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira "[Como gerenciar alertas da {% data variables.product.prodname_code_scanning %} do seu repositório](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)".

Se você usar uma ferramenta de análise estática de terceiros que pode produzir dados de resultados como Formato de Intercâmbio de Resultados de Análise Estática (SARIF) 2.1.0, você pode fazer o upload desses dados em {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira "[Como carregar um arquivo SARIF no GitHub](/code-security/secure-coding/uploading-a-sarif-file-to-github)".

{% ifversion fpt or ghes > 3.4 or ghae-issue-6251 or ghec %} {% data reusables.code-scanning.about-analysis-origins-link %} {% endif %}

## Integrações com webhooks

Use webhooks da {% data variables.product.prodname_code_scanning %} para criar ou configurar integrações, como [{% data variables.product.prodname_github_apps %}](/apps/building-github-apps/) ou [{% data variables.product.prodname_oauth_apps %}](/apps/building-oauth-apps/), que se inscrevem em eventos da {% data variables.product.prodname_code_scanning %} no repositório. Por exemplo, você pode criar uma integração que cria um problema no {% data variables.product.product_name %} ou envia uma notificação do Slack quando um novo alerta da {% data variables.product.prodname_code_scanning %} é adicionado no repositório. Para obter mais informações, confira "[Como criar webhooks](/developers/webhooks-and-events/creating-webhooks)" e "[Eventos e cargas de webhook](/developers/webhooks-and-events/webhook-events-and-payloads#code_scanning_alert)".

## Leitura adicional

* "[Sobre a {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning)"
* "[Como usar a {% data variables.product.prodname_code_scanning %} do {% data variables.product.prodname_codeql %} com seu sistema de CI existente](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system)"
* "[Suporte a SARIF para a {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/sarif-support-for-code-scanning)"
