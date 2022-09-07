---
title: Securing your repository
intro: 'You can use a number of {% data variables.product.prodname_dotcom %} features to help keep your repository secure.'
permissions: Repository administrators and organization owners can configure repository security settings.
redirect_from:
  - /github/administering-a-repository/about-securing-your-repository
  - /github/code-security/getting-started/about-securing-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
  - Advanced Security
shortTitle: Secure your repository
---

## Introduction
This guide shows you how to configure security features for a repository. You must be a repository administrator or organization owner to configure security settings for a repository.

Your security needs are unique to your repository, so you may not need to enable every feature for your repository. For more information, see "[{% data variables.product.prodname_dotcom %} security features](/code-security/getting-started/github-security-features)."

{% data reusables.advanced-security.security-feature-availability %}

## Managing access to your repository

The first step to securing a repository is to set up who can see and modify your code. For more information, see "[Managing repository settings](/github/administering-a-repository/managing-repository-settings)."

From the main page of your repository, click **{% octicon "gear" aria-label="The Settings gear" %}Settings**, then scroll down to the "Danger Zone."

- To change who can view your repository, click **Change visibility**. For more information, see "[Setting repository visibility](/github/administering-a-repository/setting-repository-visibility)."{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %}
- To change who can access your repository and adjust permissions, click **Manage access**. For more information, see"[Managing teams and people with access to your repository](/github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository)."{% endif %}

## Setting a security policy

1. From the main page of your repository, click **{% octicon "shield" aria-label="The shield symbol" %} Security**.
2. Click **Security policy**.
3. Click **Start setup**.
4. Add information about supported versions of your project and how to report vulnerabilities.

For more information, see "[Adding a security policy to your repository](/code-security/getting-started/adding-a-security-policy-to-your-repository)."

## Managing the dependency graph

{% ifversion fpt or ghec %}
The dependency graph is automatically generated for all public repositories, and you can choose to enable it for private repositories. It interprets manifest and lock files in a repository to identify dependencies.

1. From the main page of your repository, click **{% octicon "gear" aria-label="The Settings gear" %} Settings**.
2. Click **Security & analysis**.
3. Next to Dependency graph, click **Enable** or **Disable**.
{% endif %}

