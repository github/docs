---
title: リポジトリのコードスキャンアラートを管理する
shortTitle: アラートを管理する
intro: 'From the security view, you can view, fix, dismiss, or delete alerts for potential vulnerabilities or errors in your project''s code.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permission to a repository you can manage {% data variables.product.prodname_code_scanning %} alerts for that repository.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
redirect_from:
  - /github/managing-security-vulnerabilities/managing-alerts-from-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/managing-alerts-from-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository
  - /code-security/secure-coding/managing-code-scanning-alerts-for-your-repository
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Alerts
  - Repositories
---

<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->

{% data reusables.code-scanning.beta %}

### {% data variables.product.prodname_code_scanning %} からのアラートについて

デフォルトの {% data variables.product.prodname_codeql %} 解析、サードパーティーの解析、または複数のタイプの解析を使用して、リポジトリのコードをチェックするため、{% data variables.product.prodname_code_scanning %} をセットアップできます。 解析が完了すると、解析によるアラートがリポジトリのセキュリティビューに隣り合わせで表示されます。 サードパーティツールまたはカスタムクエリの結果には、{% data variables.product.company_short %} のデフォルト {% data variables.product.prodname_codeql %} 解析により検出されたアラートで表示されるプロパティの一部が含まれていない場合があります。 詳しい情報については、「[リポジトリに対する {% data variables.product.prodname_code_scanning %} をセットアップする](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)」を参照してください。

デフォルトでは、{% data variables.product.prodname_code_scanning %} はプルリクエスト中にデフォルトブランチのコードを定期的に解析します。 プルリクエストでアラートを管理する方法については、「[プルリクエストで {% data variables.product.prodname_code_scanning %} アラートをトリガーする](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)」を参照してください。

{% data reusables.code-scanning.upload-sarif-alert-limit %}

### アラートの詳細について

各アラートはコードの問題と、それを特定したツールの名前を表示します。 アラートをトリガーしたコード行と、アラートのプロパティ（問題の重要度や性質など）を確認できます。 アラートは、問題が最初に発生したときにも通知します。 {% data variables.product.prodname_codeql %} 解析で特定されたアラートについては、問題を解説する方法についての情報も表示されます。

![{% data variables.product.prodname_code_scanning %} からのアラートの例](/assets/images/help/repository/code-scanning-alert.png)

{% data variables.product.prodname_codeql %} を使用して {% data variables.product.prodname_code_scanning %} をセットアップした場合、コード内のデータフロー問題も検出できます。 データフロー解析は、データを安全でない方法で利用する、関数に危険な引数を渡す、機密情報を漏洩するなど、コードにおける潜在的なセキュリティ問題を検出します。

{% data variables.product.prodname_code_scanning %} がデータフローアラートを報告すると、{% data variables.product.prodname_dotcom %} はデータがコードを通してどのように移動するかを示します。 {% data variables.product.prodname_code_scanning_capc %} を使用すると、機密情報を漏洩し、悪意のあるユーザによる攻撃の入り口になる可能性があるコードの領域を特定できます。

### リポジトリのアラートを表示する

リポジトリへの書き込み権限があるユーザなら誰でも、プルリクエストの {% data variables.product.prodname_code_scanning %} アノテーションを表示できます。 詳しい情報については、「[プルリクエストで {% data variables.product.prodname_code_scanning %} アラートをトリガーする](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)」を参照してください。

