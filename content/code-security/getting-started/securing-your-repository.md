---
title: Securing your repository
intro: 'You can use a number of {% data variables.product.prodname_dotcom %} features to help keep your repository secure.'
permissions: 'Repository administrators and organization owners can configure repository security settings.'
redirect_from:
  - /github/administering-a-repository/about-securing-your-repository
  - /github/code-security/getting-started/about-securing-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
type: how_to
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
  - Advanced Security
---

### Introduction
This guide shows you how to configure security features for a repository. You must be a repository administrator or organization owner to configure security settings for a repository.

Your security needs are unique to your repository, so you may not need to enable every feature for your repository. For more information, see "[{% data variables.product.prodname_dotcom %} security features](/code-security/getting-started/github-security-features)."

Some security features are only available {% if currentVersion == "free-pro-team@latest" %}for public repositories, and for private repositories owned by organizations with {% else %}if you have {% endif %}an {% data variables.product.prodname_advanced_security %} license. {% data reusables.advanced-security.more-info-ghas %}

### Managing access to your repository

The first step to securing a repository is to set up who can see and modify your code. For more information, see "[Managing repository settings](/github/administering-a-repository/managing-repository-settings)."

From the main page of your repository, click **{% octicon "gear" aria-label="The Settings gear" %}Settings**, then scroll down to the "Danger Zone."

- To change who can view your repository, click **Change visibility**. For more information, see "[Setting repository visibility](/github/administering-a-repository/setting-repository-visibility)."{% if currentVersion == "free-pro-team@latest" %}
- To change who can access your repository and adjust permissions, click **Manage access**. For more information, see"[Managing teams and people with access to your repository](/github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository)."{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == 'github-ae@next' %}
### Setting a security policy

1. From the main page of your repository, click **{% octicon "shield" aria-label="The shield symbol" %} Security**.
2. Click **Security policy**.
3. Click **Start setup**.
4. Add information about supported versions of your project and how to report vulnerabilities.

For more information, see "[Adding a security policy to your repository](/code-security/getting-started/adding-a-security-policy-to-your-repository)."

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### Managing the dependency graph

The dependency graph is automatically generated for {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %} all public repositories and you can choose to enable it for private repositories.{% else %} all repositories.{% endif %}

1. From the main page of your repository, click **{% octicon "gear" aria-label="The Settings gear" %} Settings**.
2. Click **Security & analysis**.
3. Next to Dependency graph, click **Enable** or **Disable**.

For more information, see "[Exploring the dependencies of a repository](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)."

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### Managing {% data variables.product.prodname_dependabot_alerts %}

By default, {% data variables.product.prodname_dotcom %} detects vulnerabilities in public repositories and generates {% data variables.product.prodname_dependabot_alerts %}. {% data variables.product.prodname_dependabot_alerts %} can also be enabled for private repositories.

1. Click your profile photo, then click **Settings**.
2. Click **Security & analysis**.
3. Click **Enable all** next to {% data variables.product.prodname_dependabot_alerts %}.

For more information, see "[About alerts for vulnerable dependencies](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies){% if currentVersion == "free-pro-team@latest" %}" and "[Managing security and analysis settings for your user account](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account){% endif %}."

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" %}
### Managing dependency review

Dependency review lets you visualize dependency changes in pull requests before they are merged into your repository. Dependency review is available in all public repositories and in repositories owned by organizations with an {% data variables.product.prodname_advanced_security %} license that have the dependency graph enabled. For more information, see "[About dependency review](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)."

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

### Managing {% data variables.product.prodname_dependabot_security_updates %}

For any repository that uses {% data variables.product.prodname_dependabot_alerts %}, you can enable {% data variables.product.prodname_dependabot_security_updates %} to raise pull requests with security updates when vulnerabilities are detected.

1. From the main page of your repository, click **{% octicon "gear" aria-label="The Settings gear" %}Settings**.
2. Click **Security & analysis**.
3. Next to {% data variables.product.prodname_dependabot_security_updates %}, click **Enable**.

For more information, see "[About {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/about-dependabot-security-updates)" and "[Configuring {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/configuring-dependabot-security-updates)."

### Managing {% data variables.product.prodname_dependabot_version_updates %}

You can enable {% data variables.product.prodname_dependabot %} to automatically raise pull requests to keep your dependencies up-to-date. For more information, see "[About {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/about-dependabot-version-updates)."

To enable {% data variables.product.prodname_dependabot_version_updates %}, you must create a *dependabot.yml* configuration file. For more information, see "[Enabling and disabling version updates](/code-security/supply-chain-security/enabling-and-disabling-version-updates)."

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### Configuring {% data variables.product.prodname_code_scanning %}

{% data variables.product.prodname_code_scanning_capc %} is available {% if currentVersion == "free-pro-team@latest" %}for all public repositories, and for private repositories owned by organizations with {% else %} for organization-owned repositories if you have {% endif %}an {% data variables.product.prodname_advanced_security %} license.

You can set up {% data variables.product.prodname_code_scanning %} to automatically identify vulnerabilities and errors in the code stored in your repository by using a {% data variables.product.prodname_codeql_workflow %} or third-party tool. For more information, see "[Setting up {% data variables.product.prodname_code_scanning %} for a repository](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)."

### Configuring {% data variables.product.prodname_secret_scanning %}
{% data variables.product.prodname_secret_scanning_caps %} is available {% if currentVersion == "free-pro-team@latest" %}for all public repositories, and for private repositories owned by organizations with {% else %} for organization-owned repositories if you have {% endif %}an {% data variables.product.prodname_advanced_security %} license.

{% data variables.product.prodname_secret_scanning_caps %} may be enabled for your repository by default depending upon your organization's settings.

1. From the main page of your repository, click **{% octicon "gear" aria-label="The Settings gear" %}Settings**.
2. Click **Security & analysis**.
3. If {% data variables.product.prodname_GH_advanced_security %} is not already enabled, click **Enable**.
4. Next to {% data variables.product.prodname_secret_scanning_caps %}, click **Enable**. 

{% endif %}

### Next steps
You can view and manage alerts from security features to address dependencies and vulnerabilities in your code. For more information, see {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %} "[Viewing and updating vulnerable dependencies in your repository](/code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository),"{% endif %} {% if currentVersion == "free-pro-team@latest" %}"[Managing pull requests for dependency updates](/code-security/supply-chain-security/managing-pull-requests-for-dependency-updates)," {% endif %}"[Managing {% data variables.product.prodname_code_scanning %} for your repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)," and "[Managing alerts from {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)."

{% if currentVersion == "free-pro-team@latest" %}If you have a security vulnerability, you can create a security advisory to privately discuss and fix the vulnerability. For more information, see "[About {% data variables.product.prodname_security_advisories %}](/code-security/security-advisories/about-github-security-advisories)" and "[Creating a security advisory](/code-security/security-advisories/creating-a-security-advisory)."
{% endif %}
