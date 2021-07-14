{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
{% note %}
**注意：**如果启用

{% data variables.product.prodname_GH_advanced_security %}，这些仓库的提交者将使用您的 {% data variables.product.prodname_GH_advanced_security %} 许可上的席位。 如果您已超出许可证容量，此选项将被禁用。 {% if currentVersion == "free-pro-team@latest" %}更多信息请参阅“[关于 {% data variables.product.prodname_GH_advanced_security %} 的许可](/billing/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security)”。{% endif %}
{% endnote %}
{% endif %}