---
title: プルリクエストでコードスキャンアラートをトリガーする
shortTitle: プルリクエストでアラートをトリガーする
intro: 'プルリクエストで {% data variables.product.prodname_code_scanning %} が問題を特定した場合、強調表示されたコードを確認してアラートを解決できます。'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have read permission for a repository, you can see annotations on pull requests. With write permission, you can see detailed information and resolve {% data variables.product.prodname_code_scanning %} alerts for that repository.'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests
  - /code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Pull requests
  - Alerts
  - Repositories
---

<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->

{% data reusables.code-scanning.beta %}

### プルリクエストの {% data variables.product.prodname_code_scanning %} 結果について

プルリクエストのチェック用に {% data variables.product.prodname_code_scanning %} が設定されているリポジトリでは、{% data variables.product.prodname_code_scanning %}がプルリクエストのコードをチェックします。 デフォルトでは、このチェックはデフォルトブランチを対象とするプルリクエストに限定されていますが、この設定は {% data variables.product.prodname_actions %} またはサードパーティの CI/CD システム内で変更できます。 変更をマージすることで、対象となるブランチに新たな {% data variables.product.prodname_code_scanning %} アラートが発生する場合には、そのアラートはプルリクエストのチェック結果として報告されます。 また、アラートではプルリクエストの [**Files changed**] タブでアノテーションとしても表示されます。 リポジトリへの書き込み権限がある場合、既存のすべての {% data variables.product.prodname_code_scanning %} アラートを [**Security**] タブで表示できます。 リポジトリのアラートに関する詳しい情報については、「[リポジトリの {% data variables.product.prodname_code_scanning %} アラートを管理する](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)」を参照してください。

{% data variables.product.prodname_code_scanning %} の結果に、重大度が `error` のものがある場合、そのチェックは失敗し、チェック結果でエラーが報告されます。 {% data variables.product.prodname_code_scanning %} で出たすべての結果の重大度が低い場合、アラートは警告または通知として扱われ、チェックは成功となります。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}You can override the default behavior in your repository settings, by specifying the level of severities that will cause a pull request check failure. For more information, see "[Defining the alert severities causing pull request check failure](/code-security/secure-coding/configuring-code-scanning#defining-the-alert-severities-causing-pull-request-check-failure)".

{% endif %}If your pull request targets a protected branch that uses {% data variables.product.prodname_code_scanning %}, and the repository owner has configured required status checks, then you must either fix or dismiss all error alerts before the pull request can be merged. 詳しい情報については[保護されたブランチについて](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)を参照してください。

![プルリクエストの失敗した {% data variables.product.prodname_code_scanning %} チェック](/assets/images/help/repository/code-scanning-check-failure.png)

### プルリクエストのチェックとしての {% data variables.product.prodname_code_scanning %} について

{% data variables.product.prodname_code_scanning %} をプルリクエストのチェックとして設定するためのオプションは多いので、正確なセットアップはそれぞれのリポジトリで異なり、複数のチェックを行う場合もあります。 {% data variables.product.prodname_code_scanning %} の結果を含むチェックは、[**Code scanning results**] です。

リポジトリが {% data variables.product.prodname_codeql_workflow %} を使用している場合、**{% data variables.product.prodname_codeql %} / Analyze (LANGUAGE)** チェックを各言語で実行してから、結果チェックを実行します。 設定に問題がある場合、解析がコンパイルする必要がある言語 (C/C++、C#、Java など) でプルリクエストがビルドを中断している場合、解析は失敗することがあります。 他のプルリクエストと同様、チェック失敗の詳細内容を [**Checks**] タブで確認できます。 設定およびトラブルシューティングに関する詳しい情報については、「[{% data variables.product.prodname_code_scanning %} を設定する](/code-security/secure-coding/configuring-code-scanning)」または「[{% data variables.product.prodname_codeql %} ワークフローのトラブルシューティング](/code-security/secure-coding/troubleshooting-the-codeql-workflow)」を参照してください。

### プルリクエストのアラートをトリガーする

プルリクエストの [**Files changed**] タブを見ると、アラートをトリガーしたコードの行にあるアノテーションがあります。

![プルリクエストの差分にあるアラートのアノテーション](/assets/images/help/repository/code-scanning-pr-annotation.png)

リポジトリへの書き込み権限がある場合、一部のアノテーションにはアラートの追加的な背景を説明するリンクが含まれています。 上の例では、{% data variables.product.prodname_codeql %} 解析から [**user-provided value**] をクリックすると、データフローに信頼されていないデータが入っている場所 (ソース) が表示されます。 この場合、[**Show paths**] をクリックすることで、ソースからデータ (シンク) を使用するコードまでのフルパスを表示することもできます。 これにより、データが信頼されていないかや、ソースとシンクの間のデータサニタイズのステップを解析が認識できなかったかを簡単に確認できます。 {% data variables.product.prodname_codeql %} を使用したデータフローの解析に関する詳しい情報については、「[データフロー解析について](https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/)」を参照してください。

アラートの詳細情報を表示するには、書き込み権限を持つユーザが、アノテーションに表示されている [**Show more details**] のリンクをクリックします。 これにより、ツールが提供するコンテキストとメタデータのすべてをアラートビューで確認できます。 下の例では、問題の重要度、タイプ、および関連する共通脆弱性タイプ一覧 (CWE) を示すタグが表示されています。 また、どのコミットが問題を引き起したかも表示されています。

アラートの詳細画面において、{% data variables.product.prodname_codeql %} 解析のような一部の {% data variables.product.prodname_code_scanning %} ツールでは、問題の説明や、コードを修正する方法を説明するためる [**Show more**] リンクも含まれています。

![アラートの説明と、詳細情報を表示するリンク](/assets/images/help/repository/code-scanning-pr-alert.png)

### Fixing an alert on your pull request

プルリクエストへのプッシュアクセスがあるユーザなら誰でも、プルリクエストで特定された {% data variables.product.prodname_code_scanning %} アラートを解決できます。 プルリクエストに変更をコミットすると、プルリクエストのチェック実行が新しくトリガーされます。 問題を修正すると、アラートは閉じられ、アノテーションは削除されます。

### Dismissing an alert on your pull request

An alternative way of closing an alert is to dismiss it. You can dismiss an alert if you don't think it needs to be fixed. {% data reusables.code-scanning.close-alert-examples %} If you have write permission for the repository, the **Dismiss** button is available in code annotations and in the alerts summary. When you click **Dismiss** you will be prompted to choose a reason for closing the alert.

![Choosing a reason for dismissing an alert](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

{% data reusables.code-scanning.choose-alert-dismissal-reason %}

{% data reusables.code-scanning.false-positive-fix-codeql %}

For more information about dismissing alerts, see "[Managing {% data variables.product.prodname_code_scanning %} alerts for your repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#dismissing-or-deleting-alerts)."
