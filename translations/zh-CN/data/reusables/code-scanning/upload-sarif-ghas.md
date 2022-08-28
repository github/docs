{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}

{% note %}

**注：**上传 SARIF 数据以显示为 {% data variables.product.product_name %} 中的 {% data variables.product.prodname_code_scanning %} 结果适用于启用了 {% data variables.product.prodname_GH_advanced_security %} 的组织拥有的仓库{% if currentVersion == "free-pro-team@latest" %}和 {% data variables.product.prodname_dotcom_the_website %} 上的公共仓库{% endif %}。 更多信息请参阅“[管理仓库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”。

{% endnote %}

{% endif %}
