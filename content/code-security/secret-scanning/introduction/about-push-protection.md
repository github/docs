---
title: About push protection
intro: 'With push protection for repositories and organizations, {% data variables.product.prodname_secret_scanning %} blocks contributors from pushing secrets to a repository and generates an alert whenever a contributor bypasses the block.'
product: '{% data reusables.gated-features.push-protection-for-repos %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /early-access/code-security/secret-scanning/protecting-pushes-with-secret-scanning
  - /code-security/secret-scanning/protecting-pushes-with-secret-scanning
  - /code-security/secret-scanning/push-protection-for-repositories-and-organizations
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Push protection
---

{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

## About push protection for repositories and organizations

{% data reusables.secret-scanning.pre-push-protection %} {% data reusables.secret-scanning.push-protection-overview %} {% data reusables.secret-scanning.push-protection-custom-pattern %} {% ifversion secret-scanning-push-protection-custom-patterns %}For more information, see "[AUTOTITLE](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)."{% endif %}

{% data reusables.secret-scanning.push-protection-bypass %}

{% data reusables.secret-scanning.bypass-reasons-and-alerts %}

{% ifversion push-protection-delegated-bypass %}

By default, anyone with write access to the repository can choose to bypass push protection by specifying one of the bypass reasons outlined in the table. If you want greater control over which contributors can bypass push protection and which pushes containing secrets should be allowed, you can enable delegated bypass for push protection. Delegated bypass lets you configure a designated group of reviewers to oversee and manage requests to bypass push protection from contributors pushing to the repository. For more information, see "[Enabling delegated bypass for push protection](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/enabling-delegated-bypass-for-push-protection)."

{% endif %}

{% ifversion secret-scanning-bypass-filter %}

On the {% data variables.product.prodname_secret_scanning %} alerts page for a repository or organization, you can apply the `bypassed:true` filter to easily see which alerts are the result of a user bypassing push protection. For more information on viewing these alerts, see "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning)."

{% endif %}

You can monitor security alerts to discover when users are bypassing push protections and creating alerts. For more information, see "[AUTOTITLE](/code-security/getting-started/auditing-security-alerts)."

{% ifversion security-overview-push-protection-metrics-page %}

If you are an organization owner or security manager, you can view metrics on how push protection is performing across your organization. For more information, see "[AUTOTITLE](/code-security/security-overview/viewing-metrics-for-secret-scanning-push-protection)."

{% endif %}

{% ifversion ghec or fpt %}
{% note %}

**Note:** The github.dev web-based editor doesn't support push protection. For more information about the editor, see "[AUTOTITLE](/codespaces/the-githubdev-web-based-editor)."

{% endnote %}
{% endif %}

For information on the secrets and service providers supported for push protection, see "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets)."

## Enabling {% data variables.product.prodname_secret_scanning %} as a push protection

For you to use {% data variables.product.prodname_secret_scanning %} as a push protection in public repositories, the {% ifversion secret-scanning-enterprise-level %}enterprise,{% endif %} organization{% ifversion secret-scanning-enterprise-level %},{% endif %} or repository needs to have {% data variables.product.prodname_secret_scanning %} enabled.{% ifversion secret-scanning-push-protection-private-internal %} To use {% data variables.product.prodname_secret_scanning %} as a push protection in private or internal repositories,{% ifversion secret-scanning-user-owned-repos %} or in user-owned repositories{% ifversion ghec %} for {% data variables.product.prodname_emus %}{% endif %},{% endif %} the enterprise or organization also needs to have {% data variables.product.prodname_GH_advanced_security %} enabled.{% endif %} For more information, see {% ifversion secret-scanning-enterprise-level %}"[AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise),"{% endif %} "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)," "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)," and "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

Organization owners, security managers, and repository administrators can also enable push protection for {% data variables.product.prodname_secret_scanning %} via the API. For more information, see "[AUTOTITLE](/rest/repos#update-a-repository)" and expand the "Properties of the `security_and_analysis` object" section.

Organization owners can provide a custom link that will be displayed when a push is blocked. This custom link can contain organization-specific resources and advice, such as directions on using a recommended secrets vault or who to contact for questions relating to the blocked secret.

{% ifversion secret-scanning-enable-by-default-for-public-repos %}

You can also enable push protection for all of your existing {% ifversion ghec %}user-owned {% endif %} public repositories through your personal account settings. For any new public repositories you create, push protection will be enabled by default. For more information, see "[AUTOTITLE](/code-security/secret-scanning/configuring-secret-scanning-for-your-repositories#enabling-secret-scanning-alerts-for-users-for-all-your-public-repositories)."

{% endif %}

{% ifversion secret-scanning-enterprise-level-api %}
Enterprise administrators can also enable or disable {% data variables.product.prodname_secret_scanning %} as a push protection for the enterprise via the API. For more information, see "[AUTOTITLE](/rest/enterprise-admin/code-security-and-analysis)."{% endif %}

{% note %}

**Note:** When you fork a repository with {% data variables.product.prodname_secret_scanning %} as a push protection enabled, this is not enabled by default on the fork. You can enable it on the fork the same way you enable it on a standalone repository.

{% endnote %}

{% ifversion secret-scanning-enterprise-level %}

### Enabling {% data variables.product.prodname_secret_scanning %} as a push protection for your enterprise

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. In the left sidebar, click **Code security and analysis**.
{% data reusables.advanced-security.secret-scanning-push-protection-enterprise %}
{% endif %}

### Enabling {% data variables.product.prodname_secret_scanning %} as a push protection for an organization

{% ifversion security-configurations-ga %}
You can find a set of repositories and enable or disable {% data variables.product.prodname_secret_scanning %} as a push protection for them all at the same time. For more information, see "[AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-the-github-recommended-security-configuration-in-your-organization)."

{% elsif security-configurations-beta-and-pre-beta %}

You can use the organization settings page for "Code security and analysis" to enable or disable {% data variables.product.prodname_secret_scanning %} as a push protection for all existing repositories in an organization.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}

{% ifversion security-configurations-beta-only %}
    {% data reusables.security-configurations.changed-org-settings-security-configurations-callout %} For next steps on enabling push protection and other security features at scale with {% data variables.product.prodname_security_configurations %}, see "[AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-the-github-recommended-security-configuration-in-your-organization)."
{% endif %}

{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-push-protection-org %}

{% data reusables.security.note-securing-your-org %}
{% endif %}

### Enabling {% data variables.product.prodname_secret_scanning %} as a push protection for a repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-push-protection-repo %}

## Further reading

* "[AUTOTITLE](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection)"
* "[AUTOTITLE](/code-security/secret-scanning/working-with-push-protection)"{% ifversion push-protection-delegated-bypass %}
* "[AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/enabling-delegated-bypass-for-push-protection)"{% endif %}
