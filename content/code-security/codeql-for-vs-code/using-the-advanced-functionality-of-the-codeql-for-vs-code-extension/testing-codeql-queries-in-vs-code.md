---
title: Testing CodeQL queries in Visual Studio Code
shortTitle: Test CodeQL queries
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
type: reference
intro: 'You can run unit tests for {% data variables.product.prodname_codeql %} queries using the {% data variables.product.prodname_vscode %} extension.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /code-security/codeql-for-vs-code/testing-codeql-queries-in-visual-studio-code
---

## About testing queries in {% data variables.product.prodname_vscode_shortname %}

To ensure that your {% data variables.product.prodname_codeql %} queries produce the expected results, you can run tests that compare the expected query results with the actual results.

The {% data variables.product.prodname_codeql %} extension automatically registers itself with the "Testing" view. This view displays all tests found in your current workspace and provides a UI for exploring and running tests in your workspace.

For more information about creating {% data variables.product.prodname_codeql %} tests, see "[AUTOTITLE](/code-security/codeql-cli/using-the-codeql-cli/testing-custom-queries)".

To see more detailed output from running unit tests, open the {% data variables.product.prodname_codeql %} Tests log. For information, see "[AUTOTITLE](/code-security/codeql-for-vs-code/troubleshooting-codeql-for-vs-code/accessing-logs)."

## Testing the results of your queries

1. In {% data variables.product.prodname_vscode %}, open the "Testing" view in the sidebar.

1. To run a specific test, hover over the file or folder name and click the play button. To run all tests in your workspace, click the play button at the top of the view. If a test takes too long to run, you can click the stop button at the top of the view to cancel the test.

   ![Screenshot of the "Testing" view, with the "Run Test" button (to run all tests) outlined in dark orange.](/assets/images/help/security/codeql-for-vs-code-run-all-tests.png)

1. The icons show whether a test passed or failed. If it failed, click the test in the "Test Results" to display the differences between the expected output and the actual output.

   ![Screenshot of the "Test Results" view displaying the differences between the expected output and actual output for a test.](/assets/images/help/security/codeql-for-vs-code-test-output.png)

1. Compare the results. If you want to update the test with the actual output, right-click the test in the "Testing" view and click **Accept Test Output**.

## Monitoring the performance of your queries

Query performance is important when you want to run a query on large databases, or as part of your continuous integration system.

If you want to examine query performance, enable the "Running Queries: Debug" setting to include timing and tuple counts. This will then be shown in the logs in the {% data variables.product.prodname_codeql %} "Query Server" tab of the "Output" view. The tuple count is useful because it indicates the size of the [predicates](https://codeql.github.com/docs/ql-language-reference/predicates/#predicates) computed by the query. For more information about changing settings, see "[AUTOTITLE](/code-security/codeql-for-vs-code/using-the-advanced-functionality-of-the-codeql-for-vs-code-extension/customizing-settings#configuring-settings-for-running-queries-locally)."

When a query is evaluated, the query server caches the predicates that it calculates. So when you want to compare the performance of two evaluations, you should run **{% data variables.product.prodname_codeql %}: Clear Cache** to clear the query server's cache before each run. This ensures that you're comparing equivalent data.

For more information about monitoring the performance of your {% data variables.product.prodname_codeql %} queries, see "[Troubleshooting query performance](https://codeql.github.com/docs/writing-codeql-queries/troubleshooting-query-performance/#troubleshooting-query-performance)" and "[Evaluation of QL programs](https://codeql.github.com/docs/ql-language-reference/evaluation-of-ql-programs/#evaluation-of-ql-programs)" in the {% data variables.product.prodname_codeql %} documentation.

{% ifversion codeql-vs-code-mrva %}

## Next steps

When you are sure that your query finds the results you want to identify, you can use variant analysis to run it at scale. For information on running analysis at scale across many {% data variables.product.prodname_codeql %}databases, see "[AUTOTITLE](/code-security/codeql-for-vs-code/getting-started-with-codeql-for-vs-code/running-codeql-queries-at-scale-with-multi-repository-variant-analysis)."

{% endif %}
