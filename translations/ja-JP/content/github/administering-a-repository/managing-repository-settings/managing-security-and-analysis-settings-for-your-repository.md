---
title: リポジトリのセキュリティと分析設定を管理する
intro: '{% data variables.product.prodname_dotcom %} 上のプロジェクトのコードをセキュリティ保護し分析する機能を管理できます。'
permissions: People with admin permissions to a repository can manage security and analysis settings for the repository.
redirect_from:
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization-s-repositories/
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organizations-repositories/
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization
  - /github/managing-security-vulnerabilities/managing-alerts-for-vulnerable-dependencies-in-your-organization
  - /github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - Repositories
---
{% if currentVersion == "free-pro-team@latest" %}
### パブリックリポジトリのセキュリティおよび分析機能を有効または無効にする

パブリックリポジトリのセキュリティおよび分析機能の、サブセットを管理できます。 依存関係グラフやシークレットスキャニングなど、その他の機能は常時有効になっています。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. [Configure security and analysis features] で、機能の右側にある [**Disable**] または [**Enable**] をクリックします。 ![パブリックリポジトリ内の、[Configure security and analysis] 機能の [Enable] または [Disable] ボタン](/assets/images/help/repository/security-and-analysis-disable-or-enable-dotcom-public.png)
{% endif %}

### {% if currentVersion == "free-pro-team@latest" %} プライベートレジストリの{% endif %} セキュリティおよび分析機能を有効または無効にする

{% if currentVersion == "free-pro-team@latest" %}プライベートおよび内部{% endif %}リポジトリの、セキュリティおよび分析機能を管理できます。{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}Organization が {% data variables.product.prodname_GH_advanced_security %} のライセンスのある Enterprise に所属している場合、追加オプションが利用可能です。 {% data reusables.advanced-security.more-info-ghas %}{% endif %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
4. [Configure security and analysis features] で、機能の右側にある [**Disable**] または [**Enable**] をクリックします。 The control for "
{% data variables.product.prodname_GH_advanced_security %}" is disabled if your enterprise has no available licenses for {% data variables.product.prodname_advanced_security %}.{% if currentVersion == "free-pro-team@latest" %}
  ![[Configure security and analysis] 機能の [Enable] または [Disable] ボタン](/assets/images/help/repository/security-and-analysis-disable-or-enable-dotcom-private.png){% else %}
!["Enable" or "Disable" button for "Configure security and analysis" features](/assets/images/enterprise/3.1/help/repository/security-and-analysis-disable-or-enable-ghes.png){% endif %}
  {% note %}
**注釈:**

  {% data variables.product.prodname_GH_advanced_security %}を無効にした場合、{% if currentVersion == "free-pro-team@latest" %}依存関係レビュー、{% endif %}{% data variables.product.prodname_secret_scanning %}、および {% data variables.product.prodname_code_scanning %} が無効になります。 あらゆるワークフロー、SARIF のアップロード、{% data variables.product.prodname_code_scanning %} への API の呼び出しが失敗することになります。
  {% endnote %}
  {% endif %}
  {% if currentVersion == "enterprise-server@3.0" %}
4. [Configure security and analysis features] で、機能の右側にある [**Disable**] または [**Enable**] をクリックします。 ![[Configure security and analysis] 機能の [Enable] または [Disable] ボタン](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghe.png)
  {% endif %}
  {% if currentVersion == "github-ae@latest" %}
4. [Configure security and analysis features] で、機能の右側にある [**Disable**] または [**Enable**] をクリックします。 「
{% data variables.product.prodname_secret_scanning %}" for your repository, you may need to enable {% data variables.product.prodname_GH_advanced_security %}.
   ![リポジトリに対して {% data variables.product.prodname_GH_advanced_security %} または {% data variables.product.prodname_secret_scanning %} を有効化または無効化](/assets/images/enterprise/github-ae/repository/enable-ghas-secret-scanning-ghae.png)
  {% endif %}

### セキュリティアラートへのアクセスを許可する

Organization のリポジトリで {% if currentVersion != "github-ae@latest" %}{% data variables.product.prodname_dependabot %} または {% endif %}{% data variables.product.prodname_secret_scanning %} アラートを有効にすると、Organization のオーナーとリポジトリ管理者はデフォルトでアラートを表示できます。 追加の Team やユーザに、リポジトリのアラートへのアクセスを付与することができます。

{% note %}

Organizationのオーナーとリポジトリ管理者は、リポジトリへの書き込みアクセスを持つユーザまたは Team に対して、{% data variables.product.prodname_secret_scanning %} アラートなどのセキュリティアラートを表示する権限のみを付与できます。

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. [Access to alerts] の検索フィールドで、検索するユーザまたは Team 名の入力を開始し、リストから一致する名前をクリックします。
   {% if currentVersion == "free-pro-team@latest" %}
   ![ユーザまたは Team にセキュリティアラートへのアクセスを付与するための検索フィールド](/assets/images/help/repository/security-and-analysis-security-alerts-person-or-team-search.png)
   {% endif %}
   {% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![ユーザまたは Team にセキュリティアラートへのアクセスを付与するための検索フィールド](/assets/images/help/repository/security-and-analysis-security-alerts-person-or-team-search-ghe.png)
   {% endif %}
   {% if currentVersion == "github-ae@latest" %}
   ![ユーザまたは Team にセキュリティアラートへのアクセスを付与するための検索フィールド](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-person-or-team-search-ghae.png)
   {% endif %}

5. [**Save changes**] をクリックします。
   {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
   ![セキュリティアラート設定を変更するための "Save changes" ボタン](/assets/images/help/repository/security-and-analysis-security-alerts-save-changes.png)
   {% endif %}
    {% if currentVersion == "github-ae@latest" %}
   ![セキュリティアラート設定を変更するための "Save changes" ボタン](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-save-changes-ghae.png)
   {% endif %}

### セキュリティアラートへのアクセスを削除する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. [Access to alerts] で、アクセスを削除するユーザまたは Team の右側にある
{% octicon "x" aria-label="X symbol" %}.
   {% if currentVersion == "free-pro-team@latest" %}
   ![リポジトリのセキュリティアラートへのアクセスを削除する "x" ボタン](/assets/images/help/repository/security-and-analysis-security-alerts-username-x.png)
   {% endif %}
   {% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![リポジトリのセキュリティアラートへのアクセスを削除する "x" ボタン](/assets/images/help/repository/security-and-analysis-security-alerts-username-x-ghe.png)
   {% endif %}
   {% if currentVersion == "github-ae@latest" %}
   ![リポジトリのセキュリティアラートへのアクセスを削除する "x" ボタン](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-username-x-ghae.png)
   {% endif %}

### 参考リンク

- 「[リポジトリのセキュリティ保護について](/github/administering-a-repository/about-securing-your-repository)」
- 「[Organization のセキュリティと分析設定を管理する](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」
