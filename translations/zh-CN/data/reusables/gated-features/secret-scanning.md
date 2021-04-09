{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
{% data variables.product.prodname_secret_scanning_caps %} 可用于{% if currentVersion == "free-pro-team@latest" %}公共仓库，以及具有{% else %}您有{% endif %} {% data variables.product.prodname_advanced_security %} 许可的组织拥有的私有仓库。 {% data reusables.advanced-security.more-info-ghas %}
{% endif %}

{% if currentVersion == "github-ae@latest" %}
{% data variables.product.prodname_secret_scanning_caps %} 可用作 {% data variables.product.prodname_GH_advanced_security %} 的一部分，在测试期间免费使用。
{% endif %}