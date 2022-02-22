{% note %}

{% ifversion fpt or ghec %}

**Nota:** El {% data variables.product.prodname_codeql_runner %} se va a obsoletizar. En {% data variables.product.product_name %}, el {% data variables.product.prodname_codeql_runner %} será compatible hasta marzo del 2022. You should upgrade to the latest version of [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases).

{% elsif ghes > 3.3 %}

**Note:** The {% data variables.product.prodname_codeql_runner %} has been deprecated and is not included in {% data variables.product.prodname_ghe_server %} 3.4. You should migrate to [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases) version 2.7.6.

{% elsif ghes < 3.4 %}

**Nota:** El {% data variables.product.prodname_codeql_runner %} se va a obsoletizar. On {% data variables.product.prodname_ghe_server %} 3.0 and greater, you can install [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases) version 2.6.3 to replace {% data variables.product.prodname_codeql_runner %}.

{% elsif ghae %}

**Note:** The {% data variables.product.prodname_codeql_runner %} has been deprecated. You should migrate to [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases).

{% endif %}

Para obtener más información, consulta la [obsoletización del ejecutor de CodeQL](https://github.blog/changelog/2021-09-21-codeql-runner-deprecation/). Para obtener más información sobre cómo migrarse al {% data variables.product.prodname_codeql_cli %}, consulta la sección "[Migrarse desde el ejecutor de CodeQL al CLI de CodeQL](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/migrating-from-the-codeql-runner-to-codeql-cli)".

{% endnote %}
