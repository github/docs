{% warning %}

 **Warning:** When terminating HTTPS connections on a load balancer, the requests from the load balancer to {% data variables.product.prodname_ghe_server %} also need to use HTTPS. Downgrading the connection to HTTP is not supported.

{% endwarning %}
