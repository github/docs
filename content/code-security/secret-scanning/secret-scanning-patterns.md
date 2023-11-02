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
layout: inline # The supported secrets table expands with a11y options, this allows the page more room
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

{% ifversion fpt or ghec %}

## About {% data variables.product.prodname_secret_scanning %} patterns

{% data variables.product.product_name %} maintains these different sets of default {% data variables.product.prodname_secret_scanning %} patterns:

1. **Partner patterns.** Used to detect potential secrets in all public repositories as well as public npm packages.{% data reusables.secret-scanning.partner-program-link %}
1. **User alert patterns.** Used to detect potential secrets in {% ifversion fpt %}public{% endif %} repositories with {% data variables.secret-scanning.user_alerts %} enabled. {% ifversion secret-scanning-push-protection %}
1. **Push protection patterns.** Used to detect potential secrets in repositories with {% data variables.product.prodname_secret_scanning %} as a push protection enabled.{% endif %}

{% ifversion fpt %}
Owners of public repositories, as well as organizations using {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_GH_advanced_security %}, can enable {% data variables.secret-scanning.user_alerts %} on their repositories.
{% endif %}

For details about all the supported patterns, see the "[Supported secrets](#supported-secrets)" section below.

If you believe that {% data variables.product.prodname_secret_scanning %} should have detected a secret committed to your repository, and it has not, you first need to check that {% data variables.product.prodname_dotcom %} supports your secret. For more information, refer to the sections below. For more advanced troubleshooting information, see "[AUTOTITLE](/code-security/secret-scanning/troubleshooting-secret-scanning)."

## About partner alerts

Partner alerts are alerts that are sent to the secret providers whenever a secret leak is reported for one of their secrets. {% data variables.product.product_name %} currently scans public repositories and public npm packages for secrets issued by specific service providers and alerts the relevant service provider whenever a secret is detected in a commit. For more information about {% data variables.secret-scanning.partner_alerts %}, see "[AUTOTITLE](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-alerts-for-partners)."

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

{% endif %}

## About {% ifversion fpt or ghec %}user {% else %}{% data variables.product.prodname_secret_scanning %}{% endif %} alerts

{% ifversion fpt or ghec %}User alerts are alerts that are reported to users on {% data variables.product.prodname_dotcom %}. {% endif %}When {% data variables.secret-scanning.user_alerts %} {% ifversion fpt or ghec %}are{% else %}is{% endif %} enabled, {% data variables.product.prodname_dotcom %} scans repositories for secrets issued by a large variety of service providers and generates {% data variables.secret-scanning.alerts %}.

You can see these alerts on the **Security** tab of the repository. {% ifversion fpt or ghec %}For more information about {% data variables.secret-scanning.user_alerts %}, see "[AUTOTITLE](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-alerts-for-users)."{% endif %}

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

If you use the REST API for secret scanning, you can use the `Secret type` to report on secrets from specific issuers. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/rest/secret-scanning)."

{% ifversion ghes or ghae or ghec %}
{% note %}

**Note:** You can also define custom {% data variables.product.prodname_secret_scanning %} patterns for your repository, organization, or enterprise. For more information, see "[AUTOTITLE](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)."

{% endnote %}
{% endif %}

{% ifversion secret-scanning-push-protection %}

## About push protection alerts

Push protection alerts are user alerts that are reported by push protection. {% data variables.product.prodname_secret_scanning_caps %} as a push protection currently scans repositories for secrets issued by some service providers.

{% ifversion secret-scanning-push-protection-for-users %}Push protection alerts are not created for secrets that are bypassed with user-based push protection only. For more information, see "[AUTOTITLE](/code-security/secret-scanning/push-protection-for-users)."{% endif %}

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

{% data reusables.secret-scanning.push-protection-older-tokens %} For more information about push protection limitations, see "[AUTOTITLE](/code-security/secret-scanning/troubleshooting-secret-scanning#push-protection-and-pattern-versions)."

{% endif %}

## Supported secrets

This table lists the secrets supported by {% data variables.product.prodname_secret_scanning %}. You can see the types of alert that get generated for each token{% ifversion secret-scanning-validity-check %}, as well as whether a validity check is performed on the token{% endif %}.
- **Provider**—name of the token provider.{% ifversion fpt or ghec %}
- **Partner**—token for which leaks are reported to the relevant token partner. Applies to public repositories only.
- **User**—token for which leaks are reported to users on {% data variables.product.prodname_dotcom %}. Applies to public repositories, and to private repositories where {% data variables.product.prodname_GH_advanced_security %} is enabled.{% endif %}{% ifversion ghes or ghae %}
- **{% data variables.product.prodname_secret_scanning_caps %} alert**—token for which leaks are reported to users on {% data variables.product.prodname_dotcom %}. Applies to private repositories where {% data variables.product.prodname_GH_advanced_security %} and {% data variables.product.prodname_secret_scanning %} enabled.{% endif %}{% ifversion secret-scanning-push-protection %}
- **Push protection**—token for which leaks are reported to users on {% data variables.product.prodname_dotcom %}. Applies to repositories with {% data variables.product.prodname_secret_scanning %} and push protection enabled.{% endif %}{% ifversion secret-scanning-validity-check %}
- **Validity check**—token for which a validity check is implemented. {% ifversion secret-scanning-validity-check-partner-patterns %}For partner tokens, {% data variables.product.prodname_dotcom %} sends the token to the relevant partner. Note that not all partners are based in the United States. For more information, see "[{% data variables.product.prodname_advanced_security %}](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#advanced-security)" in the Site Policy documentation.{% else %} {% ifversion ghes > 3.8 %}Currently only applies to {% data variables.product.prodname_dotcom %} tokens.{% endif %} {% ifversion fpt %}Currently only applies to {% data variables.product.prodname_dotcom %} tokens, and not shown in the table. For more information about validity check support see "[AUTOTITLE](/enterprise-cloud@latest/code-security/secret-scanning/secret-scanning-patterns#supported-secrets)" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% endif %}{% endif %}{% endif %}

