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
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Security
shortTitle: View code scanning logs
ms.openlocfilehash: e4f4c3e601540e02c01bbe3761a11528a746a519
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147444630'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## {% data variables.product.prodname_code_scanning %}のセットアップについて 

リポジトリでの{% data variables.product.prodname_code_scanning %}のセットアップには、様々なツールを使うことができます。 詳細については、「[リポジトリの{% data variables.product.prodname_code_scanning %} の設定](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#options-for-setting-up-code-scanning)」を参照してください。

利用できるログと診断情報は、リポジトリ中での{% data variables.product.prodname_code_scanning %}の利用方法によります。 使用している{% data variables.product.prodname_code_scanning %}の種類を確認するには、リポジトリの **[セキュリティ]** タブで、アラート一覧の **[ツール]** ドロップダウン メニューを使用します。 詳細については、「[リポジトリの {% data variables.product.prodname_code_scanning %} アラートの管理](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)」を参照してください。

## 分析と診断情報について

{% data variables.product.prodname_code_scanning %}の実行に対する分析と診断情報は、{% data variables.product.prodname_dotcom %}上の{% data variables.product.prodname_codeql %}分析を使用して見ることができます。 

アラート一覧の上部にあるヘッダーに、最新の分析に関する **分析** 情報が表示されます。 詳細については、「[リポジトリの Code Scanning アラートの管理](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)」を参照してください。

**診断** 情報は [アクション] ワークフロー ログに表示され、概要メトリックと抽出診断からなります。 {% data variables.product.prodname_dotcom %} の {% data variables.product.prodname_code_scanning %} ログへのアクセスの詳細については、以下の「[{% data variables.product.prodname_code_scanning %}からのログ出力の表示](#viewing-the-logging-output-from-code-scanning)」を参照してください。

{% data variables.product.prodname_dotcom %}の外部で{% data variables.product.prodname_codeql_cli %}を使っているなら、診断情報はデータベース分析の間に生成された出力中に示されます。 この情報は、{% data variables.product.prodname_code_scanning %}の結果とともに{% data variables.product.prodname_dotcom %}にアップロードするSARIF結果ファイル中にも含まれています。

{% data variables.product.prodname_codeql_cli %} の詳細については、「[CI システムでの {% data variables.product.prodname_codeql_cli %} の構成](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system#viewing-log-and-diagnostic-information)」を参照してください。

### サマリメトリクスについて

{% data reusables.code-scanning.summary-metrics %}

### {% data variables.product.prodname_codeql %}ソースコード抽出診断について

{% data reusables.code-scanning.extractor-diagnostics %}

{% ifversion codeql-action-debug-logging %}

デバッグ ログを有効にすると、データベースの作成時に発生した {% data variables.product.prodname_codeql %} 抽出子のエラーと警告に関する詳しい情報を確認できます。 詳しくは、「[CodeQL ワークフローのトラブルシューティング](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow#creating-codeql-debugging-artifacts-by-re-running-jobs-with-debug-logging-enabled)」を参照してください。

{% endif %}

## {% data variables.product.prodname_code_scanning %} からログ出力を表示する

このセクションは、{% data variables.product.prodname_actions %}を使って実行される{% data variables.product.prodname_code_scanning %}（{% data variables.product.prodname_codeql %}あるいはサードパーティ）に適用されます。

リポジトリで{% data variables.product.prodname_code_scanning %}をセットアップしたら、アクションが実行されるとその出力を見ることができます。

{% data reusables.repositories.actions-tab %}

  {% data variables.product.prodname_code_scanning %} ワークフローを実行するためのエントリを含むリストが表示されます。 エントリのテキストは、コミットメッセージに付けるタイトルです。

  ![{% data variables.product.prodname_code_scanning %} ワークフローを表示しているアクションのリスト](/assets/images/help/repository/code-scanning-actions-list.png)

1. {% data variables.product.prodname_code_scanning %} ワークフローのエントリをクリックします。

2. 左側のジョブ名をクリックします。 たとえば、 **[分析 (言語)]** です。

  ![{% data variables.product.prodname_code_scanning %} ワークフローからのログ出力](/assets/images/help/repository/code-scanning-logging-analyze-action.png)

1. このワークフローの実行時にアクションから出力されるログを確認します。

1. すべてのジョブが完了すると、確認されたすべての {% data variables.product.prodname_code_scanning %} アラートの詳細を表示できます。 詳細については、「[リポジトリの {% data variables.product.prodname_code_scanning %} アラートの管理](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)」を参照してください。

{% note %}

**注釈:** {% data variables.product.prodname_code_scanning %} ワークフローを追加するための pull request をリポジトリに発行すると、その pull request からのアラートは、その pull request がマージされるまで {% data variables.product.prodname_code_scanning_capc %} ページに直接表示されません。 アラートが見つかった場合は、pull request がマージされる前に、{% data variables.product.prodname_code_scanning_capc %} ページのバナーにある **[_n_ のアラートを検出]** リンクをクリックして表示できます。

![[n alerts found]\(n 件のアラートが見つかりました\) リンクをクリックします](/assets/images/help/repository/code-scanning-alerts-found-link.png)

{% endnote %}
