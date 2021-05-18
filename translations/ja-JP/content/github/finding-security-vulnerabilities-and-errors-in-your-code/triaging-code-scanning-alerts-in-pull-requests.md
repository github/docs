---
title: プルリクエストでコードスキャンアラートをトリガーする
shortTitle: プルリクエストでアラートをトリガーする
intro: 'プルリクエストで {% data variables.product.prodname_code_scanning %} が問題を特定した場合、強調表示されたコードを確認してアラートを解決できます。'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have read permission for a repository, you can see annotations on pull requests. With write permission, you can see detailed information and resolve {% data variables.product.prodname_code_scanning %} alerts for that repository.'
versions:
  enterprise-server: '2.22'
topics:
  - Security
---

<!--See /content/code-security/secure-coding for the latest version of this article -->

{% data reusables.code-scanning.beta %}

### プルリクエストの {% data variables.product.prodname_code_scanning %} 結果について

プルリクエストのチェック用に {% data variables.product.prodname_code_scanning %} が設定されているリポジトリでは、{% data variables.product.prodname_code_scanning %}がプルリクエストのコードをチェックします。 デフォルトでは、このチェックはデフォルトブランチを対象とするプルリクエストに限定されていますが、この設定は {% data variables.product.prodname_actions %} またはサードパーティの CI/CD システム内で変更できます。 変更をマージすることで、対象となるブランチに新たな {% data variables.product.prodname_code_scanning %} アラートが発生する場合には、そのアラートはプルリクエストのチェック結果として報告されます。 また、アラートではプルリクエストの [**Files changed**] タブでアノテーションとしても表示されます。 リポジトリへの書き込み権限がある場合、既存のすべての {% data variables.product.prodname_code_scanning %} アラートを [**Security**] タブで表示できます。 リポジトリのアラートに関する詳しい情報については、「[リポジトリの {% data variables.product.prodname_code_scanning %} アラートを管理する](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository)」を参照してください。

{% data variables.product.prodname_code_scanning %} の結果に、重大度が `error` のものがある場合、そのチェックは失敗し、チェック結果でエラーが報告されます。 {% data variables.product.prodname_code_scanning %} で出たすべての結果の重大度が低い場合、アラートは警告または通知として扱われ、チェックは成功となります。 プルリクエストのターゲットが {% data variables.product.prodname_code_scanning %} を使用する保護されたブランチで、リポジトリの所有者がステータスチェック必須を設定している場合、すべてのエラーアラートを解決するか閉じない限り、そのプルリクエストはマージできません。 詳しい情報については[保護されたブランチについて](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)を参照してください。

![プルリクエストの失敗した {% data variables.product.prodname_code_scanning %} チェック](/assets/images/help/repository/code-scanning-check-failure.png)

### プルリクエストのチェックとしての {% data variables.product.prodname_code_scanning %} について

{% data variables.product.prodname_code_scanning %} をプルリクエストのチェックとして設定するためのオプションは多いので、正確なセットアップはそれぞれのリポジトリで異なり、複数のチェックを行う場合もあります。 {% data variables.product.prodname_code_scanning %} の結果を含むチェックは、[**Code scanning results**] です。

リポジトリが {% data variables.product.prodname_codeql_workflow %} を使用している場合、**{% data variables.product.prodname_codeql %} / Analyze (LANGUAGE)** チェックを各言語で実行してから、結果チェックを実行します。 設定に問題がある場合、解析がコンパイルする必要がある言語 (C/C++、C#、Java など) でプルリクエストがビルドを中断している場合、解析は失敗することがあります。 他のプルリクエストと同様、チェック失敗の詳細内容を [**Checks**] タブで確認できます。 設定およびトラブルシューティングに関する詳しい情報については、「[{% data variables.product.prodname_code_scanning %} を設定する](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)」または「[{% data variables.product.prodname_codeql %} ワークフローのトラブルシューティング](/github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-the-codeql-workflow)」を参照してください。

### プルリクエストのアラートをトリガーする

プルリクエストの [**Files changed**] タブを見ると、アラートをトリガーしたコードの行にあるアノテーションがあります。

![プルリクエストの差分にあるアラートのアノテーション](/assets/images/help/repository/code-scanning-pr-annotation.png)

リポジトリへの書き込み権限がある場合、一部のアノテーションにはアラートの追加的な背景を説明するリンクが含まれています。 上の例では、{% data variables.product.prodname_codeql %} 解析から [**user-provided value**] をクリックすると、データフローに信頼されていないデータが入っている場所 (ソース) が表示されます。 この場合、[**Show paths**] をクリックすることで、ソースからデータ (シンク) を使用するコードまでのフルパスを表示することもできます。 これにより、データが信頼されていないかや、ソースとシンクの間のデータサニタイズのステップを解析が認識できなかったかを簡単に確認できます。 {% data variables.product.prodname_codeql %} を使用したデータフローの解析に関する詳しい情報については、「[データフロー解析について](https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/)」を参照してください。

アラートの詳細情報を表示するには、書き込み権限を持つユーザが、アノテーションに表示されている [**Show more details**] のリンクをクリックします。 これにより、ツールが提供するコンテキストとメタデータのすべてをアラートビューで確認できます。 下の例では、問題の重要度、タイプ、および関連する共通脆弱性タイプ一覧 (CWE) を示すタグが表示されています。 また、どのコミットが問題を引き起したかも表示されています。

アラートの詳細画面において、{% data variables.product.prodname_codeql %} 解析のような一部の {% data variables.product.prodname_code_scanning %} ツールでは、問題の説明や、コードを修正する方法を説明するためる [**Show more**] リンクも含まれています。

![アラートの説明と、詳細情報を表示するリンク](/assets/images/help/repository/code-scanning-pr-alert.png)

### プルリクエストのアラートを解決する

プルリクエストへのプッシュアクセスがあるユーザなら誰でも、プルリクエストで特定された {% data variables.product.prodname_code_scanning %} アラートを解決できます。 プルリクエストに変更をコミットすると、プルリクエストのチェック実行が新しくトリガーされます。 問題を修正すると、アラートは閉じられ、アノテーションは削除されます。

アラートを解決する必要がないと思われる場合には、書き込み権限を持つユーザがアラートを手動で閉じることができます。 {% data reusables.code-scanning.close-alert-examples %}リポジトリに対する書き込み権限がある場合、アノテーションおよびアラートビューで [**Close**] ボタンが使用できます。

{% data reusables.code-scanning.false-positive-fix-codeql %}
