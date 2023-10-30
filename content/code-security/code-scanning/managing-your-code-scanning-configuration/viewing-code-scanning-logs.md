---
title: Viewing code scanning logs
intro: 'You can view the output generated during {% data variables.product.prodname_code_scanning %} analysis in {% data variables.location.product_location %}.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can view the {% data variables.product.prodname_code_scanning %} logs for that repository.'
redirect_from:
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs
  - /code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Security
shortTitle: View code scanning logs
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## About your {% data variables.product.prodname_code_scanning %} configuration

You can use a variety of tools to configure {% data variables.product.prodname_code_scanning %} in your repository. For more information, see {% ifversion code-scanning-without-workflow %}"[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning)" and {% endif %}"[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning)."

The log and diagnostic information available to you depends on the method you use for {% data variables.product.prodname_code_scanning %} in your repository. You can check the type of {% data variables.product.prodname_code_scanning %} you're using in the **Security** tab of your repository, by using the **Tool** drop-down menu in the alert list. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)."

## About analysis and diagnostic information

You can see analysis and diagnostic information for {% data variables.product.prodname_code_scanning %} run using {% data variables.product.prodname_codeql %} analysis on {% data variables.product.prodname_dotcom %}.

Analysis information is shown for the most recent analysis in a header at the top of the list of alerts. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)."

Diagnostic information is displayed in the Action workflow logs and consists of summary metrics and extractor diagnostics. For information about accessing {% data variables.product.prodname_code_scanning %} logs on {% data variables.product.prodname_dotcom %}, see "[Viewing the logging output from {% data variables.product.prodname_code_scanning %}](#viewing-the-logging-output-from-code-scanning)" below.

If you're using the {% data variables.product.prodname_codeql_cli %} outside {% data variables.product.prodname_dotcom %}, you'll see diagnostic information in the output generated during database analysis. This information is also included in the SARIF results file you upload to {% data variables.product.prodname_dotcom %} with the {% data variables.product.prodname_code_scanning %} results.

For information about the {% data variables.product.prodname_codeql_cli %}, see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/analyzing-your-code-with-codeql-queries#viewing-log-and-diagnostic-information)."

### About summary metrics

{% data reusables.code-scanning.summary-metrics %}

### About {% data variables.product.prodname_codeql %} source code extraction diagnostics

{% data reusables.code-scanning.extractor-diagnostics %}

{% ifversion codeql-action-debug-logging %}

You can see more detailed information about {% data variables.product.prodname_codeql %} extractor errors and warnings that occurred during database creation by enabling debug logging. For more information, see "[AUTOTITLE](/code-security/code-scanning/troubleshooting-code-scanning/logs-are-not-detailed-enough#creating-codeql-debugging-artifacts-by-re-running-jobs-with-debug-logging-enabled)."

{% endif %}

## Viewing the logging output from {% data variables.product.prodname_code_scanning %}

This section applies to {% data variables.product.prodname_code_scanning %} run using {% data variables.product.prodname_actions %} ({% data variables.product.prodname_codeql %} or third-party).

After configuring {% data variables.product.prodname_code_scanning %} for your repository, you can watch the output of the actions as they run.

{% data reusables.repositories.actions-tab %}

   You'll see a list that includes an entry for running the {% data variables.product.prodname_code_scanning %} workflow. The text of the entry is the title you gave your commit message.

   ![Screenshot of the "All workflows" page. In the list of workflow runs is a run labeled "Create .github/workflows/codeql.yml."](/assets/images/help/repository/code-scanning-actions-list.png)

1. Click the entry for the {% data variables.product.prodname_code_scanning %} workflow.

{%- ifversion code-scanning-without-workflow %}
   {% note %}

   **Note:** If you are looking for the {% data variables.product.prodname_codeql %} workflow run triggered by enabling default setup, the text of the entry is "{% data variables.product.prodname_codeql %}."

   {% endnote %}
{% endif -%}

1. Click the job name on the left. For example, **Analyze (LANGUAGE)**.

   ![Screenshot of the log output for the "Analyze (go)" job. In the left sidebar, under the "Jobs" heading, "Analyze (go)" is listed.](/assets/images/help/repository/code-scanning-logging-analyze-action.png)

1. Review the logging output from the actions in this workflow as they run.

1. Optionally, to see more detail about the commit that triggered the workflow run, click the short commit hash. The short commit hash is 7 lowercase characters immediately following the commit author's username.

1. Once all jobs are complete, you can view the details of any {% data variables.product.prodname_code_scanning %} alerts that were identified. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)."
