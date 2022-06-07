---
title: Securing your organization
intro: 'You can use a number of {% data variables.product.prodname_dotcom %} features to help keep your organization secure.'
permissions: Organization owners can configure organization security settings.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Dependencies
  - Vulnerabilities
  - Advanced Security
shortTitle: Secure your organization
---

## Introduction
This guide shows you how to configure security features for an organization. Your organization's security needs are unique and you may not need to enable every security feature. For more information, see "[{% data variables.product.prodname_dotcom %} security features](/code-security/getting-started/github-security-features)."

{% data reusables.advanced-security.security-feature-availability %}

## Managing access to your organization

You can use roles to control what actions people can take in your organization. {% ifversion security-managers %}For example, you can assign the security manager role to a team to give them the ability to manage security settings across your organization, as well as read access to all repositories.{% endif %} For more information, see "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."

{% ifversion fpt or ghes > 3.0 or ghec %}

## Creating a default security policy

You can create a default security policy that will display in any of your organization's public repositories that do not have their own security policy. For more information, see "[Creating a default community health file](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)."

{% endif %}

{% ifversion fpt or ghes or ghae or ghec %}
## Managing {% data variables.product.prodname_dependabot_alerts %} and the dependency graph

{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %} detects vulnerabilities in public repositories and displays the dependency graph. You can enable or disable {% data variables.product.prodname_dependabot_alerts %} for all public repositories owned by your organization. You can enable or disable {% data variables.product.prodname_dependabot_alerts %} and the dependency graph for all private repositories owned by your organization.

