{% ifversion fpt or ghes > 3.0 %}
{% note %}
**注意：**如果启用

{% data variables.product.prodname_GH_advanced_security %}，这些仓库的提交者将使用您的 {% data variables.product.prodname_GH_advanced_security %} 许可上的席位。 如果您已超出许可证容量，此选项将被禁用。 {% ifversion fpt %}For more information, see "[About billing for {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)."{% endif %}
{% endnote %}
{% endif %}
