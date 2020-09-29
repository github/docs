---
title: Organization で脆弱性のある依存関係に関するアラートを管理する
intro: 'Organization のリポジトリで脆弱性のある依存関係を検出すると、Organization のオーナーとリポジトリ管理者は {% data variables.product.prodname_dependabot_alerts %} を受け取ります。 書き込みアクセスのある追加の Organization メンバーまたは Team も、脆弱性のある依存関係に関するアラートを受け取るよう指定することができます。'
redirect_from:
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization-s-repositories/
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organizations-repositories/
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization
versions:
  free-pro-team: '*'
---

{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.repositories.you-can-manage-access-to-security-alerts %}
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. 左サイドバーで、[**Dependabot alerts**] をクリックします。 ![[Settings] サイドバーの [Dependabot alerts] タブ](/assets/images/help/settings/settings-sidebar-dependabot-alerts.png)
4. {% data variables.product.product_name %} が脆弱性のある依存関係を検出したときに {% data variables.product.prodname_dependabot_alerts %} を受け取るユーザまたは Team の名前を入力し、ユーザ名または Team 名をクリックして選択します。
5. {% data variables.product.prodname_dependabot_alerts %} を受け取るすべてのユーザまたは Team を選択したら、[**Save changes**] をクリックします。

### 参考リンク

- 「[脆弱性のある依存関係に対するアラートについて](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」
- [リポジトリ内の脆弱な依存関係を表示・更新する](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)
- 「[Organization のセキュリティと分析設定を管理する](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)」
