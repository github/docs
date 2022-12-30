---
title: Secret scanning patterns
intro: 'Lists of supported secrets and the partners that {% data variables.product.company_short %} works with to prevent fraudulent use of secrets that were committed accidentally.'
product: '{% data reusables.gated-features.secret-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: reference
topics:
  - Secret scanning
  - Advanced Security
redirect_from:
  - /code-security/secret-scanning/secret-scanning-partners
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

{% ifversion fpt or ghec %}
## About {% data variables.product.prodname_secret_scanning %} patterns

{% data variables.product.product_name %} maintains these different sets of {% data variables.product.prodname_secret_scanning %} patterns:

1. **Partner patterns.** Used to detect potential secrets in all public repositories. For details, see "[Supported secrets for partner alerts](#supported-secrets-for-partner-alerts)."
2. **User alert patterns.** Used to detect potential secrets in {% ifversion fpt %}public{% endif %} repositories with {% data variables.secret-scanning.user_alerts %} enabled. For details, see "[Supported secrets for user alerts](#supported-secrets-for-user-alerts)."{% ifversion secret-scanning-push-protection %}
3. **Push protection patterns.** Used to detect potential secrets in repositories with {% data variables.product.prodname_secret_scanning %} as a push protection enabled. For details, see "[Supported secrets for push protection](#supported-secrets-for-push-protection)."{% endif %}

{% ifversion fpt %}
Owners of public repositories, as well as organizations using {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_GH_advanced_security %}, can enable {% data variables.secret-scanning.user_alerts %} on their repositories. For details of these patterns, see the "[Supported secrets for user alerts](#supported-secrets-for-user-alerts) section below.
{% endif %}

## Supported secrets for partner alerts

{% data variables.product.product_name %} currently scans public repositories for secrets issued by the following service providers and alerts the relevant service provider whenever a secret is detected in a commit. For more information about {% data variables.secret-scanning.partner_alerts %}, see "[About {% data variables.secret-scanning.partner_alerts %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-alerts-for-partners)."

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

{% data reusables.secret-scanning.partner-secret-list-public-repo %}
{% endif %}

## Supported secrets for {% ifversion fpt or ghec %}user {% endif %}alerts

{% data reusables.secret-scanning.secret-scanning-alerts-beta %} 

When {% data variables.secret-scanning.user_alerts %} {% ifversion fpt or ghec %}are{% else %}is{% endif %} enabled, {% data variables.product.prodname_dotcom %} scans repositories for secrets issued by the following service providers and generates {% data variables.secret-scanning.alerts %}. You can see these alerts on the "Security" tab of the repository. {% ifversion fpt or ghec %}For more information about {% data variables.secret-scanning.user_alerts %}, see "[About {% data variables.secret-scanning.user_alerts %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-alerts-for-users)."{% endif %}

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

If you use the REST API for secret scanning, you can use the `Secret type` to report on secrets from specific issuers. For more information, see "[Secret scanning](/enterprise-cloud@latest/rest/secret-scanning)."
 
{% ifversion ghes or ghae or ghec %}
{% note %}

**Note:** You can also define custom {% data variables.product.prodname_secret_scanning %} patterns for your repository, organization, or enterprise. For more information, see "[Defining custom patterns for {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)."

{% endnote %}
{% endif %}

{% data reusables.secret-scanning.partner-secret-list-private-repo %}

{% ifversion secret-scanning-push-protection %}
## Supported secrets for push protection

{% data variables.product.prodname_secret_scanning_caps %} as a push protection currently scans repositories for secrets issued by the following service providers.

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

{% data reusables.secret-scanning.secret-list-private-push-protection %}

{% endif %}
## Further reading

- "[Securing your repository](/code-security/getting-started/securing-your-repository)"
- "[Keeping your account and data secure](/github/authenticating-to-github/keeping-your-account-and-data-secure)"
{%- ifversion fpt or ghec %}
- "[{% data variables.product.prodname_secret_scanning_caps %} partner program](/developers/overview/secret-scanning-partner-program)"
{%- else %}
- "[{% data variables.product.prodname_secret_scanning_caps %} partner program](/free-pro-team@latest/developers/overview/secret-scanning-partner-program)" in the {% data variables.product.prodname_ghe_cloud %} documentation
{% endif %}
