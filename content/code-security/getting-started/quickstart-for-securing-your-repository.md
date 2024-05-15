---
title: Quickstart for securing your repository
intro: 'You can use a number of {% data variables.product.prodname_dotcom %} features to help keep your repository secure.'
permissions: Repository administrators and organization owners can configure repository security settings.
redirect_from:
  - /github/administering-a-repository/about-securing-your-repository
  - /github/code-security/getting-started/about-securing-your-repository
  - /code-security/getting-started/securing-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
  - Advanced Security
shortTitle: Secure repository quickstart
---

## Introduction

This guide shows you how to configure security features for a repository. You must be a repository administrator or organization owner to configure security settings for a repository.

Your security needs are unique to your repository, so you may not need to enable every feature for your repository. For more information, see "[AUTOTITLE](/code-security/getting-started/github-security-features)."

{% data reusables.advanced-security.security-feature-availability %}

## Managing access to your repository

The first step to securing a repository is to establish who can see and modify your code. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features)."

From the main page of your repository, click **{% octicon "gear" aria-label="The Settings gear" %} Settings**, then scroll down to the "Danger Zone."

- To change who can view your repository, click **Change visibility**. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility)."
- To change who can access your repository and adjust permissions, click **Manage access**. For more information, see"[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)."

## Managing the dependency graph

{% ifversion fpt or ghec %}
{% data reusables.dependency-graph.feature-availability %} The dependency graph interprets manifest and lock files in a repository to identify dependencies.

1. From the main page of your repository, click **{% octicon "gear" aria-label="The Settings gear" %} Settings**.
1. Click **Security & analysis**.
1. Next to Dependency graph, click **Enable** or **Disable**.
{% endif %}

{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

For more information, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)."

## Managing {% data variables.product.prodname_dependabot_alerts %}

{% data variables.product.prodname_dependabot_alerts %} are generated when {% data variables.product.prodname_dotcom %} identifies a dependency in the dependency graph with a vulnerability. {% ifversion fpt or ghec %}You can enable {% data variables.product.prodname_dependabot_alerts %} for any repository.{% endif %}

{% ifversion dependabot-auto-triage-rules %}

{% data reusables.dependabot.dependabot-alert-rules %}

{% endif %}

{% data reusables.dependabot.quickstart-link %}

{% ifversion fpt or ghec %}
1. Click your profile photo, then click **Settings**.
1. Click **Security & analysis**.
1. Click **Enable all** next to {% data variables.product.prodname_dependabot_alerts %}.
{% endif %}

{% ifversion dependabot-alerts-ghes-enablement %}
{% data reusables.dependabot.dependabot-alerts-enterprise-server-repo-org-enablement %}
{% else %}
{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}
{% endif %}

For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts){% ifversion fpt or ghec %}" and "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account){% endif %}."

## Managing dependency review

Dependency review lets you visualize dependency changes in pull requests before they are merged into your repositories. For more information, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)."

Dependency review is a {% data variables.product.prodname_GH_advanced_security %} feature. {% ifversion fpt or ghec %}Dependency review is already enabled for all public repositories. {% ifversion fpt %}Organizations that use {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_advanced_security %} can additionally enable dependency review for private and internal repositories. For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/code-security/getting-started/quickstart-for-securing-your-repository#managing-dependency-review). {% endif %}{% endif %}{% ifversion ghec or ghes %}To enable dependency review for a {% ifversion ghec %}private or internal {% endif %}repository, ensure that the dependency graph is enabled and enable {% data variables.product.prodname_GH_advanced_security %}.

1. From the main page of your repository, click **{% octicon "gear" aria-label="The Settings gear" %}Settings**.
1. Click **Security & analysis**.
1. {% ifversion ghec %}If dependency graph is not already enabled, click **Enable**.{% elsif ghes %}Check that dependency graph is configured for your enterprise.{% endif %}
1. If {% data variables.product.prodname_GH_advanced_security %} is not already enabled, click **Enable**.

{% endif %}

## Managing {% data variables.product.prodname_dependabot_security_updates %}

For any repository that uses {% data variables.product.prodname_dependabot_alerts %}, you can enable {% data variables.product.prodname_dependabot_security_updates %} to raise pull requests with security updates when vulnerabilities are detected.

1. From the main page of your repository, click **{% octicon "gear" aria-label="The Settings gear" %}Settings**.
1. Click **Security & analysis**.
1. Next to {% data variables.product.prodname_dependabot_security_updates %}, click **Enable**.

For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates)" and "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)."

