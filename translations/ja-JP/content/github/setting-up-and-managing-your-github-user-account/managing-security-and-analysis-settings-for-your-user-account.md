---
title: Managing security and analysis settings for your user account
intro: 'You can control features that secure and analyze the code in your projects on {% data variables.product.prodname_dotcom %}.'
versions:
  free-pro-team: '*'
---

### セキュリティおよび分析設定の管理について

{% data variables.product.prodname_dotcom %} can help secure your repositories. This topic tells you how you can manage the security and analysis features for all your existing or new repositories.

You can still manage the security and analysis features for individual repositories. For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)."

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

For an overview of repository-level security, see "[About securing your repository](/github/administering-a-repository/about-securing-your-repository)."

### 既存のリポジトリに対して機能を有効または無効にする

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security-analysis %}
3. [Configure security and analysis features] で、機能の右側にある [**Disable all**] または [**Enable**] をクリックします。 ![[Configure security and analysis] 機能の [Enable all] または [Disable all] ボタン](/assets/images/help/settings/security-and-analysis-disable-or-enable-all.png)
6. オプションで、Organization の新しいリポジトリに対して機能をデフォルトで有効にすることもできます。 ![新規のリポジトリの [Enable by default] オプション](/assets/images/help/settings/security-and-analysis-enable-by-default-in-modal.png)
7. Click **Disable FEATURE** or **Enable FEATURE** to disable or enable the feature for all the repositories you own. ![機能 を無効または有効にするボタン](/assets/images/help/settings/security-and-analysis-enable-dependency-graph.png)

### 既存のリポジトリに対して機能を有効または無効にする

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security-analysis %}
3. [Configure security and analysis features] にある機能の右側で、Organization の新規のリポジトリに対して機能をデフォルトで有効または無効にします。 ![新規のリポジトリに対して機能を有効または無効にするチェックボックス](/assets/images/help/settings/security-and-analysis-enable-or-disable-feature-checkbox.png)

### 参考リンク

- [依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)
- [プロジェクトの依存関係にある脆弱性を管理する](/github/managing-security-vulnerabilities/managing-vulnerabilities-in-your-projects-dependencies)
{% if currentVersion == "free-pro-team@latest" %}- "[Keeping your dependencies updated automatically](/github/administering-a-repository/keeping-your-dependencies-updated-automatically)"{% endif %}
