---
title: Enabling delegated bypass for push protection
intro: 'You can use delegated bypass for your organization or repository to control who can push commits that contain secrets identified by {% data variables.product.prodname_secret_scanning %}.'
product: '{% data reusables.gated-features.push-protection-for-repos %}'
permissions: 'Organization owners and repository administrators can enable delegated bypass for push protection for their organization and repository, respectively.'
versions:
  feature: push-protection-delegated-bypass
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Enable delegated bypass
---

## Enabling delegated bypass for push protection

{% data reusables.secret-scanning.push-protection-delegate-bypass-beta-note %}

{% data reusables.secret-scanning.push-protection-delegated-bypass-intro %} For more information, see "[AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/about-delegated-bypass-for-push-protection)."

When you enable this feature, you will create a bypass list of roles and teams who can manage requests to bypass push protection. If you don't already have appropriate teams or roles to use, you should create additional teams before you start.

>[!NOTE] You can't add secret teams to the bypass list.

## Configuring delegated bypass for an organization

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}
{% ifversion security-configurations %}
    {% data reusables.security-configurations.changed-org-settings-global-settings-callout %}
{% endif %}
{% data reusables.repositories.navigate-to-ghas-settings %}
1. Under "Push protection", to the right of "Who can bypass push protection for {% data variables.product.prodname_secret_scanning %}", select the dropdown menu, then click **Specific roles or teams**.
1. Under "Bypass list", click **Add role or team**.
1. In the dialog box, select the roles and teams that you want to add to the bypass list, then click **Add selected**.

## Configuring delegated bypass for a repository

>[!NOTE] If an organization owner configures delegated bypass at the organization-level, the repository-level settings are disabled.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
1. Under "Push protection", to the right of "Who can bypass push protection for {% data variables.product.prodname_secret_scanning %}", select the dropdown menu, then click **Specific roles or teams**.
1. Under "Bypass list", click **Add role or team**.

   >[!NOTE] You can't add secret teams to the bypass list.

1. In the dialog box, select the roles and teams that you want to add to the bypass list, then click **Add selected**.
