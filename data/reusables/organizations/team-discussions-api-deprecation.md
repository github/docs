{% ifversion ghes %}

{% note %}

The team discussions and team discussion comments endpoints are {% data variables.release-phases.closing_down %} in {% data variables.product.prodname_ghe_server %} 3.13 in favor of {% data variables.product.prodname_discussions %}. For more information about {% data variables.product.prodname_discussions %}, see "[AUTOTITLE](/discussions)."

{% endnote %}

{% elsif fpt or ghec %}

{% note %}

The team discussions and team discussion comments endpoints are {% data variables.release-phases.closing_down %} on 2023-11-28 in favor of {% data variables.product.prodname_discussions %}. For more information about {% data variables.product.prodname_discussions %}, see "[AUTOTITLE](/discussions)."

{% endnote %}

{% endif %}
