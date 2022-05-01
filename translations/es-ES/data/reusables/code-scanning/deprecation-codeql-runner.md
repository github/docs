{% note %}

{% ifversion fpt or ghec %}

**Note:** The {% data variables.product.prodname_codeql_runner %} is deprecated. En {% data variables.product.product_name %}, el {% data variables.product.prodname_codeql_runner %} fue compatible hasta marzo del 2022. Deberías mejorar a la última versión de [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases).

{% elsif ghes > 3.3 %}

**Nota:** El {% data variables.product.prodname_codeql_runner %} se hizo obsoleto y no se incluye en {% data variables.product.prodname_ghe_server %} 3.4. Debes migrarte al [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases) versión 2.7.6.

{% elsif ghes < 3.4 %}

**Nota:** El {% data variables.product.prodname_codeql_runner %} se va a obsoletizar. En {% data variables.product.prodname_ghe_server %} 3.0 y superior, puedes instalar el [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases) versión 2.6.3 para reemplazar el {% data variables.product.prodname_codeql_runner %}.

{% elsif ghae %}

**Nota:** El {% data variables.product.prodname_codeql_runner %} se hizo obsoleto. Debes migrarte a [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases).

{% endif %}

Para obtener más información, consulta la [obsoletización del ejecutor de CodeQL](https://github.blog/changelog/2021-09-21-codeql-runner-deprecation/). Para obtener más información sobre cómo migrarse al {% data variables.product.prodname_codeql_cli %}, consulta la sección "[Migrarse desde el ejecutor de CodeQL al CLI de CodeQL](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/migrating-from-the-codeql-runner-to-codeql-cli)".

{% endnote %}
