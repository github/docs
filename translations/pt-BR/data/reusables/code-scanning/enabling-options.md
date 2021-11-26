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
{% data variables.product.prodname_codeql %} | Usando {% data variables.product.prodname_actions %} (consulte "[Configurar {% data variables.product.prodname_code_scanning %} usando ações](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-actions)") ou executando {% data variables.product.prodname_codeql %} análise em um sistema de integração contínua (CI) de terceiros (consulte "[Sobre {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} no seu sistema CI](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)").
{%- else %}
|
{% data variables.product.prodname_codeql %} | Usando {% data variables.product.prodname_actions %} (consulte "[Configurar {% data variables.product.prodname_code_scanning %} usando ações](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-actions)") ou usando o sistema {% data variables.product.prodname_codeql_runner %} em uma integração contínua (CI) de terceiros (consulte "[Executando a digitalização de código {% data variables.product.prodname_codeql %} no seu sistema CI](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)").
{%- endif %}
| Terceiros&#8209; | Usando
{% data variables.product.prodname_actions %} (consulte "[Configurar {% data variables.product.prodname_code_scanning %} usando ações](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-actions)") ou gerado externamente e enviado para {% data variables.product.product_name %} (consulte "[Fazer o upload de um arquivo SARIF para {% data variables.product.prodname_dotcom %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github)").├
