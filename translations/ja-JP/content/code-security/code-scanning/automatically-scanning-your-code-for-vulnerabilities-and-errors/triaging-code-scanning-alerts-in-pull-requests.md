---
title: Pull RequestでCode scanningアラートをトリアージする
shortTitle: Triage alerts in pull requests
intro: 'Pull Requestで {% data variables.product.prodname_code_scanning %} が問題を特定した場合、強調表示されたコードを確認してアラートを解決できます。'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have read permission for a repository, you can see annotations on pull requests. With write permission, you can see detailed information and resolve {% data variables.product.prodname_code_scanning %} alerts for that repository.'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests
  - /code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Pull requests
  - Alerts
  - Repositories
ms.openlocfilehash: f73b0ef30b4512bc951fdbae4ae2f3c300e4c534
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/11/2022
ms.locfileid: '148162743'
---
{% data reusables.code-scanning.beta %}

## Pull Requestの {% data variables.product.prodname_code_scanning %} 結果について

プルリクエストのチェック用に {% data variables.product.prodname_code_scanning %} が設定されているリポジトリでは、{% data variables.product.prodname_code_scanning %}がプルリクエストのコードをチェックします。 デフォルトでは、このチェックはデフォルトブランチを対象とするプルリクエストに限定されていますが、この設定は {% data variables.product.prodname_actions %} またはサードパーティの CI/CD システム内で変更できます。 変更をマージすることで、対象となるブランチに新たな {% data variables.product.prodname_code_scanning %} アラートが発生する場合には、そのアラートは複数の場所で報告されます。

- pull request のチェック結果 {% ifversion code-scanning-pr-conversations-tab %}
- pull request の **[会話]** タブ (pull request レビューの一部として) {% endif %} 
- pull request の **[変更されたファイル]** タブ

リポジトリへの書き込み権限がある場合は、 **[セキュリティ]** タブに既存の {% data variables.product.prodname_code_scanning %} アラートが表示されます。リポジトリ アラートの詳細については、「[リポジトリの {% data variables.product.prodname_code_scanning %} アラートの管理](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)」を参照してください。

タイム コードがプッシュされるたびにスキャンされるように {% data variables.product.prodname_code_scanning %} が設定されているリポジトリでは、{% data variables.product.prodname_code_scanning %} の結果がすべてのオープンな pull request にマップされ、アラートは他の pull request でチェックされるのと同じ場所にアノテーションとして追加されます。 詳細については、「[プッシュ時のスキャン](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-on-push)」を参照してください。

pull request が {% data variables.product.prodname_code_scanning %} を使用する保護されたブランチをターゲットとし、リポジトリの所有者が必要なステータス チェックを設定している場合、pull request をマージするには "{% data variables.product.prodname_code_scanning_capc %} の結果" チェックに合格する必要があります。 詳細については、「[保護されたブランチについて](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)」を参照してください。

## Pull Requestのチェックとしての {% data variables.product.prodname_code_scanning %} について

{% data variables.product.prodname_code_scanning %} をプルリクエストのチェックとして設定するためのオプションは多いので、正確なセットアップはそれぞれのリポジトリで異なり、複数のチェックを行う場合もあります。 

### {% data variables.product.prodname_code_scanning_capc %} の結果チェック

{% data variables.product.prodname_code_scanning %} のすべての設定で、{% data variables.product.prodname_code_scanning %} の結果を含むチェックが、 **{% data variables.product.prodname_code_scanning_capc %} の結果** です。 使用される分析ツールの結果はそれぞれ個別に表示されます。 pull request の変更によって発生した新しいアラートは、すべてアノテーションとして表示されます。 

