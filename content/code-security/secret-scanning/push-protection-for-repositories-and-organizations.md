---
title: Push protection for repositories and organizations
intro: 'You can use {% data variables.product.prodname_secret_scanning %} to prevent supported secrets from being pushed into your {% ifversion secret-scanning-enterprise-level %}enterprise,{% endif %} organization{% ifversion secret-scanning-enterprise-level %},{% endif %} or repository by enabling push protection.'
product: '{% data reusables.gated-features.secret-scanning %}'
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

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

## About push protection for repositories and organizations

Up to now, {% data variables.product.prodname_secret_scanning %} checks for secrets _after_ a push and alerts users to exposed secrets. {% data reusables.secret-scanning.push-protection-overview %} {% ifversion secret-scanning-push-protection-custom-patterns %}{% data variables.product.prodname_secret_scanning_caps %} can also check pushes for custom patterns. For more information, see "[AUTOTITLE](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)."{% endif %}

If a contributor bypasses a push protection block for a secret, {% data variables.product.prodname_dotcom %}:
- creates an alert in the **Security** tab of the repository in the state described in the table below.
- adds the bypass event to the audit log.{% ifversion secret-scanning-push-protection-email %}
- sends an email alert to organization or personal account owners, security managers, and repository administrators who are watching the repository, with a link to the secret and the reason why it was allowed.{% endif %}

{% ifversion ghec or fpt %}
{% note %}

**Note:** The github.dev web-based editor doesn't support push protection. For more information about the editor, see "[AUTOTITLE](/codespaces/the-githubdev-web-based-editor)."

{% endnote %}
{% endif %}

You can monitor security alerts to discover when users are bypassing push protections and creating alerts. For more information, see "[AUTOTITLE](/code-security/getting-started/auditing-security-alerts)."

{% ifversion security-overview-push-protection-metrics-page %}
If you are an organization owner or security manager, you can view metrics on how push protection is performing across your organization. For more information, see "[AUTOTITLE](/code-security/security-overview/viewing-metrics-for-secret-scanning-push-protection-in-your-organization)."
{% endif %}

{% data reusables.secret-scanning.bypass-reasons-and-alerts %}

For information on the secrets and service providers supported for push protection, see "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets)."

{% ifversion secret-scanning-push-protection-for-users %}

{% data reusables.secret-scanning.push-protection-for-users %}

{% endif %}

## Enabling {% data variables.product.prodname_secret_scanning %} as a push protection

For you to use {% data variables.product.prodname_secret_scanning %} as a push protection in public repositories, the {% ifversion secret-scanning-enterprise-level %}enterprise,{% endif %} organization{% ifversion secret-scanning-enterprise-level %},{% endif %} or repository needs to have {% data variables.product.prodname_secret_scanning %} enabled.{% ifversion secret-scanning-push-protection-private-internal %} To use {% data variables.product.prodname_secret_scanning %} as a push protection in private or internal repositories, the enterprise or organization also needs to have {% data variables.product.prodname_GH_advanced_security %} enabled.{% endif %} For more information, see {% ifversion secret-scanning-enterprise-level %}"[AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise),"{% endif %} "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)," "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)," and "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

Organization owners, security managers, and repository administrators can also enable push protection for {% data variables.product.prodname_secret_scanning %} via the API. For more information, see "[AUTOTITLE](/rest/repos#update-a-repository)" and expand the "Properties of the `security_and_analysis` object" section in the REST API documentation.

{% ifversion secret-scanning-enterprise-level-api %}
Enterprise administrators can also enable or disable {% data variables.product.prodname_secret_scanning %} as a push protection for the enterprise via the API. For more information, see "[AUTOTITLE](/rest/enterprise-admin/code-security-and-analysis)" in the REST API documentation.{% endif %}

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
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-push-protection-org %}

{% data reusables.security.note-securing-your-org %}

### Enabling {% data variables.product.prodname_secret_scanning %} as a push protection for a repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-push-protection-repo %}

{% ifversion secret-scanning-push-protection %}

## Enabling push protection for a custom pattern

You can enable {% data variables.product.prodname_secret_scanning %} as a push protection for custom patterns stored at {% ifversion ghec or ghes or ghae %}the enterprise, organization, or repository level{% else%} the organization or repository level{% endif %}.

{% ifversion ghec or ghes or ghae %}

### Enabling push protection for a custom pattern stored in an enterprise

{% data reusables.secret-scanning.push-protection-enterprise-note %}

