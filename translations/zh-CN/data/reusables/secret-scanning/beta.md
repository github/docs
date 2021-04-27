{% if  currentVersion == "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
{% note %}

**注意：**组织拥有的仓库的 {% data variables.product.prodname_secret_scanning_caps %} 目前处于公测阶段，可能会有变动。

{% endnote %}

{% endif %}
{% if currentVersion ver_gt "enterprise-server@3.0" %}

{% note %}

**注：** {% data variables.product.prodname_secret_scanning_caps %} 正在测试用于 {% data variables.product.prodname_ghe_server %} 3.0。 对于机密扫描的一般可用版本，请升级到最新版本的 {% data variables.product.prodname_ghe_server %}。


{% endnote %}

{% endif %}
