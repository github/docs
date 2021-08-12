<table spaces-before="0">
  <tr>
    <th>
      <nobr>分析类型</nobr>
    </th>
    
    <th>
      用于生成警报的选项
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
{% data variables.product.prodname_codeql %} | 使用 {% data variables.product.prodname_actions %}（请参阅“[使用操作设置 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-actions)”）或在第三方持续集成 (CI) 系统中运行 {% data variables.product.prodname_codeql %} 分析（请参阅“[关于 CI 系统中的 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)”）。
{%- else %}
|
{% data variables.product.prodname_codeql %} | 使用 {% data variables.product.prodname_actions %}（请参阅“[使用操作设置 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-actions)”）或使用第三方持续集成 (CI) 系统中的 {% data variables.product.prodname_codeql_runner %}（请参阅“[在 CI 系统中运行 {% data variables.product.prodname_codeql %} 代码扫码](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)”）。
{%- endif %}
| 第三&#8209;方 | 使用
{% data variables.product.prodname_actions %}（请参阅“[使用操作设置 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-actions)”）或在外部生成并上传到 {% data variables.product.product_name %}（请参阅“[将 SARIF 文件上传到 {% data variables.product.prodname_dotcom %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github)”）。|
