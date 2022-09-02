Ao usar {% data variables.product.prodname_codeql %} para fazer a varredura do código, o mecanismo de análise de {% data variables.product.prodname_codeql %} gera um banco de dados do código e executa consultas no mesmo. A análise de {% data variables.product.prodname_codeql %} usa um conjunto-padrão de consultas, mas você pode especificar outras consultas a serem executadas, além das consultas-padrão.

{% ifversion codeql-packs %}
You can run extra queries if they are part of a
{% data variables.product.prodname_codeql %} pack (beta) published to the {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %} or a {% data variables.product.prodname_ql %} pack stored in a repository. For more information, see "[About {% data variables.product.prodname_code_scanning %} with {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries)."

The options available to specify the additional queries you want to run are:

- `packs` to install one or more {% data variables.product.prodname_codeql %} query packs (beta) and run the default query suite or queries for those packs.
- `queries` to specify a single _.ql_ file, a directory containing multiple _.ql_ files, a _.qls_ query suite definition file, or any combination. Para obter mais informações sobre definições do conjunto de consultas, consulte "[Criar as conjuntos de consulta do {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/)".

You can use both `packs` and `queries` in the same workflow.
{% else %}
Any additional queries you want to run must belong to a
{% data variables.product.prodname_ql %} pack in a repository. For more information, see "[About {% data variables.product.prodname_code_scanning %} with {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries)."

Você pode especificar um único arquivo _.ql_, um diretório que contém múltiplos arquivos _.ql_, um arquivo de definição de suite de consultas _.qls_ ou qualquer outra combinação. Para obter mais informações sobre definições do conjunto de consultas, consulte "[Criar as conjuntos de consulta do {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/)".
{% endif %}

{% ifversion fpt or ghec %}We don't recommend referencing query suites directly from the `github/codeql` repository, for example, `github/codeql/cpp/ql/src@main`. Such queries would have to be recompiled, and may not be compatible with the version of {% data variables.product.prodname_codeql %} currently active on {% data variables.product.prodname_actions %}, which could lead to errors during analysis.{% endif %}
