---
title: Sobre integração com a varredura de código
shortTitle: Sobre a integração
intro: 'Você pode executar {% data variables.product.prodname_code_scanning %} externamente e depois exibir os resultados em {% data variables.product.prodname_dotcom %} ou configurar webhooks que escutem a atividade de {% data variables.product.prodname_code_scanning %} no seu repositório.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/about-integration-with-code-scanning
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - segurança
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

Como alternativa para executar o {% data variables.product.prodname_code_scanning %} dentro do {% data variables.product.prodname_dotcom %}, você pode realizar a análise em outro lugar e, posteriormente, fazer o upload dos resultados. Alertas para {% data variables.product.prodname_code_scanning %} que você executa externamente são exibidos da mesma forma que os alertas para  {% data variables.product.prodname_code_scanning %} que você executa dentro de {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Gerenciar alertas de {% data variables.product.prodname_code_scanning %} para o seu repositório](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)".

Se você usar uma ferramenta de análise estática de terceiros que pode produzir dados de resultados como Formato de Intercâmbio de Resultados de Análise Estática (SARIF) 2.1.0, você pode fazer o upload desses dados em {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Fazer o upload de um arquivo SARIF para o GitHub](/code-security/secure-coding/uploading-a-sarif-file-to-github)".

### Integrações com webhooks

Você pode usar {% data variables.product.prodname_code_scanning %} webhooks para criar ou configurar integrações, tais como [{% data variables.product.prodname_github_app %}s](/apps/building-github-apps/) ou [{% data variables.product.prodname_oauth_app %}s](/apps/building-oauth-apps/), que assinam os eventos {% data variables.product.prodname_code_scanning %} no seu repositório. Por exemplo, você poderia criar uma integração que criasse um problema no {% data variables.product.product_name %} ou que envia uma notificação do Slack quando um novo alerta de {% data variables.product.prodname_code_scanning %} for adicionado ao seu repositório. Para obter mais informações, consulte "[Criar webhooks](/developers/webhooks-and-events/creating-webhooks)" e "[Eventos de Webhook e cargas](/developers/webhooks-and-events/webhook-events-and-payloads#code_scanning_alert)".

### Leia mais

* "[Sobre {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning)"
* "[Usar {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} com seu sistema CI existente](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system)"
* "[Suporte do SARIF para {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/sarif-support-for-code-scanning)"
