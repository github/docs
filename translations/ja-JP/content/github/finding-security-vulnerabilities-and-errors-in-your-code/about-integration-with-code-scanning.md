---
title: About integration with code scanning
shortTitle: About integration
intro: 'You can perform {{ site.data.variables.product.prodname_code_scanning }} externally and then display the results in {{ site.data.variables.product.prodname_dotcom }}.'
product: '{{ site.data.reusables.gated-features.code-scanning }}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.code-scanning.beta }}
{{ site.data.reusables.code-scanning.enterprise-enable-code-scanning }}

As an alternative to running {{ site.data.variables.product.prodname_code_scanning }} within {{ site.data.variables.product.prodname_dotcom }}, you can perform analysis elsewhere and then upload the results. Alerts for {{ site.data.variables.product.prodname_code_scanning }} that you run externally are displayed in the same way as those for  {{ site.data.variables.product.prodname_code_scanning }} that you run within {{ site.data.variables.product.prodname_dotcom }}. For more information, see "[Managing alerts from code scanning](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-alerts-from-code-scanning)."

You can use your continuous integration or continuous delivery/deployment (CI/CD) system to run {{ site.data.variables.product.prodname_dotcom }}'s {{ site.data.variables.product.prodname_codeql }} analysis and upload the results to {{ site.data.variables.product.prodname_dotcom }}. This is an alternative to using {{ site.data.variables.product.prodname_actions }} to run {{ site.data.variables.product.prodname_codeql }} analysis. For more information, see "[Running code scanning in your CI system](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-code-scanning-in-your-ci-system)."

If you use a third-party static analysis tool that can produce results as Static Analysis Results Interchange Format (SARIF) 2.1.0 data, you can upload this to {{ site.data.variables.product.prodname_dotcom }}. 詳しい情報については、「[SARIF ファイルを GitHub にアップロードする](/github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github)」を参照してください。

### 参考リンク

* "[About code scanning](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)"
* "[Configuring code scanning in your CI system](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-in-your-ci-system)"
* "[SARIF support for code scanning](/github/finding-security-vulnerabilities-and-errors-in-your-code/sarif-support-for-code-scanning)"
