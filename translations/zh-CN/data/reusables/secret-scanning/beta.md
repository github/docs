{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
{% note %}

**注：**组织拥有的{% if currentVersion == "free-pro-team@latest" %}私有{% endif %}仓库的 {% data variables.product.prodname_secret_scanning_caps %} 目前处于测试阶段，可能会更改。

{% endnote %}

{% endif %}
