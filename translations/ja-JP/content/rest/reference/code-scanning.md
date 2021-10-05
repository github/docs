---
title: Code scanning
intro: The Code Scanning API enables you to retrieve and update the code scanning alerts and analyses from a repository.
redirect_from:
  - /v3/code-scanning
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - API
  - Code scanning
  - REST
miniTocMaxHeadingLevel: 3
---

{% data reusables.code-scanning.beta %}

{% data variables.product.prodname_code_scanning %} APIを使うと、リオジトリから{% data variables.product.prodname_code_scanning %}アラートを取得して更新できます。 このエンドポイントを使って、Organization内で{% data variables.product.prodname_code_scanning %}アラートの自動化されたレポートを作成したり、オフラインの{% data variables.product.prodname_code_scanning %}ツールを使って生成された分析結果をアップロードしたりできます。 詳しい情報については、「[コード内のセキュリティの脆弱性とエラーを検出する](/github/finding-security-vulnerabilities-and-errors-in-your-code)」を参照してください。

{% ifversion fpt or ghes > 3.0 or ghae %}
### {% data variables.product.prodname_code_scanning %}のためのカスタムメディアタイプ

{% data variables.product.prodname_code_scanning %} REST API用にサポートされているカスタムメディアタイプが1つあります。 

    application/sarif+json

これは`/analyses/{analysis_id}`エンドポイントに送信される`GET`リクエストで利用できます。 この操作に関する詳しい情報については「[リポジトリの{% data variables.product.prodname_code_scanning %}分析の取得](#get-a-code-scanning-analysis-for-a-repository)」を参照してください。 この操作でこのメディアタイプを使う場合、レスポンスには指定された分析のまとめではなく、その分析のためにアップロードされた実際のデータのサブセットが含まれます。分析のまとめは、デフォルトのメディアタイプを使った場合に返されます。 このレスポンスには、`github/alertNumber`や`github/alertUrl`プロパティなどの追加データも含まれます。 このデータは、[SARIF version 2.1.0](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html)でフォーマットされます。

詳しい情報については、「[メディアタイプ](/rest/overview/media-types)」を参照してください。
{% endif %}

{% include rest_operations_at_current_path %}
