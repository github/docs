<table spaces-before="0">
  <tr>
    <th>
      <nobr>Tipo de análise</nobr>
    </th>
    
    <th>
      Opções para gerar alertas
    </th>
  </tr>
  
  <tr>
    <td>
    </td>
    
    <td>
    </td>
  </tr>
</table>
{%- ifversion fpt or ghes > 3.0 or ghae-next %}
|
{% data variables.product.prodname_codeql %} | Using {% data variables.product.prodname_actions %} (see "[Setting up {% data variables.product.prodname_code_scanning %} using actions](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-actions)") or running {% data variables.product.prodname_codeql %} analysis in a third-party continuous integration (CI) system (see "[About {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} in your CI system](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system)").
{%- else %}
|
{% data variables.product.prodname_codeql %} | Using {% data variables.product.prodname_actions %} (see "[Setting up {% data variables.product.prodname_code_scanning %} using actions](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-actions)") or using the {% data variables.product.prodname_codeql_runner %} in a third-party continuous integration (CI) system (see "[Running {% data variables.product.prodname_codeql_runner %} in your CI system](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/running-codeql-runner-in-your-ci-system)").
{%- endif %}
| Terceiros&#8209; | Usando
{% data variables.product.prodname_actions %} (see "[Setting up {% data variables.product.prodname_code_scanning %} using actions](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-actions)") or generated externally and uploaded to {% data variables.product.product_name %} (see "[Uploading a SARIF file to {% data variables.product.prodname_dotcom %}](/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github)").|
