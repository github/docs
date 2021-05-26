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
{% data variables.product.prodname_codeql %} | Using {% data variables.product.prodname_actions %} (see "[Setting up {% data variables.product.prodname_code_scanning %} using actions](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-actions)") or running {% data variables.product.prodname_codeql %} analysis in a third-party continuous integration (CI) system (see "[About {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} in your CI system](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)").
{%- else %}
|
{% data variables.product.prodname_codeql %} | Using {% data variables.product.prodname_actions %} (see "[Setting up {% data variables.product.prodname_code_scanning %} using actions](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-actions)") or using the {% data variables.product.prodname_codeql_runner %} in a third-party continuous integration (CI) system (see "[Running {% data variables.product.prodname_codeql %} code scanning in your CI system](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)").
{%- endif %}
| Third&#8209;party | Using
{% data variables.product.prodname_actions %} (see "[Setting up {% data variables.product.prodname_code_scanning %} using actions](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-actions)") or generated externally and uploaded to {% data variables.product.product_name %} (see "[Uploading a SARIF file to {% data variables.product.prodname_dotcom %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github)").|
