---
title: About secret scanning
intro: 'Prevent fraudulent use of your secrets by automatically detecting exposed credentials before they can be exploited.'
redirect_from:
  - /github/administering-a-repository/about-token-scanning
  - /articles/about-token-scanning
  - /articles/about-token-scanning-for-private-repositories
  - /github/administering-a-repository/about-secret-scanning
  - /code-security/secret-security/about-secret-scanning
  - /code-security/secret-scanning/about-secret-scanning
  - /code-security/secret-scanning/introduction/about-secret-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Secret scanning
  - Secret Protection
shortTitle: Secret scanning
contentType: concepts
---

When credentials like API keys and passwords are committed to repositories, they become targets for unauthorized access. {% data variables.product.prodname_secret_scanning_caps %} automatically detects these exposed secrets so you can secure them before they're exploited.

{% ifversion secret-risk-assessment %}

> [!TIP]
> At any time, you can run a free assessment of your organization's code for leaked secrets. 
>
> To generate a report, open {% data reusables.security-overview.navigate-to-risk-assessment %}.

{% endif %}

## How secret scanning protects your code

{% data variables.product.prodname_secret_scanning_caps %} scans your entire Git history on all branches of your repository for API keys, passwords, tokens, and other known secret types. {% data variables.product.github %} also periodically rescans repositories when new secret types are added.

{% data variables.product.github %} also automatically scans:

{% data reusables.secret-scanning.what-is-scanned %}

### {% data variables.product.prodname_secret_scanning_caps %} alerts and remediation

When {% data variables.product.prodname_secret_scanning %} finds a potential secret, {% data variables.product.github %} generates an alert on your repository's **Security** tab with details about the exposed credential.

Review the alert and rotate the affected credential immediately to ensure it can no longer be used. While you can also remove secrets from your Git history, this is time-intensive and often unnecessary if you've already revoked the credential.

{% ifversion fpt or ghec %}

### Partner integration

{% data variables.product.company_short %} partners with a large variety of service providers to validate detected secrets. When a partner secret is detected, we notify the provider so they can take action, such as revoking the credential. Partner secrets are reported directly to the provider and aren't displayed in your repository alerts. For more information, see [AUTOTITLE](/code-security/secret-scanning/secret-scanning-partnership-program/secret-scanning-partner-program).

{% endif %}

## Customizability

Beyond the default detection of partner and provider secrets, you can expand and customize {% data variables.product.prodname_secret_scanning %} to fit your needs.

* **Non-provider patterns.** Expand detection to secrets that aren't tied to a specific service provider, such as private keys, connection strings, and generic API keys.
* **Custom patterns.** Define your own regular expressions to detect organization-specific secrets that aren't covered by default patterns.
* **Validity checks.** Prioritize remediation by checking whether detected secrets are still active.
{% ifversion secret-scanning-ai-generic-secret-detection %}
* **{% data variables.secret-scanning.copilot-secret-scanning %}.** Use AI to detect unstructured secrets like passwords, or to generate regular expressions for custom patterns.
{% endif %}

## How can I access this feature?

{% data reusables.gated-features.secret-scanning %}

## Next steps

* **If you've received an alert**, see [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning) to learn how to review, resolve, and remediate exposed secrets.
{%- ifversion secret-risk-assessment %}
* **If you're securing an organization**, see [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/assess-your-secret-risk) to determine your organization's exposure to leaked secrets.
{% endif %}

## Further reading

* For a complete list of supported secrets and service providers, see [AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets).
