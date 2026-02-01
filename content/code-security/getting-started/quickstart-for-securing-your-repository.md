---
title: Quickstart for securing your repository
intro: 'Manage access to your code. Find and fix vulnerable code and dependencies automatically.'
permissions: '{% data reusables.permissions.security-repo-enable %}'
redirect_from:
  - /github/administering-a-repository/about-securing-your-repository
  - /github/code-security/getting-started/about-securing-your-repository
  - /code-security/getting-started/securing-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: get-started
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
  - Code Security
  - Secret Protection
shortTitle: Secure repository quickstart
---

## Introduction

This guide shows you how to configure security features for a repository.

Your security needs are unique to your repository, so you may not need to enable every feature for your repository. For more information, see [AUTOTITLE](/code-security/getting-started/github-security-features).

{% data reusables.advanced-security.security-feature-availability %}

## Managing access to your repository

The first step to securing a repository is to establish who can see and modify your code. For more information, see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features).

From the main page of your repository, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**, then scroll down to the "Danger Zone."

* To change who can view your repository, click **Change visibility**. For more information, see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility).
* To change who can access your repository and adjust permissions, click **Manage access**. For more information, see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository).

## Managing the dependency graph

{% ifversion fpt or ghec %}
{% data reusables.dependency-graph.feature-availability %} The dependency graph interprets manifest and lock files in a repository to identify dependencies.

1. From the main page of your repository, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.
1. Click **{% data variables.product.UI_advanced_security %}**.
1. Next to Dependency graph, click **Enable** or **Disable**.
{% endif %}

{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

For more information, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph).

## Managing {% data variables.product.prodname_dependabot_alerts %}

{% data variables.product.prodname_dependabot_alerts %} are generated when {% data variables.product.prodname_dotcom %} identifies a dependency in the dependency graph with a vulnerability. {% ifversion fpt or ghec %}You can enable {% data variables.product.prodname_dependabot_alerts %} for any repository.{% endif %}

{% data reusables.dependabot.dependabot-alert-rules %}

{% data reusables.dependabot.quickstart-link %}

{% ifversion fpt or ghec %}
1. Click your profile picture, then click **Settings**.
1. Click **{% data variables.product.UI_advanced_security %}**.
1. Click **Enable** next to {% data variables.product.prodname_dependabot_alerts %}.
{% endif %}

{% ifversion ghes %}
{% data reusables.dependabot.dependabot-alerts-enterprise-server-repo-org-enablement %}
{% endif %}

For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts){% ifversion fpt or ghec %} and [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account){% endif %}.

## Managing dependency review

Dependency review lets you visualize dependency changes in pull requests before they are merged into your repositories. For more information, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review).

Dependency review is a {% data variables.product.prodname_GH_code_security %} feature. {% ifversion fpt or ghec %}Dependency review is enabled for all repositories with the dependency graph enabled. Organizations that use {% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_GH_code_security %} can additionally enable dependency review for private and internal repositories.{% endif %}

To enable dependency review for a repository, ensure that the dependency graph is enabled.

1. From the main page of your repository, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.
1. Click **{% data variables.product.UI_advanced_security %}**.{% ifversion fpt or ghec %}
1. To the right of {% data variables.product.prodname_code_security %}, click **Enable**.
1. Under {% data variables.product.prodname_code_security %}, check that dependency graph is enabled for the repository. {% elsif ghes %}
1. Check that dependency graph is configured for your enterprise.{% endif %}

## Managing {% data variables.product.prodname_dependabot_security_updates %}

For any repository that uses {% data variables.product.prodname_dependabot_alerts %}, you can enable {% data variables.product.prodname_dependabot_security_updates %} to raise pull requests with security updates when vulnerabilities are detected.

1. From the main page of your repository, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.
1. Click **{% data variables.product.UI_advanced_security %}**.
1. Next to {% data variables.product.prodname_dependabot_security_updates %}, click **Enable**.

For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates) and [AUTOTITLE](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates).

## Managing {% data variables.product.prodname_dependabot_version_updates %}

You can enable {% data variables.product.prodname_dependabot %} to automatically raise pull requests to keep your dependencies up-to-date. For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates).

{% ifversion dependabot-settings-update-37 %}
1. From the main page of your repository, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.
1. Click **{% data variables.product.UI_advanced_security %}**.
1. Next to {% data variables.product.prodname_dependabot_version_updates %}, click **Enable** to create a basic `dependabot.yml` configuration file.
1. Specify the dependencies to update and any associated configuration options, then commit the file to the repository. For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#enabling-dependabot-version-updates).

{% else %}
To enable {% data variables.product.prodname_dependabot_version_updates %}, you must create a `dependabot.yml` configuration file. For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates).
{% endif %}

## Configuring {% ifversion ghas-products %}{% data variables.product.prodname_code_security %}{% else %}{% data variables.product.prodname_code_scanning %}{% endif %}

