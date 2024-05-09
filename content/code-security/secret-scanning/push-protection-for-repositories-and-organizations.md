---
title: Push protection for repositories and organizations
intro: 'With push protection for repositories and organizations, {% data variables.product.prodname_secret_scanning %} blocks contributors from pushing secrets to a repository and generates an alert whenever a contributor bypasses the block.'
product: '{% data reusables.gated-features.push-protection-for-repos %}'
versions:
  feature: secret-scanning-push-protection
redirect_from:
  - /early-access/code-security/secret-scanning/protecting-pushes-with-secret-scanning
  - /code-security/secret-scanning/protecting-pushes-with-secret-scanning
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Push protection for repositories
---

{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

## About push protection for repositories and organizations

{% data reusables.secret-scanning.pre-push-protection %} {% data reusables.secret-scanning.push-protection-overview %} {% data reusables.secret-scanning.push-protection-custom-pattern %} {% ifversion secret-scanning-push-protection-custom-patterns %}For more information, see "[AUTOTITLE](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)."{% endif %}

{% data reusables.secret-scanning.push-protection-bypass %}

{% data reusables.secret-scanning.bypass-reasons-and-alerts %}

{% ifversion push-protection-delegated-bypass %}

By default, anyone with write access to the repository can choose to bypass push protection by specifying one of the bypass reasons outlined in the table. If you want greater control over which contributors can bypass push protection and which pushes containing secrets should be allowed, you can enable delegated bypass for push protection. Delegated bypass lets you configure a designated group of reviewers to oversee and manage requests to bypass push protection from contributors pushing to the repository. For more information, see "[Enabling delegated bypass for push protection](#enabling-delegated-bypass-for-push-protection)."

{% endif %}

{% ifversion secret-scanning-bypass-filter %}

On the {% data variables.product.prodname_secret_scanning %} alerts page for a repository or organization, you can apply the `bypassed:true` filter to easily see which alerts are the result of a user bypassing push protection. For more information on viewing these alerts, see "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning)."

{% endif %}

You can monitor security alerts to discover when users are bypassing push protections and creating alerts. For more information, see "[AUTOTITLE](/code-security/getting-started/auditing-security-alerts)."

{% ifversion security-overview-push-protection-metrics-page %}

If you are an organization owner or security manager, you can view metrics on how push protection is performing across your organization. For more information, see "[AUTOTITLE](/code-security/security-overview/viewing-metrics-for-secret-scanning-push-protection-in-your-organization)."

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

{% ifversion code-security-multi-repo-enablement %}
You can use security overview to find a set of repositories and enable or disable {% data variables.product.prodname_secret_scanning %} as a push protection for them all at the same time. For more information, see "[AUTOTITLE](/code-security/security-overview/enabling-security-features-for-multiple-repositories)."

You can also use the organization settings page for "Code security and analysis" to enable or disable {% data variables.product.prodname_secret_scanning %} as a push protection for all existing repositories in an organization.
{% else %}
You can use the organization settings page for "Code security and analysis" to enable or disable {% data variables.product.prodname_secret_scanning %} as a push protection for all existing repositories in an organization.
{% endif %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}

{% ifversion security-configurations %}
    {% data reusables.security-configurations.changed-org-settings-security-configurations-callout %} For next steps on enabling push protection and other security features at scale with {% data variables.product.prodname_security_configurations %}, see "[AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-the-github-recommended-security-configuration-in-your-organization)."
{% endif %}

{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-push-protection-org %}

{% data reusables.security.note-securing-your-org %}

### Enabling {% data variables.product.prodname_secret_scanning %} as a push protection for a repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-push-protection-repo %}

{% ifversion secret-scanning-push-protection-custom-patterns %}

## Enabling push protection for a custom pattern

You can enable {% data variables.product.prodname_secret_scanning %} as a push protection for custom patterns stored at {% ifversion ghec or ghes %}the enterprise, organization, or repository level{% else%} the organization or repository level{% endif %}.

{% ifversion ghec or ghes %}

### Enabling push protection for a custom pattern stored in an enterprise

{% data reusables.secret-scanning.push-protection-enterprise-note %}

Before enabling push protection for a custom pattern at enterprise level, you must also{% ifversion custom-pattern-dry-run-ga %} test your custom patterns using dry runs. {% data reusables.secret-scanning.dry-runs-enterprise-permissions %}{% else %} test your custom patterns in a repository before defining them for your entire enterprise, as there is no dry-run functionality. That way, you can avoid creating excess false-positive {% data variables.secret-scanning.alerts %}.{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}{% ifversion security-feature-enablement-policies %}
{% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. Under "Code security and analysis", click **Security features**.{% else %}
{% data reusables.enterprise-accounts.advanced-security-policies %}
{% data reusables.enterprise-accounts.advanced-security-security-features %}{% endif %}
{% data reusables.advanced-security.secret-scanning-edit-custom-pattern %}

   {% ifversion custom-pattern-dry-run-ga %}
   >[!NOTE] At the enterprise level, you can only edit and enable push protection for custom patterns that you created.
   {%- endif %}

1. To enable push protection for your custom pattern, scroll down to "Push Protection", and click **Enable**.

   {% data reusables.secret-scanning.custom-pattern-push-protection-enable-button %}

   ![Screenshot of the custom pattern page with the button to enable push protection highlighted with a dark orange outline.](/assets/images/help/repository/secret-scanning-custom-pattern-enable-push-protection.png)

{% endif %}

### Enabling {% data variables.product.prodname_secret_scanning %} as a push protection in an organization for a custom pattern

Before enabling push protection for a custom pattern at organization level, you must ensure that you enable {% data variables.product.prodname_secret_scanning %} for the repositories that you want to scan in your organization. To enable {% data variables.product.prodname_secret_scanning %} on all repositories in your organization, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)."

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}

