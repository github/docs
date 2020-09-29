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

### {% data variables.product.prodname_dependabot_alerts %} へのアクセスを許可する

Organization のリポジトリで {% data variables.product.prodname_dependabot_alerts %} を有効にすると、Organization のオーナーとリポジトリ管理者はデフォルトでアラートを表示できます。 追加の Team やユーザに、リポジトリのアラートへのアクセスを付与することができます。

{% note %}

Organization owners and repository administrators can only grant access to view {% data variables.product.prodname_dependabot_alerts %} to people or teams who have write access to the repo.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. [Dependabot alerts] の検索フィールドで、検索するユーザまたは Team 名の入力を開始し、リストから一致する名前をクリックします。 ![Dependabot アラートへのアクセスをユーザまたは Team に許可するための検索フィールド](/assets/images/help/repository/security-and-analysis-security-alerts-person-or-team-search.png)
5. [**Save changes**] をクリックします。 ![Dependabot アラート設定を変更するための [Save changes] ボタン](/assets/images/help/repository/security-and-analysis-security-alerts-save-changes.png)

### {% data variables.product.prodname_dependabot_alerts %} へのアクセスを削除する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. [Dependabot alerts] で、アクセスを削除するユーザまたは Team の右側にある {% octicon "x" aria-label="X symbol" %} をクリックします。 ![リポジトリの Dependabot アラートへのユーザのアクセスを削除する [x] ボタン](/assets/images/help/repository/security-and-analysis-security-alerts-username-x.png)

### 参考リンク

- 「[リポジトリのセキュリティ保護について](/github/administering-a-repository/about-securing-your-repository)」
- 「[Organization のセキュリティと分析設定を管理する](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)」
