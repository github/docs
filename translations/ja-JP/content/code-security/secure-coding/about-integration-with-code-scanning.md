---
title: コードスキャンとのインテグレーションについて
shortTitle: インテグレーションについて
intro: '{% data variables.product.prodname_code_scanning %} を外部で実行し、その結果を {% data variables.product.prodname_dotcom %} で表示できます。また、リポジトリで {% data variables.product.prodname_code_scanning %} アクティビティを監視する webhook をセットアップすることもできます。'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/about-integration-with-code-scanning
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - Security
---

<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

{% data variables.product.prodname_code_scanning %} を {% data variables.product.prodname_dotcom %} 内で実行する他に、分析を別の場所で実行して、その結果をアップロードすることもできます。 外部で実行した {% data variables.product.prodname_code_scanning %} のアラートは、{% data variables.product.prodname_dotcom %} 内で {% data variables.product.prodname_code_scanning %} を実行した場合と同じように表示されます。 詳しい情報については、「[リポジトリの {% data variables.product.prodname_code_scanning %} アラートを管理する](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)」を参照してください。

Static Analysis Results Interchange Format (SARIF) 2.1.0 データとして結果を生成できるサードパーティの静的解析ツールを使用する場合、そのデータを {% data variables.product.prodname_dotcom %} にアップロードできます。 詳しい情報については、「[SARIF ファイルを GitHub にアップロードする](/code-security/secure-coding/uploading-a-sarif-file-to-github)」を参照してください。

### webhook とのインテグレーション

{% data variables.product.prodname_code_scanning %} webhook を使用して、リポジトリの {% data variables.product.prodname_code_scanning %} イベントにサブスクライブする、[{% data variables.product.prodname_github_app %}](/apps/building-github-apps/) や [{% data variables.product.prodname_oauth_app %}](/apps/building-oauth-apps/) などのインテグレーションを構築またはセットアップできます。 たとえば、 {% data variables.product.product_name %} で Issue を作成するインテグレーションや、リポジトリに新たな {% data variables.product.prodname_code_scanning %} アラートが追加されたときに Slack 通知を送信するインテグレーションを構築できます。 詳しい情報については、「[webhook を作製すく](/developers/webhooks-and-events/creating-webhooks)」および「[webhook イベントとペイロード](/developers/webhooks-and-events/webhook-events-and-payloads#code_scanning_alert)」を参照してください。

### 参考リンク

* "[About code scanning](/code-security/secure-coding/about-code-scanning)"
* 「[既存の CI システムで {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} を使用する](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system)」
* "[SARIF support for code scanning](/code-security/secure-coding/sarif-support-for-code-scanning)"