{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

For more information, see "[Exploring the dependencies of a repository](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)."

## Managing {% data variables.product.prodname_dependabot_alerts %}

{% data variables.product.prodname_dependabot_alerts %} are generated when {% data variables.product.prodname_dotcom %} identifies a dependency in the dependency graph with a vulnerability. {% ifversion fpt or ghec %}You can enable {% data variables.product.prodname_dependabot_alerts %} for any repository.{% endif %}

{% ifversion fpt or ghec %}
1. Click your profile photo, then click **Settings**.
2. Click **Security & analysis**.
3. Click **Enable all** next to {% data variables.product.prodname_dependabot_alerts %}.
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %}
{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

For more information, see "[About {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies){% ifversion fpt or ghec %}" and "[Managing security and analysis settings for your personal account](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account){% endif %}."

## Managing dependency review

Dependency review lets you visualize dependency changes in pull requests before they are merged into your repositories. For more information, see "[About dependency review](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)."

Dependency review is a {% data variables.product.prodname_GH_advanced_security %} feature. {% ifversion fpt or ghec %}Dependency review is already enabled for all public repositories. {% ifversion fpt %}Organizations that use {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_advanced_security %} can additionally enable dependency review for private and internal repositories. For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/code-security/getting-started/securing-your-repository#managing-dependency-review). {% endif %}{% endif %}{% ifversion ghec or ghes or ghae %}To enable dependency review for a {% ifversion ghec %}private or internal {% endif %}repository, ensure that the dependency graph is enabled and enable {% data variables.product.prodname_GH_advanced_security %}. 

1. From the main page of your repository, click **{% octicon "gear" aria-label="The Settings gear" %}Settings**.
2. Click **Security & analysis**.
3. {% ifversion ghec %}If dependency graph is not already enabled, click **Enable**.{% elsif ghes or ghae %}Check that dependency graph is configured for your enterprise.{% endif %}
4. If {% data variables.product.prodname_GH_advanced_security %} is not already enabled, click **Enable**.

{% endif %}


{% ifversion fpt or ghec or ghes > 3.2 %}

## Managing {% data variables.product.prodname_dependabot_security_updates %}

For any repository that uses {% data variables.product.prodname_dependabot_alerts %}, you can enable {% data variables.product.prodname_dependabot_security_updates %} to raise pull requests with security updates when vulnerabilities are detected.

1. From the main page of your repository, click **{% octicon "gear" aria-label="The Settings gear" %}Settings**.
2. Click **Security & analysis**.
3. Next to {% data variables.product.prodname_dependabot_security_updates %}, click **Enable**.

For more information, see "[About {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/about-dependabot-security-updates)" and "[Configuring {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/configuring-dependabot-security-updates)."

## Managing {% data variables.product.prodname_dependabot_version_updates %}

You can enable {% data variables.product.prodname_dependabot %} to automatically raise pull requests to keep your dependencies up-to-date. For more information, see "[About {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/about-dependabot-version-updates)."

{% ifversion dependabot-settings-update-37 %}
1. From the main page of your repository, click **{% octicon "gear" aria-label="The Settings gear" %} Settings**.
2. Click **Security & analysis**.
3. Next to {% data variables.product.prodname_dependabot_version_updates %}, click **Enable** to create a basic *dependabot.yml* configuration file.
4. Specify the dependencies to update and commit the file to the repository. For more information, see "[Configuring Dependabot version updates](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#enabling-dependabot-version-updates)."

{% else %}
To enable {% data variables.product.prodname_dependabot_version_updates %}, you must create a *dependabot.yml* configuration file. For more information, see "[Configuring {% data variables.product.prodname_dependabot %} version updates](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)."
{% endif %}

{% endif %}

## Configuring {% data variables.product.prodname_code_scanning %}

You can set up {% data variables.product.prodname_code_scanning %} to automatically identify vulnerabilities and errors in the code stored in your repository by using a {% data variables.product.prodname_codeql_workflow %} or third-party tool. For more information, see "[Setting up {% data variables.product.prodname_code_scanning %} for a repository](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)."

{% data variables.product.prodname_code_scanning_capc %} is available {% ifversion fpt or ghec %}for all public repositories, and for private repositories owned by organizations that are part of an enterprise with a license for {% else %}for organization-owned repositories if your enterprise uses {% endif %}{% data variables.product.prodname_GH_advanced_security %}.

## Configuring {% data variables.product.prodname_secret_scanning %}

{% data variables.product.prodname_secret_scanning_caps %} is {% ifversion fpt or ghec %}enabled for all public repositories and is available for private repositories owned by organizations that are part of an enterprise with a license for {% else %}available for organization-owned repositories if your enterprise uses {% endif %}{% data variables.product.prodname_GH_advanced_security %}. {% ifversion fpt %}For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/code-security/getting-started/securing-your-repository#configuring-secret-scanning).{% else %}{% data variables.product.prodname_secret_scanning_caps %} may already be enabled for your repository, depending upon your organization's settings.

1. From the main page of your repository, click **{% octicon "gear" aria-label="The Settings gear" %}Settings**.
2. Click **Security & analysis**.
3. If {% data variables.product.prodname_GH_advanced_security %} is not already enabled, click **Enable**.
4. Next to {% data variables.product.prodname_secret_scanning_caps %}, click **Enable**. 
{% endif %}

## Next steps
You can view and manage alerts from security features to address dependencies and vulnerabilities in your code. For more information, see {% ifversion fpt or ghes or ghec %} "[Viewing and updating {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts),"{% endif %} {% ifversion fpt or ghec or ghes > 3.2 %}"[Managing pull requests for dependency updates](/code-security/supply-chain-security/managing-pull-requests-for-dependency-updates)," {% endif %}"[Managing {% data variables.product.prodname_code_scanning %} for your repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)," and "[Managing alerts from {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)."

{% ifversion fpt or ghec %}If you have a security vulnerability, you can create a security advisory to privately discuss and fix the vulnerability. For more information, see "[About {% data variables.product.prodname_security_advisories %}](/code-security/security-advisories/about-github-security-advisories)" and "[Creating a security advisory](/code-security/security-advisories/creating-a-security-advisory)."
{% endif %}