[**Security**] タブでリポジトリのすべてのアラートの概要を表示するには、書き込み権限が必要です。 デフォルトでは、アラートはデフォルトブランチに対して表示されます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1"%}
1. Optionally, use{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.2" %} the free text search box or{% endif %} the drop-down menus to filter alerts. For example, you can filter by the tool that was used to identify alerts. ![Filter by tool](/assets/images/help/repository/code-scanning-filter-by-tool.png){% endif %}
1. [{% data variables.product.prodname_code_scanning_capc %}] で、調査するアラートをクリックします。
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1"%}
  ![アラートの概要](/assets/images/help/repository/code-scanning-click-alert.png)
{% else %}
  ![{% data variables.product.prodname_code_scanning %}からのアラートのリスト](/assets/images/enterprise/3.1/help/repository/code-scanning-click-alert.png)
{% endif %}
1. アラートでデータフローの問題が強調表示された場合は、必要に応じて [**Show paths**] をクリックし、データソースから、それが使用されているシンクまでのパスを表示します。 ![アラートの [Show paths] リンク](/assets/images/help/repository/code-scanning-show-paths.png)
1. {% data variables.product.prodname_codeql %} 解析によるアラートには、問題の説明も含まれています。 コードを修正する方法についてのガイダンスを表示するには、[**Show more**] をクリックします。 ![アラートの詳細情報](/assets/images/help/repository/code-scanning-alert-details.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.2" %}
### Searching {% data variables.product.prodname_code_scanning %} alerts

You can search the list of alerts. This is useful if there is a large number of alerts in your repository, or if you don't know the exact name for an alert for example. {% data variables.product.product_name %} performs the free text search across:
- The name of the alert
- The alert description
- The alert details (this also includes the information hidden from view by default in the **Show more** collapsible section)

 ![The alert information used in searches](/assets/images/help/repository/code-scanning-free-text-search-areas.png)

| Supported search                           | Syntax example      | Results                                                            |
| ------------------------------------------ | ------------------- | ------------------------------------------------------------------ |
| Single word search                         | `injection`         | Returns all the alerts containing the word `injection`             |
| Multiple word search                       | `sql injection`     | Returns all the alerts containing `sql` or `injection`             |
| Exact match search</br>(use double quotes) | `"sql injection"`   | Returns all the alerts containing the exact phrase `sql injection` |
| OR search                                  | `sql OR injection`  | Returns all the alerts containing `sql` or `injection`             |
| AND search                                 | `sql AND injection` | Returns all the alerts containing both words `sql` and `injection` |

{% tip %}

**参考:**
- The multiple word search is equivalent to an OR search.
- The AND search will return results where the search terms are found _anywhere_, in any order in the alert name, description, or details.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
1. To the right of the **Filters** drop-down menus, type the keywords to search for in the free text search box. ![The free text search box](/assets/images/help/repository/code-scanning-search-alerts.png)
2. Press <kbd>return</kbd>. The alert listing will contain the open {% data variables.product.prodname_code_scanning %} alerts matching your search criteria.

{% endif %}

### アラートを解決する

リポジトリへの書き込み権限があるユーザなら誰でも、コードに修正をコミットしてアラートを解決できます。 リポジトリでプルリクエストに対して {% data variables.product.prodname_code_scanning %} が実行されるよう予定されている場合は、修正してプルリクエストを発行するようお勧めします。 これにより、変更の {% data variables.product.prodname_code_scanning %} 解析がトリガーされ、修正で新しい問題が入り込まないようテストされます。 詳しい情報については、「[{% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning) を設定する」および「[プルリクエストで {% data variables.product.prodname_code_scanning %} アラートをトリガーする](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)」を参照してください。

リポジトリへの書き込み権限がある場合は、アラートの概要を表示して、[**Closed**] をクリックすることで、解決したアラートを表示できます。 詳しい情報については、「[リポジトリのアラートを表示する](#viewing-the-alerts-for-a-repository)」を参照してください。 The "Closed" list shows fixed alerts and alerts that users have dismissed.

You can use{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.2" %} the free text search or{% endif %} the filters to display a subset of alerts and then in turn mark all matching alerts as closed.

あるブランチでは解決されたアラートが、別のブランチでは解決されていないことがあります。 アラートの概要で [Branch] ドロップダウンメニューを使用し、特定のブランチでアラートが解決されたかどうか確認できます。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1"%}
![ブランチによるアラートのフィルタリング](/assets/images/help/repository/code-scanning-branch-filter.png)
{% else %}
![ブランチによるアラートのフィルタリング](/assets/images/enterprise/3.1/help/repository/code-scanning-branch-filter.png)
{% endif %}

### Dismissing or deleting alerts

There are two ways of closing an alert. You can fix the problem in the code, or you can dismiss the alert. Alternatively, if you have admin permissions for the repository, you can delete alerts. Deleting alerts is useful in situations where you have set up a {% data variables.product.prodname_code_scanning %} tool and then decided to remove it, or where you have configured {% data variables.product.prodname_codeql %} analysis with a larger set of queries than you want to continue using, and you've then removed some queries from the tool. In both cases, deleting alerts allows you to clean up your {% data variables.product.prodname_code_scanning %} results. You can delete alerts from the summary list within the **Security** tab.

Dismissing an alert is a way of closing an alert that you don't think needs to be fixed. {% data reusables.code-scanning.close-alert-examples %} You can dismiss alerts from {% data variables.product.prodname_code_scanning %} annotations in code, or from the summary list within the **Security** tab.

When you dismiss an alert:

- It's dismissed in all branches.
- The alert is removed from the number of current alerts for your project.
- The alert is moved to the "Closed" list in the summary of alerts, from where you can reopen it, if required.
- The reason why you closed the alert is recorded.
- Next time {% data variables.product.prodname_code_scanning %} runs, the same code won't generate an alert.

When you delete an alert:

- It's deleted in all branches.
- The alert is removed from the number of current alerts for your project.
- It is _not_ added to the "Closed" list in the summary of alerts.
- If the code that generated the alert stays the same, and the same {% data variables.product.prodname_code_scanning %} tool runs again without any configuration changes, the alert will be shown again in your analysis results.

To dismiss or delete alerts:

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
1. If you have admin permissions for the repository, and you want to delete alerts for this {% data variables.product.prodname_code_scanning %} tool, select some or all of the check boxes and click **Delete**.

   ![Deleting alerts](/assets/images/help/repository/code-scanning-delete-alerts.png)

   Optionally, you can use{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.2" %} the free text search or{% endif %} the filters to display a subset of alerts and then delete all matching alerts at once. For example, if you have removed a query from {% data variables.product.prodname_codeql %} analysis, you can use the "Rule" filter to list just the alerts for that query and then select and delete all of those alerts.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1"%}
  ![Filter alerts by rule](/assets/images/help/repository/code-scanning-filter-by-rule.png)
{% else %}
  ![Filter alerts by rule](/assets/images/enterprise/3.1/help/repository/code-scanning-filter-by-rule.png)
{% endif %}

1. If you want to dismiss an alert, it's important to explore the alert first, so that you can choose the correct dismissal reason. Click the alert you'd like to explore.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1"%}
   ![Open an alert from the summary list](/assets/images/help/repository/code-scanning-click-alert.png)
{% else %}
  ![{% data variables.product.prodname_code_scanning %}からのアラートのリスト](/assets/images/enterprise/3.1/help/repository/code-scanning-click-alert.png)
{% endif %}

1. Review the alert, then click **Dismiss** and choose a reason for closing the alert. ![Choosing a reason for dismissing an alert](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

   {% data reusables.code-scanning.choose-alert-dismissal-reason %}

   {% data reusables.code-scanning.false-positive-fix-codeql %}

#### Dismissing multiple alerts at once

If a project has multiple alerts that you want to dismiss for the same reason, you can bulk dismiss them from the summary of alerts. Typically, you'll want to filter the list and then dismiss all of the matching alerts. For example, you might want to dismiss all of the current alerts in the project that have been tagged for a particular Common Weakness Enumeration (CWE) vulnerability.

### 参考リンク

- 「[プルリクエストで {% data variables.product.prodname_code_scanning %} アラートをトリガーする](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)」
- 「[リポジトリに対する {% data variables.product.prodname_code_scanning %} をセットアップする](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)」
- 「[{% data variables.product.prodname_code_scanning %} からのアラートを管理する](/code-security/secure-coding/about-integration-with-code-scanning)」
