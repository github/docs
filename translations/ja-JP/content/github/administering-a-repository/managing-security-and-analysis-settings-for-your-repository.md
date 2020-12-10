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
---

### セキュリティおよび分析機能の有効化または無効化

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. [Configure security and analysis features] で、機能の右側にある [**Disable**] または [**Enable**] をクリックします。 ![[Configure security and analysis] 機能の [Enable] または [Disable] ボタン](/assets/images/help/repository/security-and-analysis-disable-or-enable.png)

### セキュリティアラートへのアクセスを許可する

After you enable {% data variables.product.prodname_dependabot %} or {% data variables.product.prodname_secret_scanning %} alerts for a repository in an organization, organization owners and repository administrators can view the alerts by default. 追加の Team やユーザに、リポジトリのアラートへのアクセスを付与することができます。

{% note %}

Organization owners and repository administrators can only grant access to view security alerts, such as {% data variables.product.prodname_dependabot %} and {% data variables.product.prodname_secret_scanning %} alerts, to people or teams who have write access to the repo.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Under "Access to alerts", in the search field, start typing the name of the person or team you'd like to find, then click a name in the list of matches. ![ユーザまたは Team にセキュリティアラートへのアクセスを付与するための検索フィールド](/assets/images/help/repository/security-and-analysis-security-alerts-person-or-team-search.png)
5. [**Save changes**] をクリックします。 ![セキュリティアラート設定を変更するための "Save changes" ボタン](/assets/images/help/repository/security-and-analysis-security-alerts-save-changes.png)

### セキュリティアラートへのアクセスを削除する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Under "Access to alerts", to the right of the person or team whose access you'd like to remove, click {% octicon "x" aria-label="X symbol" %}. ![リポジトリのセキュリティアラートへのアクセスを削除する "x" ボタン](/assets/images/help/repository/security-and-analysis-security-alerts-username-x.png)

### 参考リンク

- 「[リポジトリのセキュリティ保護について](/github/administering-a-repository/about-securing-your-repository)」
- 「[Organization のセキュリティと分析設定を管理する](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)」
