{% ifversion ghae %}
{% data variables.product.prodname_GH_advanced_security %}のライセンスを持っているなら、Organizationのセキュリティの概要が利用できます。これは、ベータリリースの間は無料です。 {% data reusables.advanced-security.more-info-ghas %}
{% elsif ghec or ghes %}
The security overview for your organization is available if you have a license for {% data variables.product.prodname_GH_advanced_security %}. {% data reusables.advanced-security.more-info-ghas %}
{% elsif fpt %}
The security overview is available for organizations that use {% data variables.product.prodname_enterprise %} and have a license for {% data variables.product.prodname_GH_advanced_security %}. For more information, see "[About {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)." {% endif %}