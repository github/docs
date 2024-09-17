---
title: About code scanning
intro: 'You can use {% data variables.product.prodname_code_scanning %} to find security vulnerabilities and errors in the code for your project on {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/managing-security-vulnerabilities/about-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning
  - /code-security/secure-coding/about-code-scanning
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning
  - /code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Code scanning
---

{% data reusables.code-scanning.enterprise-enable-code-scanning %}

{% data reusables.code-scanning.about-code-scanning %}

You can use {% data variables.product.prodname_code_scanning %} to find, triage, and prioritize fixes for existing problems in your code. {% data variables.product.prodname_code_scanning_caps %} also prevents developers from introducing new problems. You can schedule scans for specific days and times, or trigger scans when a specific event occurs in the repository, such as a push.

If {% data variables.product.prodname_code_scanning %} finds a potential vulnerability or error in your code, {% data variables.product.prodname_dotcom %} displays an alert in the repository. After you fix the code that triggered the alert, {% data variables.product.prodname_dotcom %} closes the alert. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository)."

{% ifversion code-scanning-autofix %}

{% data variables.product.prodname_copilot_autofix %} will suggest fixes for alerts from {% data variables.product.prodname_codeql %} analysis in private repositories, allowing developers to prevent and reduce vulnerabilities with less effort. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-autofix-for-codeql-code-scanning)."

{% endif %}

To monitor results from {% data variables.product.prodname_code_scanning %} across your repositories or your organization, you can use webhooks and the {% data variables.product.prodname_code_scanning %} API. For information about the webhooks for {% data variables.product.prodname_code_scanning %}, see
"[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#code_scanning_alert)." For information about API endpoints, see "[AUTOTITLE](/rest/code-scanning)."

To get started with {% data variables.product.prodname_code_scanning %}, see "[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning)."

{% ifversion fpt or ghec %}

## About billing for {% data variables.product.prodname_code_scanning %}

{% data variables.product.prodname_code_scanning_caps %} uses {% data variables.product.prodname_actions %}, and each run of a {% data variables.product.prodname_code_scanning %} workflow consumes minutes for {% data variables.product.prodname_actions %}. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)."

To use {% data variables.product.prodname_code_scanning %} on a private repository, you will also need a license for {% data variables.product.prodname_GH_advanced_security %}. {% data reusables.advanced-security.ghas-trial %}

{% endif %}

## About tools for {% data variables.product.prodname_code_scanning %}

You can configure {% data variables.product.prodname_code_scanning %} to use the {% data variables.product.prodname_codeql %} product maintained by {% data variables.product.company_short%} or a third-party {% data variables.product.prodname_code_scanning %} tool.

### About {% data variables.product.prodname_codeql %} analysis

{% data reusables.code-scanning.about-codeql-analysis %} For more information about {% data variables.product.prodname_codeql %}, see "[AUTOTITLE](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql)."

### About third-party {% data variables.product.prodname_code_scanning %} tools

{% data reusables.code-scanning.interoperable-with-tools-that-output-sarif %}

You can run third-party analysis tools within {% data variables.product.product_name %} using actions or within an external CI system. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning#configuring-code-scanning-using-third-party-actions)" or "[AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github)."

## About the {% data variables.code-scanning.tool_status_page %}

The {% data variables.code-scanning.tool_status_page %} shows useful information about all of your code scanning tools. If code scanning is not working as you'd expect, the {% data variables.code-scanning.tool_status_page %} is a good starting point for debugging problems. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/about-the-tool-status-page)".
