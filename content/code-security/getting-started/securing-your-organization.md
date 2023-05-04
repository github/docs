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
This guide shows you how to configure security features for an organization. Your organization's security needs are unique and you may not need to enable every security feature. For more information, see "[AUTOTITLE](/code-security/getting-started/github-security-features)."

{% data reusables.advanced-security.security-feature-availability %}

## Managing access to your organization

You can use roles to control what actions people can take in your organization. {% ifversion security-managers %}For example, you can assign the security manager role to a team to give them the ability to manage security settings across your organization, as well as read access to all repositories.{% endif %} For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."

{% ifversion fpt or ghes or ghec %}

## Creating a default security policy

You can create a default security policy that will display in any of your organization's public repositories that do not have their own security policy. For more information, see "[AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)."

{% endif %}

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

For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)," "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)," and "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)."

## Managing dependency review

Dependency review is an {% data variables.product.prodname_advanced_security %} feature that lets you visualize dependency changes in pull requests before they are merged into your repositories. For more information, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)."

{% ifversion fpt or ghec %}Dependency review is already enabled for all public repositories. {% ifversion fpt %}Organizations that use {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_advanced_security %} can additionally enable dependency review for private and internal repositories. For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/code-security/getting-started/securing-your-organization#managing-dependency-review). {% endif %}{% endif %}{% ifversion ghec %}For private and internal repositories that are owned by an organization, you can enable dependency review by enabling the dependency graph and enabling {% data variables.product.prodname_advanced_security %} (see below).
{% elsif ghes or ghae %}Dependency review is available when dependency graph is enabled for {% data variables.location.product_location %} and you enable {% data variables.product.prodname_advanced_security %} for the organization (see below).{% endif %}

{% ifversion fpt or ghec or ghes %}
## Managing {% data variables.product.prodname_dependabot_security_updates %}

For any repository that uses {% data variables.product.prodname_dependabot_alerts %}, you can enable {% data variables.product.prodname_dependabot_security_updates %} to raise pull requests with security updates when vulnerabilities are detected. You can also enable or disable {% data variables.product.prodname_dependabot_security_updates %} for all repositories across your organization.

1. Click your profile photo, then click **Organizations**.
2. Click **Settings** next to your organization.
3. Click **Security & analysis**.
4. Click **Enable all** or **Disable all** next to {% data variables.product.prodname_dependabot_security_updates %}.
5. Optionally, select **Automatically enable for new repositories**.

For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates)" and "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)."

## Managing {% data variables.product.prodname_dependabot_version_updates %}

You can enable {% data variables.product.prodname_dependabot %} to automatically raise pull requests to keep your dependencies up-to-date. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates)."

To enable {% data variables.product.prodname_dependabot_version_updates %}, you must create a *dependabot.yml* configuration file. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)."

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

For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)" and "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)."
{% endif %}
## Configuring {% data variables.product.prodname_secret_scanning %}

{% ifversion fpt or ghec %}{% data variables.product.prodname_secret_scanning_caps %} is available for all public repositories, as well as public npm packages. Organizations that use {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_advanced_security %} can additionally enable {% data variables.product.prodname_secret_scanning %} for private and internal repositories.{% endif %} {% ifversion fpt %}For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/code-security/getting-started/securing-your-organization#configuring-secret-scanning).{% endif %}

{% ifversion ghes or ghae %}{% data variables.product.prodname_secret_scanning_caps %} is available if your enterprise uses {% data variables.product.prodname_advanced_security %}.{% endif %}

You can enable or disable {% data variables.product.prodname_secret_scanning %} for all {% ifversion fpt or ghec %}public {% endif %}repositories across your organization{% ifversion fpt %}.{% endif %}{% ifversion ghec %}, and for all private and internal repositories{% endif %}{% ifversion ghec or ghes or ghae %} that have {% data variables.product.prodname_GH_advanced_security %} enabled.{% endif %}

