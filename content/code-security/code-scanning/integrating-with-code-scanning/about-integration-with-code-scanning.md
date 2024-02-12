---
title: About integration with code scanning
shortTitle: About integration
intro: 'You can perform {% data variables.product.prodname_code_scanning %} externally and then display the results in {% data variables.product.prodname_dotcom %}, or configure webhooks that listen to {% data variables.product.prodname_code_scanning %} activity in your repository.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/about-integration-with-code-scanning
  - /code-security/secure-coding/about-integration-with-code-scanning
  - /code-security/secure-coding/integrating-with-code-scanning/about-integration-with-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/integrating-with-code-scanning/about-integration-with-code-scanning
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
---

## About integration with code scanning

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

As an alternative to running {% data variables.product.prodname_code_scanning %} within {% data variables.product.prodname_dotcom %}, you can perform analysis elsewhere, using the CodeQL CLI or another static analysis tool, and then upload the results. For more information, see "[AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/using-code-scanning-with-your-existing-ci-system)."

{% data reusables.code-scanning.about-multiple-configurations-link %}

## Integrations with webhooks

You can use {% data variables.product.prodname_code_scanning %} webhooks to build or configure integrations, such as [{% data variables.product.prodname_github_apps %}](/apps/creating-github-apps/setting-up-a-github-app) or [{% data variables.product.prodname_oauth_apps %}](/apps/oauth-apps/building-oauth-apps), that subscribe to {% data variables.product.prodname_code_scanning %} events in your repository. For example, you could build an integration that creates an issue on {% data variables.product.product_name %} or sends you a Slack notification when a new {% data variables.product.prodname_code_scanning %} alert is added in your repository. For more information, see "[AUTOTITLE](/webhooks)" and "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#code_scanning_alert)."

## Further reading

- "[AUTOTITLE](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning)"
- "[AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/using-code-scanning-with-your-existing-ci-system)"
- "[AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning)"
