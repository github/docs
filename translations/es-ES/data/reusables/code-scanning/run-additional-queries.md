Cuando utilizas {% data variables.product.prodname_codeql %} para escanear código, el motor de análisis de {% data variables.product.prodname_codeql %} genera una base de datos desde el código y ejecuta consultas en éste. El {% data variables.product.prodname_codeql %} utiliza un conjunto predeterminado de consultas, pero puedes especificar más consultas para que se ejecuten, adicionalmente a las predeterminadas.

{% if codeql-packs %}
You can run extra queries if they are part of a
{% data variables.product.prodname_codeql %} pack (beta) published to the {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %} or a {% data variables.product.prodname_ql %} pack stored in a repository. For more information, see "[About {% data variables.product.prodname_code_scanning %} with {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries)."

The options available to specify the additional queries you want to run are:

- `packs` to install one or more {% data variables.product.prodname_codeql %} query packs (beta) and run the default query suite or queries for those packs.
- `queries` to specify a single _.ql_ file, a directory containing multiple _.ql_ files, a _.qls_ query suite definition file, or any combination. Para obtener más información acerca de las definiciones de la suite de consultas, diríjete a la sección "[Crear suites de consultas de {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/)".

You can use both `packs` and `queries` in the same workflow.
{% else %}
Any additional queries you want to run must belong to a
{% data variables.product.prodname_ql %} pack in a repository. For more information, see {% ifversion ghes < 3.0 %}"[About {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning#about-codeql)."{% else %}"[About {% data variables.product.prodname_code_scanning %} with {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries)."{% endif %}

Puedes especificar un solo archivo _.ql_, un directorio que contenga varios archivos _.ql_, un archivo de definición de suite de consulta _.qls_, o cualquier combinación de éstos. Para obtener más información acerca de las definiciones de la suite de consultas, diríjete a la sección "[Crear suites de consultas de {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/)".
{% endif %}

{% ifversion fpt %}We don't recommend referencing query suites directly from the `github/codeql` repository, like `github/codeql/cpp/ql/src@main`. Puede que dichas consultas no se compilen con la misma versión de {% data variables.product.prodname_codeql %} que se utiliza para tus otras consultas, lo cual puede llevar a que se cometan errores durante el análisis.{% endif %}
