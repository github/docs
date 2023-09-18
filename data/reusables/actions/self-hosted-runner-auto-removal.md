{% ifversion fpt or ghec or ghes > 3.6 %}A self-hosted runner is automatically removed from {% data variables.product.product_name %} if it has not connected to {% data variables.product.prodname_actions %} for more than 14 days. An ephemeral self-hosted runner is automatically removed from {% data variables.product.product_name %} if it has not connected to {% data variables.product.prodname_actions %} for more than 1 day.

{% elsif ghae or ghes < 3.7 %}A self-hosted runner is automatically removed from {% data variables.product.product_name %} if it has not connected to {% data variables.product.prodname_actions %} for more than 30 days.
{% endif %}
