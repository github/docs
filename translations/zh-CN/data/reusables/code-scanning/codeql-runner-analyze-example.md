1. 填充 {% data variables.product.prodname_codeql %} 数据库、进行分析并将结果上传到 {% data variables.product.product_name %}。 The results will appear in the **Security** tab for your repository.

    ```shell
    $ /path/to-runner/codeql-runner-linux analyze --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth TOKEN
        --commit 5b6a3078b31dc346e5ce7b86837d6abbe7a18bbd --ref refs/heads/my-branch
    > Finalizing database creation
    > ...
    > POST /repos/octo-org/example-repo/code-scanning/sarifs - 202 in 786ms
    > Successfully uploaded results
    ```

1. To upload {% data variables.product.prodname_code_scanning %} results as pull request checks, specify the pull request using the <nobr>`--ref`</nobr> 标志. We recommend setting up the {% data variables.product.prodname_codeql_runner %} so that it runs on the [`pull_request`](/developers/webhooks-and-events/webhook-events-and-payloads#pull_request) webhook event.

    ```shell
    $ /path/to-runner/codeql-runner-linux analyze --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth TOKEN
        --commit 1dc7a1346e5ce7b86835b68bbda3078b37d6abbe --ref refs/pull/123/merge
    > Finalizing database creation
    > ...
    > POST /repos/octo-org/example-repo/code-scanning/sarifs - 202 in 786ms
    > Successfully uploaded results
    ```

For more information about viewing {% data variables.product.prodname_code_scanning %} alerts, see "[Triaging code scanning alerts in pull requests](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)" and "[Managing code scanning alerts for your repository](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository)."