{% ifversion security-configurations %}
    {% data reusables.security-configurations.changed-org-settings-global-settings-callout %} For next steps on managing custom patterns for your organization with {% data variables.product.prodname_global_settings %}, see "[AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/configuring-global-security-settings-for-your-organization#defining-custom-patterns)." For information on enabling push protection for specific custom patterns, reference the following steps.
{% endif %}

{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-edit-custom-pattern %}
1. To enable push protection for your custom pattern, scroll down to "Push Protection", and click **Enable**.
{% indented_data_reference reusables.secret-scanning.push-protection-org-notes spaces=3 %}

   ![Screenshot of the "Push protection" section of the custom pattern page. A button, labeled "Enable", is outlined in dark orange.](/assets/images/help/repository/secret-scanning-custom-pattern-enable-push-protection.png)

### Enabling {% data variables.product.prodname_secret_scanning %} as a push protection in a repository for a custom pattern

Before enabling push protection for a custom pattern at repository level, you must define the custom pattern for the repository, and test it in the repository. For more information, see "[AUTOTITLE](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-a-repository)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-edit-custom-pattern %}
1. To enable push protection for your custom pattern, scroll down to "Push Protection", and click **Enable**.

   {% data reusables.secret-scanning.custom-pattern-push-protection-enable-button %}

   ![Screenshot of the "Push protection" section of the custom pattern page. A button, labeled "Enable", is outlined in dark orange.](/assets/images/help/repository/secret-scanning-custom-pattern-enable-push-protection.png)

{% endif %}

{% ifversion push-protection-delegated-bypass %}

## Enabling delegated bypass for push protection

{% data reusables.secret-scanning.push-protection-delegate-bypass-beta-note %}

Delegated bypass for push protection lets you control who can bypass push protection and which blocked pushes should be allowed.

When you enable push protection, by default, anyone with write access to the repository can choose to bypass the protection by specifying a reason for allowing the push containing a secret. With delegated bypass, contributors to a repository are instead obligated to request "bypass privileges." The request is sent to a designated group of reviewers, who either approve or deny the request to bypass push protection.

If the request to bypass push protection is approved, the contributor can push the commit containing the secret. If the request is denied, the contributor must remove the secret from the commit (or commits) containing the secret before pushing again.

To configure delegated bypass, organization owners or repository administrators first create a "bypass list". The bypass list comprises specific roles and teams, such as the security team or repository administrators, who oversee requests from non-members to bypass push protection. For more information, see "[Configuring delegated bypass for an organization](#configuring-delegated-bypass-for-an-organization)" and "[Configuring delegated bypass for a repository](#configuring-delegated-bypass-for-a-repository)."

Members of the bypass list view and manage requests through the "Push protection bypass" page in the **Security** tab of the repository. For more information, see "[Managing requests to bypass push protection](#managing-requests-to-bypass-push-protection)."

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

## Managing requests to bypass push protection

You can view and manage all requests for bypass privileges on the "Push protection bypass" page, located under the **Security** tab of the repository.

You can filter requests by approver (member of the bypass list), requester (contributor making the request), timeframe, and status. The following statuses are assigned to a request:

|Status|Description|
|---------|-----------|
|`Cancelled`| The request has been cancelled by the contributor.|
|`Completed`|The request has been approved and the commit(s) have been pushed to the repository.|
|`Denied`|The request has been reviewed and denied.|
|`Expired`| The request has expired. Requests are valid for 7 days. |
|`Open`| The request has either not yet been reviewed, or has been approved but the commit(s) have not been pushed to the repository.  |

When a contributor requests bypass privileges to push a commit containing a secret, members of the bypass list all receive an email notification containing a link to the request. Members of the bypass list then have 7 days to review and either approve or deny the request before the request expires.

The contributor is notified of the decision by email and must take the required action. If the request is approved, the contributor can push the commit containing the secret to the repository. If the request is denied, the contributor must remove the secret from the commit in order to successfully push the commit to the repository.

### Managing requests to bypass push protection at the repository-level

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.bypass-requests-settings %}
1. Select the **All statuses** dropdown menu, then click **Open** to view requests that are awaiting review.
1. Click the request that you want to review.
1. Review the details of the request.
1. To allow the contributor to push the commit containing the secret, click **Approve bypass request**. Or, to require the contributor to remove the secret from the commit, click **Deny bypass request**.

{% endif %}

## Further reading

- "[AUTOTITLE](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection)"
- "[AUTOTITLE](/code-security/secret-scanning/working-with-push-protection)"
