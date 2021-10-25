Cuando utilizas {% data variables.product.prodname_codeql %} para escanear código, el motor de análisis de {% data variables.product.prodname_codeql %} genera una base de datos desde el código y ejecuta consultas en éste. El {% data variables.product.prodname_codeql %} utiliza un conjunto predeterminado de consultas, pero puedes especificar más consultas para que se ejecuten, adicionalmente a las predeterminadas.

{% if codeql-packs %}
Puedes ejecutar consultas adicionales si son parte de un
paquete de {% data variables.product.prodname_codeql %} (beta) publicado en el {% data variables.product.prodname_container_registry %} de {% data variables.product.company_short %} o de un paquete de {% data variables.product.prodname_ql %} en un repositorio. Para obtener más información, consulta la sección "[Acerca del {% data variables.product.prodname_code_scanning %} con {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries)".

Las opciones disponibles para especificar las consultas adicionales que quieres ejecutar son:

- `packs` para instalar uno o más paquetes de consulta de {% data variables.product.prodname_codeql %} (beta) y ejecutar la suite de consultas predeterminada para estos paquetes.
- `queries` para especificar un archivo sencilo de _.ql_, un directorio que contenga varios archivos de _.ql_, un archivo de definición de suite de consultas _.qls_ o cualquier combinación de estos. Para obtener más información acerca de las definiciones de la suite de consultas, diríjete a la sección "[Crear suites de consultas de {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/)".

Puedes utilizar tanto `packs` como `queries` en el mismo flujo de trabajo.
{% else %}
Cualquier consulta adicional que quieras ejecutar debe pertenecer a un
paquete de {% data variables.product.prodname_ql %} en un repositorio. Para obtener más información, consulta la sección {% ifversion ghes < 3.0 %}"[Acerca del {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning#about-codeql)".{% else %}"[Acerca del {% data variables.product.prodname_code_scanning %} con {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries)".{% endif %}

Puedes especificar un solo archivo _.ql_, un directorio que contenga varios archivos _.ql_, un archivo de definición de suite de consulta _.qls_, o cualquier combinación de éstos. Para obtener más información acerca de las definiciones de la suite de consultas, diríjete a la sección "[Crear suites de consultas de {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/)".
{% endif %}

{% ifversion fpt %}No te recomendamos referenciar las suites de consultas directamente desde el repositorio de `github/codeql`, como por ejemplo `github/codeql/cpp/ql/src@main`. Puede que dichas consultas no se compilen con la misma versión de {% data variables.product.prodname_codeql %} que se utiliza para tus otras consultas, lo cual puede llevar a que se cometan errores durante el análisis.{% endif %}
