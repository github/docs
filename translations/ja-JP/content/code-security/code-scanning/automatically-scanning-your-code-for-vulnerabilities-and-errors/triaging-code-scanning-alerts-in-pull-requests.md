---
title: プルリクエストでコードスキャンアラートをトリガーする
shortTitle: Pull Requestでアラートをトリアージする
intro: 'プルリクエストで {% data variables.product.prodname_code_scanning %} が問題を特定した場合、強調表示されたコードを確認してアラートを解決できます。'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have read permission for a repository, you can see annotations on pull requests. With write permission, you can see detailed information and resolve {% data variables.product.prodname_code_scanning %} alerts for that repository.'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests
  - /code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests
versions:
  fpt: '*'
  ghes: '>=3.0'
  ghae: '*'
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

## プルリクエストの {% data variables.product.prodname_code_scanning %} 結果について

プルリクエストのチェック用に {% data variables.product.prodname_code_scanning %} が設定されているリポジトリでは、{% data variables.product.prodname_code_scanning %}がプルリクエストのコードをチェックします。 デフォルトでは、このチェックはデフォルトブランチを対象とするプルリクエストに限定されていますが、この設定は {% data variables.product.prodname_actions %} またはサードパーティの CI/CD システム内で変更できます。 変更をマージすることで、対象となるブランチに新たな {% data variables.product.prodname_code_scanning %} アラートが発生する場合には、そのアラートはプルリクエストのチェック結果として報告されます。 また、アラートではプルリクエストの [**Files changed**] タブでアノテーションとしても表示されます。 リポジトリへの書き込み権限がある場合、既存のすべての {% data variables.product.prodname_code_scanning %} アラートを [**Security**] タブで表示できます。 リポジトリのアラートに関する詳しい情報については、「[リポジトリの {% data variables.product.prodname_code_scanning %} アラートを管理する](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)」を参照してください。
{% ifversion fpt or ghes > 3.2 or ghae-issue-5093 %}
In repositories where {% data variables.product.prodname_code_scanning %} is configured to scan each time code is pushed, {% data variables.product.prodname_code_scanning %} will also map the results to any open pull requests and add the alerts as annotations in the same places as other pull request checks. For more information, see "[Scanning on push](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-on-push)."
{% endif %}

If your pull request targets a protected branch that uses {% data variables.product.prodname_code_scanning %}, and the repository owner has configured required status checks, then the "{% data variables.product.prodname_code_scanning_capc %} results" check must pass before you can merge the pull request. 詳しい情報については[保護されたブランチについて](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)を参照してください。

## プルリクエストのチェックとしての {% data variables.product.prodname_code_scanning %} について

{% data variables.product.prodname_code_scanning %} をプルリクエストのチェックとして設定するためのオプションは多いので、正確なセットアップはそれぞれのリポジトリで異なり、複数のチェックを行う場合もあります。

### {% data variables.product.prodname_code_scanning_capc %} results check

For all configurations of {% data variables.product.prodname_code_scanning %}, the check that contains the results of {% data variables.product.prodname_code_scanning %} is: **{% data variables.product.prodname_code_scanning_capc %} results**. The results for each analysis tool used are shown separately. Any new alerts caused by changes in the pull request are shown as annotations.

