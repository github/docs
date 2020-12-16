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
{% data reusables.security.security-and-analysis-features-enable-read-only %}

### Displaying the security and analysis settings

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}

The page that's displayed allows you to enable or disable security and analysis features for the repositories in your organization.

### Enabling or disabling a feature for all existing repositories

1. Go to the security and analysis settings for your organization. For more information, see "[Displaying the security and analysis settings](#displaying-the-security-and-analysis-settings)."
1. [Configure security and analysis features] で、機能の右側にある [**Disable all**] または [**Enable**] をクリックします。 ![[Configure security and analysis] 機能の [Enable all] または [Disable all] ボタン](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all.png)
1. オプションで、Organization の新しいリポジトリに対して機能をデフォルトで有効にすることもできます。 ![新規のリポジトリの [Enable by default] オプション](/assets/images/help/organizations/security-and-analysis-enable-by-default-in-modal.png)
1. Organization のすべてのリポジトリに対してこの機能を有効または無効にするには、[**Disable FEATURE**] または [**Enable FEATURE**] をクリックします。 ![機能 を無効または有効にするボタン](/assets/images/help/organizations/security-and-analysis-enable-dependency-graph.png)

### Enabling or disabling a feature for all new repositories when they are added

1. Go to the security and analysis settings for your organization. For more information, see "[Displaying the security and analysis settings](#displaying-the-security-and-analysis-settings)."
1. [Configure security and analysis features] にある機能の右側で、Organization の新規のリポジトリに対して機能をデフォルトで有効または無効にします。 ![新規のリポジトリに対して機能を有効または無効にするチェックボックス](/assets/images/help/organizations/security-and-analysis-enable-or-disable-feature-checkbox.png)

### Allowing Dependabot to access private repositories

{% data variables.product.prodname_dependabot %} can check for outdated dependency references in a project and automatically generate a pull request to update them. To do this, {% data variables.product.prodname_dependabot %} must have access to the targeted dependency files. By default, {% data variables.product.prodname_dependabot %} can't update dependencies that are located in private repositories. However, if a dependency is in a private {% data variables.product.prodname_dotcom %} repository within the same organization as the project that uses that dependency, you can allow {% data variables.product.prodname_dependabot %} to update the version successfully by giving it access to the host repository. For more information, including details of limitations to private dependency support, see "[About Dependabot version updates](/github/administering-a-repository/about-dependabot-version-updates)."

1. Go to the security and analysis settings for your organization. For more information, see "[Displaying the security and analysis settings](#displaying-the-security-and-analysis-settings)."
1. In the "{% data variables.product.prodname_dependabot %} repository access" section, click the settings button **{% octicon "gear" aria-label="The Gear icon" %}**. ![Repository access setting button](/assets/images/help/organizations/repository-access-cog-button.png) A list is displayed showing all of the private repositories in your organization. ![The Repositories list](/assets/images/help/organizations/repositories-dialog.png)
1. Select the repositories that {% data variables.product.prodname_dependabot %} can access.
1. Click **Select repositories**.


### 参考リンク

{% if currentVersion == "free-pro-team@latest" %}- [リポジトリのセキュリティ保護について](/github/administering-a-repository/about-securing-your-repository)
- [シークレットスキャンニングについて](/github/administering-a-repository/about-secret-scanning)
- [依存関係を自動的に更新する](/github/administering-a-repository/keeping-your-dependencies-updated-automatically)
{% endif %}
- [依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)
- [プロジェクトの依存関係にある脆弱性を管理する](/github/managing-security-vulnerabilities/managing-vulnerabilities-in-your-projects-dependencies)