<!-- FPT version of table -->
{% ifversion fpt %}

| Provider | Token | Partner | User | Push protection
|----|:----|:----:|:----:|:----:|
{%- for entry in secretScanningData %}
| {{ entry.provider }} | {{ entry.secretType }} | {% if entry.isPublic %}{% octicon "check" aria-label="Supported" %}{% else %}{% octicon "x" aria-label="Unsupported" %}{% endif %} | {% if entry.isPrivateWithGhas %}{% octicon "check" aria-label="Supported" %}{% else %}{% octicon "x" aria-label="Unsupported" %}{% endif %} | {% if entry.hasPushProtection %}{% octicon "check" aria-label="Supported" %}{% else %}{% octicon "x" aria-label="Unsupported" %}{% endif %} |
{%- endfor %}

{% endif %}

<!-- GHEC version of table -->
{% ifversion ghec %}

| Provider | Token | Partner | User | Push protection | Validity check |
|----|:----|:----:|:----:|:----:|:----:|
{%- for entry in secretScanningData %}
| {{ entry.provider }} | {{ entry.secretType }} | {% if entry.isPublic %}{% octicon "check" aria-label="Supported" %}{% else %}{% octicon "x" aria-label="Unsupported" %}{% endif %} | {% if entry.isPrivateWithGhas %}{% octicon "check" aria-label="Supported" %}{% else %}{% octicon "x" aria-label="Unsupported" %}{% endif %} | {% if entry.hasPushProtection %}{% octicon "check" aria-label="Supported" %}{% else %}{% octicon "x" aria-label="Unsupported" %}{% endif %} | {% if entry.hasValidityCheck %}{% octicon "check" aria-label="Supported" %}{% else %}{% octicon "x" aria-label="Unsupported" %}{% endif %} |
{%- endfor %}
{% endif %}

<!-- GHES 3.5 to GHES 3.8 table -->
{% ifversion ghes = 3.6 or ghes = 3.7 or ghes = 3.8 %}

| Provider | Token | {% data variables.product.prodname_secret_scanning_caps %} alert | Push protection |
|----|:----|:----:|:----:|
{%- for entry in secretScanningData %}
| {{ entry.provider }} | {{ entry.secretType }} | {% if entry.isPrivateWithGhas %}{% octicon "check" aria-label="Supported" %}{% else %}{% octicon "x" aria-label="Unsupported" %}{% endif %} | {% if entry.hasPushProtection %}{% octicon "check" aria-label="Supported" %}{% else %}{% octicon "x" aria-label="Unsupported" %}{% endif %} |
{%- endfor %}

{% endif %}

<!-- GHES 3.9+ table -->
{% ifversion ghes > 3.8 %}

| Provider | Token | {% data variables.product.prodname_secret_scanning_caps %} alert | Push protection | Validity check |
|----|:----|:----:|:----:|:----:|
{%- for entry in secretScanningData %}
| {{ entry.provider }} | {{ entry.secretType }} | {% if entry.isPrivateWithGhas %}{% octicon "check" aria-label="Supported" %}{% else %}{% octicon "x" aria-label="Unsupported" %}{% endif %} | {% if entry.hasPushProtection %}{% octicon "check" aria-label="Supported" %}{% else %}{% octicon "x" aria-label="Unsupported" %}{% endif %} | {% if entry.hasValidityCheck %}{% octicon "check" aria-label="Supported" %}{% else %}{% octicon "x" aria-label="Unsupported" %}{% endif %} |
{%- endfor %}

{% endif %}

<!-- GHAE < 3.5 table -->
{% ifversion ghae < 3.5 %}

| Provider | Token | {% data variables.product.prodname_secret_scanning_caps %} alert |
|----|:----|:----:|
{%- for entry in secretScanningData %}
| {{ entry.provider }} | {{ entry.secretType }} | {% if entry.isPrivateWithGhas %}{% octicon "check" aria-label="Supported" %}{% else %}{% octicon "x" aria-label="Unsupported" %}{% endif %} |
{%- endfor %}

{% endif %}

<!-- GHAE > 3.5+ table -->
{% ifversion ghae = 3.5 or ghae > 3.5 %}

| Provider | Token | {% data variables.product.prodname_secret_scanning_caps %} alert | Push protection |
|----|:----|:----:|:----:|
{%- for entry in secretScanningData %}
| {{ entry.provider }} | {{ entry.secretType }} | {% if entry.isPrivateWithGhas %}{% octicon "check" aria-label="Supported" %}{% else %}{% octicon "x" aria-label="Unsupported" %}{% endif %} | {% if entry.hasPushProtection %}{% octicon "check" aria-label="Supported" %}{% else %}{% octicon "x" aria-label="Unsupported" %}{% endif %} |
{%- endfor %}

{% endif %}

## Further reading

- "[AUTOTITLE](/code-security/getting-started/securing-your-repository)"
- "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure)"
{%- ifversion fpt or ghec %}
- "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-partner-program)"
{%- else %}
- "[AUTOTITLE](/free-pro-team@latest/code-security/secret-scanning/secret-scanning-partner-program)" in the {% data variables.product.prodname_ghe_cloud %} documentation
{% endif %}
