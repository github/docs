1. Llena las bases de datos de {% data variables.product.prodname_codeql %}, analízalas, y carga los resultados a{% data variables.product.product_name %}. Los resultados aparecerán en la pestaña de **Seguridad** de tu repositorio.

    ```shell
    $ /path/to-runner/codeql-runner-linux analyze --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth TOKEN
        --commit 5b6a3078b31dc346e5ce7b86837d6abbe7a18bbd --ref refs/heads/my-branch
    > Finalizing database creation
    > ...
    > POST /repos/octo-org/example-repo/code-scanning/sarifs - 202 in 786ms
    > Successfully uploaded results
    ```

1. Para cargar los resultados del {% data variables.product.prodname_code_scanning %} como verificaciones de solicitudes de cambios, especifica la solicitud de cambios utilizando el mrcador <nobr>`--ref`</nobr> . Te recomendamos configurar el {% data variables.product.prodname_codeql_runner %} para que se ejecute en el evento de webhook [`pull_request`](/developers/webhooks-and-events/webhook-events-and-payloads#pull_request).

    ```shell
    $ /path/to-runner/codeql-runner-linux analyze --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth TOKEN
        --commit 1dc7a1346e5ce7b86835b68bbda3078b37d6abbe --ref refs/pull/123/merge
    > Finalizing database creation
    > ...
    > POST /repos/octo-org/example-repo/code-scanning/sarifs - 202 in 786ms
    > Successfully uploaded results
    ```

Para obtener más información acerca de visualizar las alertas del {% data variables.product.prodname_code_scanning %}, consulta las secciones "[Clasificar las alertas del escaneo de código en las solicitudes de cambios](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)" y "[Administrar las alertas del escaneo de código para tu repositorio](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository)".
