---
title: Code scanning logs
intro: You can view the output generated during {% data variables.product.prodname_code_scanning %} analysis in {% data variables.product.github %}.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: reference
shortTitle: Code scanning logs
---

The log and diagnostic information available to you depends on the method you use for {% data variables.product.prodname_code_scanning %} in your repository. You can check the type of {% data variables.product.prodname_code_scanning %} you're using in the **Security** tab of your repository, by using the **Tool** drop-down menu in the alert list. To access this page, see [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/assessing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository).

## Logs on {% data variables.product.github %}

You can see analysis and diagnostic information for {% data variables.product.prodname_code_scanning %} run using {% data variables.product.prodname_codeql %} analysis on {% data variables.product.prodname_dotcom %}.

* Analysis information is shown for the most recent analysis in a header at the top of the list of alerts. See [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/assessing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository).
* Diagnostic information is displayed in the {% data variables.product.prodname_actions %} workflow logs and consists of summary metrics and extractor diagnostics. To access these logs, see [AUTOTITLE](/code-security/how-tos/view-and-interpret-data/viewing-code-scanning-logs).

### Summary metrics

{% data reusables.code-scanning.summary-metrics %}

### Source code extraction diagnostics

{% data reusables.code-scanning.extractor-diagnostics %}

You can see more detailed information about {% data variables.product.prodname_codeql %} extractor errors and warnings that occurred during database creation by enabling debug logging. See [AUTOTITLE](/code-security/code-scanning/troubleshooting-code-scanning/logs-are-not-detailed-enough#creating-codeql-debugging-artifacts-by-re-running-jobs-with-debug-logging-enabled).

{% ifversion org-private-registry %}

### Diagnostic information for private package registries

{% data variables.product.prodname_code_scanning_caps %} default setup workflows include a `Setup proxy for registries` step. When you are looking at a workflow run for default setup, you can expand this step to view the corresponding log. This contains information about which private package registry configurations were available to the analysis. Additionally, the log contains some diagnostic information which may help with troubleshooting if the private package registries are not successfully used by {% data variables.product.prodname_code_scanning %} default setup. Look for the following messages:

* `Using registries_credentials input.` At least one private registry is configured for the organization. This includes configurations for private registry types which are not supported by {% data variables.product.prodname_code_scanning %} default setup. For more details about supported registry types, see [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/giving-org-access-private-registries#code-scanning-default-setup-access-to-private-registries).

* `Credentials loaded for the following registries:`
  * If no list of configurations follows, then no private registry configurations supported by {% data variables.product.prodname_code_scanning %} default setup were found.
  * Otherwise, one line for each supported configuration that was successfully loaded is shown. For example, a line containing `Type: nuget_feed; Host: undefined; Url: https://nuget.pkg.github.com/; Username: undefined; Password: true; Token: false` indicates that a private NuGet Feed configuration was loaded.
  * The information about the configuration in the log may not match exactly what is configured for the organization in the UI. For example, the log may indicate that a `Password` is set, even though a `Token` is configured in the UI.

* `Proxy started on 127.0.0.1:49152` The authentication proxy that is used by {% data variables.product.prodname_code_scanning %} default setup to authenticate to the configured private package registries was started successfully.

* Following this, there may be messages about the outcomes of connection tests which try to reach the configured private package registries through the authentication proxy. This is a best-effort process. If these checks are not successful for some registries, it does not necessarily mean that the relevant configurations are not working. However, if you find that {% data variables.product.prodname_code_scanning %} default setup is unable to successfully access dependencies in the private registries during the analysis, then this may provide some information to help troubleshoot the issue.

If the output from the `Setup proxy for registries` step is as expected, but {% data variables.product.prodname_code_scanning %} default setup is unable to successfully access dependencies in the private registries, you can obtain additional troubleshooting information. See [AUTOTITLE](/code-security/how-tos/scan-code-for-vulnerabilities/troubleshooting/troubleshooting-analysis-errors/logs-not-detailed-enough#creating-codeql-debugging-artifacts-for-codeql-default-setup).

For more information about giving {% data variables.product.prodname_code_scanning %} default setup access to private registries, see [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/giving-org-access-private-registries).

{% endif %}

## Logs for the {% data variables.product.prodname_codeql_cli %}

If you're using the {% data variables.product.prodname_codeql_cli %} outside {% data variables.product.prodname_dotcom %}, you'll see diagnostic information in the output generated during database analysis. This information is also included in the SARIF results file.

## Logs in {% data variables.product.prodname_vscode_shortname %}

Progress and error messages are displayed as notifications in the bottom right corner of the {% data variables.product.prodname_vscode %} workspace. These link to more detailed logs and error messages in the "Output" window.

You can access separate logs for the {% data variables.product.prodname_codeql %} extension, language server, query Server, or tests. The Language Server log contains more advanced debug logs for {% data variables.product.prodname_codeql %} language maintainers. You should only need these to provide details in a bug report.

To access these logs, see [AUTOTITLE](/code-security/how-tos/scan-code-for-vulnerabilities/scan-from-vs-code/accessing-logs).
