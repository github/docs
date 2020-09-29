---
title: コードスキャンを有効化する
intro: 'プロジェクトのリポジトリで {% data variables.product.prodname_code_scanning %} を有効化できます。'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'リポジトリへの書き込み権限を持つユーザは、リポジトリの {% data variables.product.prodname_code_scanning %} を有効化できます。'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-automated-code-scanning
versions:
  free-pro-team: '*'
---

{% data reusables.code-scanning.beta %}

### {% data variables.product.prodname_code_scanning %} の有効化

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. [Code scanning] の右側にある [**Set up code scanning**] をクリックします。 ![Security Overview の "Set up code scanning" の右側にある "Set up code scanning" ボタン](/assets/images/help/security/overview-set-up-code-scanning.png)
4. [Get started with code scanning] で、[**Set up this workflow**] をクリックします。 !["Get started with code scanning" 見出しの下の "Set up this workflow" ボタン](/assets/images/help/repository/code-scanning-set-up-this-workflow.png)
5. 必要に応じて、{% data variables.product.prodname_code_scanning %} がコードをスキャンする方法をカスタマイズするには、ワークフローを編集します。 詳しい情報については、「[{% data variables.product.prodname_code_scanning %} を設定する](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)」を参照してください。
6. [**Start commit**] ドロップダウンを使用して、コミットメッセージを入力します。 ![コミットを開始する](/assets/images/help/repository/start-commit-commit-new-file.png)
7. デフォルトブランチに直接コミットするか、新しいブランチを作成してプルリクエストを開始するかを選択します。 ![コミット先を選択する](/assets/images/help/repository/start-commit-choose-where-to-commit.png)
8. [**Commit new file**] または [**Propose new file**] をクリックします。

ワークフローファイルをコミットするかプルリクエストを作成すると、{% data variables.product.prodname_code_scanning %} は、ワークフローファイルで指定した頻度に従ってコードを分析します。 プルリクエストを作成した場合、{% data variables.product.prodname_code_scanning %} は、プルリクエストをリポジトリのデフォルトブランチにマージするまで、プルリクエストのトピックブランチのコードのみを分析します。

### 次のステップ

{% data variables.product.prodname_code_scanning %} を有効にすると、分析を監視し、結果を表示して、コードのスキャン方法をさらにカスタマイズできます。

- {% data variables.product.prodname_code_scanning %} の実行ステータスを表示して、実行完了通知を取得できます。 詳しい情報については、「[ワークフローの実行の管理](/actions/configuring-and-managing-workflows/managing-a-workflow-run)」および「[通知を設定する](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)」を参照してください。
- スキャンが完了したら、完了したスキャンのアラートを表示できます。 詳しい情報については、「[{% data variables.product.prodname_code_scanning %} からのアラートを管理する](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-alerts-from-code-scanning)」を参照してください。
- {% data variables.product.prodname_code_scanning %} がリポジトリ内のコードをスキャンする方法をカスタマイズできます。 詳しい情報については、「[コードスキャンを設定する](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)」を参照してください。
