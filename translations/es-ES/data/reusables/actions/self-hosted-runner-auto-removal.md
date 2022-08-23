{%- ifversion fpt or ghec or ghes > 3.6 %}
Un ejecutor auto-hospedado se elimina automáticamente desde {% data variables.product.product_name %} si no se ha conectado a las {% data variables.product.prodname_actions %} por más de 14 días.  
Un ejecutor efímero y auto-hospedado se elimina automáticamente de {% data variables.product.product_name %} si no se ha conectado a {% data variables.product.prodname_actions %} durante más de 1 día.
{%- elsif ghae or ghes < 3.7 %}
Un ejecutor auto-hospedado se eliminará automáticamente de {% data variables.product.product_name %} si no se ha conectado a {% data variables.product.prodname_actions %} por más de 30 días.
{%- endif %}