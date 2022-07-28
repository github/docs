以下のクエリスイートは{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}に組み込まれており、利用可能です。

{% data reusables.code-scanning.codeql-query-suites %}

クエリスイートを指定した場合、{% data variables.product.prodname_codeql %}分析エンジンはクエリのデフォルトセットと、追加のクエリスイートで定義された追加のクエリを実行します。 {% ifversion codeql-ml-queries %}JavaScriptの`security-extended`及び`security-and-quality`は実験的なクエリを含みます。 詳しい情報については「[{% data variables.product.prodname_code_scanning %}アラートについて](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts)」を参照してください。{% endif %}
