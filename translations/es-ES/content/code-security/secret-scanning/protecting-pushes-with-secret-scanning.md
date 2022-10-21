---
title: Protecting pushes with secret scanning
intro: 'You can use {% data variables.product.prodname_secret_scanning %} to prevent supported secrets from being pushed into your {% ifversion secret-scanning-enterprise-level %}enterprise,{% endif %} organization{% ifversion secret-scanning-enterprise-level %},{% endif %} or repository by enabling push protection.'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: secret-scanning-push-protection
redirect_from:
  - /early-access/code-security/secret-scanning/protecting-pushes-with-secret-scanning
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Enable push protection
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}
{% data reusables.secret-scanning.push-protection-beta %}

## About push protection for secrets

Up to now, {% data variables.product.prodname_secret_scanning_GHAS %} checks for secrets _after_ a push and alerts users to exposed secrets. {% data reusables.secret-scanning.push-protection-overview %}

If a contributor bypasses a push protection block for a secret, {% data variables.product.prodname_dotcom %}:
- generates an alert.
- creates an alert in the "Security" tab of the repository.
- adds the bypass event to the audit log.{% ifversion secret-scanning-push-protection-email %}
- sends an email alert to organization owners, security managers, and repository administrators, with a link to the related secret and the reason why it was allowed.{% endif %}

For information on the secrets and service providers supported for push protection, see "[{% data variables.product.prodname_secret_scanning_caps %} patterns](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-push-protection)."

## Enabling {% data variables.product.prodname_secret_scanning %} as a push protection

For you to use {% data variables.product.prodname_secret_scanning %} as a push protection, the {% ifversion secret-scanning-enterprise-level %}enterprise,{% endif %} organization{% ifversion secret-scanning-enterprise-level %},{% endif %} or repository needs to have both {% data variables.product.prodname_GH_advanced_security %} and {% data variables.product.prodname_secret_scanning %} enabled. For more information, see {% ifversion secret-scanning-enterprise-level %}"[Managing security and analysis settings for your enterprise](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise),"{% endif %} "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)," "[Managing security and analysis settings for your repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)," and "[About {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)."

Organization owners, security managers, and repository administrators can enable push protection for {% data variables.product.prodname_secret_scanning %} via the UI and API. For more information, see "[Repositories](/rest/reference/repos#update-a-repository)" and expand the "Properties of the `security_and_analysis` object" section in the REST API documentation.

{% ifversion secret-scanning-enterprise-level %}
### Enabling {% data variables.product.prodname_secret_scanning %} as a push protection for your enterprise
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. In the left sidebar, click **Code security and analysis**. 
{% data reusables.advanced-security.secret-scanning-push-protection-enterprise %}
{% endif %}

### Enabling {% data variables.product.prodname_secret_scanning %} as a push protection for an organization

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-push-protection-org %}

### Enabling {% data variables.product.prodname_secret_scanning %} as a push protection for a repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-push-protection-repo %}

## Using secret scanning as a push protection from the command line

{% data reusables.secret-scanning.push-protection-command-line-choice %}

Up to five detected secrets will be displayed at a time on the command line. If a particular secret has already been detected in the repository and an alert already exists, {% data variables.product.prodname_dotcom %} will not block that secret. 

{% ifversion push-protection-custom-link-orgs %} 

Organization admins can provide a custom link that will be displayed when a push is blocked. This custom link can contain organization-specific resources and advice, such as directions on using a recommended secrets vault or who to contact for questions relating to the blocked secret.

![Screenshot showing that a push is blocked when a user attempts to push a secret to a repository](/assets/images/help/repository/secret-scanning-push-protection-with-custom-link.png)

{% else %}

![Screenshot showing that a push is blocked when a user attempts to push a secret to a repository](/assets/images/help/repository/secret-scanning-push-protection-with-link.png)

{% endif %}

{% data reusables.secret-scanning.push-protection-remove-secret %} For more information about remediating blocked secrets, see "[Pushing a branch blocked by push protection](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection#resolving-a-blocked-push-on-the-command-line)."

If you confirm a secret is real and that you intend to fix it later, you should aim to remediate the secret as soon as possible. For example, you might revoke the secret and remove the secret from the repository's commit history. Real secrets that have been exposed must be revoked to avoid unauthorized access. You might consider first rotating the secret before revoking it. For more information, see "[Removing sensitive data from a repository](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)."

{% data reusables.secret-scanning.push-protection-multiple-branch-note %}

### Allowing a blocked secret to be pushed

If {% data variables.product.prodname_dotcom %} blocks a secret that you believe is safe to push, you can allow the secret and specify the reason why it should be allowed.

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

1. Visit the URL returned by {% data variables.product.prodname_dotcom %} when your push was blocked.
  ![Screenshot showing form with options for unblocking the push of a secret](/assets/images/help/repository/secret-scanning-unblock-form.png)
{% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}
1. Click **Allow me to push this secret**.
2. Reattempt the push on the command line within three hours. If you have not pushed within three hours, you will need to repeat this process.

{% ifversion secret-scanning-push-protection-web-ui %}
## Using secret scanning as a push protection from the web UI

{% data reusables.secret-scanning.push-protection-web-ui-choice %}

{% data variables.product.prodname_dotcom %} will only display one detected secret at a time in the web UI. If a particular secret has already been detected in the repository and an alert already exists, {% data variables.product.prodname_dotcom %} will not block that secret.

{% ifversion push-protection-custom-link-orgs %} 

Organization admins can provide a custom link that will be displayed when a push is blocked. This custom link can contain resources and advice specific to your organization. For example, the custom link can point to a README file with information about the organization's secret vault, which teams and individuals to escalate questions to, or the organization's approved policy for working with secrets and rewriting commit history.
{% endif %}

You can remove the secret from the file using the web UI. Once you remove the secret, the banner at the top of the page will change and tell you that you can now commit your changes.

  ![Screenshot showing commit in web ui allowed after secret fixed](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-allowed.png)

### Bypassing push protection for a secret

{% data reusables.secret-scanning.push-protection-remove-secret %} For more information about remediating blocked secrets, see "[Pushing a branch blocked by push protection](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection#resolving-a-blocked-push-in-the-web-ui)." 

If you confirm a secret is real and that you intend to fix it later, you should aim to remediate the secret as soon as possible. For more information, see "[Removing sensitive data from a repository](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)."

If {% data variables.product.prodname_dotcom %} blocks a secret that you believe is safe to push, you can allow the secret and specify the reason why it should be allowed.

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

If you confirm a secret is real and that you intend to fix it later, you should aim to remediate the secret as soon as possible.

1. In the banner that appeared at the top of the page when {% data variables.product.prodname_dotcom %} blocked your commit, click **Bypass protection**.
{% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}

  ![Screenshot showing form with options for unblocking the push of a secret](/assets/images/help/repository/secret-scanning-push-protection-web-ui-allow-secret-options.png)

1. Click **Allow secret**.

{% endif %}