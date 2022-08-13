{%- ifversion fpt or ghec or ghes > 3.6 %}
A self-hosted runner is automatically removed from {% data variables.product.product_name %} if it has not connected to {% data variables.product.prodname_actions %} for more than 14 days.  
An ephemeral self-hosted runner is automatically removed from {% data variables.product.product_name %} if it has not connected to {% data variables.product.prodname_actions %} for more than 1 day.
{%- elsif ghae or ghes < 3.7 %}
Um executor auto-hospedado é automaticamente removido de {% data variables.product.product_name %} se não se conectar a {% data variables.product.prodname_actions %} por mais de 30 dias.
{%- endif %}