分析されたブランチのアラートの完全なセットを表示するには、 **[すべてのブランチ アラートを表示する]** をクリックします。 これにより、ブランチのすべてのアラートを種類、重大度、タグなどでフィルター処理できる完全なアラート ビューが開きます。詳細については、「[リポジトリの code scanning アラートの管理](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#filtering-and-searching-for-code-scanning-alerts)」を参照してください。

![pull request の {% data variables.product.prodname_code_scanning_capc %} の結果チェック](/assets/images/help/repository/code-scanning-results-check.png)

### {% data variables.product.prodname_code_scanning_capc %} の結果チェックのエラー

{% data variables.product.prodname_code_scanning %} の結果チェックで、重大度が `error`、`critical`、または `high` の問題が検出された場合、チェックは失敗し、チェック結果にエラーが報告されます。 {% data variables.product.prodname_code_scanning %} で検出されたすべての結果の重大度が低い場合、アラートは警告または通知として扱われ、チェックは成功となります。

![プルリクエストの失敗した {% data variables.product.prodname_code_scanning %} チェック](/assets/images/help/repository/code-scanning-check-failure.png)

リポジトリ設定で既定の動作をオーバーライドできます。そのためには、重大度のレベルと、pull request のチェック エラーが発生するセキュリティ重大度を指定します。 詳細については、「[pull request チェック エラーの原因となっている重大度の定義](/code-security/secure-coding/configuring-code-scanning#defining-the-severities-causing-pull-request-check-failure)」を参照してください。

### その他の{% data variables.product.prodname_code_scanning %} チェック

設定によっては、{% data variables.product.prodname_code_scanning %} が設定された pull request で実行される追加のチェックが表示される場合があります。 これらは通常、コードを分析する、または{% data variables.product.prodname_code_scanning %} の結果をアップロードするワークフローです。 これらのチェックは、分析に問題がある場合のトラブルシューティングに役立ちます。 

たとえば、リポジトリが {% data variables.code-scanning.codeql_workflow %} を使用している場合、 **{% data variables.product.prodname_codeql %} / 分析 (言語)** チェックを各言語で実行してから、結果チェックを実行します。 設定に問題がある場合、解析がコンパイルする必要がある言語 (C/C++、C#、Java など) でプルリクエストがビルドを中断している場合、解析は失敗することがあります。 

他の pull request のチェックと同様に、 **[チェック]** タブでチェック エラーの詳細を確認できます。設定とトラブルシューティングの詳細については、「[{% data variables.product.prodname_code_scanning %} の設定](/code-security/secure-coding/configuring-code-scanning)」または「[{% data variables.product.prodname_codeql %} ワークフローのトラブルシューティング](/code-security/secure-coding/troubleshooting-the-codeql-workflow)」を参照してください。

## pull request でのアラートの表示

{% ifversion code-scanning-pr-conversations-tab %} **[会話]** タブを表示すると、pull request で発生した {% data variables.product.prodname_code_scanning %} アラートを確認できます。{% data variables.product.prodname_code_scanning_capc %} は、アラートのトリガーとなったコード行に注釈として各アラートを表示する pull request レビューを提示します。 注釈から直接、アラートにコメントを付け、アラートを無視し、アラートのパスを表示できます。 アラートの詳細を表示するには、[詳細の表示] リンクをクリックします。すると、アラートの詳細ページに移動します。

![pull request の [会話] タブでのアラートの注釈](/assets/images/help/repository/code-scanning-pr-conversation-tab.png)

pull request の **[変更されたファイル]** タブで、すべての {% data variables.product.prodname_code_scanning %} アラートを表示することもできます。 pull request によって加えられた変更の差分に含まれない、ファイルに対する既存の {% data variables.product.prodname_code_scanning %} アラートは、 **[変更されたファイル]** タブにのみ表示されます。

{% else %}pull request によって加えられた {% data variables.product.prodname_code_scanning %} アラートは、 **[変更されたファイル]** タブを表示することで確認できます。各アラートは、アラートのトリガーとなったコード行に注釈として表示されます。 アノテーションにはアラートの重大度が表示されます。 

![pull request の差分にあるアラートの注釈](/assets/images/help/repository/code-scanning-pr-annotation.png) {% endif %}

リポジトリへの書き込み権限がある場合、一部のアノテーションにはアラートの追加的な背景を説明するリンクが含まれています。 上の例では、{% data variables.product.prodname_codeql %} 分析から **[ユーザー指定の値]** をクリックすると、データ フローに信頼されていないデータが入っている場所 (ソース) が表示されます。 この場合、 **[パスの表示]** をクリックすることで、ソースからデータ (シンク) を使用するコードまでのフル パスを表示することもできます。 これにより、データが信頼されていないかや、ソースとシンクの間のデータサニタイズのステップを解析が認識できなかったかを簡単に確認できます。 {% data variables.product.prodname_codeql %} を使用したデータ フローの分析については、「[データ フロー分析について](https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/)」を参照してください。

アラートの詳細情報を表示するには、書き込み権限を持つユーザが、アノテーションに表示されている **[詳細を表示]** のリンクをクリックします。 これにより、ツールが提供するコンテキストとメタデータのすべてをアラートビューで確認できます。 下の例では、問題の重要度、タイプ、および関連する共通脆弱性タイプ一覧 (CWE) を示すタグが表示されています。 また、どのコミットが問題を引き起したかも表示されています。

{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} {% data reusables.code-scanning.alert-default-branch %} {% endif %}

アラートの詳細画面において、{% data variables.product.prodname_codeql %} 分析のような一部の{% data variables.product.prodname_code_scanning %} ツールでは、問題の説明や、コードを修正する方法を説明するための **[詳細を表示]** リンクも含まれています。

{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} ![アラートの説明と詳しい情報へのリンク](/assets/images/help/repository/code-scanning-pr-alert.png) {% else %} ![アラートの説明と詳しい情報へのリンク](/assets/images/enterprise/3.4/repository/code-scanning-pr-alert.png) {% endif %}

{% ifversion code-scanning-pr-conversations-tab %}
## pull request のアラートに対するコメント

pull request での変更によって発生した {% data variables.product.prodname_code_scanning %} アラートにコメントを付けることができます。 アラートは、pull request レビューの一環として pull request の **[会話]** タブに注釈として表示され、 **[変更されたファイル]** タブにも表示されます。pull request での変更によって発生したアラートに対してのみコメントできます。 pull request で加えられた変更に含まれない、ファイルに対する既存の {% data variables.product.prodname_code_scanning %} アラートは、 **[変更されたファイル]** タブに表示されますが、コメントすることはできません。

pull request をマージする前に pull request でのすべての会話 ({% data variables.product.prodname_code_scanning %} アラートに関するものを含む) を解決するように要求することを選べます。 詳細については、「[保護されたブランチについて](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-conversation-resolution-before-merging)」を参照してください。
{% endif %}
## Pull Requestのアラートの修正

プルリクエストへのプッシュアクセスがあるユーザなら誰でも、プルリクエストで特定された {% data variables.product.prodname_code_scanning %} アラートを解決できます。 プルリクエストに変更をコミットすると、プルリクエストのチェック実行が新しくトリガーされます。 問題を修正すると、アラートは閉じられ、アノテーションは削除されます。

## Pull Requestのアラートの却下

アラートを閉じる別の方法として、却下する方法があります。 修正する必要がないと考えられる場合は、アラートを却下できます。 {% data reusables.code-scanning.close-alert-examples %} リポジトリに書き込み権限を持っているなら、コードのアノテーションとアラートのサマリで **[却下]** ボタンが利用できます。 **[却下]** をクリックすると、アラートをクローズする理由の選択が求められます。
{% ifversion comment-dismissed-code-scanning-alert %} ![Code Scanning アラートのスクリーンショット。無視する理由を選ぶドロップダウンが強調されています](/assets/images/help/repository/code-scanning-alert-dropdown-reason.png) {% else %} ![アラートを無視する理由を選ぶ](/assets/images/help/repository/code-scanning-alert-close-drop-down.png) {% endif %} {% data reusables.code-scanning.choose-alert-dismissal-reason %}

{% data reusables.code-scanning.false-positive-fix-codeql %}

アラートの無視に関する詳しい情報については、{% ifversion delete-code-scanning-alerts %}「[リポジトリの {% data variables.product.prodname_code_scanning %} アラートの管理](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#dismissing-or-deleting-alerts)」を参照してください。{% else %}「[リポジトリの {% data variables.product.prodname_code_scanning %} アラートの管理](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#dismissing--alerts)」を参照してください。{% endif %}
