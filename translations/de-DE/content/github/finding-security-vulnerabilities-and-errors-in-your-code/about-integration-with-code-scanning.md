---
title: About integration with code scanning
shortTitle: About integration
intro: 'You can perform {% data variables.product.prodname_code_scanning %} externally and then display the results in {% data variables.product.prodname_dotcom %}, or set up webhooks that listen to {% data variables.product.prodname_code_scanning %} activity in your repository.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  enterprise-server: '2.22'
topics:
  - Security
---

<!--See /content/code-security/secure-coding for the latest version of this article -->

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

As an alternative to running {% data variables.product.prodname_code_scanning %} within {% data variables.product.prodname_dotcom %}, you can perform analysis elsewhere and then upload the results. Alerts for {% data variables.product.prodname_code_scanning %} that you run externally are displayed in the same way as those for  {% data variables.product.prodname_code_scanning %} that you run within {% data variables.product.prodname_dotcom %}. For more information, see "[Managing {% data variables.product.prodname_code_scanning %} alerts for your repository](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository)."

If you use a third-party static analysis tool that can produce results as Static Analysis Results Interchange Format (SARIF) 2.1.0 data, you can upload this to {% data variables.product.prodname_dotcom %}. For more information, see "[Uploading a SARIF file to GitHub](/github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github)."

### Integrations with webhooks

You can use {% data variables.product.prodname_code_scanning %} webhooks to build or set up integrations, such as [{% data variables.product.prodname_github_app %}s](/apps/building-github-apps/) or [{% data variables.product.prodname_oauth_app %}s](/apps/building-oauth-apps/), that subscribe to {% data variables.product.prodname_code_scanning %} events in your repository. For example, you could build an integration that creates an issue on {% data variables.product.product_name %} or sends you a Slack notification when a new {% data variables.product.prodname_code_scanning %} alert is added in your repository. For more information, see "[Creating webhooks](/developers/webhooks-and-events/creating-webhooks)" and "[Webhook events and payloads](/developers/webhooks-and-events/webhook-events-and-payloads#code_scanning_alert)."

### Weiterführende Informationen

* "[About {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)"
* "[Using {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} with your existing CI system](/github/finding-security-vulnerabilities-and-errors-in-your-code/using-codeql-code-scanning-with-your-existing-ci-system)"
* "[SARIF support for {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/sarif-support-for-code-scanning)"
