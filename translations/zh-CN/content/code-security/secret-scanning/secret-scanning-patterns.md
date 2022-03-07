---
title: Secret scanning patterns
intro: 'Lists of supported secrets and the partners that {% data variables.product.company_short %} works with to prevent fraudulent use of secrets that were committed accidentally.'
product: '{% data reusables.gated-features.secret-scanning-partner %}'
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

{% data variables.product.product_name %} maintains two different sets of {% data variables.product.prodname_secret_scanning %} patterns:

1. **Partner patterns.** Used to detect potential secrets in all public repositories. For details, see "[Supported secrets for partner patterns](#supported-secrets-for-partner-patterns)."
2. **Advanced security patterns.** Used to detect potential secrets in repositories with {% data variables.product.prodname_secret_scanning %} enabled. {% ifversion ghec %} For details, see "[Supported secrets for advanced security](#supported-secrets-for-advanced-security)."{% endif %}

{% ifversion fpt %}
Organizations using {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_GH_advanced_security %} can enable {% data variables.product.prodname_secret_scanning_GHAS %} on their repositories. For details of these patterns, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security).
{% endif %}

## Supported secrets for partner patterns

{% data variables.product.product_name %} 当前会扫描公共仓库，查找以下服务提供商发布的密码。 有关 {% data variables.product.prodname_secret_scanning_partner %} 的更多信息，请参阅“[关于 {% data variables.product.prodname_secret_scanning_partner %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-partner-patterns)”。

{% data reusables.secret-scanning.partner-secret-list-public-repo %}
{% endif %}

{% ifversion ghec or ghae or ghes %}
## Supported secrets{% ifversion ghec %} for advanced security{% endif %}

When {% data variables.product.prodname_secret_scanning_GHAS %} is enabled, {% data variables.product.prodname_dotcom %} scans for secrets issued by the following service providers. {% ifversion ghec %}For more information about {% data variables.product.prodname_secret_scanning_GHAS %}, see "[About {% data variables.product.prodname_secret_scanning_GHAS %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advanced-security)."{% endif %}

{% ifversion ghes > 3.1 or ghae or ghec %}
{% note %}

**Note:** You can also define custom {% data variables.product.prodname_secret_scanning %} patterns for your repository, organization, or enterprise. 更多信息请参阅“[定义 {% data variables.product.prodname_secret_scanning %} 的自定义模式](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)”。

{% endnote %}
{% endif %}

{% data reusables.secret-scanning.partner-secret-list-private-repo %}
{% endif %}

## 延伸阅读

- "[保护您的仓库](/code-security/getting-started/securing-your-repository)"
- "[保护帐户和数据安全](/github/authenticating-to-github/keeping-your-account-and-data-secure)"
{%- ifversion fpt or ghec %}
- "[{% data variables.product.prodname_secret_scanning_caps %} partner program](/developers/overview/secret-scanning-partner-program)"
{%- else %}
- "[{% data variables.product.prodname_secret_scanning_caps %} partner program](/free-pro-team@latest/developers/overview/secret-scanning-partner-program)" in the {% data variables.product.prodname_ghe_cloud %} documentation
{% endif %}
