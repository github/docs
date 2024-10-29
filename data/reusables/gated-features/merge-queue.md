{% ifversion fpt or ghec %}
Pull request merge queues are available in any public repository owned by an organization, or in private repositories owned by organizations using {% data variables.product.prodname_ghe_cloud %}. {% data reusables.gated-features.more-info %}
{% elsif ghes %}
Pull request merge queues are available in any organization-owned repository on {% data variables.product.product_name %}.
{% endif %}
