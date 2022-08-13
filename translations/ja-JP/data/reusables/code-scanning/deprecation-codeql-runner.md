{% note %}

{% ifversion fpt or ghec %}

**ノート:** {% data variables.product.prodname_codeql_runner %}は非推奨になりました。 {% data variables.product.product_name %}では、{% data variables.product.prodname_codeql_runner %}は2022年3月までサポートされていました。 最新バージョンの[{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases)にアップグレードしてください。

{% elsif ghes > 3.3 %}

**ノート:** {% data variables.product.prodname_codeql_runner %}は非推奨になっており、{% data variables.product.prodname_ghe_server %} 3.4には含まれていません。 [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases) 2.7.6に移行してください。

{% elsif ghes < 3.4 %}

**ノート:** {% data variables.product.prodname_codeql_runner %}は非推奨になりました。 {% data variables.product.prodname_ghe_server %} 3.0移行では、[{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases)バージョン2.6.3をインストールして{% data variables.product.prodname_codeql_runner %}を置き換えることができます。

{% elsif ghae %}

**ノート:** {% data variables.product.prodname_codeql_runner %}は非推奨になりました。 [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases)に移行してください。

{% endif %}

詳しい情報については[CodeQLランナーの非推奨化](https://github.blog/changelog/2021-09-21-codeql-runner-deprecation/)を参照してください。 {% data variables.product.prodname_codeql_cli %}への移行に関する情報については「[CodeQLランナーからCodeQL CLIへの移行](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/migrating-from-the-codeql-runner-to-codeql-cli)」を参照してください。

{% endnote %}
