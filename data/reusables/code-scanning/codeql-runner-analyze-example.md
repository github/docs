1. Populate the {% data variables.product.prodname_codeql %} databases, analyze them, and upload the results to {% data variables.product.product_name %}. The results will appear in the **Security** tab for your repository.

    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux analyze --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
        --commit 5b6a3078b31dc346e5ce7b86837d6abbe7a18bbd --ref refs/heads/my-branch
    > Finalizing database creation
    > ...
    > POST /repos/octo-org/example-repo/code-scanning/sarifs - 202 in 786ms
    > Successfully uploaded results
    ```
2. To upload {% data variables.product.prodname_code_scanning %} results as pull request checks, specify the pull request using the <nobr>`--ref`</nobr> flag. We recommend setting up the {% data variables.product.prodname_codeql_runner %} so that it runs on the [`pull_request`](/developers/webhooks-and-events/webhook-events-and-payloads#pull_request) webhook event.

    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux analyze --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
        --commit 1dc7a1346e5ce7b86835b68bbda3078b37d6abbe --ref refs/pull/123/merge
    > Finalizing database creation
    > ...
    > POST /repos/octo-org/example-repo/code-scanning/sarifs - 202 in 786ms
    > Successfully uploaded results
    ```

For more information about viewing {% data variables.product.prodname_code_scanning %} alerts, see "[Triaging code scanning alerts in pull requests](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests)" and "[Managing code scanning alerts for your repository](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository)."
