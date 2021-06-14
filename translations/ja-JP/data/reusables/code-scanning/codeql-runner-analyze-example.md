1. {% data variables.product.prodname_codeql %}データベースを展開し、分析し、その結果を{% data variables.product.product_name %}にアップロードしてください。 その結果は、リポジトリの**Security（セキュリティ）**タブに表示されます。
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
2. {% data variables.product.prodname_code_scanning %}の結果をPull Requestのチェックとしてアップロードするには、 <nobr>`--ref`</nobr> フラグを使ってPull Requestを指定してください。 {% data variables.product.prodname_codeql_runner %}は、[`pull_request`](/developers/webhooks-and-events/webhook-events-and-payloads#pull_request) webhookイベントで実行されるようにセットアップすることをおすすめします。
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
{% data variables.product.prodname_code_scanning %}アラートの表示に関する詳しい情報については「[Code ScanningのアラートのPull Requestでのトリアージ](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)」及び「[リポジトリのCode Scanningアラートの管理](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository)」を参照してください。
{% else %}
{% data variables.product.prodname_code_scanning %}アラートの表示に関する詳しい情報については「[Code ScanningのアラートのPull Requestでのトリアージ](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests)」及び「<[リポジトリのCode Scanningアラートの管理](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository)」を参照してください。
{% endif %}
