1. Preencha os bancos de dados de {% data variables.product.prodname_codeql %}, analise-os e faça o upload dos resultados para {% data variables.product.product_name %}. Os resultados aparecerão na aba **Segurança** do seu repositório.

    ```shell
    $ /path/to-runner/codeql-runner-linux analyze --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth TOKEN
        --commit 5b6a3078b31dc346e5ce7b86837d6abbe7a18bbd --ref refs/heads/my-branch
    > Finalizing database creation
    > ...
    > POST /repos/octo-org/example-repo/code-scanning/sarifs - 202 in 786ms
    > Successfully uploaded results
    ```

1. Para fazer o upload dos resultados de {% data variables.product.prodname_code_scanning %} como verificações de pull request, especifique do pull request usando <nobr>`--ref`</nobr> sinalizador. Recomendamos configurar {% data variables.product.prodname_codeql_runner %} para que seja executado no evento de webhook [`pull_request`](/developers/webhooks-and-events/webhook-events-and-payloads#pull_request).

    ```shell
    $ /path/to-runner/codeql-runner-linux analyze --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth TOKEN
        --commit 1dc7a1346e5ce7b86835b68bbda3078b37d6abbe --ref refs/pull/123/merge
    > Finalizing database creation
    > ...
    > POST /repos/octo-org/example-repo/code-scanning/sarifs - 202 in 786ms
    > Successfully uploaded results
    ```

Para mais informações sobre a visualização de alertas de {% data variables.product.prodname_code_scanning %}, consulte "[Alertas de verificação de código triagem em pull requests](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)" e "[Gerenciar alertas de verificação de códigos para seu repositório](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository)".
