{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
{% data variables.product.prodname_codeql_cli %}は、コードの分析に利用できるスタンドアローンの製品です。 その主な目的は、コードベースのデータベース表現である{% data variables.product.prodname_codeql %}データベースを生成することです。 データベースの準備ができれば、それに対してインタラクティブにクエリを実行したり、SARIFフォーマットで結果セットを生成するためのクエリのスイートを実行して、結果を{% data variables.product.product_location %}にアップロードしたりできます。
{% endif %}