## Managing {% data variables.product.prodname_dependabot_version_updates %}

You can enable {% data variables.product.prodname_dependabot %} to automatically raise pull requests to keep your dependencies up-to-date. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates)."

{% ifversion dependabot-settings-update-37 %}
1. From the main page of your repository, click **{% octicon "gear" aria-label="The Settings gear" %} Settings**.
1. Click **Security & analysis**.
1. Next to {% data variables.product.prodname_dependabot_version_updates %}, click **Enable** to create a basic `dependabot.yml` configuration file.
1. Specify the dependencies to update and any associated configuration options, then commit the file to the repository. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#enabling-dependabot-version-updates)."

{% else %}
To enable {% data variables.product.prodname_dependabot_version_updates %}, you must create a `dependabot.yml` configuration file. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)."
{% endif %}

## Configuring {% data variables.product.prodname_code_scanning %}

You can configure {% data variables.product.prodname_code_scanning %} to automatically identify vulnerabilities and errors in the code stored in your repository by using a {% data variables.code-scanning.codeql_workflow %} or third-party tool.{% ifversion code-scanning-without-workflow %} Depending on the programming languages in your repository, you can configure {% data variables.product.prodname_code_scanning %} with {% data variables.product.prodname_codeql %} using default setup, in which {% data variables.product.prodname_dotcom %} automatically determines the languages to scan, query suites to run, and events that will trigger a new scan. For more information, see "[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning)."{% else %} For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning)."{% endif %}

{% ifversion code-scanning-without-workflow %}

1. From the main page of your repository, click {% octicon "gear" aria-hidden="true" %} **Settings**.
1. In the "Security" section of the sidebar, click **{% octicon "shield-lock" aria-hidden="true" %} Code security and analysis**.
1. In the "{% data variables.product.prodname_code_scanning_caps %}" section, select **Set up** {% octicon "triangle-down" aria-hidden="true" %}, then click **Default**.
1. In the pop-up window that appears, review the default configuration settings for your repository, then click **Enable {% data variables.product.prodname_codeql %}**.

Alternatively, you can use advanced setup, which generates a workflow file you can edit to customize your {% data variables.product.prodname_code_scanning %} with {% data variables.product.prodname_codeql %}. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning#configuring-advanced-setup-for-code-scanning-with-codeql)."

{% endif %}

{% data variables.product.prodname_code_scanning_caps %} is available {% ifversion fpt or ghec %}for all public repositories, and for private repositories owned by organizations that are part of an enterprise with a license for {% else %}for organization-owned repositories if your enterprise uses {% endif %}{% data variables.product.prodname_GH_advanced_security %}. {% data reusables.secret-scanning.secret-scanning-user-owned-repos-beta %}

## Configuring {% data variables.product.prodname_secret_scanning %}

{% data reusables.gated-features.secret-scanning %}

1. From the main page of your repository, click **{% octicon "gear" aria-label="The Settings gear" %}Settings**.
1. Click **Code security & analysis**.
{% ifversion ghec or ghes %}
1. If {% data variables.product.prodname_GH_advanced_security %} is not already enabled, click **Enable**.{% endif %}
1. Next to {% data variables.product.prodname_secret_scanning_caps %}, click **Enable**.

## Setting a security policy

If you are a repository maintainer, it's good practice to specify a security policy for your repository by creating a file named `SECURITY.md` in the repository. This file instructs users about how to best contact you and collaborate with you when they want to report security vulnerabilities in your repository. You can view the security policy of a repository from the repository’s **Security** tab.

1. From the main page of your repository, click **{% octicon "shield" aria-label="The shield symbol" %} Security**.
1. Click **Security policy**.
1. Click **Start setup**.
1. Add information about supported versions of your project and how to report vulnerabilities.

For more information, see "[AUTOTITLE](/code-security/getting-started/adding-a-security-policy-to-your-repository)."

## Next steps

You can view and manage alerts from security features to address dependencies and vulnerabilities in your code. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)," "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/managing-pull-requests-for-dependency-updates)," "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository)," and "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning)".

You can also use {% data variables.product.prodname_dotcom %}'s tools to audit responses to security alerts. For more information, see "[AUTOTITLE](/code-security/getting-started/auditing-security-alerts)".

{% ifversion fpt or ghec %}If you have a security vulnerability in a public repository, you can create a security advisory to privately discuss and fix the vulnerability. For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/about-repository-security-advisories)" and "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/creating-a-repository-security-advisory)."
{% endif %}

{% data reusables.security-overview.security-information-about-actions %}
