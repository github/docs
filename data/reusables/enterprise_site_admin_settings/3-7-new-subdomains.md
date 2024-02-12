{% ifversion ghes = 3.6 or ghes = 3.7 or ghes = 3.8 %}

{% note %}

{%- ifversion ghes = 3.6 %}

**Note**: The `http(s)://render.HOSTNAME` subdomain is deprecated in {% data variables.product.product_name %} 3.7 and later. After you upgrade to 3.7 or later, ensure that your TLS certificate covers the subdomains for the replacement services, `http(s)://notebooks.HOSTNAME` and `http(s)://viewscreen.HOSTNAME`.

{%- elsif ghes = 3.7 or ghes = 3.8 %}

**Note**: The `http(s)://notebooks.HOSTNAME` or `http(s)://viewscreen.HOSTNAME` subdomains are new in {% data variables.product.product_name %} 3.7 and later, and replace `http(s)://render.HOSTNAME`. After you upgrade to 3.7 or later, your TLS certificate must cover the subdomain for the replacement services, `http(s)://notebooks.HOSTNAME` and `http(s)://viewscreen.HOSTNAME`.

{%- endif %}

{% endnote %}

{% endif %}
