---
title: Organization のセキュリティおよび分析設定を管理する
intro: '{% data variables.product.prodname_dotcom %} 上の Organization のプロジェクトでコードを保護し分析する機能を管理できます。'
permissions: Organization のオーナーは、Organization のリポジトリのセキュリティおよび分析設定を管理できます。
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-secret-scanning-for-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
---

### セキュリティおよび分析設定の管理について

{% data variables.product.prodname_dotcom %} を使用して、Organization のリポジトリを保護できます。 Organization でメンバーが作成する既存または新規のリポジトリすべてについて、セキュリティおよび分析機能を管理できます。 {% if currentVersion == "free-pro-team@latest" %}If you have a license for {% data variables.product.prodname_GH_advanced_security %} then you can also manage access to these features. {% data reusables.advanced-security.more-info-ghas %}{% endif %}

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}
{% data reusables.security.security-and-analysis-features-enable-read-only %}

### Displaying the security and analysis settings

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}

The page that's displayed allows you to enable or disable all security and analysis features for the repositories in your organization.

{% if currentVersion == "free-pro-team@latest" %}If your organization, or the enterprise that owns it, has a license for {% data variables.product.prodname_GH_advanced_security %}, the page will also contain options to enable and disable {% data variables.product.prodname_advanced_security %} features.{% endif %}

{% if currentVersion ver_gt "enterprise-server@3.0" %}If you have a license for {% data variables.product.prodname_GH_advanced_security %}, the page will also contain options to enable and disable {% data variables.product.prodname_advanced_security %} features.{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
![{% data variables.product.prodname_GH_advanced_security %} features](/assets/images/help/organizations/security-and-analysis-highlight-ghas.png)
{% endif %}

### Enabling or disabling a feature for all existing repositories

You can enable or disable features for all repositories. {% if currentVersion == "free-pro-team@latest" %}The impact of your changes on repositories in your organization is determined by their visibility:

- **Dependency graph** - Your changes affect only private repositories because the feature is always enabled for public repositories.
- **{% data variables.product.prodname_dependabot_alerts %}** - Your changes affect all repositories.
- **{% data variables.product.prodname_dependabot_security_updates %}** - Your changes affect all repositories.
- **{% data variables.product.prodname_GH_advanced_security %}** - Your changes affect only private repositories because {% data variables.product.prodname_GH_advanced_security %} and the related features are always enabled for public repositories.
- **{% data variables.product.prodname_secret_scanning_caps %}** - Your changes affect only private repositories where {% data variables.product.prodname_GH_advanced_security %} is also enabled. {% data variables.product.prodname_secret_scanning_caps %} is always enabled for public repositories.{% endif %}

{% data reusables.advanced-security.note-org-enable-uses-seats %}

1. Go to the security and analysis settings for your organization. For more information, see "[Displaying the security and analysis settings](#displaying-the-security-and-analysis-settings)."
1. [Configure security and analysis features] で、機能の右側にある [**Disable all**] または [**Enable**] をクリックします。
   {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
   ![[Configure security and analysis] 機能の [Enable all] または [Disable all] ボタン](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all-ghas-dotcom.png)
   {% else if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![[Configure security and analysis] 機能の [Enable all] または [Disable all] ボタン](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all-ghe.png)
   {% endif %}
2. オプションで、Organization の新しいリポジトリに対して機能をデフォルトで有効にすることもできます。
   {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
   ![新規のリポジトリの [Enable by default] オプション](/assets/images/help/organizations/security-and-analysis-enable-by-default-in-modal.png)
   {% else if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![新規のリポジトリの [Enable by default] オプション](/assets/images/help/organizations/security-and-analysis-secret-scanning-enable-by-default-ghe.png)
   {% endif %}
3. Organization のすべてのリポジトリに対してこの機能を有効または無効にするには、[**Disable FEATURE**] または [**Enable FEATURE**] をクリックします。
   {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
   ![機能 を無効または有効にするボタン](/assets/images/help/organizations/security-and-analysis-enable-dependency-graph.png)
   {% else if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![機能 を無効または有効にするボタン](/assets/images/help/organizations/security-and-analysis-enable-secret-scanning-ghe.png)
   {% endif %}

### Enabling or disabling a feature automatically when new repositories are added

1. Go to the security and analysis settings for your organization. For more information, see "[Displaying the security and analysis settings](#displaying-the-security-and-analysis-settings)."
1. Under "Configure security and analysis features", to the right of the feature, enable or disable the feature by default for new repositories
{% if currentVersion == "free-pro-team@latest" %}, or all new private repositories,{% endif %} in your organization.
   {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
   ![新規のリポジトリに対して機能を有効または無効にするチェックボックス](/assets/images/help/organizations/security-and-analysis-enable-or-disable-feature-checkbox-dotcom.png)
   {% else if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![新規のリポジトリに対して機能を有効または無効にするチェックボックス](/assets/images/help/organizations/security-and-analysis-enable-or-disable-secret-scanning-checkbox-ghe.png)
   {% endif %}

   {% data reusables.advanced-security.note-org-enable-uses-seats %}

{% if currentVersion == "free-pro-team@latest" %}

### Allowing Dependabot to access private repositories

{% data reusables.dependabot.beta-note %}

{% data variables.product.prodname_dependabot %} can check for outdated dependency references in a project and automatically generate a pull request to update them. To do this, {% data variables.product.prodname_dependabot %} must have access to all of the targeted dependency files. Typically, version updates will fail if one or more dependencies are inaccessible.

By default, {% data variables.product.prodname_dependabot %} can't update dependencies that are located in private repositories. However, if a dependency is in a private {% data variables.product.prodname_dotcom %} repository within the same organization as the project that uses that dependency, you can allow {% data variables.product.prodname_dependabot %} to update the version successfully by giving it access to the host repository. For more information, including details of limitations to private dependency support, see "[About Dependabot version updates](/github/administering-a-repository/about-dependabot-version-updates)."

1. Go to the security and analysis settings for your organization. For more information, see "[Displaying the security and analysis settings](#displaying-the-security-and-analysis-settings)."
1. In the "{% data variables.product.prodname_dependabot %} repository access" section, click the settings button **{% octicon "gear" aria-label="The Gear icon" %}**. ![Repository access setting button](/assets/images/help/organizations/repository-access-cog-button.png) A list is displayed showing all of the private repositories in your organization. ![The Repositories list](/assets/images/help/organizations/repositories-dialog.png)
1. Select the repositories that {% data variables.product.prodname_dependabot %} can access.
1. Click **Select repositories**.
{% endif %}

### 参考リンク

- 「[リポジトリのセキュリティ保護について](/github/administering-a-repository/about-securing-your-repository)」
- "[About secret scanning](/github/administering-a-repository/about-secret-scanning)"{% if currentVersion == "free-pro-team@latest" %}
- "[Keeping your dependencies updated automatically](/github/administering-a-repository/keeping-your-dependencies-updated-automatically)"{% endif %}
- [依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)
- [プロジェクトの依存関係にある脆弱性を管理する](/github/managing-security-vulnerabilities/managing-vulnerabilities-in-your-projects-dependencies)