{% ifversion fpt or ghec %}

> [!NOTE]
> {% data variables.product.prodname_code_security %} features are available for all public repositories, and for private repositories owned by organizations that are part of a team or an enterprise that uses {% data variables.product.prodname_GH_code_security %} or {% data variables.product.prodname_GHAS %}.

{% endif %}

{% ifversion ghas-products %}{% data variables.product.prodname_GH_code_security %} includes {% data variables.product.prodname_code_scanning %}, {% data variables.product.prodname_codeql_cli %} and {% data variables.copilot.copilot_autofix_short %}, as well as other features that find and fix vulnerabilities in your codebase.{% endif %}

You can configure {% data variables.product.prodname_code_scanning %} to automatically identify vulnerabilities and errors in the code stored in your repository by using a {% data variables.code-scanning.codeql_workflow %} or third-party tool. Depending on the programming languages in your repository, you can configure {% data variables.product.prodname_code_scanning %} with {% data variables.product.prodname_codeql %} using default setup, in which {% data variables.product.github %} automatically determines the languages to scan, query suites to run, and events that will trigger a new scan. For more information, see [AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning).

1. From the main page of your repository, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.
1. In the "Security" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" aria-label="shield-lock" %} {% data variables.product.UI_advanced_security %}**.{% ifversion ghas-products %}
1. If "{% data variables.product.prodname_code_security %}" or "{% data variables.product.prodname_GHAS %}" is not already enabled, click **Enable**.
1. To the right of "CodeQL analysis", select **Set up** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %}, then click **Default**.{% else %}
1. In the "{% data variables.product.prodname_code_scanning_caps %}" section, select **Set up** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %}, then click **Default**.{% endif %}
1. In the pop-up window that appears, review the default configuration settings for your repository, then click **Enable {% data variables.product.prodname_codeql %}**.{% ifversion code-scanning-autofix %}
1. Choose whether you want to enable addition features, such as {% data variables.copilot.copilot_autofix_short %}.{% endif %}

As an alternative to default setup, you can use advanced setup, which generates a workflow file you can edit to customize your {% data variables.product.prodname_code_scanning %} with {% data variables.product.prodname_codeql %}. For more information, see [AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning#configuring-advanced-setup-for-code-scanning-with-codeql).

## Configuring {% ifversion ghas-products %}{% data variables.product.prodname_secret_protection %}{% else %}{% data variables.product.prodname_secret_scanning %}{% endif %}

{% ifversion fpt or ghec %}

> [!NOTE]
> {% data variables.product.prodname_secret_protection %} features are available for all public repositories, and for private repositories owned by organizations that are part of a team or an enterprise that uses {% data variables.product.prodname_GH_secret_protection %} or {% data variables.product.prodname_GHAS %}.

{% endif %}

{% ifversion ghas-products %}{% data variables.product.prodname_GH_secret_protection %} includes {% data variables.product.prodname_secret_scanning %} and push protection, as well as other features that help you detect and prevent secret leaks in your repository.{% endif %}

1. From the main page of your repository, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**.
1. Click **{% data variables.product.UI_advanced_security %}**.
1. If "{% data variables.product.prodname_secret_protection %}" or "{% data variables.product.prodname_GHAS %}" is not already enabled, click **Enable**.
1. If the option "{% data variables.product.prodname_secret_scanning_caps %}" is shown, click **Enable**.{% ifversion ghas-products %}
1. Choose whether you want to enable additional features, such as scanning for non-provider patterns and push protection.{% endif %}

## Setting a security policy

If you are a repository maintainer, it's good practice to specify a security policy for your repository by creating a file named `SECURITY.md` in the repository. This file instructs users about how to best contact you and collaborate with you when they want to report security vulnerabilities in your repository. You can view the security policy of a repository from the repository’s **Security** tab.

1. From the main page of your repository, click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security**.
1. In the left sidebar, under "Reporting", click **{% octicon "law" aria-hidden="true" aria-label="law" %} Policy**.
1. Click **Start setup**.
1. Add information about supported versions of your project and how to report vulnerabilities.

For more information, see [AUTOTITLE](/code-security/getting-started/adding-a-security-policy-to-your-repository).

## Next steps

You can view and manage alerts from security features to address dependencies and vulnerabilities in your code. For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts), [AUTOTITLE](/code-security/dependabot/working-with-dependabot/managing-pull-requests-for-dependency-updates), [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/assessing-code-scanning-alerts-for-your-repository), and [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning).

You can also use {% data variables.product.github %}'s tools to audit responses to security alerts. For more information, see [AUTOTITLE](/code-security/getting-started/auditing-security-alerts).

{% ifversion fpt or ghec %}If you have a security vulnerability in a public repository, you can create a security advisory to privately discuss and fix the vulnerability. For more information, see [AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/about-repository-security-advisories) and [AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/creating-a-repository-security-advisory).
{% endif %}

{% data reusables.security-overview.security-information-about-actions %}
