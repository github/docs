---
title: Code scanning
redirect_from:
  - /v3/code-scanning
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}

{% data variables.product.prodname_code_scanning %} API を使用すると、リポジトリからコードスキャンアラートを取得して更新することができます。 エンドポイントを使用すると、組織のコードスキャンアラートに関する自動レポートを作成したり、オフラインコードスキャンツールで生成された分析結果をアップロードしたりできます。 詳しい情報については、「[コード内のセキュリティの脆弱性とエラーを検出する](/github/finding-security-vulnerabilities-and-errors-in-your-code)」を参照してください。

{% include rest_operations_at_current_path %}
