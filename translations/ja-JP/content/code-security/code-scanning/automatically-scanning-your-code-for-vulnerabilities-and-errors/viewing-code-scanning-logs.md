---
title: Code scanningログの表示
intro: '{% data variables.product.product_location %}の{% data variables.product.prodname_code_scanning %}分析で生成された出力を見ることができます。'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can view the {% data variables.product.prodname_code_scanning %} logs for that repository.'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs
versions:
  fpt: '*'
  ghes: '>=3.0'
  ghae: '*'
topics:
  - Security
shortTitle: Code scanningログの表示
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## {% data variables.product.prodname_code_scanning %}のセットアップについて

リポジトリでの{% data variables.product.prodname_code_scanning %}のセットアップには、様々なツールを使うことができます。 詳しい情報については「[リポジトリに対する{% data variables.product.prodname_code_scanning %}のセットアップ](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#options-for-setting-up-code-scanning)」を参照してください。

{% ifversion fpt or ghes > 3.1 %}
利用できるログと診断情報は、リポジトリ中での{% data variables.product.prodname_code_scanning %}の利用方法によります。 使用している{% data variables.product.prodname_code_scanning %}の種類は、リポジトリの**Security（セキュリティ）**タブで、アラートリスト中の**Tool（ツール）**ドロップダウンメニューを使ってチェックできます。 詳しい情報については、「[リポジトリの {% data variables.product.prodname_code_scanning %} アラートを管理する](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)」を参照してください。

## 分析と診断情報について

{% data variables.product.prodname_code_scanning %}の実行に対する分析と診断情報は、{% data variables.product.prodname_dotcom %}上の{% data variables.product.prodname_codeql %}分析を使用して見ることができます。

**分析**情報は、アラートのリストの上部のヘッダ内の最新の分析に対して表示されます。 詳しい情報については、「[リポジトリの Code scanningアラートを管理する](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)」を参照してください。

**診断**情報はActionワークフローログに表示され、サマリメトリクスと抽出診断からなります。 {% data variables.product.prodname_dotcom %}上の{% data variables.product.prodname_code_scanning %}ログへのアクセスに関する情報については、以下の「[{% data variables.product.prodname_code_scanning %}からのロギング出力の表示](#viewing-the-logging-output-from-code-scanning)を参照してください。

{% data variables.product.prodname_dotcom %}の外部で{% data variables.product.prodname_codeql_cli %}を使っているなら、診断情報はデータベース分析の間に生成された出力中に示されます。 この情報は、{% data variables.product.prodname_code_scanning %}の結果とともに{% data variables.product.prodname_dotcom %}にアップロードするSARIF結果ファイル中にも含まれています。

{% data variables.product.prodname_codeql_cli %}に関する情報については「[CIシステムでの{% data variables.product.prodname_codeql_cli %}の実行](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/running-codeql-cli-in-your-ci-system#viewing-log-and-diagnostic-information)」を参照してください。

### サマリメトリクスについて

{% data reusables.code-scanning.summary-metrics %}

### {% data variables.product.prodname_codeql %}ソースコード抽出診断について

{% data reusables.code-scanning.extractor-diagnostics %}

{% endif %}
## {% data variables.product.prodname_code_scanning %} からログ出力を表示する

このセクションは、{% data variables.product.prodname_actions %}を使って実行される{% data variables.product.prodname_code_scanning %}（{% data variables.product.prodname_codeql %}あるいはサードパーティ）に適用されます。

リポジトリで{% data variables.product.prodname_code_scanning %}をセットアップしたら、アクションが実行されるとその出力を見ることができます。

{% data reusables.repositories.actions-tab %}

  {% data variables.product.prodname_code_scanning %} ワークフローを実行するためのエントリを含むリストが表示されます。 エントリのテキストは、コミットメッセージに付けるタイトルです。

  ![{% data variables.product.prodname_code_scanning %} ワークフローを表示しているアクションのリスト](/assets/images/help/repository/code-scanning-actions-list.png)

1. {% data variables.product.prodname_code_scanning %} ワークフローのエントリをクリックします。

2. 左側のジョブ名をクリックします。 ここでは例として、[**Analyze (言語)**] をクリックします。

  ![{% data variables.product.prodname_code_scanning %} ワークフローからのログ出力](/assets/images/help/repository/code-scanning-logging-analyze-action.png)

1. このワークフローの実行時にアクションから出力されるログを確認します。

1. すべてのジョブが完了すると、確認されたすべての {% data variables.product.prodname_code_scanning %} アラートの詳細を表示できます。 詳しい情報については、「[リポジトリの {% data variables.product.prodname_code_scanning %} アラートを管理する](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)」を参照してください。

{% note %}

**注釈:** {% data variables.product.prodname_code_scanning %} ワークフローを追加するためのプルリクエストをリポジトリに発行すると、そのプルリクエストからのアラートは、そのプルリクエストがマージされるまで {% data variables.product.prodname_code_scanning_capc %} ページに直接表示されません。 アラートが見つかった場合は、プルリクエストがマージされる前に、{% data variables.product.prodname_code_scanning_capc %} ページのバナーにある [**_(数字)_ alerts found**] をクリックしてそのアラートを表示できます。

{% ifversion fpt or ghes > 3.1 %}
  ![[n alerts found] のリンクをクリック](/assets/images/help/repository/code-scanning-alerts-found-link.png)
{% else %}
  ![[n alerts found] のリンクをクリック](/assets/images/enterprise/3.1/help/repository/code-scanning-alerts-found-link.png)
{% endif %}

{% endnote %}
