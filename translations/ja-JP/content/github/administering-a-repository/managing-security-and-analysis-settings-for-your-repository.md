---
title: リポジトリのセキュリティと分析設定を管理する
intro: '{% data variables.product.prodname_dotcom %} 上のプロジェクトのコードをセキュリティ保護し分析する機能を管理できます。'
permissions: リポジトリの管理者権限を持つユーザは、リポジトリのセキュリティと分析設定を管理できます。
redirect_from:
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization-s-repositories/
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organizations-repositories/
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization
  - /github/managing-security-vulnerabilities/managing-alerts-for-vulnerable-dependencies-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - repositories
---

{% if currentVersion == "free-pro-team@latest" %}
### Enabling or disabling security and analysis features for public repositories

You can manage a subset of security and analysis features for public repositories. Other features are permanently enabled, including dependency graph and secret scanning.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. [Configure security and analysis features] で、機能の右側にある [**Disable**] または [**Enable**] をクリックします。 !["Enable" or "Disable" button for "Configure security and analysis" features in a public repository](/assets/images/help/repository/security-and-analysis-disable-or-enable-dotcom-public.png)
{% endif %}

### Enabling or disabling security and analysis features{% if currentVersion == "free-pro-team@latest" %} for private repositories{% endif %}

You can manage the security and analysis features for your {% if currentVersion == "free-pro-team@latest" %}private or internal {% endif %}repository.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %} If your organization belongs to an enterprise with a license for {% data variables.product.prodname_GH_advanced_security %} then extra options are available. {% data reusables.advanced-security.more-info-ghas %}{% endif %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
4. [Configure security and analysis features] で、機能の右側にある [**Disable**] または [**Enable**] をクリックします。
{% endif %} {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}The control for "{% data variables.product.prodname_GH_advanced_security %}" is disabled if you have no available seats in your {% data variables.product.prodname_GH_advanced_security %} license.
  ![[Configure security and analysis] 機能の [Enable] または [Disable] ボタン](/assets/images/help/repository/security-and-analysis-disable-or-enable-dotcom-private.png)
  {% note %}
**Note:** If you disable

  {% data variables.product.prodname_GH_advanced_security %}, {% if currentVersion == "free-pro-team@latest" %}dependency review, {% endif %}{% data variables.product.prodname_secret_scanning %} and {% data variables.product.prodname_code_scanning %} are disabled. Any workflows, SARIF uploads, or API calls for {% data variables.product.prodname_code_scanning %} will fail.
  {% endnote %}
  {% endif %}
  {% if currentVersion == "enterprise-server@3.0" %}
  ![[Configure security and analysis] 機能の [Enable] または [Disable] ボタン](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghe.png)
  {% endif %}
  {% if currentVersion == "github-ae@latest" %}
4. [Configure security and analysis features] で、機能の右側にある [**Disable**] または [**Enable**] をクリックします。 Before you can enable "
{% data variables.product.prodname_secret_scanning %}" for your repository, you need to enable {% data variables.product.prodname_GH_advanced_security %}.
   ![Enable or disable {% data variables.product.prodname_GH_advanced_security %} or {% data variables.product.prodname_secret_scanning %} for your repository](/assets/images/enterprise/github-ae/repository/enable-ghas-secret-scanning-ghae.png)
  {% endif %}

### セキュリティアラートへのアクセスを許可する

After you enable {% if currentVersion != "github-ae@latest" %}{% data variables.product.prodname_dependabot %} or {% endif %}{% data variables.product.prodname_secret_scanning %} alerts for a repository in an organization, organization owners and repository administrators can view the alerts by default. 追加の Team やユーザに、リポジトリのアラートへのアクセスを付与することができます。

{% note %}

Organization owners and repository administrators can only grant access to view security alerts, such as {% data variables.product.prodname_secret_scanning %} alerts, to people or teams who have write access to the repo.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Under "Access to alerts", in the search field, start typing the name of the person or team you'd like to find, then click a name in the list of matches.
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
4. Under "Access to alerts", to the right of the person or team whose access you'd like to remove, click
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
- 「[Organization のセキュリティと分析設定を管理する](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)」
