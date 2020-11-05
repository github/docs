---
title: Organization のセキュリティおよび分析設定を管理する
intro: '{% data variables.product.prodname_dotcom %} 上の Organization のプロジェクトでコードを保護し分析する機能を管理できます。'
permissions: Organization のオーナーは、Organization のリポジトリのセキュリティおよび分析設定を管理できます。
versions:
  free-pro-team: '*'
---

### セキュリティおよび分析設定の管理について

{% data variables.product.prodname_dotcom %} を使用して、Organization のリポジトリを保護できます。 Organization でメンバーが作成する既存または新規のリポジトリすべてについて、セキュリティおよび分析機能を管理できます。

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% if currentVersion == "free-pro-team@latest" %}{% data reusables.security.security-and-analysis-features-enable-read-only %}
{% endif %}

### 既存のリポジトリに対して機能を有効または無効にする

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}
5. [Configure security and analysis features] で、機能の右側にある [**Disable all**] または [**Enable**] をクリックします。 ![[Configure security and analysis] 機能の [Enable all] または [Disable all] ボタン](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all.png)
6. オプションで、Organization の新しいリポジトリに対して機能をデフォルトで有効にすることもできます。 ![新規のリポジトリの [Enable by default] オプション](/assets/images/help/organizations/security-and-analysis-enable-by-default-in-modal.png)
7. Organization のすべてのリポジトリに対してこの機能を有効または無効にするには、[**Disable FEATURE**] または [**Enable FEATURE**] をクリックします。 ![機能 を無効または有効にするボタン](/assets/images/help/organizations/security-and-analysis-enable-dependency-graph.png)

### 既存のリポジトリに対して機能を有効または無効にする

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}
5. [Configure security and analysis features] にある機能の右側で、Organization の新規のリポジトリに対して機能をデフォルトで有効または無効にします。 ![新規のリポジトリに対して機能を有効または無効にするチェックボックス](/assets/images/help/organizations/security-and-analysis-enable-or-disable-feature-checkbox.png)

### 参考リンク

{% if currentVersion == "free-pro-team@latest" %}- [リポジトリのセキュリティ保護について](/github/administering-a-repository/about-securing-your-repository)
- [シークレットスキャンニングについて](/github/administering-a-repository/about-secret-scanning)
- [依存関係を自動的に更新する](/github/administering-a-repository/keeping-your-dependencies-updated-automatically)
{% endif %}
- [依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)
- [プロジェクトの依存関係にある脆弱性を管理する](/github/managing-security-vulnerabilities/managing-vulnerabilities-in-your-projects-dependencies)
