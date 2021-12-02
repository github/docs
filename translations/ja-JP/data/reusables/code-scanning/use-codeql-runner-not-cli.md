{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}
{% data variables.product.prodname_codeql_cli %}がお使いのCIシステムでの利用に適していない場合は、代替として{% data variables.product.prodname_codeql_runner %}が利用できます。 通常、これはCIシステムがコンパイラの呼び出しを調整するとともに、{% data variables.product.prodname_codeql %}の分析の実行もしなければならないような場合です。 詳しい情報については、「[{% data variables.product.prodname_codeql_runner %} を CI システムで実行する](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/running-codeql-runner-in-your-ci-system)」を参照してください。
{% endif %}

{% ifversion ghes = 3.1 %}
以下が必要な場合は、{% data variables.product.prodname_codeql_runner %}を使わなければなりません。
- コンパイラの呼び出しを調整するとともに{% data variables.product.prodname_codeql %}の分析もCIシステムが実行するようセットアップする。
- リポジトリ中で複数の言語を分析する。
{% endif %}
