---
title: Managing code scanning alerts for your repository
shortTitle: アラートを管理する
intro: 'プロジェクトのコードの潜在的な脆弱性またはエラーのアラートを表示、修正、およびクローズすることができます。'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'People with write permission to a repository can manage {% data variables.product.prodname_code_scanning %} alerts for the repository.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
redirect_from:
  - /github/managing-security-vulnerabilities/managing-alerts-from-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/managing-alerts-from-code-scanning
---

{% data reusables.code-scanning.beta %}

### {% data variables.product.prodname_code_scanning %} からのアラートについて

You can set up {% data variables.product.prodname_code_scanning %} to check the code in a repository using the default {% data variables.product.prodname_codeql %} analysis, a third-party analysis, or multiple types of analysis. When the analysis is complete, the resulting alerts are displayed alongside each other in the security view of the repository. Results from third-party tools or from custom queries may not include all of the properties that you see for alerts detected by {% data variables.product.company_short %}'s default {% data variables.product.prodname_codeql %} analysis. デフォルトの {% data variables.product.prodname_code_scanning %} ワークフローは、`on.push` イベントを使用して、ワークフローファイルを含むブランチへのプッシュごとにコードスキャンをトリガーします。

By default, {% data variables.product.prodname_code_scanning %} analyzes your code periodically on the default branch and during pull requests. For information about managing alerts on a pull request, see "[Triaging {% data variables.product.prodname_code_scanning %} alerts in pull requests](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)."

### About alerts details

Each alert highlights a problem with the code and the name of the tool that identified it. アラートをトリガーしたコード行と、アラートのプロパティ（問題の重要度や性質など）を確認できます。 アラートは、問題が最初に発生したときにも通知します。 For alerts identified by {% data variables.product.prodname_codeql %} analysis, you will also see information on how to fix the problem.

![{% data variables.product.prodname_code_scanning %} からのアラートの例](/assets/images/help/repository/code-scanning-alert.png)

If you enable {% data variables.product.prodname_code_scanning %} using {% data variables.product.prodname_codeql %}, this can also detect data-flow problems in your code. Data-flow analysis finds potential security issues in code, such as: using data insecurely, passing dangerous arguments to functions, and leaking sensitive information.

{% data variables.product.prodname_code_scanning %} がデータフローアラートを報告すると、{% data variables.product.prodname_dotcom %} はデータがコードを通してどのように移動するかを示します。 {% data variables.product.prodname_code_scanning_capc %} allows you to identify the areas of your code that leak sensitive information, and that could be the entry point for attacks by malicious users.

### アラートを表示する

Anyone with read permission for a repository can see {% data variables.product.prodname_code_scanning %} alerts on pull requests. However, you need write permission to view a summary of alerts for repository on the **Security** tab. By default, alerts are shown for the default branch.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
{% data reusables.code-scanning.click-alert-in-list %}
5. Optionally, if the alert highlights a problem with data flow, click **Show paths** to display the path from the data source to the sink where it's used. ![データフローアラートの例](/assets/images/help/repository/code-scanning-show-paths.png)

### Fixing an alert

Anyone with write permission for a repository can fix an alert by committing a correction to the code. If the repository has {% data variables.product.prodname_code_scanning %} scheduled to run on pull requests, it's best to raise a pull request with your correction. This will trigger {% data variables.product.prodname_code_scanning %} analysis of the changes and test that your fix doesn't introduce any new problems. For more information, see "[Configuring {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)" and "[Triaging {% data variables.product.prodname_code_scanning %} alerts in pull requests](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)."

### アラートを閉じる

Closing an alert is a way to resolve an alert that you don't think needs to be fixed. {% data reusables.code-scanning.close-alert-examples %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
{% data reusables.code-scanning.click-alert-in-list %}
5. Select the Close drop-down menu and click a reason for closing the alert. ![Choosing reason for closing the alert via the Close drop-down](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

{% data reusables.code-scanning.false-positive-fix-codeql %}

### 参考リンク

- "[Triaging {% data variables.product.prodname_code_scanning %} alerts in pull requests](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)"
- "[Enabling {% data variables.product.prodname_code_scanning %} for a repository](/github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning-for-a-repository)"
- "[About integration with {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-integration-with-code-scanning)"
