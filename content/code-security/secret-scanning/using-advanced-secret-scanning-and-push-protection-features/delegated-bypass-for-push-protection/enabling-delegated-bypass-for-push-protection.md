---
title: Enabling delegated bypass for push protection
intro: 'You can enable '
product: '{% data reusables.gated-features.push-protection-for-repos %}'
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

Delegated bypass for push protection lets you control who can bypass push protection and which blocked pushes should be allowed. For more information, see "[AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/about-delegated-bypass-for-push-protection)."

When you enable push protection, by default, anyone with write access to the repository can choose to bypass the protection by specifying a reason for allowing the push containing a secret. With delegated bypass, contributors to a repository are instead obligated to request "bypass privileges." The request is sent to a designated group of reviewers, who either approve or deny the request to bypass push protection.

If the request to bypass push protection is approved, the contributor can push the commit containing the secret. If the request is denied, the contributor must remove the secret from the commit (or commits) containing the secret before pushing again.

To configure delegated bypass, organization owners or repository administrators first create a "bypass list". The bypass list comprises specific roles and teams, such as the security team or repository administrators, who oversee requests from non-members to bypass push protection. For more information, see "[Configuring delegated bypass for an organization](#configuring-delegated-bypass-for-an-organization)" and "[Configuring delegated bypass for a repository](#configuring-delegated-bypass-for-a-repository)."

Members of the bypass list view and manage requests through the "Push protection bypass" page in the **Security** tab of the repository. For more information, see "[Managing requests to bypass push protection](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/managing-requests-to-bypass-push-protection)."

Members of the bypass list are still protected from accidentally pushing secrets to a repository. When a member of the bypass list attempts to push a commit containing a secret, their push is still blocked, but they can choose to bypass the block by specifying a reason for allowing the push. Members of the bypass list do not have to request bypass privileges from other members in order to override the block.

### Configuring delegated bypass for an organization

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}
{% ifversion security-configurations %}
    {% data reusables.security-configurations.changed-org-settings-global-settings-callout %}
{% endif %}
{% data reusables.repositories.navigate-to-ghas-settings %}
1. Under "Push protection", to the right of "Who can bypass push protection for {% data variables.product.prodname_secret_scanning %}", select the dropdown menu, then click **Specific roles or teams**.
1. Under "Bypass list", click **Add role or team**.
   >[!NOTE] You can't add secret teams to the bypass list.
1. In the dialog box, select the roles and teams that you want to add to the bypass list, then click **Add selected**.

### Configuring delegated bypass for a repository

>[!NOTE] If an organization owner configures delegated bypass at the organization-level, the repository-level settings are disabled.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
1. Under "Push protection", to the right of "Who can bypass push protection for {% data variables.product.prodname_secret_scanning %}", select the dropdown menu, then click **Specific roles or teams**.
1. Under "Bypass list", click **Add role or team**.

   >[!NOTE] You can't add secret teams to the bypass list.

1. In the dialog box, select the roles and teams that you want to add to the bypass list, then click **Add selected**.
