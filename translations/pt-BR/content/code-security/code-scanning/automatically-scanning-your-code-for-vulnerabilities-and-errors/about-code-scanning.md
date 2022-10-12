---
title: Sobre a varredura de código
intro: 'Você pode usar {% data variables.product.prodname_code_scanning %} para encontrar vulnerabilidades e erros de segurança no código do seu projeto no {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/managing-security-vulnerabilities/about-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning
  - /code-security/secure-coding/about-code-scanning
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Code scanning
ms.openlocfilehash: 0bf49aa695e9e5a60cef7eb78c6e44f5ecd4ece5
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145083395'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Sobre a {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.about-code-scanning %}

Você pode usar {% data variables.product.prodname_code_scanning %} para encontrar, triar e priorizar correções de problemas existentes em seu código. {% data variables.product.prodname_code_scanning_capc %} também impede que os desenvolvedores apresentem novos problemas. É possível programar verificações para dias e horários específicos ou acionar varreduras quando ocorre um evento específico no repositório, como, por exemplo, um push.

Se {% data variables.product.prodname_code_scanning %} encontrar uma vulnerabilidade potencial ou erro no seu código, {% data variables.product.prodname_dotcom %} exibirá um alerta no repositório. Depois de corrigir o código que desencadeou o alerta, {% data variables.product.prodname_dotcom %} fechará o alerta. Para obter mais informações, confira "[Como gerenciar alertas da {% data variables.product.prodname_code_scanning %} do seu repositório](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)".

Para monitorar os resultados de {% data variables.product.prodname_code_scanning %} nos seus repositórios ou organização, você pode usar webhooks e a API de {% data variables.product.prodname_code_scanning %}. Para obter informações sobre os webhooks da {% data variables.product.prodname_code_scanning %}, confira "[Eventos e cargas de webhook](/developers/webhooks-and-events/webhook-events-and-payloads#code_scanning_alert)". Para obter informações sobre os pontos de extremidade de API, confira "[{% data variables.product.prodname_code_scanning_capc %}](/rest/reference/code-scanning)". 

Para começar a usar a {% data variables.product.prodname_code_scanning %}, confira "[Como configurar a {% data variables.product.prodname_code_scanning %} para um repositório](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)".

{% ifversion fpt or ghec %}

## Sobre a cobrança da {% data variables.product.prodname_code_scanning %}

{% data variables.product.prodname_code_scanning_capc %} usa {% data variables.product.prodname_actions %}, e cada execução de um fluxo de trabalho de {% data variables.product.prodname_code_scanning %} consome minutos para {% data variables.product.prodname_actions %}. Para obter mais informações, confira "[Sobre a cobrança do {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)".

{% endif %}

## Sobre ferramentas para {% data variables.product.prodname_code_scanning %}

Você pode configurar {% data variables.product.prodname_code_scanning %} para usar o produto de {% data variables.product.prodname_codeql %} mantido por {% data variables.product.company_short%} ou pela ferramenta {% data variables.product.prodname_code_scanning %} de terceiros. 

### Sobre a análise de {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.about-codeql-analysis %} Para obter mais informações sobre o {% data variables.product.prodname_codeql %}, confira "[Sobre a verificação de código com o CodeQL](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)".

### Sobre ferramentas de {% data variables.product.prodname_code_scanning %} de terceiros

{% data reusables.code-scanning.interoperable-with-tools-that-output-sarif %}

Você pode executar ferramentas de análise de terceiros em {% data variables.product.product_name %} usando ações ou em um sistema CI externo. Para obter mais informações, confira "[Como configurar a verificação de código para um repositório](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)" ou "[Como carregar um arquivo SARIF no GitHub](/code-security/secure-coding/uploading-a-sarif-file-to-github)".