1. Click your profile photo, then click **Organizations**.
1. Click **Settings** next to your organization.
1. Click **Code security & analysis**.
1. Click **Enable all** or **Disable all** next to {% data variables.product.prodname_secret_scanning_caps %}.
1. In the dialog box displayed, optionally
{%- ifversion fpt %} select **Automatically enable for new public repositories**.
{%- elsif ghec %} select **Automatically enable for new public repositories and repositories with {% data variables.product.prodname_advanced_security %} enabled**.
{%- else %} select **Automatically enable for repositories added to {% data variables.product.prodname_advanced_security %}.**
{%- endif %}
1. Click the enable or disable button in the dialog box to confirm the change.

For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)."

## Configuring {% data variables.product.prodname_code_scanning %}

{% ifversion fpt or ghec %}{% data variables.product.prodname_code_scanning_caps %} is available for all public repositories. Organizations that use {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_advanced_security %} can additionally use {% data variables.product.prodname_code_scanning %} for private and internal repositories.{% else %}{% data variables.product.prodname_code_scanning_caps %} is available if your enterprise uses {% data variables.product.prodname_advanced_security %}.{% endif %}

{% ifversion org-enable-code-scanning %}

You can enable or disable {% data variables.product.prodname_code_scanning %} default setup for all eligible repositories

{%- ifversion fpt %} that are public across your organization.
{%- elsif ghec %} that are public, and for all private and internal repositories
{%- endif %}

{%- ifversion ghec or ghes or ghae %} across your organization that have {% data variables.product.prodname_GH_advanced_security %} enabled.
{%- endif %}
{% data reusables.code-scanning.default-setup-info-link %}

For repositories that are not eligible for default setup, you can configure advanced setup at the repository level. For more information, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning-for-a-repository#creating-an-advanced-setup)."

{% data reusables.code-scanning.beta-org-enable-all %}

1. Click your profile photo, then click **Organizations**.
1. Click **Settings** next to your organization.
1. Click **Code security & analysis**.
1. Click **Enable all** or **Disable all** next to {% data variables.product.prodname_code_scanning_caps %}.
1. In the "Enable {% data variables.product.prodname_code_scanning %} for eligible repositories" or "Disable {% data variables.product.prodname_code_scanning %}" dialog box displayed, click **Enable for eligible repositories** or **Disable {% data variables.product.prodname_code_scanning %}** to confirm the change.

{% else %}
{% data variables.product.prodname_code_scanning_caps %} is configured at the repository level. For more information, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning-for-a-repository)."
{% endif %}

## Next steps
You can view and manage alerts from security features to address dependencies and vulnerabilities in your code. For more information, see {% ifversion fpt or ghes or ghec %} "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts),"{% endif %} {% ifversion fpt or ghec or ghes %}"[AUTOTITLE](/code-security/dependabot/working-with-dependabot/managing-pull-requests-for-dependency-updates)," {% endif %}"[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository)," and "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning)."

You can also monitor responses to security alerts within your organization. For more information, see "[AUTOTITLE](/code-security/getting-started/auditing-security-alerts)".

{% ifversion fpt or ghec %}If you have a security vulnerability, you can create a security advisory to privately discuss and fix the vulnerability. For more information, see "[AUTOTITLE](/code-security/security-advisories/repository-security-advisories/about-repository-security-advisories)" and "[AUTOTITLE](/code-security/security-advisories/repository-security-advisories/creating-a-repository-security-advisory)."
{% endif %}

{% ifversion ghes or ghec or ghae %}You{% elsif fpt %}Organizations that use {% data variables.product.prodname_ghe_cloud %}{% endif %} can view, filter, and sort security alerts for repositories owned by {% ifversion ghes or ghec or ghae %}your{% elsif fpt %}their{% endif %} organization in security overview. For more information, see{% ifversion ghes or ghec or ghae %} "[AUTOTITLE](/code-security/security-overview/about-security-overview)."{% elsif fpt %} "[AUTOTITLE](/enterprise-cloud@latest/code-security/security-overview/about-security-overview)" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% endif %}

{% ifversion ghec %}
## Further reading

"[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/accessing-compliance-reports-for-your-organization)"
{% endif %}
