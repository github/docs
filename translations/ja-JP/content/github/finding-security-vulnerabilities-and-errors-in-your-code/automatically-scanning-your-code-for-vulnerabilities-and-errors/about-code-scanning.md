---
title: コードスキャンニングについて
intro: '{% data variables.product.prodname_code_scanning %} を使用して、{% data variables.product.prodname_dotcom %} 上のプロジェクトのコードからセキュリティの脆弱性とエラーを見つけることができます。'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  enterprise-server: '2.22'
topics:
  - Security
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning
---
<!--See /content/code-security/secure-coding for the latest version of this article -->

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### {% data variables.product.prodname_code_scanning %} について

{% data reusables.code-scanning.about-code-scanning %}

{% data variables.product.prodname_code_scanning %} を使用して、コード内の既存の問題の修正を検索し、トリアージして、優先順位を付けることができます。 また、{% data variables.product.prodname_code_scanning_capc %} は、開発者による新しい問題の発生も防ぎます。 スキャンを特定の日時にスケジュールしたり、プッシュなどの特定のイベントがリポジトリで発生したときにスキャンをトリガーしたりすることができます。

{% data variables.product.prodname_code_scanning %} がコードに潜在的な脆弱性またはエラーを見つけた場合、{% data variables.product.prodname_dotcom %} はリポジトリにアラートを表示します。 アラートを引き起こしたコードを修正すると、{% data variables.product.prodname_dotcom %}はそのアラートを閉じます。 詳しい情報については、「[リポジトリの {% data variables.product.prodname_code_scanning %} アラートを管理する](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository)」を参照してください。

リポジトリまたは Organization をまたいで {% data variables.product.prodname_code_scanning %} による結果を監視するには、webhooks や {% data variables.product.prodname_code_scanning %} API を使用できます。 {% data variables.product.prodname_code_scanning %} 用の webhook に関する詳しい情報については、「[Webhook イベントとペイロード](/developers/webhooks-and-events/webhook-events-and-payloads#code_scanning_alert)」を参照してください。 API に関する情報については、 「[{% data variables.product.prodname_code_scanning_capc %}](/rest/reference/code-scanning)」を参照してください。

{% data variables.product.prodname_code_scanning %} を始めるには、「[リポジトリに対する {% data variables.product.prodname_code_scanning %} をセットアップする](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository)」を参照してください。

### {% data variables.product.prodname_codeql %} について

デフォルトでは、{% data variables.product.prodname_code_scanning %} はセマンティックコード分析エンジンである {% data variables.product.prodname_codeql %} を使用します。 {% data variables.product.prodname_codeql %} はコードをデータとして扱い、コードの潜在的な脆弱性を従来の静的分析よりも高い精度で見つけることができます。

{% data variables.product.prodname_ql %} は {% data variables.product.prodname_codeql %} を動作させるクエリ言語です。 {% data variables.product.prodname_ql %} はオブジェクト指向ロジックプログラミング言語です。 {% data variables.product.company_short %}、言語の専門家、セキュリティ研究者が {% data variables.product.prodname_code_scanning %} に使用するクエリを作成します。クエリはオープンソースです。 コミュニティはクエリを維持および更新して、分析を改善し、誤検出を減らします。 詳しい情報については、GitHub Security Lab Web サイトの「[{% data variables.product.prodname_codeql %}](https://securitylab.github.com/tools/codeql)」を参照してください。

{% data variables.product.prodname_code_scanning %} の API エンドポイントについての詳細は、「[{% data variables.product.prodname_code_scanning_capc %}](http://developer.github.com/v3/code-scanning)」を参照してください。

{% data reusables.code-scanning.codeql-languages-bullets %}

[`github/codeql`](https://github.com/github/codeql)リポジトリで {% data variables.product.prodname_code_scanning %} のクエリを表示して貢献できます。 詳しい情報については、 {% data variables.product.prodname_codeql %} ドキュメントの「[{% data variables.product.prodname_codeql %} クエリ](https://codeql.github.com/docs/writing-codeql-queries/codeql-queries/)」を参照してください。

### サードパーティのコードスキャンツールについて

{% data reusables.code-scanning.you-can-upload-third-party-analysis %}

{% data reusables.code-scanning.interoperable-with-tools-that-output-sarif %}

{% data reusables.code-scanning.get-started-uploading-third-party-data %}

### 参考リンク

- [{% data variables.product.prodname_security %}](https://securitylab.github.com/)
- OASIS 委員会 の Web サイトの「[OASIS Static Analysis Results Interchange Format (SARIF) 」TC](https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=sarif)
