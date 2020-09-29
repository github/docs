---
title: コードスキャンからのアラートを管理する
shortTitle: アラートを管理する
intro: プロジェクトのコードの潜在的な脆弱性またはエラーのアラートを表示、修正、およびクローズすることができます。
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'リポジトリへの書き込み権限を持つユーザは、リポジトリの {% data variables.product.prodname_code_scanning %} アラートを管理できます。'
redirect_from:
  - /github/managing-security-vulnerabilities/managing-alerts-from-automated-code-scanning
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### {% data variables.product.prodname_code_scanning %} からのアラートについて

After you enable {% data variables.product.prodname_code_scanning %}, {% data variables.product.prodname_dotcom %} displays {% data variables.product.prodname_code_scanning %} alerts in your repository. デフォルトの {% data variables.product.prodname_code_scanning %} ワークフローは、`on.push` イベントを使用して、ワークフローファイルを含むブランチへのプッシュごとにコードスキャンをトリガーします。

Each alert highlights a problem with the code and the name of the tool that identified it. アラートをトリガーしたコード行と、アラートのプロパティ（問題の重要度や性質など）を確認できます。 アラートは、問題が最初に発生したときにも通知します。 For alerts identified by {% data variables.product.prodname_codeql %} analysis, you will also see information on how to fix the problem.

![{% data variables.product.prodname_code_scanning %} からのアラートの例](/assets/images/help/repository/code-scanning-alert.png)

アラートが推奨するアクションを実行しない場合は、アラートを手動で閉じることができます。 たとえば、テストに使用されるコードのアラートを閉じたり、アラートが誤検知であると思われる場合に閉じたりすることができます。 コーディングエラーを修正する手間がコードを改善する潜在的な利点よりも上回る場合は、アラートを閉じることもできます。

デフォルトでは、{% data variables.product.prodname_dotcom %} はデフォルトブランチと保護されたブランチのアラートを表示します。 アラートのリストをソートおよびフィルタして、関連するアラートのみを表示できます。

プルリクエストで発生したアラートを確認して、すぐに対処できます。 {% data variables.product.prodname_code_scanning %} がプルリクエストで脆弱性またはエラーを検出すると、{% data variables.product.prodname_dotcom %} は、プルリクエストのタイムラインと差分ビューに注釈を表示します。

If you enable {% data variables.product.prodname_code_scanning %} using {% data variables.product.prodname_codeql %}, this can also detect data-flow problems in your code. Data-flow analysis finds potential security issues in code, such as: using data insecurely, passing dangerous arguments to functions, and leaking sensitive information.

{% data variables.product.prodname_code_scanning %} がデータフローアラートを報告すると、{% data variables.product.prodname_dotcom %} はデータがコードを通してどのように移動するかを示します。 {% data variables.product.prodname_code_scanning_capc %} allows you to identify the areas of your code that leak sensitive information, and that could be the entry point for attacks by malicious users.

{% data reusables.code-scanning.you-can-upload-third-party-analysis %} {% data reusables.code-scanning.get-started-uploading-third-party-data %}

If you scan your code using a third-party tool or scan your code with custom {% data variables.product.prodname_codeql %} queries, {% data variables.product.prodname_dotcom %} will only use the supported SARIF 2.1.0 properties to display alerts. サードパーティツールまたはカスタムクエリの結果には、{% data variables.product.company_short %} のデフォルトの {% data variables.product.prodname_codeql %} クエリを使用してコードをスキャンしたときに表示されるすべてのプロパティが含まれていない場合があります。 詳しい情報については「[{% data variables.product.prodname_code_scanning %}の SARIF サポート](/github/finding-security-vulnerabilities-and-errors-in-your-code/sarif-support-for-code-scanning)」を参照してください。

### アラートを表示する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
{% data reusables.code-scanning.click-alert-in-list %}
5. 必要に応じて、アラートでデータフローの問題が強調表示された場合は、[**Show paths**] をクリックしてデータのパスを確認します。 ![データフローアラートの例](/assets/images/help/repository/code-scanning-show-paths.png)

### アラートを閉じる

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
{% data reusables.code-scanning.click-alert-in-list %}
5. [Close] ドロップダウンを使用して、アラートを閉じる理由をクリックします。 ![[Close] ドロップダウンでアラートを閉じる理由を選択する](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

### 参考リンク

- 「[{% data variables.product.prodname_code_scanning_capc %}](http://developer.github.com/v3/code-scanning)」
- "[{% data variables.product.prodname_code_scanning_capc %} API](/v3/code-scanning)"
