---
title: Protecting pushes with secret scanning
intro: 'You can use {% data variables.product.prodname_secret_scanning %} to prevent supported secrets from being pushed into your organization or repository by enabling push protection.'
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
shortTitle: Push protection
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}
{% data reusables.secret-scanning.push-protection-beta %}

## About push protection for secrets

Up to now, {% data variables.product.prodname_secret_scanning_GHAS %} checks for secrets _after_ a push and alerts users to exposed secrets. {% data reusables.secret-scanning.push-protection-overview %}

{% data variables.product.prodname_secret_scanning_caps %} as a push protection currently scans repositories for secrets issued by the following service providers.

{% data reusables.secret-scanning.secret-list-private-push-protection %}

## Enabling {% data variables.product.prodname_secret_scanning %} as a push protection

For you to use {% data variables.product.prodname_secret_scanning %} as a push protection, the organization or repository needs to have both {% data variables.product.prodname_GH_advanced_security %} and {% data variables.product.prodname_secret_scanning %} enabled. For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)," "[Managing security and analysis settings for your repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)," and "[About {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)."

Organization owners, security managers, and repository administrators can enable push protection for {% data variables.product.prodname_secret_scanning %} via the UI and API. For more information, see "[Repositories](/rest/reference/repos#update-a-repository)" and expand the "Properties of the `security_and_analysis` object" section in the REST API documentation.

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


## Using {% data variables.product.prodname_secret_scanning %} as a push protection from the command line

When you attempt to push a supported secret to a repository or organization with {% data variables.product.prodname_secret_scanning %} as a push protection enabled, {% data variables.product.prodname_dotcom %} will block the push. You can remove the secret from your commit or follow a provided URL to allow the push.

Up to five detected secrets will be displayed at a time on the command line. If a particular secret has already been detected in the repository and an alert already exists, {% data variables.product.prodname_dotcom %} will not block that secret.

![Screenshot showing that a push is blocked when a user attempts to push a secret to a repository](/assets/images/help/repository/secret-scanning-push-protection-with-link.png)

If you need to remove the secret from your latest commit (that is, `HEAD`) on the branch being pushed and any earlier commits that contain the secret, you can remove the secret from `HEAD`, then squash the commits between when the commit was introduced and the first version of `HEAD` for which the secret has been removed.

{% note %}

**注意**：

* If your git configuration supports pushes to multiple branches, and not only to the default branch, your push may be blocked due to additional and unintended refs being pushed. For more information, see the [`push.default` options](https://git-scm.com/docs/git-config#Documentation/git-config.txt-pushdefault) in the Git Docs.
* If {% data variables.product.prodname_secret_scanning %} upon a push times out, {% data variables.product.prodname_dotcom %} will still run a scan after the push.

{% endnote %}

### Allowing a blocked secret to be pushed

If {% data variables.product.prodname_dotcom %} blocks a secret that you believe is safe to push, you can allow the secret and specify the reason why it should be allowed.

If you confirm a secret is real and that you intend to fix it later, you should aim to remediate the secret as soon as possible. For example, you might revoke the secret and remove the secret from the repository's commit history. For more information, see "[Removing sensitive data from a repository](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)."

When you allow a secret to be pushed, an alert is created in the "Security" tab. The alert is closed and no notifications are sent if you specify that the secret is a false positive or used only in tests. If you specify that the secret is real and that you will fix it later, the security alert remains open and notifications are sent to the author of the commit and repository administrators. For more information, see "[Managing alerts from secret scanning](/code-security/secret-scanning/managing-alerts-from-secret-scanning)."

1. Visit the URL returned by {% data variables.product.prodname_dotcom %} when your push was blocked. ![Screenshot showing form with options for unblocking the push of a secret](/assets/images/help/repository/secret-scanning-unblock-form.png)
2. Choose the option that best describes why you should be able to push the secret.
    - If the secret is only used in tests and poses no threat, click **It's used in tests**.
    - If the detected string is not a secret, click **It's a false positive**.
    - If the secret is real but you intend to fix it later, click **I'll fix it later**.
3. Click **Allow me to push this secret**.
4. Reattempt the push on the command line within three hours. If you have not pushed within three hours, you will need to repeat this process.
