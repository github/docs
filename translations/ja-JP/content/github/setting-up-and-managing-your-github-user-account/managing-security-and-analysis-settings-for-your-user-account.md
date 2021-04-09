---
title: ユーザアカウントのセキュリティと分析設定を管理する
intro: '{% data variables.product.prodname_dotcom %} 上のプロジェクトのコードをセキュリティ保護し分析する機能を管理できます。'
versions:
  free-pro-team: '*'
topics:
  - アカウント
---

### セキュリティおよび分析設定の管理について

{% data variables.product.prodname_dotcom %} を使用してリポジトリを保護できます。 このトピックでは、既存または新規のすべてのリポジトリのセキュリティおよび分析機能を管理する方法について説明します。

個々のリポジトリのセキュリティおよび分析機能は引き続き管理できます。 詳しい情報については「[リポジトリのセキュリティ及び分析の設定の管理](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)」を参照してください。

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

リポジトリレベルのセキュリティの概要については、「[リポジトリのセキュリティ保護について](/github/administering-a-repository/about-securing-your-repository)」を参照してください。

### 既存のリポジトリに対して機能を有効または無効にする

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security-analysis %}
3. [Configure security and analysis features] で、機能の右側にある [**Disable all**] または [**Enable**] をクリックします。 ![[Configure security and analysis] 機能の [Enable all] または [Disable all] ボタン](/assets/images/help/settings/security-and-analysis-disable-or-enable-all.png)
6. オプションで、Organization の新しいリポジトリに対して機能をデフォルトで有効にすることもできます。 ![新規のリポジトリの [Enable by default] オプション](/assets/images/help/settings/security-and-analysis-enable-by-default-in-modal.png)
7. すべてのリポジトリに対してこの機能を有効または無効にするには、[**Disable FEATURE**] または [**Enable FEATURE**] をクリックします。 ![機能 を無効または有効にするボタン](/assets/images/help/settings/security-and-analysis-enable-dependency-graph.png)

{% data reusables.security.displayed-information %}

### 既存のリポジトリに対して機能を有効または無効にする

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security-analysis %}
3. [Configure security and analysis features] にある機能の右側で、Organization の新規のリポジトリに対して機能をデフォルトで有効または無効にします。 ![新規のリポジトリに対して機能を有効または無効にするチェックボックス](/assets/images/help/settings/security-and-analysis-enable-or-disable-feature-checkbox.png)

### 参考リンク

- [依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)
- [プロジェクトの依存関係にある脆弱性を管理する](/github/managing-security-vulnerabilities/managing-vulnerabilities-in-your-projects-dependencies)
{% if currentVersion == "free-pro-team@latest" %}- 「[依存関係を自動的に更新する](/github/administering-a-repository/keeping-your-dependencies-updated-automatically)」{% endif %}
