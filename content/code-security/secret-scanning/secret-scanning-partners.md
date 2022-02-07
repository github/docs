---
title: Secret scanning partners
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
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

{% ifversion fpt or ghec %}
## List of supported secrets for public repositories

{% data variables.product.product_name %} currently scans public repositories for secrets issued by the following service providers.

{% data reusables.secret-scanning.partner-secret-list-public-repo %}
{% endif %}

{% ifversion fpt %}
Organizations using {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_GH_advanced_security %} can run {% data variables.product.prodname_secret_scanning %} on private repositories. For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/code-security/secret-scanning/secret-scanning-partners).
{% endif %}

{% ifversion ghec or ghae or ghes %}
## List of supported secrets {% ifversion ghec %}for private repositories{% endif %}

{% ifversion ghes > 3.1 or ghae or ghec %}
{% note %}

**Note:** You can also define custom {% data variables.product.prodname_secret_scanning %} patterns that only apply to your repository or organization. For more information, see "[Defining custom patterns for {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)."

{% endnote %}
{% endif %}

{% data variables.product.prodname_dotcom %}  currently scans{% ifversion ghec %} private{% endif %} repositories for secrets issued by the following service providers.

{% data reusables.secret-scanning.partner-secret-list-private-repo %}
{% endif %}

## Further reading

- "[Securing your repository](/code-security/getting-started/securing-your-repository)"
- "[Keeping your account and data secure](/github/authenticating-to-github/keeping-your-account-and-data-secure)"
{%- ifversion fpt or ghec %}
- "[{% data variables.product.prodname_secret_scanning_caps %} partner program](/developers/overview/secret-scanning-partner-program)"
{%- else %}
- "[{% data variables.product.prodname_secret_scanning_caps %} partner program](/free-pro-team@latest/developers/overview/secret-scanning-partner-program)" in the {% data variables.product.prodname_ghe_cloud %} documentation
{% endif %}