1. Click your profile photo, then click **Organizations**.
2. Click **Settings** next to your organization.
3. Click **Security & analysis**.
4. Click **Enable all** or **Disable all** next to the feature that you want to manage.
5. Optionally, select **Automatically enable for new repositories**.
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %}
{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

For more information, see "[About {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)," "[Exploring the dependencies of a repository](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)," and "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."
{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}

## Managing dependency review

Dependency review is an {% data variables.product.prodname_advanced_security %} feature that lets you visualize dependency changes in pull requests before they are merged into your repositories. For more information, see "[About dependency review](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)."

{% ifversion fpt or ghec %}Dependency review is already enabled for all public repositories. {% ifversion fpt %}Organizations that use {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_advanced_security %} can additionally enable dependency review for private and internal repositories. For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/code-security/getting-started/securing-your-organization#managing-dependency-review). {% endif %}{% endif %}{% ifversion ghec %}For private and internal repositories that are owned by an organization, you can enable dependency review by enabling the dependency graph and enabling {% data variables.product.prodname_advanced_security %} (see below). 
{% elsif ghes or ghae %}Dependency review is available when dependency graph is enabled for {% data variables.product.product_location %} and you enable {% data variables.product.prodname_advanced_security %} for the organization (see below).{% endif %}

{% endif %}

{% ifversion fpt or ghec or ghes > 3.2 %}
## Managing {% data variables.product.prodname_dependabot_security_updates %}

For any repository that uses {% data variables.product.prodname_dependabot_alerts %}, you can enable {% data variables.product.prodname_dependabot_security_updates %} to raise pull requests with security updates when vulnerabilities are detected. You can also enable or disable {% data variables.product.prodname_dependabot_security_updates %} for all repositories across your organization.

1. Click your profile photo, then click **Organizations**.
2. Click **Settings** next to your organization.
3. Click **Security & analysis**.
4. Click **Enable all** or **Disable all** next to {% data variables.product.prodname_dependabot_security_updates %}.
5. Optionally, select **Automatically enable for new repositories**. 

For more information, see "[About {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/about-dependabot-security-updates)" and "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."

## Managing {% data variables.product.prodname_dependabot_version_updates %}

You can enable {% data variables.product.prodname_dependabot %} to automatically raise pull requests to keep your dependencies up-to-date. For more information, see "[About {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/about-dependabot-version-updates)."

To enable {% data variables.product.prodname_dependabot_version_updates %}, you must create a *dependabot.yml* configuration file. For more information, see "[Configuring {% data variables.product.prodname_dependabot %} version updates](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)."

{% endif %}

{% ifversion ghes or ghae or ghec %}
## Managing {% data variables.product.prodname_GH_advanced_security %}

{% ifversion ghes or ghec %}
If your {% ifversion ghec %}organization is owned by an enterprise that{% else %}enterprise{% endif %} has an {% data variables.product.prodname_advanced_security %} license, you can enable or disable {% data variables.product.prodname_advanced_security %} features.
{% elsif ghae %}
You can enable or disable {% data variables.product.prodname_advanced_security %} features.
{% endif %}

1. Click your profile photo, then click **Organizations**.
2. Click **Settings** next to your organization.
3. Click **Security & analysis**.
4. Click **Enable all** or **Disable all** next to {% data variables.product.prodname_GH_advanced_security %}.
5. Optionally, select **Automatically enable for new private repositories**. 

For more information, see "[About {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)" and "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."
{% endif %}

{% ifversion fpt or ghes > 3.0 or ghae or ghec %}
## Configuring {% data variables.product.prodname_secret_scanning %}

{% data variables.product.prodname_secret_scanning_caps %} is an {% data variables.product.prodname_advanced_security %} feature that scans repositories for secrets that are insecurely stored.

{% ifversion fpt or ghec %}{% data variables.product.prodname_secret_scanning_caps %} is already enabled for all public repositories. Organizations that use {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_advanced_security %} can additionally enable {% data variables.product.prodname_secret_scanning %} for private and internal repositories.{% endif %} {% ifversion fpt %}For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/code-security/getting-started/securing-your-organization#configuring-secret-scanning). {% endif %}

{% ifversion ghes or ghae %}{% data variables.product.prodname_secret_scanning_caps %} is available if your enterprise uses {% data variables.product.prodname_advanced_security %}.{% endif %}

{% ifversion not fpt %}
You can enable or disable {% data variables.product.prodname_secret_scanning %} for all repositories across your organization that have {% data variables.product.prodname_advanced_security %} enabled.

1. Click your profile photo, then click **Organizations**.
2. Click **Settings** next to your organization.
3. Click **Security & analysis**.
4. Click **Enable all** or **Disable all** next to {% data variables.product.prodname_secret_scanning_caps %} ({% data variables.product.prodname_GH_advanced_security %} repositories only).
5. Optionally, select **Automatically enable for private repositories added to {% data variables.product.prodname_advanced_security %}**. 

For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."
{% endif %}

{% endif %}

## Configuring {% data variables.product.prodname_code_scanning %}

{% data variables.product.prodname_code_scanning_capc %} is an {% data variables.product.prodname_advanced_security %} feature that scans code for security vulnerabilities and errors

{% ifversion fpt or ghec %}{% data variables.product.prodname_code_scanning_capc %} is available for all public repositories. Organizations that use {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_advanced_security %} can additionally use {% data variables.product.prodname_code_scanning %} for private and internal repositories.{% else %}{% data variables.product.prodname_code_scanning_capc %} is available if your enterprise uses {% data variables.product.prodname_advanced_security %}.{% endif %}

{% data variables.product.prodname_code_scanning_capc %} is configured at the repository level. For more information, see "[Setting up {% data variables.product.prodname_code_scanning %} for a repository](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)."

## Next steps
You can view and manage alerts from security features to address dependencies and vulnerabilities in your code. For more information, see {% ifversion fpt or ghes or ghec %} "[Viewing {% data variables.product.prodname_dependabot_alerts %} for vulnerable dependencies](/code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository),"{% endif %} {% ifversion fpt or ghec or ghes > 3.2 %}"[Managing pull requests for dependency updates](/code-security/supply-chain-security/managing-pull-requests-for-dependency-updates)," {% endif %}"[Managing {% data variables.product.prodname_code_scanning %} for your repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)," and "[Managing alerts from {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)."

{% ifversion fpt or ghec %}If you have a security vulnerability, you can create a security advisory to privately discuss and fix the vulnerability. For more information, see "[About {% data variables.product.prodname_security_advisories %}](/code-security/security-advisories/about-github-security-advisories)" and "[Creating a security advisory](/code-security/security-advisories/creating-a-security-advisory)."
{% endif %}

{% ifversion fpt or ghes > 3.1 or ghec or ghae %}{% ifversion ghes > 3.1 or ghec or ghae %}You{% elsif fpt %}Organizations that use {% data variables.product.prodname_ghe_cloud %}{% endif %} can view, filter, and sort security alerts for repositories owned by {% ifversion ghes > 3.1 or ghec or ghae %}your{% elsif fpt %}their{% endif %} organization in the security overview. For more information, see{% ifversion ghes or ghec or ghae %} "[About the security overview](/code-security/security-overview/about-the-security-overview)."{% elsif fpt %} "[About the security overview](/enterprise-cloud@latest/code-security/security-overview/about-the-security-overview)" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% endif %}{% endif %}


{% ifversion ghec %}
## Further reading

"[Accessing compliance reports for your organization](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/accessing-compliance-reports-for-your-organization)"
{% endif %}