{% ifversion fpt or ghes > 3.2 or ghae-issue-4902 %} To see the full set of alerts for the analyzed branch, click **View all branch alerts**. This opens the full alert view where you can filter all the alerts on the branch by type, severity, tag, etc. 詳しい情報については、「[リポジトリの Code scanningアラートを管理する](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#filtering-and-searching-for-code-scanning-alerts)」を参照してください。

![{% data variables.product.prodname_code_scanning_capc %} results check on a pull request](/assets/images/help/repository/code-scanning-results-check.png)
{% endif %}

### {% data variables.product.prodname_code_scanning_capc %} results check failures

If the {% data variables.product.prodname_code_scanning %} results check finds any problems with a severity of `error`{% ifversion fpt or ghes > 3.1  or ghae-issue-4697 %}, `critical`, or `high`,{% endif %} the check fails and the error is reported in the check results. If all the results found by {% data variables.product.prodname_code_scanning %} have lower severities, the alerts are treated as warnings or notes and the check succeeds.

![プルリクエストの失敗した {% data variables.product.prodname_code_scanning %} チェック](/assets/images/help/repository/code-scanning-check-failure.png)

{% ifversion fpt or ghes > 3.1 or ghae-next %}You can override the default behavior in your repository settings, by specifying the level of severities {% ifversion fpt or ghes > 3.1  or ghae-issue-4697 %}and security severities {% endif %}that will cause a pull request check failure. For more information, see "[Defining the severities causing pull request check failure](/code-security/secure-coding/configuring-code-scanning#defining-the-severities-causing-pull-request-check-failure)".
{% endif %}

### Other {% data variables.product.prodname_code_scanning %} checks

Depending on your configuration, you may see additional checks running on pull requests with {% data variables.product.prodname_code_scanning %} configured. These are usually workflows that analyze the code or that upload {% data variables.product.prodname_code_scanning %} results. These checks are useful for troubleshooting when there are problems with the analysis.

For example, if the repository uses the {% data variables.product.prodname_codeql_workflow %} a **{% data variables.product.prodname_codeql %} / Analyze (LANGUAGE)** check is run for each language before the results check runs. 設定に問題がある場合、解析がコンパイルする必要がある言語 (C/C++、C#、Java など) でプルリクエストがビルドを中断している場合、解析は失敗することがあります。

他のプルリクエストと同様、チェック失敗の詳細内容を [**Checks**] タブで確認できます。 設定およびトラブルシューティングに関する詳しい情報については、「[{% data variables.product.prodname_code_scanning %} を設定する](/code-security/secure-coding/configuring-code-scanning)」または「[{% data variables.product.prodname_codeql %} ワークフローのトラブルシューティング](/code-security/secure-coding/troubleshooting-the-codeql-workflow)」を参照してください。

## Viewing an alert on your pull request

You can see any {% data variables.product.prodname_code_scanning %} alerts introduced in a pull request by displaying the **Files changed** tab. Each alert is shown as an annotation on the lines of code that triggered the alert. The severity of the alert is displayed in the annotation.

![プルリクエストの差分にあるアラートのアノテーション](/assets/images/help/repository/code-scanning-pr-annotation.png)

リポジトリへの書き込み権限がある場合、一部のアノテーションにはアラートの追加的な背景を説明するリンクが含まれています。 上の例では、{% data variables.product.prodname_codeql %} 解析から [**user-provided value**] をクリックすると、データフローに信頼されていないデータが入っている場所 (ソース) が表示されます。 この場合、[**Show paths**] をクリックすることで、ソースからデータ (シンク) を使用するコードまでのフルパスを表示することもできます。 これにより、データが信頼されていないかや、ソースとシンクの間のデータサニタイズのステップを解析が認識できなかったかを簡単に確認できます。 {% data variables.product.prodname_codeql %} を使用したデータフローの解析に関する詳しい情報については、「[データフロー解析について](https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/)」を参照してください。

アラートの詳細情報を表示するには、書き込み権限を持つユーザが、アノテーションに表示されている [**Show more details**] のリンクをクリックします。 これにより、ツールが提供するコンテキストとメタデータのすべてをアラートビューで確認できます。 下の例では、問題の重要度、タイプ、および関連する共通脆弱性タイプ一覧 (CWE) を示すタグが表示されています。 また、どのコミットが問題を引き起したかも表示されています。

アラートの詳細画面において、{% data variables.product.prodname_codeql %} 解析のような一部の {% data variables.product.prodname_code_scanning %} ツールでは、問題の説明や、コードを修正する方法を説明するためる [**Show more**] リンクも含まれています。

![アラートの説明と、詳細情報を表示するリンク](/assets/images/help/repository/code-scanning-pr-alert.png)

## Pull Requestのアラートの修正

プルリクエストへのプッシュアクセスがあるユーザなら誰でも、プルリクエストで特定された {% data variables.product.prodname_code_scanning %} アラートを解決できます。 プルリクエストに変更をコミットすると、プルリクエストのチェック実行が新しくトリガーされます。 問題を修正すると、アラートは閉じられ、アノテーションは削除されます。

## Pull Requestのアラートの却下

アラートを閉じる別の方法として、却下する方法があります。 修正する必要がないと考えられる場合は、アラートを却下できます。 {% data reusables.code-scanning.close-alert-examples %} リポジトリに書き込み権限を持っているなら、コードのアノテーションとアラートのサマリで**Dismiss（却下）**ボタンが利用できます。 **Dismiss（却下）**をクリックすると、アラートをクローズする理由を選択することが求められます。

![アラートを却下する理由の選択](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

{% data reusables.code-scanning.choose-alert-dismissal-reason %}

{% data reusables.code-scanning.false-positive-fix-codeql %}

アラートの却下に関する詳しい情報については「[リポジトリの{% data variables.product.prodname_code_scanning %}アラートの管理](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#dismissing-or-deleting-alerts)」を参照してください。
