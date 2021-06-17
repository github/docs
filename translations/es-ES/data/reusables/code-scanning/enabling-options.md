<table spaces-before="0">
  <tr>
    <th>
      <nobr>Tipo de análisis</nobr>
    </th>
    
    <th>
      Opciones para generar alertas
    </th>
  </tr>
  
  <tr>
    <td>
    </td>
    
    <td>
    </td>
  </tr>
</table>
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
|
{% data variables.product.prodname_codeql %} | Utilizando {% data variables.product.prodname_actions %} (Consulta la sección "[Configurar el {% data variables.product.prodname_code_scanning %} utilizando acciones](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-actions)") o ejecutando el análisis de {% data variables.product.prodname_codeql %} en un sistema de integración contínua (IC) de terceros (consulta la sección "[Acerca del {% data variables.product.prodname_code_scanning %} de {% data variables.product.prodname_codeql %} en tu sistema de IC](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)").
{%- else %}
|
{% data variables.product.prodname_codeql %} | Utilizando {% data variables.product.prodname_actions %} (consulta la sección "[Configurar el {% data variables.product.prodname_code_scanning %} utilizando acciones](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-actions)") o utilizando el {% data variables.product.prodname_codeql_runner %} en un sistema de integración continua (IC) de terceros (consulta la sección "[ejecutar el escaneo de código de {% data variables.product.prodname_codeql %} en tu sistema de IC](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)").
{%- endif %}
| Terceros | Utilizando
{% data variables.product.prodname_actions %} (consulta la sección "[Configurar el {% data variables.product.prodname_code_scanning %} utilizando acciones](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-actions)") o generado externamente y cargado a {% data variables.product.product_name %} (consulta la sección "[Cargar un archivo SARFI a {% data variables.product.prodname_dotcom %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github)").|
