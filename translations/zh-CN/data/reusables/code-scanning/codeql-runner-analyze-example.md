1. 填充 {% data variables.product.prodname_codeql %} 数据库、进行分析并将结果上传到 {% data variables.product.product_name %}。 结果将出现在仓库的 **Security（安全性）**选项卡中。
{% if currentVersion ver_lt "enterprise-server@3.1" %}

    ```shell
    $ /path/to-runner/codeql-runner-linux analyze --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth TOKEN
        --commit 5b6a3078b31dc346e5ce7b86837d6abbe7a18bbd --ref refs/heads/my-branch
    > Finalizing database creation
    > ...
    > POST /repos/octo-org/example-repo/code-scanning/sarifs - 202 in 786ms
    > Successfully uploaded results
    ```

{% else %}

    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux analyze --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
        --commit 5b6a3078b31dc346e5ce7b86837d6abbe7a18bbd --ref refs/heads/my-branch
    > Finalizing database creation
    > ...
    > POST /repos/octo-org/example-repo/code-scanning/sarifs - 202 in 786ms
    > Successfully uploaded results
    ```
{% endif %}
2. 要将 {% data variables.product.prodname_code_scanning %} 结果上传为拉取请求检查，请使用 <nobr>`--ref` 指定拉取请求</nobr> 标志. 我们建议设置 {% data variables.product.prodname_codeql_runner %}，以便它在发生 [`pull_request`](/developers/webhooks-and-events/webhook-events-and-payloads#pull_request) web 挂钩事件时运行。
{% if currentVersion ver_lt "enterprise-server@3.1" %}

    ```shell
    $ /path/to-runner/codeql-runner-linux analyze --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth TOKEN
        --commit 1dc7a1346e5ce7b86835b68bbda3078b37d6abbe --ref refs/pull/123/merge
    > Finalizing database creation
    > ...
    > POST /repos/octo-org/example-repo/code-scanning/sarifs - 202 in 786ms
    > Successfully uploaded results
    ```

{% else %}

    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux analyze --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
        --commit 1dc7a1346e5ce7b86835b68bbda3078b37d6abbe --ref refs/pull/123/merge
    > Finalizing database creation
    > ...
    > POST /repos/octo-org/example-repo/code-scanning/sarifs - 202 in 786ms
    > Successfully uploaded results
    ```
{% endif %}

{% if currentVersion ver_lt "enterprise-server@3.1" %}
有关查看 {% data variables.product.prodname_code_scanning %} 警报的更多信息，请参阅“[对拉取请求中的代码扫描警报分类](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)”和“[管理仓库的代码扫描警报](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository)”。
{% else %}
有关查看 {% data variables.product.prodname_code_scanning %} 警报的更多信息，请参阅“[对拉取请求中的代码扫描警报分类](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests)”和“[管理仓库的代码扫描警报](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository)”。
{% endif %}
