<table spaces-before="0">
  <tr>
    <th>
      <nobr>分析の種類</nobr>
    </th>
    
    <th>
      アラート生成のオプション
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
{% data variables.product.prodname_codeql %} | {% data variables.product.prodname_actions %}の利用（「[Actionsを使う{% data variables.product.prodname_code_scanning %}のセットアップ](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-actions)」）もしくはサードパーティの継続的インテグレーション（CI）システムでの{% data variables.product.prodname_codeql %}分析の実行（「[CIシステムでの{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}）](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)」）。
{%- else %}
|
{% data variables.product.prodname_codeql %} | {% data variables.product.prodname_actions %}の利用（「[アクションを使う{% data variables.product.prodname_code_scanning %}のセットアップ](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-actions)」参照）あるいはサードパーティの継続的インテグレーション（CI）システム中での{% data variables.product.prodname_codeql_runner %}の利用（「[CIシステム中での{% data variables.product.prodname_codeql %}コードスキャンの実行](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)」参照）。
{%- endif %}
| サードパーティ |
{% data variables.product.prodname_actions %}の利用（「[アクションを使う{% data variables.product.prodname_code_scanning %}のセットアップ](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-actions)」）あるいは外部で生成して{% data variables.product.product_name %}へアップロード（「[{% data variables.product.prodname_dotcom %}へのSARIFファイルのアップロード](/github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github)」）。
