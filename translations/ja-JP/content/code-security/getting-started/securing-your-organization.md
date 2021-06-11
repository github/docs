---
title: Securing your organization
intro: 'You can use a number of {% data variables.product.prodname_dotcom %} features to help keep your organization secure.'
permissions: Organization owners can configure organization security settings.
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
type: how_to
topics:
  - Organizations
  - Dependencies
  - Vulnerabilities
  - Advanced Security
---

### はじめに
This guide shows you how to configure security features for an organization. Your organization's security needs are unique and you may not need to enable every security feature. For more information, see "[{% data variables.product.prodname_dotcom %} security features](/code-security/getting-started/github-security-features)."

Some security features are only available {% if currentVersion == "free-pro-team@latest" %}for public repositories, and for private repositories owned by organizations with {% else %}if you have {% endif %}an {% data variables.product.prodname_advanced_security %} license. {% data reusables.advanced-security.more-info-ghas %}

### Managing access to your organization

You can use permission levels to control what actions people can take in your organization. 詳しい情報については、「[Organization の権限レベル](/organizations/managing-peoples-access-to-your-organization-with-roles/permission-levels-for-an-organization)」を参照してください。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}

### Creating a default security policy

You can create a default security policy that will display in any of your organization's public repositories that do not have their own security policy. 詳しい情報については「[デフォルトのコミュニティ健全性ファイルを作成する](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)」を参照してください。

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### Managing {% data variables.product.prodname_dependabot_alerts %} and the dependency graph

By default, {% data variables.product.prodname_dotcom %} detects vulnerabilities in public repositories and generates {% data variables.product.prodname_dependabot_alerts %} and a dependency graph. You can enable or disable {% data variables.product.prodname_dependabot_alerts %} and the dependency graph for all repositories owned by your organization.

1. Click your profile photo, then click **Organizations**.
2. Click **Settings** next to your organization.
3. Click **Security & analysis**.
4. Click **Enable all** or **Disable all** next to the feature that you want to manage.
5. Optionally, select **Automatically enable for new repositories**.

For more information, see "[About alerts for vulnerable dependencies](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)," "[Exploring the dependencies of a repository](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)," and "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" %}

### Managing dependency review

Dependency review lets you visualize dependency changes in pull requests before they are merged into your repositories. Dependency review is available in all public repositories and in repositories owned by organizations with an {% data variables.product.prodname_advanced_security %} license that have the dependency graph enabled. For more information, see "[About dependency review](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)."

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### Managing {% data variables.product.prodname_dependabot_security_updates %}

For any repository that uses {% data variables.product.prodname_dependabot_alerts %}, you can enable {% data variables.product.prodname_dependabot_security_updates %} to raise pull requests with security updates when vulnerabilities are detected. You can also enable or disable {% data variables.product.prodname_dependabot_security_updates %} for all repositories across your organization.

1. Click your profile photo, then click **Organizations**.
2. Click **Settings** next to your organization.
3. Click **Security & analysis**.
4. Click **Enable all** or **Disable all** next to {% data variables.product.prodname_dependabot_security_updates %}.
5. Optionally, select **Automatically enable for new repositories**.

For more information, see "[About {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/about-dependabot-security-updates)" and "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."

### Managing {% data variables.product.prodname_dependabot_version_updates %}

You can enable {% data variables.product.prodname_dependabot %} to automatically raise pull requests to keep your dependencies up-to-date. For more information, see "[About {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/about-dependabot-version-updates)."

To enable {% data variables.product.prodname_dependabot_version_updates %}, you must create a *dependabot.yml* configuration file. For more information, see "[Enabling and disabling version updates](/code-security/supply-chain-security/enabling-and-disabling-version-updates)."

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### Managing {% data variables.product.prodname_GH_advanced_security %}

If your organization has an {% data variables.product.prodname_advanced_security %} license, you can enable or disable {% data variables.product.prodname_advanced_security %} features.

1. Click your profile photo, then click **Organizations**.
2. Click **Settings** next to your organization.
3. Click **Security & analysis**.
4. Click **Enable all** or **Disable all** next to {% data variables.product.prodname_GH_advanced_security %}.
5. Optionally, select **Automatically enable for new private repositories**.

For more information, see "[About {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)" and "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."

### Configuring {% data variables.product.prodname_secret_scanning %}
{% data variables.product.prodname_secret_scanning_caps %} is available {% if currentVersion == "free-pro-team@latest" %}for all public repositories, and for private repositories owned by organizations with {% else %}if you have {% endif %}an {% data variables.product.prodname_advanced_security %} license.

You can enable or disable {% data variables.product.prodname_secret_scanning %} for all repositories across your organization that have {% data variables.product.prodname_advanced_security %} enabled.

1. Click your profile photo, then click **Organizations**.
2. Click **Settings** next to your organization.
3. Click **Security & analysis**.
4. Click **Enable all** or **Disable all** next to {% data variables.product.prodname_secret_scanning_caps %} ({% data variables.product.prodname_GH_advanced_security %} repositories only).
5. Optionally, select **Automatically enable for private repositories added to {% data variables.product.prodname_advanced_security %}**.

詳しい情報については「[Organizatonのためのセキュリティ及び分析設定の管理](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。

{% endif %}

### 次のステップ
{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@next" %}You can view, filter, and sort security alerts for repositories owned by your organization in the security overview. For more information, see "[Exploring security alerts](/code-security/security-overview/exploring-security-alerts)."{% endif %}

You can view and manage alerts from security features to address dependencies and vulnerabilities in your code. For more information, see {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %} "[Viewing and updating vulnerable dependencies in your repository](/code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository),"{% endif %} {% if currentVersion == "free-pro-team@latest" %}"[Managing pull requests for dependency updates](/code-security/supply-chain-security/managing-pull-requests-for-dependency-updates)," {% endif %}"[Managing {% data variables.product.prodname_code_scanning %} for your repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)," and "[Managing alerts from {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)."

{% if currentVersion == "free-pro-team@latest" %}If you have a security vulnerability, you can create a security advisory to privately discuss and fix the vulnerability. For more information, see "[About {% data variables.product.prodname_security_advisories %}](/code-security/security-advisories/about-github-security-advisories)" and "[Creating a security advisory](/code-security/security-advisories/creating-a-security-advisory)."
{% endif %}
