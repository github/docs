{% ifversion fpt %}
Organizations that use {% ifversion ghas-products-cloud %}{% data variables.product.prodname_team %} or {% endif %}{% data variables.product.prodname_enterprise %}
{% elsif ghec %}
Enterprises and their organizations
{% elsif ghes %}
Organizations
{% endif %}
