---
title: コードスキャンニングについて
intro: '{% data variables.product.prodname_code_scanning %} を使用して、{% data variables.product.prodname_dotcom %} 上のプロジェクトのコードからセキュリティの脆弱性とエラーを見つけることができます。'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/managing-security-vulnerabilities/about-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning
  - /code-security/secure-coding/about-code-scanning
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning
versions:
  fpt: '*'
  ghes: '>=3.0'
  ghae: '*'
type: overview
topics:
  - Advanced Security
  - Code scanning
---

<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

## {% data variables.product.prodname_code_scanning %} について

{% data reusables.code-scanning.about-code-scanning %}

{% data variables.product.prodname_code_scanning %} を使用して、コード内の既存の問題の修正を検索し、トリアージして、優先順位を付けることができます。 また、{% data variables.product.prodname_code_scanning_capc %} は、開発者による新しい問題の発生も防ぎます。 スキャンを特定の日時にスケジュールしたり、プッシュなどの特定のイベントがリポジトリで発生したときにスキャンをトリガーしたりすることができます。

{% data variables.product.prodname_code_scanning %} がコードに潜在的な脆弱性またはエラーを見つけた場合、{% data variables.product.prodname_dotcom %} はリポジトリにアラートを表示します。 アラートを引き起こしたコードを修正すると、{% data variables.product.prodname_dotcom %}はそのアラートを閉じます。 詳しい情報については、「[リポジトリの {% data variables.product.prodname_code_scanning %} アラートを管理する](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)」を参照してください。

リポジトリまたは Organization をまたいで {% data variables.product.prodname_code_scanning %} による結果を監視するには、webhooks や {% data variables.product.prodname_code_scanning %} API を使用できます。 {% data variables.product.prodname_code_scanning %} 用の webhook に関する詳しい情報については、「[Webhook イベントとペイロード](/developers/webhooks-and-events/webhook-events-and-payloads#code_scanning_alert)」を参照してください。 API に関する情報については、 「[{% data variables.product.prodname_code_scanning_capc %}](/rest/reference/code-scanning)」を参照してください。

{% data variables.product.prodname_code_scanning %} を始めるには、「[リポジトリに対する {% data variables.product.prodname_code_scanning %} を設定する](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)」を参照してください。

{% ifversion fpt %}

## {% data variables.product.prodname_code_scanning %}の支払いについて

{% data variables.product.prodname_code_scanning_capc %} は {% data variables.product.prodname_actions %} を使用し、{% data variables.product.prodname_code_scanning %} ワークフローの実行ごとに {% data variables.product.prodname_actions %} に数分かかります。 詳しい情報については、「[{% data variables.product.prodname_actions %}の支払いについて](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)」を参照してください。

{% endif %}

## About tools for {% data variables.product.prodname_code_scanning %}

You can set up {% data variables.product.prodname_code_scanning %} to use the {% data variables.product.prodname_codeql %} product maintained by {% data variables.product.company_short%} or a third-party {% data variables.product.prodname_code_scanning %} tool.

### About {% data variables.product.prodname_codeql %} analysis

{% data reusables.code-scanning.about-codeql-analysis %} For more information about {% data variables.product.prodname_codeql %}, see "[About code scanning with CodeQL](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)."

### サードパーティの{% data variables.product.prodname_code_scanning %}ツールについて

{% data reusables.code-scanning.interoperable-with-tools-that-output-sarif %}

Actionsを使って{% data variables.product.product_name %}内で、あるいは外部のCIシステム内でサードパーティの分析ツールを実行できます。 詳しい情報については「[リポジトリのCode scanningのセットアップ](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)」あるいは「[SARIFファイルのGitHubへのアップロード](/code-security/secure-coding/uploading-a-sarif-file-to-github)」を参照してください。
