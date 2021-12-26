{% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_secret_scanning_caps %} 适用于所有公共仓库以及启用了 {% data variables.product.prodname_GH_advanced_security %} 的组织拥有的私有仓库。
{%- elsif currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}{% data variables.product.prodname_secret_scanning_caps %} 适用于启用了 {% data variables.product.prodname_GH_advanced_security %} 的组织拥有的仓库。
{%- elsif currentVersion == "github-ae@latest" %}
{% data variables.product.prodname_secret_scanning_caps %} 可用作 {% data variables.product.prodname_GH_advanced_security %} 的一部分，在测试期间免费使用。
{%- else %}
{% data variables.product.prodname_secret_scanning_caps %} 在您拥有 {% data variables.product.prodname_GH_advanced_security %} 的许可证时可用。{% endif %} {% data reusables.advanced-security.more-info-ghas %}