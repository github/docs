---
title: Supported secret scanning patterns
intro: 'Lists of supported secrets and the partners that {% data variables.product.company_short %} works with to prevent fraudulent use of secrets that were committed accidentally.'
product: '{% data reusables.gated-features.secret-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: reference
topics:
  - Secret scanning
  - Advanced Security
redirect_from:
  - /code-security/secret-scanning/secret-scanning-partners
  - /code-security/secret-scanning/secret-scanning-patterns
layout: inline
shortTitle: Supported patterns
---

## About {% data variables.product.prodname_secret_scanning %} patterns

{% data reusables.secret-scanning.alert-types %}

For in-depth information about each alert type, see "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/about-alerts)."

For details about all the supported patterns, see the "[Supported secrets](#supported-secrets)" section below.

If you use the REST API for {% data variables.product.prodname_secret_scanning %}, you can use the `Secret type` to report on secrets from specific issuers. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/rest/secret-scanning)."

If you believe that {% data variables.product.prodname_secret_scanning %} should have detected a secret committed to your repository, and it has not, you first need to check that {% data variables.product.prodname_dotcom %} supports your secret. For more information, refer to the following sections. For more advanced troubleshooting information, see "[AUTOTITLE](/code-security/secret-scanning/troubleshooting-secret-scanning-and-push-protection/troubleshooting-secret-scanning)."

## Supported secrets

This table lists the secrets supported by {% data variables.product.prodname_secret_scanning %}. You can see the types of alert that get generated for each token, as well as whether a validity check is performed on the token.

* **Provider**—name of the token provider.{% ifversion fpt or ghec %}
* **Partner**—token for which leaks are reported to the relevant token partner. Applies to public repositories only.
* **User**—token for which leaks are reported to users on {% data variables.product.prodname_dotcom %}.{% ifversion secret-scanning-non-provider-patterns %}
  * Applies to public repositories, and to private repositories where {% data variables.product.prodname_GH_advanced_security %} and {% data variables.product.prodname_secret_scanning %} are enabled.
  * Includes high confidence tokens, which relate to supported patterns and specified custom patterns, as well as non-provider tokens such as private keys, which usually have a higher ratio of false positives.
  * For {% data variables.product.prodname_secret_scanning %} to scan for non-provider patterns, the detection of non-provider patterns must be enabled for the repository or the organization. For more information, see "[AUTOTITLE](/code-security/secret-scanning/enabling-secret-scanning-features/enabling-secret-scanning-for-your-repository)."
  {% data reusables.secret-scanning.non-provider-patterns-beta %}{% endif %}{% endif %}{% ifversion ghes %}
* **{% data variables.product.prodname_secret_scanning_caps %} alert**—token for which leaks are reported to users on {% data variables.product.prodname_dotcom %}.{% ifversion secret-scanning-non-provider-patterns %}
  * Applies to private repositories where {% data variables.product.prodname_GH_advanced_security %} and {% data variables.product.prodname_secret_scanning %} are enabled.
  * Includes high confidence tokens, which relate to supported patterns and specified custom patterns, as well as non-provider tokens such as private keys, which often result in false positives.{% else %} Applies to private repositories where {% data variables.product.prodname_GH_advanced_security %} and {% data variables.product.prodname_secret_scanning %} enabled.{% endif %}{% endif %}
* **Push protection**—token for which leaks are reported to users on {% data variables.product.prodname_dotcom %}. Applies to repositories with {% data variables.product.prodname_secret_scanning %} and push protection enabled.

* **Validity check**—token for which a validity check is implemented. {% ifversion secret-scanning-validity-check-partner-patterns %}For partner tokens, {% data variables.product.prodname_dotcom %} sends the token to the relevant partner. Note that not all partners are based in the United States. For more information, see "[{% data variables.product.prodname_advanced_security %}](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#advanced-security)" in the Site Policy documentation.{% else %} {% ifversion ghes %}Currently only applies to {% data variables.product.prodname_dotcom %} tokens.{% endif %} {% ifversion fpt %}Currently only applies to {% data variables.product.prodname_dotcom %} tokens, and not shown in the table. For more information about validity check support see "[AUTOTITLE](/enterprise-cloud@latest/code-security/secret-scanning/secret-scanning-patterns#supported-secrets)" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% endif %}{% endif %}

{% ifversion secret-scanning-non-provider-patterns %}

### Non-provider patterns

{% data reusables.secret-scanning.non-provider-patterns-beta %}

| Provider | Token |
|----------|:--------------------|
|  Generic | http_basic_authentication_header |
|  Generic | http_bearer_authentication_header |
|  Generic | mongodb_connection_string |
|  Generic | mysql_connection_string |
|  Generic | openssh_private_key |
|  Generic | pgp_private_key |
|  Generic | postgres_connection_string |
|  Generic | rsa_private_key |

>[!NOTE] Push protection and validity checks are not supported for non-provider patterns.

### High confidence patterns

{% endif %}

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

<!-- GHES 3.9+ table -->
{% ifversion ghes %}

| Provider | Token | {% data variables.product.prodname_secret_scanning_caps %} alert | Push protection | Validity check |
|----|:----|:----:|:----:|:----:|
{%- for entry in secretScanningData %}
| {{ entry.provider }} | {{ entry.secretType }} | {% if entry.isPrivateWithGhas %}{% octicon "check" aria-label="Supported" %}{% else %}{% octicon "x" aria-label="Unsupported" %}{% endif %} | {% if entry.hasPushProtection %}{% octicon "check" aria-label="Supported" %}{% else %}{% octicon "x" aria-label="Unsupported" %}{% endif %} | {% if entry.hasValidityCheck %}{% octicon "check" aria-label="Supported" %}{% else %}{% octicon "x" aria-label="Unsupported" %}{% endif %} |
{%- endfor %}

{% endif %}

#### Token versions

<a name="token-versions"></a>

Service providers update the patterns used to generate tokens periodically and may support more than one version of a token. Push protection only supports the most recent token versions that {% data variables.product.prodname_secret_scanning %} can identify with confidence. This avoids push protection blocking commits unnecessarily when a result may be a false positive, which is more likely to happen with legacy tokens.<!-- markdownlint-disable-line MD053 -->

## Further reading

* "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/about-alerts)"
{%- ifversion fpt or ghec %}
* "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-partnership-program/secret-scanning-partner-program)"
{%- endif %}
* "[AUTOTITLE](/code-security/getting-started/securing-your-repository)"
* "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure)"
