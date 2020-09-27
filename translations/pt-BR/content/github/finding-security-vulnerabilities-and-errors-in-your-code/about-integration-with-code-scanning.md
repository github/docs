---
title: Sobre integração com a varredura de código
shortTitle: Sobre a integração
intro: 'Você pode executar {{ site.data.variables.product.prodname_code_scanning }} externamente e, em seguida, exibir os resultados em {{ site.data.variables.product.prodname_dotcom }}.'
product: '{{ site.data.reusables.gated-features.code-scanning }}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.code-scanning.beta }}
{{ site.data.reusables.code-scanning.enterprise-enable-code-scanning }}

Como alternativa para executar o {{ site.data.variables.product.prodname_code_scanning }} dentro do {{ site.data.variables.product.prodname_dotcom }}, você pode realizar a análise em outro lugar e, posteriormente, fazer o upload dos resultados. Alertas para {{ site.data.variables.product.prodname_code_scanning }} que você executa externamente são exibidos da mesma forma que os alertas para  {{ site.data.variables.product.prodname_code_scanning }} que você executa dentro de {{ site.data.variables.product.prodname_dotcom }}. Para obter mais informações, consulte "[Gerenciar alertas do varredura de código](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-alerts-from-code-scanning)."

Você pode usar o seu sistema de integração contínua ou de entrega/implantação contínua (CI/CD) para executar a análise de {{ site.data.variables.product.prodname_codeql }} do {{ site.data.variables.product.prodname_dotcom }} e carregar os resultados para {{ site.data.variables.product.prodname_dotcom }}. Esta é uma alternativa ao uso de {{ site.data.variables.product.prodname_actions }} para executar a análise de {{ site.data.variables.product.prodname_codeql }}. Para obter mais informações, consulte "[Executar a verificação de código no seu sistema de CI](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-code-scanning-in-your-ci-system)".

Se você usar uma ferramenta de análise estática de terceiros que pode produzir dados de resultados como Formato de Intercâmbio de Resultados de Análise Estática (SARIF) 2.1.0, você pode fazer o upload desses dados em {{ site.data.variables.product.prodname_dotcom }}. Para obter mais informações, consulte "[Fazer o upload de um arquivo SARIF para o GitHub](/github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github)".

### Leia mais

* "[Sobre a varredura de código](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)"
* "[Configurar a verificação de código no seu sistema de CI](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-in-your-ci-system)"
* "[Suporte de SARIF para a varredura de código](/github/finding-security-vulnerabilities-and-errors-in-your-code/sarif-support-for-code-scanning)"
