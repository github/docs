---
title: リポジトリのコードスキャンアラートを管理する
shortTitle: アラートを管理する
intro: セキュリティビューから、プロジェクトのコードに存在する潜在的な脆弱性やエラーのアラートを表示、修正、および閉じることができます。
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permission to a repository you can manage {% data variables.product.prodname_code_scanning %} alerts for that repository.'
versions:
  enterprise-server: '2.22'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository
---

<!--See /content/code-security/secure-coding for the latest version of this article -->

{% data reusables.code-scanning.beta %}

### {% data variables.product.prodname_code_scanning %} からのアラートについて

デフォルトの {% data variables.product.prodname_codeql %} 解析、サードパーティーの解析、または複数のタイプの解析を使用して、リポジトリのコードをチェックするため、{% data variables.product.prodname_code_scanning %} をセットアップできます。 解析が完了すると、解析によるアラートがリポジトリのセキュリティビューに隣り合わせで表示されます。 サードパーティツールまたはカスタムクエリの結果には、{% data variables.product.company_short %} のデフォルト {% data variables.product.prodname_codeql %} 解析により検出されたアラートで表示されるプロパティの一部が含まれていない場合があります。 詳しい情報については、「[リポジトリに対する {% data variables.product.prodname_code_scanning %} をセットアップする](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository)」を参照してください。

デフォルトでは、{% data variables.product.prodname_code_scanning %} はプルリクエスト中にデフォルトブランチのコードを定期的に解析します。 プルリクエストでアラートを管理する方法については、「[プルリクエストで {% data variables.product.prodname_code_scanning %} アラートをトリガーする](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)」を参照してください。

{% data reusables.code-scanning.upload-sarif-alert-limit %}

### アラートの詳細について

各アラートはコードの問題と、それを特定したツールの名前を表示します。 アラートをトリガーしたコード行と、アラートのプロパティ（問題の重要度や性質など）を確認できます。 アラートは、問題が最初に発生したときにも通知します。 {% data variables.product.prodname_codeql %} 解析で特定されたアラートについては、問題を解説する方法についての情報も表示されます。

![{% data variables.product.prodname_code_scanning %} からのアラートの例](/assets/images/help/repository/code-scanning-alert.png)

{% data variables.product.prodname_codeql %} を使用して {% data variables.product.prodname_code_scanning %} をセットアップした場合、コード内のデータフロー問題も検出できます。 データフロー解析は、データを安全でない方法で利用する、関数に危険な引数を渡す、機密情報を漏洩するなど、コードにおける潜在的なセキュリティ問題を検出します。

{% data variables.product.prodname_code_scanning %} がデータフローアラートを報告すると、{% data variables.product.prodname_dotcom %} はデータがコードを通してどのように移動するかを示します。 {% data variables.product.prodname_code_scanning_capc %} を使用すると、機密情報を漏洩し、悪意のあるユーザによる攻撃の入り口になる可能性があるコードの領域を特定できます。

### リポジトリのアラートを表示する

リポジトリへの書き込み権限があるユーザなら誰でも、プルリクエストの {% data variables.product.prodname_code_scanning %} アノテーションを表示できます。 詳しい情報については、「[プルリクエストで {% data variables.product.prodname_code_scanning %} アラートをトリガーする](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)」を参照してください。

[**Security**] タブでリポジトリのすべてのアラートの概要を表示するには、書き込み権限が必要です。 デフォルトでは、アラートはデフォルトブランチに対して表示されます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
1. [{% data variables.product.prodname_code_scanning_capc %}] で、調査するアラートをクリックします。 ![アラートの概要](/assets/images/enterprise/3.1/help/repository/code-scanning-click-alert.png)
1. アラートでデータフローの問題が強調表示された場合は、必要に応じて [**Show paths**] をクリックし、データソースから、それが使用されているシンクまでのパスを表示します。 ![アラートの [Show paths] リンク](/assets/images/help/repository/code-scanning-show-paths.png)
1. {% data variables.product.prodname_codeql %} 解析によるアラートには、問題の説明も含まれています。 コードを修正する方法についてのガイダンスを表示するには、[**Show more**] をクリックします。 ![アラートの詳細情報](/assets/images/help/repository/code-scanning-alert-details.png)

### アラートを解決する

リポジトリへの書き込み権限があるユーザなら誰でも、コードに修正をコミットしてアラートを解決できます。 リポジトリでプルリクエストに対して {% data variables.product.prodname_code_scanning %} が実行されるよう予定されている場合は、修正してプルリクエストを発行するようお勧めします。 これにより、変更の {% data variables.product.prodname_code_scanning %} 解析がトリガーされ、修正で新しい問題が入り込まないようテストされます。 詳しい情報については、「[{% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning) を設定する」および「[プルリクエストで {% data variables.product.prodname_code_scanning %} アラートをトリガーする](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)」を参照してください。

リポジトリへの書き込み権限がある場合は、アラートの概要を表示して、[**Closed**] をクリックすることで、解決したアラートを表示できます。 詳しい情報については、「[リポジトリのアラートを表示する](#viewing-the-alerts-for-a-repository)」を参照してください。 [Ｃlosed] リストには、解決されたアラートと、ユーザがクローズしたアラートが表示されます。

あるブランチでは解決されたアラートが、別のブランチでは解決されていないことがあります。 アラートの概要で [Branch] ドロップダウンメニューを使用し、特定のブランチでアラートが解決されたかどうか確認できます。

![ブランチによるアラートのフィルタリング](/assets/images/enterprise/3.1/help/repository/code-scanning-branch-filter.png)

### アラートを閉じる

アラートを閉じることは、修正する必要がないと思われるアラートを解決する方法のひとつです。 {% data reusables.code-scanning.close-alert-examples %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
{% data reusables.code-scanning.click-alert-in-list %}
1. [**Close**] ドロップダウンメニューを選択肢、アラートを閉じる理由をクリックします。    
   ![[Close] ドロップダウンでアラートを閉じる理由を選択する](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

{% data reusables.code-scanning.false-positive-fix-codeql %}

### 参考リンク

- 「[プルリクエストで {% data variables.product.prodname_code_scanning %} アラートをトリガーする](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)」
- 「[リポジトリに対する {% data variables.product.prodname_code_scanning %} をセットアップする](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository)」
- 「[{% data variables.product.prodname_code_scanning %} からのアラートを管理する](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-integration-with-code-scanning)」
