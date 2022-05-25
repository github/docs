---
title: リポジトリのセキュリティと分析設定を管理する
intro: '{% data variables.product.prodname_dotcom %} 上のプロジェクトのコードをセキュリティ保護し分析する機能を管理できます。'
permissions: People with admin permissions to a repository can manage security and analysis settings for the repository.
redirect_from:
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization-s-repositories
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organizations-repositories
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization
  - /github/managing-security-vulnerabilities/managing-alerts-for-vulnerable-dependencies-in-your-organization
  - /github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-security-and-analysis-settings-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Alerts
  - Advanced Security
  - Dependency graph
  - Secret scanning
  - Repositories
shortTitle: Security & analysis
---

{% ifversion fpt or ghec %}
## パブリックリポジトリのセキュリティおよび分析機能を有効または無効にする

パブリックリポジトリのセキュリティおよび分析機能の、サブセットを管理できます。 依存関係グラフやシークレットスキャニングなど、その他の機能は常時有効になっています。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Under "Code security and analysis", to the right of the feature, click **Disable** or **Enable**.{% ifversion fpt %} !["Enable" or "Disable" button for "Configure security and analysis" features in a public repository](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-public.png){% elsif ghec %}
!["Enable" or "Disable" button for "Configure security and analysis" features in a public repository](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghec-public.png){% endif %}
{% endif %}

## {% ifversion fpt or ghec %} プライベートリポジトリの{% endif %} セキュリティおよび分析機能を有効または無効にする

{% ifversion fpt or ghec %}プライベートおよび内部{% endif %}リポジトリの、セキュリティおよび分析機能を管理できます。{% ifversion ghes or ghec %}Organization が {% data variables.product.prodname_GH_advanced_security %} のライセンスのある Enterprise に所属している場合、追加オプションが利用可能です。 {% data reusables.advanced-security.more-info-ghas %}
{% elsif fpt %} Organizations that use {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_advanced_security %} have extra options available. For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest//repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#enabling-or-disabling-security-and-analysis-features-for-private-repositories).
{% endif %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% ifversion fpt or ghes or ghec %}
4. Under "Code security and analysis", to the right of the feature, click **Disable** or **Enable**. {% ifversion not fpt %}The control for "{% data variables.product.prodname_GH_advanced_security %}" is disabled if your enterprise has no available licenses for {% data variables.product.prodname_advanced_security %}.{% endif %}{% ifversion fpt %} !["Enable" or "Disable" button for "Configure security and analysis" features](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png){% elsif ghec %}
!["Enable" or "Disable" button for "Configure security and analysis" features](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghec-private.png){% elsif ghes > 3.2 %}
!["Enable" or "Disable" button for "Configure security and analysis" features](/assets/images/enterprise/3.3/repository/security-and-analysis-disable-or-enable-ghes.png){% else %}
!["Enable" or "Disable" button for "Configure security and analysis" features](/assets/images/enterprise/3.1/help/repository/security-and-analysis-disable-or-enable-ghes.png){% endif %}

  {% ifversion not fpt %}
  {% note %}

  **Note:** If you disable {% data variables.product.prodname_GH_advanced_security %}, {% ifversion ghec %}dependency review, {% endif %}{% data variables.product.prodname_secret_scanning %} and {% data variables.product.prodname_code_scanning %} are disabled. あらゆるワークフロー、SARIF のアップロード、{% data variables.product.prodname_code_scanning %} への API の呼び出しが失敗することになります。
  {% endnote %}{% endif %}

  {% endif %}

  {% ifversion ghes = 3.0 %}
4. Under "Code security and analysis", to the right of the feature, click **Disable** or **Enable**. ![[Configure security and analysis] 機能の [Enable] または [Disable] ボタン](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghe.png)
  {% endif %}
  {% ifversion ghae %}
4. Under "Code security and analysis", to the right of the feature, click **Disable** or **Enable**. Before you can enable "{% data variables.product.prodname_secret_scanning %}" for your repository, you may need to enable {% data variables.product.prodname_GH_advanced_security %}. ![リポジトリに対して {% data variables.product.prodname_GH_advanced_security %} または {% data variables.product.prodname_secret_scanning %} を有効化または無効化](/assets/images/enterprise/github-ae/repository/enable-ghas-secret-scanning-ghae.png)
  {% endif %}

## セキュリティアラートへのアクセスを許可する

Security alerts for a repository are visible to people with admin access to the repository and, when the repository is owned by an organization, organization owners. You can give additional teams and people access to the alerts.

{% note %}

Organizationのオーナーとリポジトリ管理者は、リポジトリへの書き込みアクセスを持つユーザまたは Team に対して、{% data variables.product.prodname_secret_scanning %} アラートなどのセキュリティアラートを表示する権限のみを付与できます。

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. [Access to alerts] の検索フィールドで、検索するユーザまたは Team 名の入力を開始し、リストから一致する名前をクリックします。
   {% ifversion fpt or ghec or ghes > 3.2 %}
   ![ユーザまたは Team にセキュリティアラートへのアクセスを付与するための検索フィールド](/assets/images/help/repository/security-and-analysis-security-alerts-person-or-team-search.png)
   {% endif %}
   {% ifversion ghes < 3.3 %}
   ![ユーザまたは Team にセキュリティアラートへのアクセスを付与するための検索フィールド](/assets/images/enterprise/3.2/repository/security-and-analysis-security-alerts-person-or-team-search.png)
   {% endif %}
   {% ifversion ghae %}
   ![ユーザまたは Team にセキュリティアラートへのアクセスを付与するための検索フィールド](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-person-or-team-search-ghae.png)
   {% endif %}

5. [**Save changes**] をクリックします。
   {% ifversion fpt or ghes > 3.2 or ghec %}
   ![セキュリティアラート設定を変更するための "Save changes" ボタン](/assets/images/help/repository/security-and-analysis-security-alerts-save-changes.png)
   {% endif %}
   {% ifversion ghes < 3.3 %}
   ![セキュリティアラート設定を変更するための "Save changes" ボタン](/assets/images/enterprise/3.2/repository/security-and-analysis-security-alerts-save-changes.png)
   {% endif %}
   {% ifversion ghae %}
   ![セキュリティアラート設定を変更するための "Save changes" ボタン](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-save-changes-ghae.png)
   {% endif %}

## セキュリティアラートへのアクセスを削除する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Under "Access to alerts", to the right of the person or team whose access you'd like to remove, click {% octicon "x" aria-label="X symbol" %}.
   {% ifversion fpt or ghec or ghes > 3.2 %}
   ![リポジトリのセキュリティアラートへのアクセスを削除する "x" ボタン](/assets/images/help/repository/security-and-analysis-security-alerts-username-x.png)
   {% endif %}
   {% ifversion ghes < 3.3 %}
   ![リポジトリのセキュリティアラートへのアクセスを削除する "x" ボタン](/assets/images/enterprise/3.2/repository/security-and-analysis-security-alerts-username-x.png)
   {% endif %}
   {% ifversion ghae %}
   ![リポジトリのセキュリティアラートへのアクセスを削除する "x" ボタン](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-username-x-ghae.png)
   {% endif %}
  5. [**Save changes**] をクリックします。

## 参考リンク

- 「[リポジトリをセキュアにする](/code-security/getting-started/securing-your-repository)」
- 「[Organization のセキュリティと分析設定を管理する](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」
