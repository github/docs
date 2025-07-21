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
  - Secret Protection
redirect_from:
  - /code-security/secret-scanning/secret-scanning-partners
  - /code-security/secret-scanning/secret-scanning-patterns
layout: inline
shortTitle: Supported patterns
---

## About {% data variables.product.prodname_secret_scanning %} patterns

{% data reusables.secret-scanning.alert-types %}

For in-depth information about each alert type, see [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/about-alerts).

For details about all the supported patterns, see the [Supported secrets](#supported-secrets) section below.

If you use the REST API for {% data variables.product.prodname_secret_scanning %}, you can use the `Secret type` to report on secrets from specific issuers. For more information, see [AUTOTITLE](/enterprise-cloud@latest/rest/secret-scanning).

If you believe that {% data variables.product.prodname_secret_scanning %} should have detected a secret committed to your repository, and it has not, you first need to check that {% data variables.product.prodname_dotcom %} supports your secret. For more information, refer to the following sections. For more advanced troubleshooting information, see [AUTOTITLE](/code-security/secret-scanning/troubleshooting-secret-scanning-and-push-protection/troubleshooting-secret-scanning).

## Supported secrets

This table lists the secrets supported by {% data variables.product.prodname_secret_scanning %}. You can see the types of alert that get generated for each token, as well as whether a validity check is performed on the token.

* **Provider:** Name of the token provider.{% ifversion fpt or ghec %}
* **Partner:** Token for which leaks are reported to the relevant token partner. Applies to public repositories only.
* **User:** Token for which leaks are reported to users on {% data variables.product.prodname_dotcom %}.
  * Applies to public repositories, and to private repositories where {% data variables.product.prodname_GH_secret_protection %} and {% data variables.product.prodname_secret_scanning %} are enabled.
  * Includes {% ifversion secret-scanning-alert-experimental-list %}default{% else %}high confidence{% endif %} tokens, which relate to supported patterns and specified custom patterns, as well as non-provider tokens such as private keys, which usually have a higher ratio of false positives.
  * For {% data variables.product.prodname_secret_scanning %} to scan for non-provider patterns, the detection of non-provider patterns must be enabled for the repository or the organization. For more information, see [AUTOTITLE](/code-security/secret-scanning/enabling-secret-scanning-features/enabling-secret-scanning-for-your-repository).
  {% data reusables.secret-scanning.non-provider-patterns-beta %}{% endif %}{% ifversion ghes %}
* **{% data variables.product.prodname_secret_scanning_caps %} alert:** Token for which leaks are reported to users on {% data variables.product.prodname_dotcom %}.
  * Applies to private repositories where {% data variables.product.prodname_GH_secret_protection %} and {% data variables.product.prodname_secret_scanning %} are enabled.
  * Includes {% ifversion secret-scanning-alert-experimental-list %}default{% else %}high confidence{% endif %} tokens, which relate to supported patterns and specified custom patterns, as well as non-provider tokens such as private keys, which often result in false positives.{% endif %}
* **Push protection:** Token for which leaks are reported to users on {% data variables.product.prodname_dotcom %}. Applies to repositories with {% data variables.product.prodname_secret_scanning %} and push protection enabled.

* **Validity check:** Token for which a validity check is implemented. {% ifversion secret-scanning-validity-check-partner-patterns %}For partner tokens, {% data variables.product.prodname_dotcom %} sends the token to the relevant partner. Note that not all partners are based in the United States. For more information, see [{% data variables.product.prodname_AS %}](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#advanced-security) in the Site Policy documentation.{% else %} Currently only applies to {% data variables.product.prodname_dotcom %} tokens.{% endif %}

### Non-provider patterns

{% data reusables.secret-scanning.non-provider-patterns-beta %}

{% ifversion secret-scanning-ai-generic-secret-detection %}
In addition to these generic non-provider patterns, {% data variables.product.prodname_secret_scanning %} uses {% data variables.product.prodname_copilot_short %} to detect generic passwords. For more information, see [AUTOTITLE](/code-security/secret-scanning/copilot-secret-scanning/responsible-ai-generic-secrets).
{% endif %}

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

### {% ifversion secret-scanning-alert-experimental-list %}Default{% else %}High confidence{% endif %} patterns

<!-- Team plan and GHEC version of table -->
{% ifversion fpt or ghec %}

> [!NOTE]
> Validity checks are only available to users with {% data variables.product.prodname_team %} or {% data variables.product.prodname_enterprise %} who enable the feature as part of {% data variables.product.prodname_GH_secret_protection %}.

| Provider | Token | Partner | User | Push protection | Validity check |
|----|:----|:----:|:----:|:----:|:----:|
{%- for entry in secretScanningData %}
| {{ entry.provider }} | {{ entry.secretType }} | {% if entry.isPublic %}<span role="img" class="octicon-bg-check" aria-label="Supported">✓</span>{% else %}<span role="img" class="octicon-bg-x" aria-label="Unsupported">✗</span>{% endif %} | {% if entry.isPrivateWithGhas %}<span role="img" class="octicon-bg-check" aria-label="Supported">✓</span>{% else %}<span role="img" class="octicon-bg-x" aria-label="Unsupported">✗</span>{% endif %} | {% if entry.hasPushProtection %}<span role="img" class="octicon-bg-check" aria-label="Supported">✓</span>{% else %}<span role="img" class="octicon-bg-x" aria-label="Unsupported">✗</span>{% endif %} | {% if entry.hasValidityCheck %}<span role="img" class="octicon-bg-check" aria-label="Supported">✓</span>{% else %}<span role="img" class="octicon-bg-x" aria-label="Unsupported">✗</span>{% endif %} |
{%- endfor %}

{% endif %}

<!-- GHES 3.9+ table -->
{% ifversion ghes %}

| Provider | Token | {% data variables.product.prodname_secret_scanning_caps %} alert | Push protection | Validity check |
|----|:----|:----:|:----:|:----:|
{%- for entry in secretScanningData %}
| {{ entry.provider }} | {{ entry.secretType }} | {% if entry.isPrivateWithGhas %}<span role="img" class="octicon-bg-check" aria-label="Supported">✓</span>{% else %}<span role="img" class="octicon-bg-x" aria-label="Unsupported">✗</span>{% endif %} | {% if entry.hasPushProtection %}<span role="img" class="octicon-bg-check" aria-label="Supported">✓</span>{% else %}<span role="img" class="octicon-bg-x" aria-label="Unsupported">✗</span>{% endif %} | {% if entry.hasValidityCheck %}<span role="img" class="octicon-bg-check" aria-label="Supported">✓</span>{% else %}<span role="img" class="octicon-bg-x" aria-label="Unsupported">✗</span>{% endif %} |
{%- endfor %}

{% endif %}

#### Token versions

<a name="token-versions"></a>

Service providers update the patterns used to generate tokens periodically and may support more than one version of a token. Push protection only supports the most recent token versions that {% data variables.product.prodname_secret_scanning %} can identify with confidence. This avoids push protection blocking commits unnecessarily when a result may be a false positive, which is more likely to happen with legacy tokens.<!-- markdownlint-disable-line MD053 -->

## Further reading

* [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/about-alerts)
{%- ifversion fpt or ghec %}
* [AUTOTITLE](/code-security/secret-scanning/secret-scanning-partnership-program/secret-scanning-partner-program)
{%- endif %}
* [AUTOTITLE](/code-security/getting-started/securing-your-repository)
* [AUTOTITLE](/authentication/keeping-your-account-and-data-secure)