Before enabling push protection for a custom pattern at enterprise level, you must also{% ifversion secret-scanning-custom-enterprise-36 or custom-pattern-dry-run-ga %} test your custom patterns using dry runs. {% data reusables.secret-scanning.dry-runs-enterprise-permissions %}{% else %} test your custom patterns in a repository before defining them for your entire enterprise, as there is no dry-run functionality. That way, you can avoid creating excess false-positive {% data variables.secret-scanning.alerts %}.{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}{% ifversion security-feature-enablement-policies %}
{% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. Under "Code security and analysis", click **Security features**.{% else %}
{% data reusables.enterprise-accounts.advanced-security-policies %}
{% data reusables.enterprise-accounts.advanced-security-security-features %}{% endif %}
{% data reusables.advanced-security.secret-scanning-edit-custom-pattern %}
{% ifversion secret-scanning-custom-enterprise-36 or custom-pattern-dry-run-ga %}
   {% note %}

   **Note**: At the enterprise level, you can only edit and enable push protection for custom patterns that you created.

   {% endnote %}
{%- endif %}
1. To enable push protection for your custom pattern, scroll down to "Push Protection", and click **Enable**.

   ![Screenshot of the custom pattern page with the button to enable push protection highlighted with a dark orange outline.](/assets/images/help/repository/secret-scanning-custom-pattern-enable-push-protection.png)

{% endif %}

### Enabling {% data variables.product.prodname_secret_scanning %} as a push protection in an organization for a custom pattern

Before enabling push protection for a custom pattern at organization level, you must ensure that you enable {% data variables.product.prodname_secret_scanning %} for the repositories that you want to scan in your organization. To enable {% data variables.product.prodname_secret_scanning %} on all repositories in your organization, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)."

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
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

   ![Screenshot of the "Push protection" section of the custom pattern page. A button, labeled "Enable", is outlined in dark orange.](/assets/images/help/repository/secret-scanning-custom-pattern-enable-push-protection.png)

{% endif %}

## Using secret scanning as a push protection from the command line

{% data reusables.secret-scanning.push-protection-command-line-choice %}

Up to five detected secrets will be displayed at a time on the command line. If a particular secret has already been detected in the repository and an alert already exists, {% data variables.product.prodname_dotcom %} will not block that secret.

{% ifversion push-protection-custom-link-orgs %}

Organization owners can provide a custom link that will be displayed when a push is blocked. This custom link can contain organization-specific resources and advice, such as directions on using a recommended secrets vault or who to contact for questions relating to the blocked secret.

{% endif %}

{% data reusables.secret-scanning.push-protection-remove-secret %} For more information about remediating blocked secrets, see "[AUTOTITLE](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection#resolving-a-blocked-push-on-the-command-line)."

If you confirm a secret is real and that you intend to fix it later, you should aim to remediate the secret as soon as possible. For example, you might revoke the secret and remove the secret from the repository's commit history. Real secrets that have been exposed must be revoked to avoid unauthorized access. You might consider first rotating the secret before revoking it. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)."

{% data reusables.secret-scanning.push-protection-multiple-branch-note %}

{% ifversion ghae < 3.6 %}

{% tip %}

**Tip:** You can use {% data variables.product.prodname_secret_scanning %} as a push protection from the web UI, as well as the command line, in {% data variables.product.product_name %} version 3.6 or later.

{% endtip %}

{% endif %}

### Allowing a blocked secret to be pushed

If {% data variables.product.prodname_dotcom %} blocks a secret that you believe is safe to push, you can allow the secret and specify the reason why it should be allowed.

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

1. Visit the URL returned by {% data variables.product.prodname_dotcom %} when your push was blocked.
{% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}
1. Click **Allow me to push this secret**.
1. Reattempt the push on the command line within three hours. If you have not pushed within three hours, you will need to repeat this process.

{% ifversion secret-scanning-push-protection-web-ui %}

## Using secret scanning as a push protection from the web UI

{% data reusables.secret-scanning.push-protection-web-ui-choice %}

{% data variables.product.prodname_dotcom %} will only display one detected secret at a time in the web UI. If a particular secret has already been detected in the repository and an alert already exists, {% data variables.product.prodname_dotcom %} will not block that secret.

{% ifversion push-protection-custom-link-orgs %}

Organization owners can provide a custom link that will be displayed when a push is blocked. This custom link can contain resources and advice specific to your organization. For example, the custom link can point to a README file with information about the organization's secret vault, which teams and individuals to escalate questions to, or the organization's approved policy for working with secrets and rewriting commit history.
{% endif %}

You can remove the secret from the file using the web UI. Once you remove the secret, you will be able to commit your changes.

### Bypassing push protection for a secret

{% data reusables.secret-scanning.push-protection-remove-secret %} For more information about remediating blocked secrets, see "[AUTOTITLE](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection#resolving-a-blocked-push-in-the-web-ui)."

If you confirm a secret is real and that you intend to fix it later, you should aim to remediate the secret as soon as possible. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)."

If {% data variables.product.prodname_dotcom %} blocks a secret that you believe is safe to push, you can allow the secret and specify the reason why it should be allowed.

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

1. In dialog box that appeared when {% data variables.product.prodname_dotcom %} blocked your commit, review the name and location of the secret.
{% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}
1. Click **Allow secret**.

{% endif %}
