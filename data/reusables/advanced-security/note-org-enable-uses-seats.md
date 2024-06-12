{% ifversion ghes or ghec %}
{% note %}

**Note:** If you enable {% data variables.product.prodname_GH_advanced_security %}, active committers to these repositories will use {% data variables.product.prodname_GH_advanced_security %} {% ifversion ghas-billing-UI-update %}licenses{% else %}seats{% endif %}. This option is deactivated if you have exceeded your license capacity. {% ifversion fpt or ghec %}For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)."{% endif %}
{% endnote %}
{% endif %}
