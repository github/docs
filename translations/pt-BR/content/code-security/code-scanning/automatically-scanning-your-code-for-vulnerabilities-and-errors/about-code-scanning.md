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
---


{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Sobre o {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.about-code-scanning %}

Você pode usar {% data variables.product.prodname_code_scanning %} para encontrar, triar e priorizar correções de problemas existentes em seu código. {% data variables.product.prodname_code_scanning_capc %} também impede que os desenvolvedores apresentem novos problemas. É possível programar verificações para dias e horários específicos ou acionar varreduras quando ocorre um evento específico no repositório, como, por exemplo, um push.

Se {% data variables.product.prodname_code_scanning %} encontrar uma vulnerabilidade potencial ou erro no seu código, {% data variables.product.prodname_dotcom %} exibirá um alerta no repositório. Depois de corrigir o código que desencadeou o alerta, {% data variables.product.prodname_dotcom %} fechará o alerta. Para obter mais informações, consulte "[Gerenciar alertas de {% data variables.product.prodname_code_scanning %} para o seu repositório](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)".

Para monitorar os resultados de {% data variables.product.prodname_code_scanning %} nos seus repositórios ou organização, você pode usar webhooks e a API de {% data variables.product.prodname_code_scanning %}. Para obter informações sobre os webhooks para {% data variables.product.prodname_code_scanning %}, consulte "[Eventos de webhook e cargas](/developers/webhooks-and-events/webhook-events-and-payloads#code_scanning_alert)". Para obter informações sobre os pontos de extremidade da API, consulte "[{% data variables.product.prodname_code_scanning_capc %}](/rest/reference/code-scanning)".

Para começar com {% data variables.product.prodname_code_scanning %}, consulte "[Configurar {% data variables.product.prodname_code_scanning %} para um repositório](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)".

{% ifversion fpt or ghec %}

## Sobre a cobrança do {% data variables.product.prodname_code_scanning %}

{% data variables.product.prodname_code_scanning_capc %} usa {% data variables.product.prodname_actions %}, e cada execução de um fluxo de trabalho de {% data variables.product.prodname_code_scanning %} consome minutos para {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Sobre a cobrança do {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)."

{% endif %}

## Sobre ferramentas para {% data variables.product.prodname_code_scanning %}

Você pode configurar {% data variables.product.prodname_code_scanning %} para usar o produto de {% data variables.product.prodname_codeql %} mantido por {% data variables.product.company_short%} ou pela ferramenta {% data variables.product.prodname_code_scanning %} de terceiros.

### Sobre a análise de {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.about-codeql-analysis %} Para obter mais informações sobre {% data variables.product.prodname_codeql %}, consulte "[Sobre digitalização de código com CodeQL](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)".

### Sobre ferramentas de {% data variables.product.prodname_code_scanning %} de terceiros

{% data reusables.code-scanning.interoperable-with-tools-that-output-sarif %}

Você pode executar ferramentas de análise de terceiros em {% data variables.product.product_name %} usando ações ou em um sistema CI externo. Para mais informações consulte "[Configurar a verificação de código para um repositório](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)" ou "[Enviar um arquivo SARIF para o GitHub](/code-security/secure-coding/uploading-a-sarif-file-to-github)".
